"use strict";
n.d(t, { L5: () => f, z9: () => l }),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162),
    n(323874),
    n(14289),
    n(35956);
var r = n(181370),
    i = n.n(r),
    s = n(626584),
    a = n(910021);
let o = new s.A("WebP");
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
let u = 0;
async function c(e) {
    let t, n;
    if ("image/webp" === e.type) return o.verbose("[WebP] File already WebP format"), "already_webp";
    if (!["image/png"].includes(e.type)) return o.verbose(`[WebP] Unsupported format: ${e.type}`), "unsupported_format";
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
        if (((n = a.W.create(t)), null == n)) throw Error("DiscordImage.create returned null");
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
async function _(e) {
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
    let s = await new Promise((e) => {
        t.toBlob(e, "image/webp", 1);
    });
    if (null == s) throw Error("failed to convert to webp");
    let a = performance.now(),
        l = await n.getImageData(0, 0, t.width, t.height);
    n.clearRect(0, 0, t.width, t.height);
    let u = new Image(),
        c = URL.createObjectURL(s);
    try {
        await new Promise((e, t) => {
            (u.onload = () => e()), (u.onerror = () => t(Error("failed to load image"))), (u.src = c);
        }),
            n.drawImage(u, 0, 0);
    } finally {
        URL.revokeObjectURL(c);
    }
    let _ = await n.getImageData(0, 0, t.width, t.height),
        f = d(l),
        p = d(_),
        h = f === p,
        m = performance.now() - a;
    return (o.verbose(
        `[WebP] Pixel hash results: fileName=${e.name} fileLength={${e.size}} width=${u.width} height=${u.height} pixelHash=${f} mezzanineFileLength={${s.size}} mezzaninePixelHash=${p} match=${h} elapsed_ms=${Math.round(m)}`,
    ),
    h)
        ? { success: !0, webpBlob: s, pixelHashTimeMs: m }
        : { success: !1, reason: "pixel_hash_mismatch", pixelHashTimeMs: m };
}
async function f(e) {
    let t;
    if (null == e) throw Error("file is null or undefined");
    o.verbose(`[WebP] Starting conversion for: ${e.name}`);
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
        let i = await c(e);
        if (null != i) return o.verbose(`[WebP] Conversion rejected: ${i}`), r(i);
        let s = await _(e);
        if (!s.success || null == s.webpBlob) return r(s.reason ?? "unknown_error");
        let a = s.webpBlob,
            l = e.size > 0 ? a.size / e.size : 1,
            d = 1 - l;
        if (d < u)
            return (
                o.verbose(
                    `[WebP] Insufficient savings: ${Math.round(100 * d)}% < ${100 * u}% (${e.size} -> ${a.size} bytes)`,
                ),
                r("insufficient_savings", a.size)
            );
        return (
            (t = performance.now() - n),
            o.verbose(`[WebP] Conversion successful: ${e.name} to WebP in ${Math.round(t)}ms`),
            {
                success: !0,
                originalFile: e,
                convertedBlob: a,
                sizeBefore: e.size,
                sizeAfter: a.size,
                compressionRatio: l,
                hashTimeMs: s.pixelHashTimeMs,
                compressTimeMs: Math.round(t),
            }
        );
    } catch (t) {
        return o.error(`[WebP] Conversion failed for ${e.name}:`, t), r("conversion_failed");
    }
}
