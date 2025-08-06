n.d(t, {
    LF: () => p,
    ub: () => h,
}),
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
    n(415506),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(388685);
var r = n(108131),
    i = n.n(r);
let o = new (n(710845).Z)("WebP"),
    a = 102400,
    s = 0.1,
    l = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
function c(e) {
    if (4 !== e.length) return !1;
    for (let t = 0; t < 4; t++) {
        let n = e.charCodeAt(t);
        if (!((n >= 65 && n <= 90) || (n >= 97 && n <= 122))) return !1;
    }
    return !0;
}
async function u(e) {
    let t = 0,
        n = async (t, n) => {
            let r = e.slice(t, t + n);
            return new Uint8Array(
                await new Promise((e, t) => {
                    let n = new FileReader();
                    (n.onload = () => e(n.result)),
                        (n.onerror = () => t(Error("Failed to read file"))),
                        n.readAsArrayBuffer(r);
                }),
            );
        };
    if (!(await n(0, 8)).every((e, t) => e === l[t])) return !1;
    for (t = 8; t < e.size && !(t + 8 > e.size); ) {
        let r = await n(t, 8),
            i = new DataView(r.buffer).getUint32(0),
            a = String.fromCharCode(r[4], r[5], r[6], r[7]);
        if (!c(a)) throw Error("Corrupted PNG: invalid chunk type detected");
        if ("acTL" === a) return o.verbose("[webp] found acTL chunk - png is animated"), !0;
        if ("IDAT" === a) break;
        if (i > e.size || (t += 8 + i + 4) > e.size) throw Error("Corrupted PNG: invalid chunk length detected");
    }
    return !1;
}
async function d(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = null != (t = n.minFileSizeBytes) ? t : a;
    if (e.size < r)
        return (
            o.verbose("[WebP] File too small: ".concat(e.size, " < ").concat(r)),
            {
                should: !1,
                reason: "file_too_small",
            }
        );
    if ("image/webp" === e.type)
        return (
            o.verbose("[WebP] File already WebP format"),
            {
                should: !1,
                reason: "already_webp",
            }
        );
    if (!["image/png"].includes(e.type))
        return (
            o.verbose("[WebP] Unsupported format: ".concat(e.type)),
            {
                should: !1,
                reason: "unsupported_format",
            }
        );
    try {
        if (await u(e))
            return (
                o.verbose("[webp] png is animated (apng) - skipping conversion"),
                {
                    should: !1,
                    reason: "animated_image",
                }
            );
    } catch (e) {
        if (e instanceof Error && e.message.includes("Corrupted PNG"))
            return (
                o.warn("[WebP] PNG corruption detected: ".concat(e.message)),
                {
                    should: !1,
                    reason: "corrupted_file",
                }
            );
        return (
            o.warn("[WebP] Unexpected error during PNG analysis:", e),
            {
                should: !1,
                reason: "conversion_failed",
            }
        );
    }
    return { should: !0 };
}
function f(e) {
    let t = new Uint8Array(e.data.buffer);
    return i()(t).toString(16);
}
async function _(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e) throw Error("file is null or undefined");
    o.verbose("[WebP] Starting conversion for: ".concat(e.name));
    let n = performance.now(),
        r = function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: n,
                compressionRatio: e.size > 0 ? n / e.size : 1,
                reason: t,
            };
        };
    try {
        var i;
        let a = await d(e, t);
        if (!a.should) return o.verbose("[WebP] Conversion rejected: ".concat(a.reason)), r(a.reason);
        let l = document.createElement("canvas"),
            c = l.getContext("2d");
        if (null == c) throw Error("could not get canvas context");
        let u = new Image(),
            _ = URL.createObjectURL(e);
        try {
            await new Promise((e, t) => {
                (u.onload = () => e()), (u.onerror = () => t(Error("failed to load image"))), (u.src = _);
            }),
                (l.width = u.width),
                (l.height = u.height),
                c.drawImage(u, 0, 0);
        } finally {
            URL.revokeObjectURL(_);
        }
        let p = await new Promise((e) => {
            l.toBlob(e, "image/webp", 1);
        });
        if (null == p) throw Error("failed to convert to webp");
        {
            let t = performance.now(),
                n = await c.getImageData(0, 0, l.width, l.height);
            c.clearRect(0, 0, l.width, l.height);
            let i = new Image(),
                a = URL.createObjectURL(p);
            try {
                await new Promise((e, t) => {
                    (i.onload = () => e()), (i.onerror = () => t(Error("failed to load image"))), (i.src = a);
                }),
                    c.drawImage(i, 0, 0);
            } finally {
                URL.revokeObjectURL(a);
            }
            let s = await c.getImageData(0, 0, l.width, l.height),
                u = f(n),
                d = f(s),
                _ = u === d,
                h = performance.now() - t;
            if (
                (o.verbose(
                    "[WebP] Pixel hash results: " +
                        "fileName=".concat(e.name, " ") +
                        "fileLength={".concat(e.size, "} ") +
                        "width=".concat(i.width, " ") +
                        "height=".concat(i.height, " ") +
                        "pixelHash=".concat(u, " ") +
                        "mezzanineFileLength={".concat(p.size, "} ") +
                        "mezzaninePixelHash=".concat(d, " ") +
                        "match=".concat(_, " ") +
                        "elapsed_ms=".concat(Math.round(h)),
                ),
                !_)
            )
                return r("pixel_hash_mismatch");
        }
        let h = e.size > 0 ? p.size / e.size : 1,
            m = 1 - h,
            g = null != (i = t.minSizeReductionPercent) ? i : s;
        if (m < g)
            return (
                o.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * g, "%")),
                r("insufficient_savings", p.size)
            );
        let E = e.name.lastIndexOf("."),
            b = -1 === E ? e.name : e.name.substring(0, E),
            y = new File([p], "".concat(b, ".webp"), {
                type: "image/webp",
                lastModified: e.lastModified,
            }),
            O = performance.now() - n;
        return (
            o.verbose("[WebP] Conversion successful: ".concat(y.name, " in ").concat(Math.round(O), "ms")),
            {
                success: !0,
                originalFile: e,
                convertedFile: y,
                sizeBefore: e.size,
                sizeAfter: p.size,
                compressionRatio: h,
            }
        );
    } catch (t) {
        return o.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), r("conversion_failed");
    }
}
async function p(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    o.verbose("[WebP] Converting ".concat(e.length, " files to WebP..."));
    let n = await Promise.all(e.map((e) => _(e, t))),
        r = n.filter((e) => e.success).length;
    return o.verbose("[WebP] Batch conversion complete: ".concat(r, "/").concat(e.length, " successful")), n;
}
function h(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
