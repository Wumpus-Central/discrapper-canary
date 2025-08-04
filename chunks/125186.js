(n.d(t, {
    LF: () => d,
    ub: () => f
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
    n(388685));
let r = new (n(710845).Z)('WebP'),
    i = 102400,
    a = 0.1,
    o = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
function s(e) {
    if (4 !== e.length) return !1;
    for (let t = 0; t < 4; t++) {
        let n = e.charCodeAt(t);
        if (!((n >= 65 && n <= 90) || (n >= 97 && n <= 122))) return !1;
    }
    return !0;
}
async function l(e) {
    let t = 0,
        n = async (t, n) => {
            let r = e.slice(t, t + n);
            return new Uint8Array(
                await new Promise((e, t) => {
                    let n = new FileReader();
                    ((n.onload = () => e(n.result)), (n.onerror = () => t(Error('Failed to read file'))), n.readAsArrayBuffer(r));
                })
            );
        };
    if (!(await n(0, 8)).every((e, t) => e === o[t])) return !1;
    for (t = 8; t < e.size && !(t + 8 > e.size); ) {
        let i = await n(t, 8),
            a = new DataView(i.buffer).getUint32(0),
            o = String.fromCharCode(i[4], i[5], i[6], i[7]);
        if (!s(o)) throw Error('Corrupted PNG: invalid chunk type detected');
        if ('acTL' === o) return (r.verbose('[webp] found acTL chunk - png is animated'), !0);
        if ('IDAT' === o) break;
        if (a > e.size || (t += 8 + a + 4) > e.size) throw Error('Corrupted PNG: invalid chunk length detected');
    }
    return !1;
}
async function c(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = null != (t = n.minFileSizeBytes) ? t : i;
    if (e.size < a)
        return (
            r.verbose('[WebP] File too small: '.concat(e.size, ' < ').concat(a)),
            {
                should: !1,
                reason: 'file_too_small'
            }
        );
    if ('image/webp' === e.type)
        return (
            r.verbose('[WebP] File already WebP format'),
            {
                should: !1,
                reason: 'already_webp'
            }
        );
    if (!['image/png'].includes(e.type))
        return (
            r.verbose('[WebP] Unsupported format: '.concat(e.type)),
            {
                should: !1,
                reason: 'unsupported_format'
            }
        );
    try {
        if (await l(e))
            return (
                r.verbose('[webp] png is animated (apng) - skipping conversion'),
                {
                    should: !1,
                    reason: 'animated_image'
                }
            );
    } catch (e) {
        if (e instanceof Error && e.message.includes('Corrupted PNG'))
            return (
                r.warn('[WebP] PNG corruption detected: '.concat(e.message)),
                {
                    should: !1,
                    reason: 'corrupted_file'
                }
            );
        return (
            r.warn('[WebP] Unexpected error during PNG analysis:', e),
            {
                should: !1,
                reason: 'conversion_failed'
            }
        );
    }
    return { should: !0 };
}
async function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (null == e) throw Error('file is null or undefined');
    r.verbose('[WebP] Starting conversion for: '.concat(e.name));
    let n = performance.now(),
        i = function (t) {
            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: n,
                compressionRatio: e.size > 0 ? n / e.size : 1,
                reason: t
            };
        };
    try {
        var o;
        let s = await c(e, t);
        if (!s.should) return (r.verbose('[WebP] Conversion rejected: '.concat(s.reason)), i(s.reason));
        let l = document.createElement('canvas'),
            u = l.getContext('2d');
        if (null == u) throw Error('could not get canvas context');
        let d = new Image(),
            f = URL.createObjectURL(e);
        try {
            (await new Promise((e, t) => {
                ((d.onload = () => e()), (d.onerror = () => t(Error('failed to load image'))), (d.src = f));
            }),
                (l.width = d.width),
                (l.height = d.height),
                u.drawImage(d, 0, 0));
        } finally {
            URL.revokeObjectURL(f);
        }
        let _ = await new Promise((e) => {
            l.toBlob(e, 'image/webp', 1);
        });
        if (null == _) throw Error('failed to convert to webp');
        let p = e.size > 0 ? _.size / e.size : 1,
            h = 1 - p,
            m = null != (o = t.minSizeReductionPercent) ? o : a;
        if (h < m) return (r.verbose('[WebP] Insufficient savings: '.concat(Math.round(100 * h), '% < ').concat(100 * m, '%')), i('insufficient_savings', _.size));
        let g = e.name.lastIndexOf('.'),
            E = -1 === g ? e.name : e.name.substring(0, g),
            b = new File([_], ''.concat(E, '.webp'), {
                type: 'image/webp',
                lastModified: e.lastModified
            }),
            y = performance.now() - n;
        return (
            r.verbose('[WebP] Conversion successful: '.concat(b.name, ' in ').concat(Math.round(y), 'ms')),
            {
                success: !0,
                originalFile: e,
                convertedFile: b,
                sizeBefore: e.size,
                sizeAfter: _.size,
                compressionRatio: p
            }
        );
    } catch (t) {
        return (r.error('[WebP] Conversion failed for '.concat(e.name, ':'), t), i('conversion_failed'));
    }
}
async function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.verbose('[WebP] Converting '.concat(e.length, ' files to WebP...'));
    let n = await Promise.all(e.map((e) => u(e, t))),
        i = n.filter((e) => e.success).length;
    return (r.verbose('[WebP] Batch conversion complete: '.concat(i, '/').concat(e.length, ' successful')), n);
}
function f(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
