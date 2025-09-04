n.d(t, {
    lG: () => d,
    ub: () => f,
}),
    n(415506),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(108131),
    i = n.n(r),
    a = n(710845),
    o = n(803675);
let s = new a.Z("WebP"),
    l = 0;
async function c(e) {
    let t, n;
    if ("image/webp" === e.type) return s.verbose("[WebP] File already WebP format"), "already_webp";
    if (!["image/png"].includes(e.type))
        return s.verbose("[WebP] Unsupported format: ".concat(e.type)), "unsupported_format";
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
        return s.warn("[WebP] Failed to read file data:", e), "conversion_failed";
    }
    try {
        if (((n = o.x.create(t)), null == n)) throw Error("DiscordImage.create returned null");
        if (n.hasTransparency())
            return s.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency";
        if (n.isAnimated()) return s.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
    } catch (e) {
        return s.warn("[WebP] PNG analysis failed:", e), "corrupted_file";
    }
    try {
        if (!(await n.hasSrgbIccProfile())) return "icc_non_srgb_profile";
    } catch (e) {
        return s.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed";
    }
    return null;
}
function u(e) {
    let t = new Uint8Array(e.data.buffer);
    return i()(t).toString(16);
}
async function d(e) {
    let t, n;
    if (null == e) throw Error("file is null or undefined");
    s.verbose("[WebP] Starting conversion for: ".concat(e.name));
    let r = performance.now(),
        i = function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: n,
                compressionRatio: e.size > 0 ? n / e.size : 1,
                reason: t,
                compressTimeMs: Math.round(performance.now() - r),
            };
        };
    try {
        let a = await c(e);
        if (null != a) return s.verbose("[WebP] Conversion rejected: ".concat(a)), i(a);
        let o = document.createElement("canvas"),
            d = o.getContext("2d");
        if (null == d) throw Error("could not get canvas context");
        let f = new Image(),
            _ = URL.createObjectURL(e);
        try {
            await new Promise((e, t) => {
                (f.onload = () => e()), (f.onerror = () => t(Error("failed to load image"))), (f.src = _);
            }),
                (o.width = f.width),
                (o.height = f.height),
                d.drawImage(f, 0, 0);
        } finally {
            URL.revokeObjectURL(_);
        }
        let p = await new Promise((e) => {
            o.toBlob(e, "image/webp", 1);
        });
        if (null == p) throw Error("failed to convert to webp");
        {
            let n = performance.now(),
                r = await d.getImageData(0, 0, o.width, o.height);
            d.clearRect(0, 0, o.width, o.height);
            let a = new Image(),
                l = URL.createObjectURL(p);
            try {
                await new Promise((e, t) => {
                    (a.onload = () => e()), (a.onerror = () => t(Error("failed to load image"))), (a.src = l);
                }),
                    d.drawImage(a, 0, 0);
            } finally {
                URL.revokeObjectURL(l);
            }
            let c = await d.getImageData(0, 0, o.width, o.height),
                f = u(r),
                _ = u(c),
                h = f === _;
            if (
                ((t = performance.now() - n),
                s.verbose(
                    "[WebP] Pixel hash results: " +
                        "fileName=".concat(e.name, " ") +
                        "fileLength={".concat(e.size, "} ") +
                        "width=".concat(a.width, " ") +
                        "height=".concat(a.height, " ") +
                        "pixelHash=".concat(f, " ") +
                        "mezzanineFileLength={".concat(p.size, "} ") +
                        "mezzaninePixelHash=".concat(_, " ") +
                        "match=".concat(h, " ") +
                        "elapsed_ms=".concat(Math.round(t)),
                ),
                !h)
            )
                return i("pixel_hash_mismatch");
        }
        let h = e.size > 0 ? p.size / e.size : 1,
            m = 1 - h;
        if (m < l)
            return (
                s.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * l, "%")),
                i("insufficient_savings", p.size)
            );
        let g = e.name.lastIndexOf("."),
            E = -1 === g ? e.name : e.name.substring(0, g),
            b = new File([p], "".concat(E, ".webp"), {
                type: "image/webp",
                lastModified: e.lastModified,
            });
        return (
            (n = performance.now() - r),
            s.verbose("[WebP] Conversion successful: ".concat(b.name, " in ").concat(Math.round(n), "ms")),
            {
                success: !0,
                originalFile: e,
                convertedFile: b,
                sizeBefore: e.size,
                sizeAfter: p.size,
                compressionRatio: h,
                hashTimeMs: t,
                compressTimeMs: Math.round(n),
            }
        );
    } catch (t) {
        return s.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), i("conversion_failed");
    }
}
function f(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
