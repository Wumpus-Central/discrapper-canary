n.d(t, {
    L5: () => p,
    z9: () => l,
}),
    n(65821),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(181370),
    i = n.n(r),
    a = n(626584),
    s = n(910021);
let o = new a.A("WebP");
var l = (function (e) {
    return (
        (e.ALREADY_WEBP = "already_webp"),
        (e.UNSUPPORTED_FORMAT = "unsupported_format"),
        (e.ANIMATED_IMAGE = "animated_image"),
        (e.HAS_TRANSPARENCY = "has_transparency"),
        (e.PNG8_FORMAT = "png8_format"),
        (e.INSUFFICIENT_SAVINGS = "insufficient_savings"),
        (e.CONVERSION_FAILED = "conversion_failed"),
        (e.CORRUPTED_FILE = "corrupted_file"),
        (e.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch"),
        (e.ICC_NON_SRGB_PROFILE = "icc_non_srgb_profile"),
        (e.ICC_DETECTION_FAILED = "icc_detection_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        e
    );
})({});
let c = 0;
async function u(e) {
    let t, n;
    if ("image/webp" === e.type) return o.verbose("[WebP] File already WebP format"), "already_webp";
    if (!["image/png"].includes(e.type))
        return o.verbose("[WebP] Unsupported format: ".concat(e.type)), "unsupported_format";
    try {
        t =
            "function" == typeof e.arrayBuffer
                ? await e.arrayBuffer()
                : await new Promise((t, n) => {
                      let r = new FileReader();
                      (r.onload = () => t(r.result)),
                          (r.onerror = () => n(Error("Failed to read file as ArrayBuffer"))),
                          r.readAsArrayBuffer(e);
                  });
    } catch (e) {
        return o.warn("[WebP] Failed to read file data:", e), "conversion_failed";
    }
    try {
        if (((n = s.W.create(t)), null == n)) throw Error("DiscordImage.create returned null");
        if (n.hasTransparency())
            return o.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency";
        if (n.isAnimated()) return o.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
        if (n.isPng8())
            return o.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion"), "png8_format";
    } catch (e) {
        return o.warn("[WebP] PNG analysis failed:", e), "corrupted_file";
    }
    try {
        if (!(await n.hasSrgbIccProfile())) return "icc_non_srgb_profile";
    } catch (e) {
        return o.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed";
    }
    return null;
}
function d(e) {
    let t = new Uint8Array(e.data.buffer);
    return i()(t).toString(16);
}
async function f(e) {
    let t = document.createElement("canvas"),
        n = t.getContext("2d");
    if (null == n) throw Error("could not get canvas context");
    let r = new Image(),
        i = URL.createObjectURL(e);
    try {
        await new Promise((e, t) => {
            (r.onload = () => e()), (r.onerror = () => t(Error("failed to load image"))), (r.src = i);
        }),
            (t.width = r.width),
            (t.height = r.height),
            n.drawImage(r, 0, 0);
    } finally {
        URL.revokeObjectURL(i);
    }
    let a = await new Promise((e) => {
        t.toBlob(e, "image/webp", 1);
    });
    if (null == a) throw Error("failed to convert to webp");
    let s = performance.now(),
        l = await n.getImageData(0, 0, t.width, t.height);
    n.clearRect(0, 0, t.width, t.height);
    let c = new Image(),
        u = URL.createObjectURL(a);
    try {
        await new Promise((e, t) => {
            (c.onload = () => e()), (c.onerror = () => t(Error("failed to load image"))), (c.src = u);
        }),
            n.drawImage(c, 0, 0);
    } finally {
        URL.revokeObjectURL(u);
    }
    let f = await n.getImageData(0, 0, t.width, t.height),
        p = d(l),
        _ = d(f),
        h = p === _,
        m = performance.now() - s;
    return (o.verbose(
        "[WebP] Pixel hash results: " +
            "fileName=".concat(e.name, " ") +
            "fileLength={".concat(e.size, "} ") +
            "width=".concat(c.width, " ") +
            "height=".concat(c.height, " ") +
            "pixelHash=".concat(p, " ") +
            "mezzanineFileLength={".concat(a.size, "} ") +
            "mezzaninePixelHash=".concat(_, " ") +
            "match=".concat(h, " ") +
            "elapsed_ms=".concat(Math.round(m)),
    ),
    h)
        ? {
              success: !0,
              webpBlob: a,
              pixelHashTimeMs: m,
          }
        : {
              success: !1,
              reason: "pixel_hash_mismatch",
              pixelHashTimeMs: m,
          };
}
async function p(e) {
    let t;
    if (null == e) throw Error("file is null or undefined");
    o.verbose("[WebP] Starting conversion for: ".concat(e.name));
    let n = performance.now(),
        r = function (t) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: r,
                compressionRatio: e.size > 0 ? r / e.size : 1,
                reason: t,
                compressTimeMs: Math.round(performance.now() - n),
            };
        };
    try {
        let a = await u(e);
        if (null != a) return o.verbose("[WebP] Conversion rejected: ".concat(a)), r(a);
        let s = await f(e);
        if (!s.success || null == s.webpBlob) {
            var i;
            return r(null != (i = s.reason) ? i : "unknown_error");
        }
        let l = s.webpBlob,
            d = e.size > 0 ? l.size / e.size : 1,
            p = 1 - d;
        if (p < c)
            return (
                o.verbose(
                    "[WebP] Insufficient savings: "
                        .concat(Math.round(100 * p), "% < ")
                        .concat(100 * c, "% (")
                        .concat(e.size, " -> ")
                        .concat(l.size, " bytes)"),
                ),
                r("insufficient_savings", l.size)
            );
        return (
            (t = performance.now() - n),
            o.verbose("[WebP] Conversion successful: ".concat(e.name, " to WebP in ").concat(Math.round(t), "ms")),
            {
                success: !0,
                originalFile: e,
                convertedBlob: l,
                sizeBefore: e.size,
                sizeAfter: l.size,
                compressionRatio: d,
                hashTimeMs: s.pixelHashTimeMs,
                compressTimeMs: Math.round(t),
            }
        );
    } catch (t) {
        return o.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), r("conversion_failed");
    }
}
