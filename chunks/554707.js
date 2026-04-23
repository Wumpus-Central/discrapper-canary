i.d(r, { ConversionFailureReason: () => l, maybeConvertToWebP: () => h }),
    i(393431),
    i(532706),
    i(42231),
    i(232424),
    i(949626),
    i(767709),
    i(65162),
    i(323874),
    i(14289),
    i(35956);
var t,
    n = i(181370),
    a = i.n(n),
    o = i(626584),
    s = i(910021);
let c = new o.A("WebP");
var l =
    (((t = {}).ALREADY_WEBP = "already_webp"),
    (t.UNSUPPORTED_FORMAT = "unsupported_format"),
    (t.ANIMATED_IMAGE = "animated_image"),
    (t.HAS_TRANSPARENCY = "has_transparency"),
    (t.PNG8_FORMAT = "png8_format"),
    (t.INSUFFICIENT_SAVINGS = "insufficient_savings"),
    (t.CONVERSION_FAILED = "conversion_failed"),
    (t.CORRUPTED_FILE = "corrupted_file"),
    (t.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch"),
    (t.ICC_NON_SRGB_PROFILE = "icc_non_srgb_profile"),
    (t.ICC_DETECTION_FAILED = "icc_detection_failed"),
    (t.UNKNOWN_ERROR = "unknown_error"),
    t);
async function u(e) {
    let r, i;
    if ("image/webp" === e.type) return c.verbose("[WebP] File already WebP format"), "already_webp";
    if (!["image/png"].includes(e.type)) return c.verbose(`[WebP] Unsupported format: ${e.type}`), "unsupported_format";
    try {
        r =
            "function" == typeof e.arrayBuffer
                ? await e.arrayBuffer()
                : await new Promise((r, i) => {
                      let t = new FileReader();
                      (t.onload = () => r(t.result)),
                          (t.onerror = () => i(Error("Failed to read file as ArrayBuffer"))),
                          t.readAsArrayBuffer(e);
                  });
    } catch (e) {
        return c.warn("[WebP] Failed to read file data:", e), "conversion_failed";
    }
    try {
        if (((i = s.W.create(r)), null == i)) throw Error("DiscordImage.create returned null");
        if (i.hasTransparency())
            return c.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency";
        if (i.isAnimated()) return c.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
        if (i.isPng8())
            return c.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion"), "png8_format";
    } catch (e) {
        return c.warn("[WebP] PNG analysis failed:", e), "corrupted_file";
    }
    try {
        if (!(await i.hasSrgbIccProfile())) return "icc_non_srgb_profile";
    } catch (e) {
        return c.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed";
    }
    return null;
}
function f(e) {
    let r = new Uint8Array(e.data.buffer);
    return a()(r).toString(16);
}
async function d(e) {
    let r = document.createElement("canvas"),
        i = r.getContext("2d");
    if (null == i) throw Error("could not get canvas context");
    let t = new Image(),
        n = URL.createObjectURL(e);
    try {
        await new Promise((e, r) => {
            (t.onload = () => e()), (t.onerror = () => r(Error("failed to load image"))), (t.src = n);
        }),
            (r.width = t.width),
            (r.height = t.height),
            i.drawImage(t, 0, 0);
    } finally {
        URL.revokeObjectURL(n);
    }
    let a = await new Promise((e) => {
        r.toBlob(e, "image/webp", 1);
    });
    if (null == a) throw Error("failed to convert to webp");
    let o = performance.now(),
        s = await i.getImageData(0, 0, r.width, r.height);
    i.clearRect(0, 0, r.width, r.height);
    let l = new Image(),
        u = URL.createObjectURL(a);
    try {
        await new Promise((e, r) => {
            (l.onload = () => e()), (l.onerror = () => r(Error("failed to load image"))), (l.src = u);
        }),
            i.drawImage(l, 0, 0);
    } finally {
        URL.revokeObjectURL(u);
    }
    let d = await i.getImageData(0, 0, r.width, r.height),
        h = f(s),
        p = f(d),
        m = h === p,
        g = performance.now() - o;
    return (c.verbose(
        `[WebP] Pixel hash results: fileName=${e.name} fileLength={${e.size}} width=${l.width} height=${l.height} pixelHash=${h} mezzanineFileLength={${a.size}} mezzaninePixelHash=${p} match=${m} elapsed_ms=${Math.round(g)}`,
    ),
    m)
        ? { success: !0, webpBlob: a, pixelHashTimeMs: g }
        : { success: !1, reason: "pixel_hash_mismatch", pixelHashTimeMs: g };
}
async function h(e) {
    let r;
    if (null == e) throw Error("file is null or undefined");
    c.verbose(`[WebP] Starting conversion for: ${e.name}`);
    let i = performance.now(),
        t = function (r) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: t,
                compressionRatio: e.size > 0 ? t / e.size : 1,
                reason: r,
                compressTimeMs: Math.round(performance.now() - i),
            };
        };
    try {
        let n = await u(e);
        if (null != n) return c.verbose(`[WebP] Conversion rejected: ${n}`), t(n);
        let a = await d(e);
        if (!a.success || null == a.webpBlob) return t(a.reason ?? "unknown_error");
        let o = a.webpBlob,
            s = e.size > 0 ? o.size / e.size : 1,
            l = 1 - s;
        if (l < 0)
            return (
                c.verbose(`[WebP] Insufficient savings: ${Math.round(100 * l)}% < 0% (${e.size} -> ${o.size} bytes)`),
                t("insufficient_savings", o.size)
            );
        return (
            (r = performance.now() - i),
            c.verbose(`[WebP] Conversion successful: ${e.name} to WebP in ${Math.round(r)}ms`),
            {
                success: !0,
                originalFile: e,
                convertedBlob: o,
                sizeBefore: e.size,
                sizeAfter: o.size,
                compressionRatio: s,
                hashTimeMs: a.pixelHashTimeMs,
                compressTimeMs: Math.round(r),
            }
        );
    } catch (r) {
        return c.error(`[WebP] Conversion failed for ${e.name}:`, r), t("conversion_failed");
    }
}
