n.d(t, { b: () => l });
var r = n(627968),
    i = n(803805),
    a = n(11187),
    s = n(439401),
    o = n(867525);
let l = (e, t, n, l, c) => () => {
    let u = null != t ? t : n;
    if (null == u) return null;
    let { url: d, proxyURL: f, width: p, height: _ } = u,
        h = null != f && "" !== f ? f : d,
        m = (0, a.mW)({
            providerName: c,
            thumbnail: l,
        });
    return (0, r.jsx)(s.A, {
        width: p,
        height: _,
        src: h,
        gifSrc: m,
        url: null != e && "" !== e ? e : null != f && "" !== f ? f : d,
        format: null != n ? i.TL.VIDEO : i.TL.IMAGE,
        className: o.jj,
    });
};
