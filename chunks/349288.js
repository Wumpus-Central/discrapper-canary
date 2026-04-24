"use strict";
n.r(t), n.d(t, { Anchor: () => E });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(470562),
    l = n(531142),
    d = n(939249),
    _ = n(187322),
    u = n(752239),
    c = n(983763);
function E(e) {
    let {
        href: t,
        onClick: n,
        className: s,
        children: E,
        rel: h,
        target: m,
        useDefaultUnderlineStyles: f = !0,
        title: g,
        style: p,
        focusProps: A,
        ref: I,
        role: T,
        ...S
    } = e;
    null != t && null == n && (n = u.V.getDefaultLinkInterceptor(t));
    let N = r.useContext(l.g),
        C = {
            className: a()(c.Y, { [c.D]: f }, s),
            href: t,
            onClick: n,
            rel: null != h ? h : void 0,
            target: null != m ? m : void 0,
            title: null != g ? g : void 0,
            style: null != p ? p : void 0,
        };
    return (null == t || (0, o.e)(t) || ((C.rel = "noreferrer noopener"), (C.target = "_blank")),
    N && delete C.href,
    null != n)
        ? (0, i.jsx)(d.D, { tag: "a", ...S, ...C, onClick: n, focusProps: A, innerRef: I, role: "link", children: E })
        : (0, i.jsx)(_.vN, { ...A, children: (0, i.jsx)("a", { ...S, ...C, ref: I, children: E }) });
}
