"use strict";
n.d(t, { V: () => f });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(462887),
    o = n(109112),
    u = n(661531),
    c = n(866665),
    d = n(736653),
    h = n(375708),
    m = n(820028);
function f(e) {
    let {
            src: t,
            size: n,
            constrain: s = "height",
            className: f,
            alt: p,
            fallbackSrc: g,
            "aria-hidden": x,
            showTooltip: A = !1,
        } = e,
        E = (0, d.Ay)(),
        C = `${n}px`,
        [I, y] = i.useState(!1),
        [S, v] = i.useState(!1),
        _ = null == g || S;
    if (null == t || (I && _))
        return (0, l.jsx)(o._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, a.M)(E) ? u.A.colors.WHITE : u.A.colors.BLACK,
            style: { maxWidth: C },
            className: r()(m.f, f),
        });
    let N = "height" === s ? { maxWidth: C, height: C } : { maxWidth: C, minHeight: C };
    return (0, l.jsx)(
        c.m,
        {
            "aria-label": p,
            __unsupportedReactNodeAsText: p,
            shouldShow: A,
            children: (0, l.jsx)("img", {
                style: N,
                className: r()(m.f, f),
                src: I && null != g ? g : t,
                "aria-hidden": x,
                alt: p ?? (x ? void 0 : h.intl.string(h.t["2B/phM"])),
                onError: (e) => (I ? v(!0) : y(!0)),
            }),
        },
        "content-image",
    );
}
