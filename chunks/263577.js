"use strict";
n.d(t, { V: () => A });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(462887),
    o = n(109112),
    d = n(661531),
    c = n(866665),
    u = n(736653),
    _ = n(375708),
    E = n(820028);
function A(e) {
    let {
            src: t,
            size: n,
            constrain: a = "height",
            className: A,
            alt: h,
            fallbackSrc: I,
            "aria-hidden": f,
            showTooltip: p = !1,
        } = e,
        T = (0, u.Ay)(),
        m = `${n}px`,
        [g, S] = r.useState(!1),
        [N, C] = r.useState(!1),
        O = null == I || N;
    if (null == t || (g && O))
        return (0, i.jsx)(o._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, l.M)(T) ? d.A.colors.WHITE : d.A.colors.BLACK,
            style: { maxWidth: m },
            className: s()(E.f, A),
        });
    let R = "height" === a ? { maxWidth: m, height: m } : { maxWidth: m, minHeight: m };
    return (0, i.jsx)(
        c.m,
        {
            "aria-label": h,
            __unsupportedReactNodeAsText: h,
            shouldShow: p,
            children: (0, i.jsx)("img", {
                style: R,
                className: s()(E.f, A),
                src: g && null != I ? I : t,
                "aria-hidden": f,
                alt: h ?? (f ? void 0 : _.intl.string(_.t["2B/phM"])),
                onError: (e) => (g ? C(!0) : S(!0)),
            }),
        },
        "content-image",
    );
}
