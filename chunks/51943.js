n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(3026),
    s = n(582754),
    r = n(397927),
    o = n(442433),
    d = n(263063),
    c = n(562153),
    u = n(939496),
    g = n(518477),
    m = n(996988),
    x = n(752318);
let p = (0, r.FT9)(r._3J.SIZE_16);
function f(e) {
    let { user: t, guild: f, nick: h, onSelect: _ } = e,
        { theme: A, themeType: I } = (0, u.E)(),
        j = t.hasAvatarForGuild(f.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: I === m.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: x.nM,
        onClick: _,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("49681"),
                    n.e("3795"),
                    n.e("14138"),
                    n.e("8555"),
                    n.e("49924"),
                    n.e("36671"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("43600"),
                    n.e("42006"),
                    n.e("37372"),
                    n.e("68587"),
                    n.e("35664"),
                    n.e("84609"),
                    n.e("28136"),
                    n.e("60064"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("8018"),
                    n.e("91872"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("53662"),
                    n.e("24202"),
                    n.e("41606"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("34656"),
                    n.e("2057"),
                    n.e("39501"),
                    n.e("30453"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("74253"),
                    n.e("56475"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("48930"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: f });
            });
        },
        children: [
            (0, i.jsx)(d.Ay, {
                tabIndex: -1,
                guild: f,
                showBadge: !0,
                className: null != f.icon ? x.Kk : x.lN,
                badgeStrokeColor: (0, s.Mw)(A) ? l.A.unsafe_rawColors.PRIMARY_600.css : l.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: g.In,
                size: d.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: x.zH,
                children: [
                    (0, i.jsx)("div", { className: x.UU, children: f.name }),
                    j &&
                        (0, i.jsxs)("div", {
                            className: x.C9,
                            children: [
                                (0, i.jsx)(r.euF, {
                                    src: t.getAvatarURL(f.id, p),
                                    size: r._3J.SIZE_16,
                                    className: x.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(a.A, {
                                        delay: g.In,
                                        children: h ?? c.Ay.getName(f.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !j &&
                        null != h &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(a.A, { delay: g.In, children: h }),
                        }),
                ],
            }),
        ],
    });
}
