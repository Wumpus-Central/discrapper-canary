n.d(e, { V: () => A });
var l = n(477900),
    r = n(582128),
    i = n(503698),
    o = n.n(i),
    a = n(462887),
    s = n(109112),
    u = n(661531),
    c = n(866665),
    d = n(736653),
    x = n(375708),
    C = n(130811);
function A(t) {
    let {
            src: e,
            size: n,
            constrain: i = "height",
            className: A,
            alt: h,
            fallbackSrc: T,
            "aria-hidden": E,
            showTooltip: f = !1,
        } = t,
        _ = (0, d.Ay)(),
        p = `${n}px`,
        [y, I] = r.useState(!1),
        [v, g] = r.useState(!1),
        m = null == T || v;
    if (null == e || (y && m))
        return (0, l.jsx)(s._, {
            size: "custom",
            width: "100%",
            height: "100%",
            color: (0, a.M)(_) ? u.A.colors.WHITE : u.A.colors.BLACK,
            style: { maxWidth: p },
            className: o()(C.f, A),
        });
    let P = "height" === i ? { maxWidth: p, height: p } : { maxWidth: p, minHeight: p };
    return (0, l.jsx)(
        c.m,
        {
            "aria-label": h,
            __unsupportedReactNodeAsText: h,
            shouldShow: f,
            children: (0, l.jsx)("img", {
                style: P,
                className: o()(C.f, A),
                src: y && null != T ? T : e,
                "aria-hidden": E,
                alt: h ?? (E ? void 0 : x.intl.string(x.t["2B/phM"])),
                onError: (t) => (y ? g(!0) : I(!0)),
            }),
        },
        "content-image",
    );
}
