"use strict";
n.d(t, { V: () => p });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(990078),
    o = n(462887),
    c = n(109112),
    u = n(827734),
    d = n(736653),
    h = n(985018),
    m = n(458372);
function p(e) {
    let {
            src: t,
            size: n,
            constrain: s = "height",
            className: p,
            alt: f,
            fallbackSrc: g,
            "aria-hidden": _,
            showTooltip: x = !1,
        } = e,
        A = (0, d.Ay)(),
        C = `${n}px`,
        [E, I] = l.useState(!1),
        [v, y] = l.useState(!1),
        S = null == g || v;
    if (null == t || (E && S))
        return (0, i.jsx)(c._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, o.M)(A) ? u.A.colors.WHITE : u.A.colors.BLACK,
            style: { maxWidth: C },
            className: r()(m.f, p),
        });
    let b = "height" === s ? { maxWidth: C, height: C } : { maxWidth: C, minHeight: C };
    return (0, i.jsx)(
        a.m,
        {
            "aria-label": f,
            __unsupportedReactNodeAsText: f,
            shouldShow: x,
            children: (0, i.jsx)("img", {
                style: b,
                className: r()(m.f, p),
                src: E && null != g ? g : t,
                "aria-hidden": _,
                alt: f ?? (_ ? void 0 : h.intl.string(h.t["2B/phM"])),
                onError: (e) => (E ? y(!0) : I(!0)),
            }),
        },
        "content-image",
    );
}
