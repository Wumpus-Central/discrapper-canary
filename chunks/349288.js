"use strict";
n.r(t), n.d(t, { Anchor: () => f });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(470562),
    l = n(531142),
    u = n(939249),
    d = n(187322),
    c = n(752239),
    _ = n(983763);
function f(e) {
    let {
        href: t,
        onClick: n,
        className: s,
        children: f,
        rel: E,
        target: h,
        useDefaultUnderlineStyles: p = !0,
        title: m,
        style: g,
        focusProps: A,
        ref: I,
        ...T
    } = e;
    null != t && null == n && (n = c.V.getDefaultLinkInterceptor(t));
    let S = i.useContext(l.g),
        y = {
            className: a()(_.Y, { [_.D]: p }, s),
            href: t,
            onClick: n,
            rel: null != E ? E : void 0,
            target: null != h ? h : void 0,
            title: null != m ? m : void 0,
            style: null != g ? g : void 0,
        };
    return (null == t || (0, o.e)(t) || ((y.rel = "noreferrer noopener"), (y.target = "_blank")),
    S && delete y.href,
    null != n)
        ? (0, r.jsx)(u.D, { tag: "a", ...T, ...y, onClick: n, focusProps: A, innerRef: I, children: f })
        : (0, r.jsx)(d.vN, { ...A, children: (0, r.jsx)("a", { ...T, ...y, ref: I, children: f }) });
}
