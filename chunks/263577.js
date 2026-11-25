var i = t(477900),
    l = t(582128),
    n = t(503698),
    o = t.n(n),
    r = t(462887),
    s = t(109112),
    a = t(646514),
    d = t(866665),
    h = t(736653),
    c = t(792996),
    u = t(130811);
t.d(
    C,
    {},
    {
        V: function (e) {
            let {
                    src: C,
                    size: t,
                    constrain: n = "height",
                    className: L,
                    alt: p,
                    fallbackSrc: x,
                    "aria-hidden": f,
                    showTooltip: g = !1,
                } = e,
                v = (0, h.Ay)(),
                m = `${t}px`,
                [w, A] = l.useState(!1),
                [M, j] = l.useState(!1),
                R = null == x || M;
            if (null == C || (w && R))
                return (0, i.jsx)(s.UnknownGameIcon, {
                    size: "custom",
                    width: "100%",
                    height: "100%",
                    color: (0, r.M)(v) ? a.A.colors.WHITE : a.A.colors.BLACK,
                    style: { maxWidth: m },
                    className: o()(u.f, L),
                });
            let V = "height" === n ? { maxWidth: m, height: m } : { maxWidth: m, minHeight: m };
            return (0, i.jsx)(
                d.m,
                {
                    "aria-label": p,
                    __unsupportedReactNodeAsText: p,
                    shouldShow: g,
                    children: (0, i.jsx)("img", {
                        style: V,
                        className: o()(u.f, L),
                        src: w && null != x ? x : C,
                        "aria-hidden": f,
                        alt: p ?? (f ? void 0 : c.intl.string(c.t["2B/phM"])),
                        onError: (e) => (w ? j(!0) : A(!0)),
                    }),
                },
                "content-image",
            );
        },
    },
);
