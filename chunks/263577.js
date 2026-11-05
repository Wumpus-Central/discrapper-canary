var l = n(477900),
    r = n(582128),
    o = n(503698),
    i = n.n(o),
    a = n(462887),
    s = n(109112),
    c = n(646514),
    u = n(866665),
    d = n(736653),
    x = n(792996),
    C = n(130811);
n.d(
    e,
    {},
    {
        V: function (t) {
            let {
                    src: e,
                    size: n,
                    constrain: o = "height",
                    className: A,
                    alt: h,
                    fallbackSrc: T,
                    "aria-hidden": E,
                    showTooltip: I = !1,
                } = t,
                f = (0, d.Ay)(),
                p = `${n}px`,
                [_, y] = r.useState(!1),
                [v, m] = r.useState(!1),
                g = null == T || v;
            if (null == e || (_ && g))
                return (0, l.jsx)(s.UnknownGameIcon, {
                    size: "custom",
                    width: "100%",
                    height: "100%",
                    color: (0, a.M)(f) ? c.A.colors.WHITE : c.A.colors.BLACK,
                    style: { maxWidth: p },
                    className: i()(C.f, A),
                });
            let P = "height" === o ? { maxWidth: p, height: p } : { maxWidth: p, minHeight: p };
            return (0, l.jsx)(
                u.m,
                {
                    "aria-label": h,
                    __unsupportedReactNodeAsText: h,
                    shouldShow: I,
                    children: (0, l.jsx)("img", {
                        style: P,
                        className: i()(C.f, A),
                        src: _ && null != T ? T : e,
                        "aria-hidden": E,
                        alt: h ?? (E ? void 0 : x.intl.string(x.t["2B/phM"])),
                        onError: (t) => (_ ? m(!0) : y(!0)),
                    }),
                },
                "content-image",
            );
        },
    },
);
