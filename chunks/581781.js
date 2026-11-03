l.d(s, { A: () => m });
var d = l(477900),
    a = l(582128),
    t = l(503698),
    i = l.n(t),
    c = l(866665),
    n = l(834730),
    r = l(145497),
    u = l(534400),
    o = l(743981),
    h = l(638855);
function m(e) {
    let { className: s, guildTag: l, guildBadge: t, guildId: m, guildName: x, guildIcon: g, guildIconSize: f } = e,
        p = a.useRef(null),
        [N, j] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = p.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && j(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, d.jsxs)("div", {
            className: i()(h.kL, s),
            children: [
                (0, d.jsxs)("div", {
                    className: h.v2,
                    children: [
                        (0, d.jsx)(r.j, {
                            guildId: m,
                            guildName: x,
                            guildIcon: g,
                            iconSize: f,
                            className: h.rr,
                            animate: !1,
                        }),
                        (0, d.jsx)("div", {
                            className: h.zH,
                            children: (0, d.jsx)(c.m, {
                                __unsupportedReactNodeAsText: x,
                                shouldShow: N,
                                children: (0, d.jsx)(n.E, {
                                    variant: "body-md/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    ref: p,
                                    className: h.J5,
                                    children: x,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, d.jsx)("div", {
                    className: h.I8,
                    children: (0, d.jsx)(u.o9, {
                        guildId: m,
                        className: h.Tc,
                        guildTag: l,
                        guildBadge: t,
                        badgeSize: o.Sl.SIZE_16,
                        textColor: "interactive-text-default",
                        textVariant: "body-sm/semibold",
                        badgeClassName: h.qS,
                    }),
                }),
            ],
        })
    );
}
