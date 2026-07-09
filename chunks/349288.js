"use strict";
n.r(t), n.d(t, { Anchor: () => E });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(470562),
    o = n(531142),
    d = n(939249),
    c = n(187322),
    u = n(752239),
    _ = n(89747);
function E(e) {
    let {
        href: t,
        onClick: n,
        className: a,
        children: E,
        rel: A,
        target: h,
        useDefaultUnderlineStyles: I = !0,
        title: f,
        style: p,
        focusProps: T,
        ref: m,
        role: g,
        ...S
    } = e;
    null != t && null == n && (n = u.V.getDefaultLinkInterceptor(t));
    let N = r.useContext(o.g),
        C = {
            className: s()(_.Y, { [_.D]: I }, a),
            href: t,
            onClick: n,
            rel: null != A ? A : void 0,
            target: null != h ? h : void 0,
            title: null != f ? f : void 0,
            style: null != p ? p : void 0,
        };
    return (null == t || (0, l.e)(t) || ((C.rel = "noreferrer noopener"), (C.target = "_blank")),
    N && delete C.href,
    null != n)
        ? (0, i.jsx)(d.D, { tag: "a", ...S, ...C, onClick: n, focusProps: T, innerRef: m, role: "link", children: E })
        : (0, i.jsx)(c.vN, { ...T, children: (0, i.jsx)("a", { ...S, ...C, ref: m, children: E }) });
}
