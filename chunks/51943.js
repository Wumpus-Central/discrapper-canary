n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(3026),
    a = n(582754),
    r = n(397927),
    o = n(442433),
    d = n(263063),
    c = n(562153),
    u = n(939496),
    h = n(518477),
    A = n(996988),
    m = n(786361);
let p = (0, r.FT9)(r._3J.SIZE_16);
function g(e) {
    let { user: t, guild: g, nick: _, onSelect: f } = e,
        { theme: x, themeType: C } = (0, u.E)(),
        E = t.hasAvatarForGuild(g.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: C === A.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: m.nM,
        onClick: f,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("3795"),
                    n.e("43600"),
                    n.e("68587"),
                    n.e("40396"),
                    n.e("48330"),
                    n.e("13088"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("28136"),
                    n.e("7034"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("49559"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("37372"),
                    n.e("8018"),
                    n.e("3183"),
                    n.e("52335"),
                    n.e("96760"),
                    n.e("35894"),
                    n.e("67231"),
                    n.e("50796"),
                    n.e("24202"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("52848"),
                    n.e("69946"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("2717"),
                    n.e("34348"),
                    n.e("36290"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("79220"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: g });
            });
        },
        children: [
            (0, i.jsx)(d.A, {
                tabIndex: -1,
                guild: g,
                showBadge: !0,
                className: null != g.icon ? m.Kk : m.lN,
                badgeStrokeColor: (0, a.Mw)(x) ? l.A.unsafe_rawColors.PRIMARY_600.css : l.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: h.In,
                size: d.A.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: m.zH,
                children: [
                    (0, i.jsx)("div", { className: m.UU, children: g.name }),
                    E &&
                        (0, i.jsxs)("div", {
                            className: m.C9,
                            children: [
                                (0, i.jsx)(r.euF, {
                                    src: t.getAvatarURL(g.id, p),
                                    size: r._3J.SIZE_16,
                                    className: m.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(s.A, {
                                        delay: h.In,
                                        children: _ ?? c.Ay.getName(g.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !E &&
                        null != _ &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(s.A, { delay: h.In, children: _ }),
                        }),
                ],
            }),
        ],
    });
}
