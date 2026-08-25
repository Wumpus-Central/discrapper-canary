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
    m = n(130811);
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
        C = (0, d.Ay)(),
        E = `${n}px`,
        [I, y] = i.useState(!1),
        [S, v] = i.useState(!1),
        N = null == g || S;
    if (null == t || (I && N))
        return (0, l.jsx)(o._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, a.M)(C) ? u.A.colors.WHITE : u.A.colors.BLACK,
            style: { maxWidth: E },
            className: r()(m.f, f),
        });
    let _ = "height" === s ? { maxWidth: E, height: E } : { maxWidth: E, minHeight: E };
    return (0, l.jsx)(
        c.m,
        {
            "aria-label": p,
            __unsupportedReactNodeAsText: p,
            shouldShow: A,
            children: (0, l.jsx)("img", {
                style: _,
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
