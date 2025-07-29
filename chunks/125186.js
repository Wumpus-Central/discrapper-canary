(n.d(t, {
    LF: () => l,
    ub: () => c
}),
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
    a = 0.1;
function o(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = null != (t = n.minFileSizeBytes) ? t : i;
    return e.size < a
        ? (r.verbose('[WebP] File too small: '.concat(e.size, ' < ').concat(a)),
          {
              should: !1,
              reason: 'file_too_small'
          })
        : 'image/webp' === e.type
          ? (r.verbose('[WebP] File already WebP format'),
            {
                should: !1,
                reason: 'already_webp'
            })
          : ['image/png'].includes(e.type)
            ? { should: !0 }
            : (r.verbose('[WebP] Unsupported format: '.concat(e.type)),
              {
                  should: !1,
                  reason: 'unsupported_format'
              });
}
async function s(e) {
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
        var s;
        let l = o(e, t);
        if (!l.should) return (r.verbose('[WebP] Conversion rejected: '.concat(l.reason)), i(l.reason));
        let c = document.createElement('canvas'),
            u = c.getContext('2d');
        if (null == u) throw Error('could not get canvas context');
        let d = new Image(),
            _ = URL.createObjectURL(e);
        try {
            (await new Promise((e, t) => {
                ((d.onload = () => e()), (d.onerror = () => t(Error('failed to load image'))), (d.src = _));
            }),
                (c.width = d.width),
                (c.height = d.height),
                u.drawImage(d, 0, 0));
        } finally {
            URL.revokeObjectURL(_);
        }
        let f = await new Promise((e) => {
            c.toBlob(e, 'image/webp', 1);
        });
        if (null == f) throw Error('failed to convert to webp');
        let p = e.size > 0 ? f.size / e.size : 1,
            h = 1 - p,
            m = null != (s = t.minSizeReductionPercent) ? s : a;
        if (h < m) return (r.verbose('[WebP] Insufficient savings: '.concat(Math.round(100 * h), '% < ').concat(100 * m, '%')), i('insufficient_savings', f.size));
        let g = e.name.lastIndexOf('.'),
            E = -1 === g ? e.name : e.name.substring(0, g),
            b = new File([f], ''.concat(E, '.webp'), {
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
                sizeAfter: f.size,
                compressionRatio: p
            }
        );
    } catch (t) {
        return (r.error('[WebP] Conversion failed for '.concat(e.name, ':'), t), i('conversion_failed'));
    }
}
async function l(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    r.verbose('[WebP] Converting '.concat(e.length, ' files to WebP...'));
    let n = await Promise.all(e.map((e) => s(e, t))),
        i = n.filter((e) => e.success).length;
    return (r.verbose('[WebP] Batch conversion complete: '.concat(i, '/').concat(e.length, ' successful')), n);
}
function c(e) {
    return e.success && null != e.convertedFile ? e.convertedFile : e.originalFile;
}
