(t.r(r),
    t.d(r, { ConversionFailureReason: () => p, _shouldConvertToWebP: () => m, maybeConvertToWebP: () => w }),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162),
    t(323874),
    t(14289),
    t(35956));
var i,
    n = t(181370),
    a = t.n(n),
    o = t(626584),
    s = t(115943),
    l = t.n(s);
let c = t(499091);
class u {
    img;
    originalBuffer;
    constructor(e, r) {
        ((this.img = e), (this.originalBuffer = r));
    }
    static create(e) {
        let r = null;
        try {
            let t = l().decode(e);
            r = new u(t, e);
        } catch (e) {}
        return r;
    }
    hasTransparency() {
        if (4 !== this.img.ctype && 6 !== this.img.ctype) return !1;
        let e = new Uint8Array(l().toRGBA8(this.img)[0]);
        for (let r = 3; r < e.length; r += 4) if (e[r] < 255) return !0;
        return !1;
    }
    isAnimated() {
        return null != this.img.tabs.acTL;
    }
    isPng8() {
        return 3 === this.img.ctype && this.img.depth <= 8;
    }
    async hasSrgbIccProfile() {
        let e = await c.load(this.originalBuffer, { async: !0, expanded: !0, includeUnknown: !0 });
        if (null == e.icc) return !0;
        let r = e.icc;
        for (let e of Object.keys(r))
            if ("ICC Description" === e && r[e]?.description != null && "" !== r[e].description) {
                if (r[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
}
let { detectFile: f } = t(42640);
class d {
    static create(e) {
        let r = null,
            t = f(new Uint8Array(e, 0, Math.min(64, e.byteLength)));
        return ("image/png" === t?.mimeType && (r = u.create(e)), r);
    }
}
let h = new o.A("WebP");
var p =
    (((i = {}).ALREADY_WEBP = "already_webp"),
    (i.UNSUPPORTED_FORMAT = "unsupported_format"),
    (i.ANIMATED_IMAGE = "animated_image"),
    (i.HAS_TRANSPARENCY = "has_transparency"),
    (i.PNG8_FORMAT = "png8_format"),
    (i.INSUFFICIENT_SAVINGS = "insufficient_savings"),
    (i.CONVERSION_FAILED = "conversion_failed"),
    (i.CORRUPTED_FILE = "corrupted_file"),
    (i.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch"),
    (i.ICC_NON_SRGB_PROFILE = "icc_non_srgb_profile"),
    (i.ICC_DETECTION_FAILED = "icc_detection_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    i);
async function m(e) {
    let r, t;
    if ("image/webp" === e.type) return (h.verbose("[WebP] File already WebP format"), "already_webp");
    if (!["image/png"].includes(e.type))
        return (h.verbose(`[WebP] Unsupported format: ${e.type}`), "unsupported_format");
    try {
        r =
            "function" == typeof e.arrayBuffer
                ? await e.arrayBuffer()
                : await new Promise((r, t) => {
                      let i = new FileReader();
                      ((i.onload = () => r(i.result)),
                          (i.onerror = () => t(Error("Failed to read file as ArrayBuffer"))),
                          i.readAsArrayBuffer(e));
                  });
    } catch (e) {
        return (h.warn("[WebP] Failed to read file data:", e), "conversion_failed");
    }
    try {
        if (((t = d.create(r)), null == t)) throw Error("DiscordImage.create returned null");
        if (t.hasTransparency())
            return (h.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency");
        if (t.isAnimated()) return (h.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image");
        if (t.isPng8())
            return (h.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion"), "png8_format");
    } catch (e) {
        return (h.warn("[WebP] PNG analysis failed:", e), "corrupted_file");
    }
    try {
        if (!(await t.hasSrgbIccProfile())) return "icc_non_srgb_profile";
    } catch (e) {
        return (h.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed");
    }
    return null;
}
function g(e) {
    let r = new Uint8Array(e.data.buffer);
    return a()(r).toString(16);
}
async function w(e) {
    let r;
    if (null == e) throw Error("file is null or undefined");
    h.verbose(`[WebP] Starting conversion for: ${e.name}`);
    let t = performance.now();
    function i(r) {
        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
        return {
            success: !1,
            originalFile: e,
            sizeBefore: e.size,
            sizeAfter: i,
            compressionRatio: e.size > 0 ? i / e.size : 1,
            reason: r,
            compressTimeMs: Math.round(performance.now() - t),
        };
    }
    try {
        let n = await m(e);
        if (null != n) return (h.verbose(`[WebP] Conversion rejected: ${n}`), i(n));
        let a = await (async function (e) {
            let r = document.createElement("canvas"),
                t = r.getContext("2d");
            if (null == t) throw Error("could not get canvas context");
            let i = new Image(),
                n = URL.createObjectURL(e);
            try {
                (await new Promise((e, r) => {
                    ((i.onload = () => e()), (i.onerror = () => r(Error("failed to load image"))), (i.src = n));
                }),
                    (r.width = i.width),
                    (r.height = i.height),
                    t.drawImage(i, 0, 0));
            } finally {
                URL.revokeObjectURL(n);
            }
            let a = await new Promise((e) => {
                r.toBlob(e, "image/webp", 1);
            });
            if (null == a) throw Error("failed to convert to webp");
            let o = performance.now(),
                s = await t.getImageData(0, 0, r.width, r.height);
            t.clearRect(0, 0, r.width, r.height);
            let l = new Image(),
                c = URL.createObjectURL(a);
            try {
                (await new Promise((e, r) => {
                    ((l.onload = () => e()), (l.onerror = () => r(Error("failed to load image"))), (l.src = c));
                }),
                    t.drawImage(l, 0, 0));
            } finally {
                URL.revokeObjectURL(c);
            }
            let u = await t.getImageData(0, 0, r.width, r.height),
                f = g(s),
                d = g(u),
                p = f === d,
                m = performance.now() - o;
            return (h.verbose(
                `[WebP] Pixel hash results: fileName=${e.name} fileLength={${e.size}} width=${l.width} height=${l.height} pixelHash=${f} mezzanineFileLength={${a.size}} mezzaninePixelHash=${d} match=${p} elapsed_ms=${Math.round(m)}`,
            ),
            p)
                ? { success: !0, webpBlob: a, pixelHashTimeMs: m }
                : { success: !1, reason: "pixel_hash_mismatch", pixelHashTimeMs: m };
        })(e);
        if (!a.success || null == a.webpBlob) return i(a.reason ?? "unknown_error");
        let o = a.webpBlob,
            s = e.size > 0 ? o.size / e.size : 1,
            l = 1 - s;
        if (l < 0)
            return (
                h.verbose(`[WebP] Insufficient savings: ${Math.round(100 * l)}% < 0% (${e.size} -> ${o.size} bytes)`),
                i("insufficient_savings", o.size)
            );
        return (
            (r = performance.now() - t),
            h.verbose(`[WebP] Conversion successful: ${e.name} to WebP in ${Math.round(r)}ms`),
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
        return (h.error(`[WebP] Conversion failed for ${e.name}:`, r), i("conversion_failed"));
    }
}
