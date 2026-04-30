"use strict";
n.d(t, { b: () => l });
var i = n(627968),
    r = n(803805),
    s = n(11187),
    a = n(439401),
    o = n(416620);
let l = (e, t, n, l, u) => () => {
    let c = t ?? n;
    if (null == c) return null;
    let { url: d, proxyURL: _, width: f, height: h } = c,
        p = null != _ && "" !== _ ? _ : d,
        E = (0, s.mW)({ providerName: u, thumbnail: l });
    return (0, i.jsx)(a.A, {
        width: f,
        height: h,
        src: p,
        gifSrc: E,
        url: null != e && "" !== e ? e : null != _ && "" !== _ ? _ : d,
        format: null != n ? r.TL.VIDEO : r.TL.IMAGE,
        className: o.jj,
    });
};
