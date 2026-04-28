"use strict";
n.d(t, { V: () => p });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(990078),
    o = n(462887),
    c = n(109112),
    u = n(661531),
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
        C = (0, d.Ay)(),
        A = `${n}px`,
        [E, I] = i.useState(!1),
        [v, y] = i.useState(!1),
        b = null == g || v;
    if (null == t || (E && b))
        return (0, l.jsx)(c._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, o.M)(C) ? u.A.colors.WHITE : u.A.colors.BLACK,
            style: { maxWidth: A },
            className: a()(m.f, p),
        });
    let S = "height" === s ? { maxWidth: A, height: A } : { maxWidth: A, minHeight: A };
    return (0, l.jsx)(
        r.m,
        {
            "aria-label": f,
            __unsupportedReactNodeAsText: f,
            shouldShow: x,
            children: (0, l.jsx)("img", {
                style: S,
                className: a()(m.f, p),
                src: E && null != g ? g : t,
                "aria-hidden": _,
                alt: f ?? (_ ? void 0 : h.intl.string(h.t["2B/phM"])),
                onError: (e) => (E ? y(!0) : I(!0)),
            }),
        },
        "content-image",
    );
}
