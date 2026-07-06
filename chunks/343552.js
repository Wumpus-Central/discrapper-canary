t.d(l, { b: () => o });
var r = t(627968),
    s = t(803805),
    i = t(11187),
    n = t(439401),
    a = t(416620);
let o = (e, l, t, o, d) => () => {
    let u = l ?? t;
    if (null == u) return null;
    let { url: h, proxyURL: c, width: m, height: p } = u,
        g = null != c && "" !== c ? c : h,
        x = (0, i.mW)({ providerName: d, thumbnail: o });
    return (0, r.jsx)(n.A, {
        width: m,
        height: p,
        src: g,
        gifSrc: x,
        url: null != e && "" !== e ? e : null != c && "" !== c ? c : h,
        format: null != t ? s.TL.VIDEO : s.TL.IMAGE,
        className: a.jj,
    });
};
