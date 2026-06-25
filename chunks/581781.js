l.d(s, { A: () => m });
var t = l(627968),
    a = l(64700),
    d = l(503698),
    i = l.n(d),
    c = l(990078),
    n = l(834730),
    r = l(145497),
    u = l(534400),
    o = l(743981),
    h = l(446542);
function m(e) {
    let { className: s, guildTag: l, guildBadge: d, guildId: m, guildName: x, guildIcon: g, guildIconSize: f } = e,
        p = a.useRef(null),
        [N, j] = a.useState(!1);
    return (
        a.useEffect(() => {
            let e = p.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && j(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, t.jsxs)("div", {
            className: i()(h.kL, s),
            children: [
                (0, t.jsxs)("div", {
                    className: h.v2,
                    children: [
                        (0, t.jsx)(r.j, {
                            guildId: m,
                            guildName: x,
                            guildIcon: g,
                            iconSize: f,
                            className: h.rr,
                            animate: !1,
                        }),
                        (0, t.jsx)("div", {
                            className: h.zH,
                            children: (0, t.jsx)(c.m, {
                                __unsupportedReactNodeAsText: x,
                                shouldShow: N,
                                children: (0, t.jsx)(n.E, {
                                    variant: "text-md/semibold",
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
                (0, t.jsx)("div", {
                    className: h.I8,
                    children: (0, t.jsx)(u.o9, {
                        guildId: m,
                        className: h.Tc,
                        guildTag: l,
                        guildBadge: d,
                        badgeSize: o.Sl.SIZE_16,
                        textColor: "interactive-text-default",
                        textVariant: "text-sm/semibold",
                        badgeClassName: h.qS,
                    }),
                }),
            ],
        })
    );
}
