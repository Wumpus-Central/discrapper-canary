"use strict";
i.d(t, { A: () => m });
var n = i(627968);
i(64700);
var s = i(827734),
    a = i(3026),
    l = i(582754),
    r = i(397927),
    o = i(442433),
    d = i(263063),
    c = i(562153),
    u = i(939496),
    h = i(518477),
    _ = i(996988),
    p = i(7319);
let f = (0, r.FT9)(r._3J.SIZE_16);
function m(e) {
    let { user: t, guild: m, nick: g, onSelect: A } = e,
        { theme: x, themeType: v } = (0, u.E)(),
        y = t.hasAvatarForGuild(m.id);
    return (0, n.jsxs)(r.DUT, {
        focusProps: v === _.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: p.nM,
        onClick: A,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    i.e("49681"),
                    i.e("3795"),
                    i.e("14138"),
                    i.e("8555"),
                    i.e("49924"),
                    i.e("68859"),
                    i.e("40396"),
                    i.e("13088"),
                    i.e("48330"),
                    i.e("92414"),
                    i.e("94857"),
                    i.e("48840"),
                    i.e("49559"),
                    i.e("43600"),
                    i.e("42006"),
                    i.e("37372"),
                    i.e("68587"),
                    i.e("16783"),
                    i.e("28136"),
                    i.e("91139"),
                    i.e("3183"),
                    i.e("55948"),
                    i.e("63379"),
                    i.e("56026"),
                    i.e("16301"),
                    i.e("22191"),
                    i.e("25961"),
                    i.e("8018"),
                    i.e("21968"),
                    i.e("35894"),
                    i.e("50796"),
                    i.e("62452"),
                    i.e("24202"),
                    i.e("41606"),
                    i.e("8458"),
                    i.e("11810"),
                    i.e("39048"),
                    i.e("2057"),
                    i.e("39501"),
                    i.e("30453"),
                    i.e("17537"),
                    i.e("49862"),
                    i.e("73756"),
                    i.e("56475"),
                    i.e("59541"),
                    i.e("54469"),
                    i.e("58482"),
                ]).then(i.bind(i, 544676));
                return (t) => (0, n.jsx)(e, { ...t, guild: m });
            });
        },
        children: [
            (0, n.jsx)(d.Ay, {
                tabIndex: -1,
                guild: m,
                showBadge: !0,
                className: null != m.icon ? p.Kk : p.lN,
                badgeStrokeColor: (0, l.Mw)(x) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: h.In,
                size: d.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, n.jsxs)("div", {
                className: p.zH,
                children: [
                    (0, n.jsx)("div", { className: p.UU, children: m.name }),
                    y &&
                        (0, n.jsxs)("div", {
                            className: p.C9,
                            children: [
                                (0, n.jsx)(r.euF, {
                                    src: t.getAvatarURL(m.id, f),
                                    size: r._3J.SIZE_16,
                                    className: p.my,
                                    "aria-hidden": !0,
                                }),
                                (0, n.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, n.jsx)(a.A, {
                                        delay: h.In,
                                        children: g ?? c.Ay.getName(m.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !y &&
                        null != g &&
                        (0, n.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, n.jsx)(a.A, { delay: h.In, children: g }),
                        }),
                ],
            }),
        ],
    });
}
