"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(3026),
    a = n(582754),
    r = n(397927),
    o = n(442433),
    d = n(263063),
    c = n(562153),
    u = n(939496),
    h = n(518477),
    p = n(996988),
    A = n(752318);
let f = (0, r.FT9)(r._3J.SIZE_16);
function g(e) {
    let { user: t, guild: g, nick: _, onSelect: m } = e,
        { theme: x, themeType: E } = (0, u.E)(),
        y = t.hasAvatarForGuild(g.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: E === p.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: A.nM,
        onClick: m,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("49681"),
                    n.e("11478"),
                    n.e("81028"),
                    n.e("8555"),
                    n.e("91652"),
                    n.e("40396"),
                    n.e("90365"),
                    n.e("68859"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("86077"),
                    n.e("49559"),
                    n.e("43600"),
                    n.e("18976"),
                    n.e("22837"),
                    n.e("37372"),
                    n.e("68587"),
                    n.e("23530"),
                    n.e("28136"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("21393"),
                    n.e("91139"),
                    n.e("8018"),
                    n.e("61733"),
                    n.e("41595"),
                    n.e("79463"),
                    n.e("91872"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("41606"),
                    n.e("94253"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("85200"),
                    n.e("68890"),
                    n.e("38865"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("37207"),
                    n.e("54816"),
                    n.e("3788"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("83655"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: g });
            });
        },
        children: [
            (0, i.jsx)(d.Ay, {
                tabIndex: -1,
                guild: g,
                showBadge: !0,
                className: null != g.icon ? A.Kk : A.lN,
                badgeStrokeColor: (0, a.Mw)(x) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: h.In,
                size: d.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: A.zH,
                children: [
                    (0, i.jsx)("div", { className: A.UU, children: g.name }),
                    y &&
                        (0, i.jsxs)("div", {
                            className: A.C9,
                            children: [
                                (0, i.jsx)(r.euF, {
                                    src: t.getAvatarURL(g.id, f),
                                    size: r._3J.SIZE_16,
                                    className: A.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(l.A, {
                                        delay: h.In,
                                        children: _ ?? c.Ay.getName(g.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !y &&
                        null != _ &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(l.A, { delay: h.In, children: _ }),
                        }),
                ],
            }),
        ],
    });
}
