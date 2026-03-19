"use strict";
n.r(t), n.d(t, { Anchor: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(470562),
    l = n(158954),
    u = n(752239),
    c = n(68380);
function d(e) {
    let {
        href: t,
        onClick: n,
        className: s,
        children: d,
        rel: _,
        target: f,
        useDefaultUnderlineStyles: p = !0,
        title: h,
        style: m,
        focusProps: E,
        ref: g,
        ...A
    } = e;
    null != t && null == n && (n = u.V.getDefaultLinkInterceptor(t));
    let I = i.useContext(l.gmh),
        T = {
            className: a()(c.Y, { [c.D]: p }, s),
            href: t,
            onClick: n,
            rel: null != _ ? _ : void 0,
            target: null != f ? f : void 0,
            title: null != h ? h : void 0,
            style: null != m ? m : void 0,
        };
    return (null == t || (0, o.e)(t) || ((T.rel = "noreferrer noopener"), (T.target = "_blank")),
    I && delete T.href,
    null != n)
        ? (0, r.jsx)(l.DUT, { tag: "a", ...A, ...T, onClick: n, focusProps: E, innerRef: g, children: d })
        : (0, r.jsx)(l.vN3, { ...E, children: (0, r.jsx)("a", { ...A, ...T, ref: g, children: d }) });
}
