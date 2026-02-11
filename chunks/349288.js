"use strict";
n.r(t), n.d(t, { Anchor: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(470562),
    l = n(158954),
    u = n(752239),
    c = n(68380);
function d(e) {
    let {
        href: t,
        onClick: n,
        className: a,
        children: d,
        rel: _,
        target: f,
        useDefaultUnderlineStyles: h = !0,
        title: p,
        style: g,
        focusProps: E,
        ref: A,
        ...I
    } = e;
    null != t && null == n && (n = u.V.getDefaultLinkInterceptor(t));
    let T = i.useContext(l.gmh),
        y = {
            className: s()(c.Y, { [c.D]: h }, a),
            href: t,
            onClick: n,
            rel: null != _ ? _ : void 0,
            target: null != f ? f : void 0,
            title: null != p ? p : void 0,
            style: null != g ? g : void 0,
        };
    return (null == t || (0, o.e)(t) || ((y.rel = "noreferrer noopener"), (y.target = "_blank")),
    T && delete y.href,
    null != n)
        ? (0, r.jsx)(l.DUT, { tag: "a", ...I, ...y, onClick: n, focusProps: E, innerRef: A, children: d })
        : (0, r.jsx)(l.vN3, { ...E, children: (0, r.jsx)("a", { ...I, ...y, ref: A, children: d }) });
}
