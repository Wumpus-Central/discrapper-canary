"use strict";
n.r(t), n.d(t, { Anchor: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(470562),
    l = n(158954),
    u = n(752239),
    c = n(820162);
function d(e) {
    let {
        href: t,
        onClick: n,
        className: a,
        children: d,
        rel: _,
        target: f,
        useDefaultUnderlineStyles: p = !0,
        title: h,
        style: m,
        focusProps: g,
        ref: E,
        ...A
    } = e;
    null != t && null == n && (n = u.V.getDefaultLinkInterceptor(t));
    let I = i.useContext(l.gmh),
        T = {
            className: s()(c.Y, { [c.D]: p }, a),
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
        ? (0, r.jsx)(l.DUT, { tag: "a", ...A, ...T, onClick: n, focusProps: g, innerRef: E, children: d })
        : (0, r.jsx)(l.vN3, { ...g, children: (0, r.jsx)("a", { ...A, ...T, ref: E, children: d }) });
}
