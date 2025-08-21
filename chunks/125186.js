n.d(t, {
    S8: () => o,
    lG: () => _,
    ub: () => p,
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
let a = new (n(710845).Z)("WebP");
var o = (function (e) {
    return (
        (e.ALREADY_WEBP = "already_webp"),
        (e.UNSUPPORTED_FORMAT = "unsupported_format"),
        (e.ANIMATED_IMAGE = "animated_image"),
        (e.INSUFFICIENT_SAVINGS = "insufficient_savings"),
        (e.CONVERSION_FAILED = "conversion_failed"),
        (e.CORRUPTED_FILE = "corrupted_file"),
        (e.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch"),
        e
    );
})({});
let s = 0,
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
            o = String.fromCharCode(r[4], r[5], r[6], r[7]);
        if (!c(o)) throw Error("Corrupted PNG: invalid chunk type detected");
        if ("acTL" === o) return a.verbose("[webp] found acTL chunk - png is animated"), !0;
        if ("IDAT" === o) break;
        if (i > e.size || (t += 8 + i + 4) > e.size) throw Error("Corrupted PNG: invalid chunk length detected");
    }
    return !1;
}
async function d(e) {
    if ("image/webp" === e.type)
        return (
            a.verbose("[WebP] File already WebP format"),
            {
                should: !1,
                reason: "already_webp",
            }
        );
    if (!["image/png"].includes(e.type))
        return (
            a.verbose("[WebP] Unsupported format: ".concat(e.type)),
            {
                should: !1,
                reason: "unsupported_format",
            }
        );
    try {
        if (await u(e))
            return (
                a.verbose("[webp] png is animated (apng) - skipping conversion"),
                {
                    should: !1,
                    reason: "animated_image",
                }
            );
    } catch (e) {
        if (e instanceof Error && e.message.includes("Corrupted PNG"))
            return (
                a.warn("[WebP] PNG corruption detected: ".concat(e.message)),
                {
                    should: !1,
                    reason: "corrupted_file",
                }
            );
        return (
            a.warn("[WebP] Unexpected error during PNG analysis:", e),
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
    let t, n;
    if (null == e) throw Error("file is null or undefined");
    a.verbose("[WebP] Starting conversion for: ".concat(e.name));
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
        if (!o.should) return a.verbose("[WebP] Conversion rejected: ".concat(o.reason)), i(o.reason);
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
            let n = performance.now(),
                r = await c.getImageData(0, 0, l.width, l.height);
            c.clearRect(0, 0, l.width, l.height);
            let o = new Image(),
                s = URL.createObjectURL(p);
            try {
                await new Promise((e, t) => {
                    (o.onload = () => e()), (o.onerror = () => t(Error("failed to load image"))), (o.src = s);
                }),
                    c.drawImage(o, 0, 0);
            } finally {
                URL.revokeObjectURL(s);
            }
            let u = await c.getImageData(0, 0, l.width, l.height),
                d = f(r),
                _ = f(u),
                h = d === _;
            if (
                ((t = performance.now() - n),
                a.verbose(
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
        if (m < s)
            return (
                a.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * m), "% < ").concat(100 * s, "%")),
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
            a.verbose("[WebP] Conversion successful: ".concat(b.name, " in ").concat(Math.round(n), "ms")),
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
        return a.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), i("conversion_failed");
    }
}
function p(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
