"use strict";
n.r(t), n.d(t, { Anchor: () => f });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(470562),
    l = n(531142),
    u = n(939249),
    c = n(187322),
    d = n(752239),
    _ = n(89747);
function f(e) {
    let {
        href: t,
        onClick: n,
        className: s,
        children: f,
        rel: h,
        target: p,
        useDefaultUnderlineStyles: E = !0,
        title: m,
        style: g,
        focusProps: A,
        ref: I,
        role: T,
        ...S
    } = e;
    null != t && null == n && (n = d.V.getDefaultLinkInterceptor(t));
    let N = r.useContext(l.g),
        y = {
            className: a()(_.Y, { [_.D]: E }, s),
            href: t,
            onClick: n,
            rel: null != h ? h : void 0,
            target: null != p ? p : void 0,
            title: null != m ? m : void 0,
            style: null != g ? g : void 0,
        };
    return (null == t || (0, o.e)(t) || ((y.rel = "noreferrer noopener"), (y.target = "_blank")),
    N && delete y.href,
    null != n)
        ? (0, i.jsx)(u.D, { tag: "a", ...S, ...y, onClick: n, focusProps: A, innerRef: I, role: "link", children: f })
        : (0, i.jsx)(c.vN, { ...A, children: (0, i.jsx)("a", { ...S, ...y, ref: I, children: f }) });
}
