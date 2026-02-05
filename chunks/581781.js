n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(990078),
    o = n(145497),
    c = n(534400),
    d = n(743981),
    u = n(996373);
function _(e) {
    let { className: t, guildTag: n, guildBadge: r, guildId: _, guildName: m, guildIcon: A, guildIconSize: g } = e,
        E = s.useRef(null),
        [h, p] = s.useState(!1);
    return (
        s.useEffect(() => {
            let e = E.current;
            null != e && null != e.offsetWidth && null != e.scrollWidth && p(e.offsetWidth < e.scrollWidth);
        }, []),
        (0, i.jsxs)("div", {
            className: a()(u.kL, t),
            children: [
                (0, i.jsxs)("div", {
                    className: u.v2,
                    children: [
                        (0, i.jsx)(o.j, {
                            guildId: _,
                            guildName: m,
                            guildIcon: A,
                            iconSize: g,
                            className: u.rr,
                            animate: !1,
                        }),
                        (0, i.jsx)("div", {
                            className: u.zH,
                            children: (0, i.jsx)(l.m, {
                                __unsupportedReactNodeAsText: m,
                                shouldShow: h,
                                children: (0, i.jsx)("span", { ref: E, className: u.J5, children: m }),
                            }),
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: u.I8,
                    children: (0, i.jsx)(c.o9, {
                        guildId: _,
                        className: u.Tc,
                        guildTag: n,
                        guildBadge: r,
                        badgeSize: d.Sl.SIZE_16,
                        textColor: "interactive-text-default",
                        textVariant: "text-sm/semibold",
                        badgeClassName: u.qS,
                    }),
                }),
            ],
        })
    );
}
