"use strict";
n.d(t, { b: () => o });
var i = n(627968),
    r = n(803805),
    a = n(11187),
    s = n(439401),
    l = n(416620);
let o = (e, t, n, o, d) => () => {
    let c = t ?? n;
    if (null == c) return null;
    let { url: u, proxyURL: _, width: E, height: A } = c,
        h = null != _ && "" !== _ ? _ : u,
        I = (0, a.mW)({ providerName: d, thumbnail: o });
    return (0, i.jsx)(s.A, {
        width: E,
        height: A,
        src: h,
        gifSrc: I,
        url: null != e && "" !== e ? e : null != _ && "" !== _ ? _ : u,
        format: null != n ? r.TL.VIDEO : r.TL.IMAGE,
        className: l.jj,
    });
};
