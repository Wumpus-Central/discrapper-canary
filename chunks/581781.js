n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(990078),
    l = n(145497),
    c = n(534400),
    u = n(743981),
    d = n(996373);
function f(e) {
    let { className: t, guildTag: n, guildBadge: a, guildId: f, guildName: p, guildIcon: _, guildIconSize: h } = e,
        m = i.useRef(null),
        [g, E] = i.useState(!1);
    return (
        i.useEffect(() => {
            let e = m.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && E(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, r.jsxs)("div", {
            className: s()(d.kL, t),
            children: [
                (0, r.jsxs)("div", {
                    className: d.v2,
                    children: [
                        (0, r.jsx)(l.j, {
                            guildId: f,
                            guildName: p,
                            guildIcon: _,
                            iconSize: h,
                            className: d.rr,
                            animate: !1,
                        }),
                        (0, r.jsx)("div", {
                            className: d.zH,
                            children: (0, r.jsx)(o.m, {
                                __unsupportedReactNodeAsText: p,
                                shouldShow: g,
                                children: (0, r.jsx)("span", {
                                    ref: m,
                                    className: d.J5,
                                    children: p,
                                }),
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: d.I8,
                    children: (0, r.jsx)(c.o9, {
                        guildId: f,
                        className: d.Tc,
                        guildTag: n,
                        guildBadge: a,
                        badgeSize: u.Sl.SIZE_16,
                        textColor: "interactive-text-default",
                        textVariant: "text-sm/semibold",
                        badgeClassName: d.qS,
                    }),
                }),
            ],
        })
    );
}
