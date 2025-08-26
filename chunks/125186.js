n.d(t, {
    lG: () => _,
    ub: () => p,
}),
    n(953529),
    n(388685),
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
    n(97749);
var r = n(108131),
    i = n.n(r),
    o = n(605387),
    a = n.n(o);
let s = new (n(710845).Z)("WebP"),
    l = n(4667),
    c = 0;
async function u(e) {
    let t = await l.load(e, {
        async: !0,
        expanded: !0,
        includeUnknown: !0,
    });
    if (null == t.icc) return s.verbose("[webp] no ICC profile detected - assuming sRGB"), !0;
    let n = t.icc;
    for (let e of Object.keys(n)) {
        var r;
        if (
            "ICC Description" === e &&
            (null == (r = n[e]) ? void 0 : r.description) != null &&
            "" !== n[e].description
        ) {
            if (n[e].description.toLowerCase().includes("srgb"))
                return s.verbose("[webp] sRGB ICC profile description found: ".concat(n[e].description)), !0;
            return s.verbose("[webp] non sRGB ICC profile description found: ".concat(n[e].description)), !1;
        }
    }
    return s.verbose("[webp] ICC profile detected but could not parse description - assuming non-sRGB"), !1;
}
async function d(e) {
    let t;
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
        let e = a().decode(t);
        if (4 === e.ctype || 6 === e.ctype)
            return s.verbose("[webp] png has transparency - skipping conversion"), "has_transparency";
        if (null != e.tabs.acTL)
            return s.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
    } catch (e) {
        return s.warn("[WebP] PNG analysis failed:", e), "corrupted_file";
    }
    try {
        if (!(await u(t))) return "icc_non_srgb_profile";
    } catch (e) {
        return s.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed";
    }
    return null;
}
function f(e) {
    let t = new Uint8Array(e.data.buffer);
    return i()(t).toString(16);
}
async function _(e) {
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
        let o = await d(e);
        if (null != o) return s.verbose("[WebP] Conversion rejected: ".concat(o)), i(o);
        let a = document.createElement("canvas"),
            l = a.getContext("2d");
        if (null == l) throw Error("could not get canvas context");
        let u = new Image(),
            _ = URL.createObjectURL(e);
        try {
            await new Promise((e, t) => {
                (u.onload = () => e()), (u.onerror = () => t(Error("failed to load image"))), (u.src = _);
            }),
                (a.width = u.width),
                (a.height = u.height),
                l.drawImage(u, 0, 0);
        } finally {
            URL.revokeObjectURL(_);
        }
        let p = await new Promise((e) => {
            a.toBlob(e, "image/webp", 1);
        });
        if (null == p) throw Error("failed to convert to webp");
        {
            let n = performance.now(),
                r = await l.getImageData(0, 0, a.width, a.height);
            l.clearRect(0, 0, a.width, a.height);
            let o = new Image(),
                c = URL.createObjectURL(p);
            try {
                await new Promise((e, t) => {
                    (o.onload = () => e()), (o.onerror = () => t(Error("failed to load image"))), (o.src = c);
                }),
                    l.drawImage(o, 0, 0);
            } finally {
                URL.revokeObjectURL(c);
            }
            let u = await l.getImageData(0, 0, a.width, a.height),
                d = f(r),
                _ = f(u),
                h = d === _;
            if (
                ((t = performance.now() - n),
                s.verbose(
                    "[WebP] Pixel hash results: " +
                        "fileName=".concat(e.name, " ") +
                        "fileLength={".concat(e.size, "} ") +
                        "width=".concat(o.width, " ") +
                        "height=".concat(o.height, " ") +
                        "pixelHash=".concat(d, " ") +
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
        if (m < c)
            return (
                s.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * c, "%")),
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
function p(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
