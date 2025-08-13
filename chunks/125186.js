n.d(t, {
    LF: () => _,
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
let o = new (n(710845).Z)("WebP"),
    a = 0,
    s = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
function l(e) {
    if (4 !== e.length) return !1;
    for (let t = 0; t < 4; t++) {
        let n = e.charCodeAt(t);
        if (!((n >= 65 && n <= 90) || (n >= 97 && n <= 122))) return !1;
    }
    return !0;
}
async function c(e) {
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
    if (!(await n(0, 8)).every((e, t) => e === s[t])) return !1;
    for (t = 8; t < e.size && !(t + 8 > e.size); ) {
        let r = await n(t, 8),
            i = new DataView(r.buffer).getUint32(0),
            a = String.fromCharCode(r[4], r[5], r[6], r[7]);
        if (!l(a)) throw Error("Corrupted PNG: invalid chunk type detected");
        if ("acTL" === a) return o.verbose("[webp] found acTL chunk - png is animated"), !0;
        if ("IDAT" === a) break;
        if (i > e.size || (t += 8 + i + 4) > e.size) throw Error("Corrupted PNG: invalid chunk length detected");
    }
    return !1;
}
async function u(e) {
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
        if (await c(e))
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
function d(e) {
    let t = new Uint8Array(e.data.buffer);
    return i()(t).toString(16);
}
async function f(e) {
    let t;
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
        let i = await u(e);
        if (!i.should) return o.verbose("[WebP] Conversion rejected: ".concat(i.reason)), r(i.reason);
        let s = document.createElement("canvas"),
            l = s.getContext("2d");
        if (null == l) throw Error("could not get canvas context");
        let c = new Image(),
            f = URL.createObjectURL(e);
        try {
            await new Promise((e, t) => {
                (c.onload = () => e()), (c.onerror = () => t(Error("failed to load image"))), (c.src = f);
            }),
                (s.width = c.width),
                (s.height = c.height),
                l.drawImage(c, 0, 0);
        } finally {
            URL.revokeObjectURL(f);
        }
        let _ = await new Promise((e) => {
            s.toBlob(e, "image/webp", 1);
        });
        if (null == _) throw Error("failed to convert to webp");
        {
            let n = performance.now(),
                i = await l.getImageData(0, 0, s.width, s.height);
            l.clearRect(0, 0, s.width, s.height);
            let a = new Image(),
                c = URL.createObjectURL(_);
            try {
                await new Promise((e, t) => {
                    (a.onload = () => e()), (a.onerror = () => t(Error("failed to load image"))), (a.src = c);
                }),
                    l.drawImage(a, 0, 0);
            } finally {
                URL.revokeObjectURL(c);
            }
            let u = await l.getImageData(0, 0, s.width, s.height),
                f = d(i),
                p = d(u),
                h = f === p;
            if (
                ((t = performance.now() - n),
                o.verbose(
                    "[WebP] Pixel hash results: " +
                        "fileName=".concat(e.name, " ") +
                        "fileLength={".concat(e.size, "} ") +
                        "width=".concat(a.width, " ") +
                        "height=".concat(a.height, " ") +
                        "pixelHash=".concat(f, " ") +
                        "mezzanineFileLength={".concat(_.size, "} ") +
                        "mezzaninePixelHash=".concat(p, " ") +
                        "match=".concat(h, " ") +
                        "elapsed_ms=".concat(Math.round(t)),
                ),
                !h)
            )
                return r("pixel_hash_mismatch");
        }
        let p = e.size > 0 ? _.size / e.size : 1,
            h = 1 - p;
        if (h < a)
            return (
                o.verbose("[WebP] Insufficient savings: ".concat(Math.round(100 * h), "% < ").concat(100 * a, "%")),
                r("insufficient_savings", _.size)
            );
        let m = e.name.lastIndexOf("."),
            g = -1 === m ? e.name : e.name.substring(0, m),
            E = new File([_], "".concat(g, ".webp"), {
                type: "image/webp",
                lastModified: e.lastModified,
            }),
            b = performance.now() - n;
        return (
            o.verbose("[WebP] Conversion successful: ".concat(E.name, " in ").concat(Math.round(b), "ms")),
            {
                success: !0,
                originalFile: e,
                convertedFile: E,
                sizeBefore: e.size,
                sizeAfter: _.size,
                compressionRatio: p,
                hashTimeMs: t,
            }
        );
    } catch (t) {
        return o.error("[WebP] Conversion failed for ".concat(e.name, ":"), t), r("conversion_failed");
    }
}
async function _(e) {
    o.verbose("[WebP] Converting ".concat(e.length, " files to WebP..."));
    let t = await Promise.all(e.map((e) => f(e))),
        n = t.filter((e) => e.success).length;
    return o.verbose("[WebP] Batch conversion complete: ".concat(n, "/").concat(e.length, " successful")), t;
}
function p(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
