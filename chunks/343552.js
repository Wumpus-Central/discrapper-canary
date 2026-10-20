t.d(l, { b: () => o });
var r = t(477900),
    i = t(803805),
    s = t(11187),
    n = t(439401),
    a = t(803931);
let o = (e, l, t, o, u) => () => {
    let d = l ?? t;
    if (null == d) return null;
    let { url: h, proxyURL: c, width: m, height: p } = d,
        g = null != c && "" !== c ? c : h,
        x = (0, s.mW)({ providerName: u, thumbnail: o });
    return (0, r.jsx)(n.A, {
        width: m,
        height: p,
        src: g,
        gifSrc: x,
        url: null != e && "" !== e ? e : null != c && "" !== c ? c : h,
        format: null != t ? i.TL.VIDEO : i.TL.IMAGE,
        className: a.jj,
    });
};
