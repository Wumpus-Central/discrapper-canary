"use strict";
n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var s = n(827734),
    l = n(3026),
    a = n(462887),
    r = n(778712),
    o = n(939249),
    d = n(781696),
    c = n(97808),
    u = n(834730),
    h = n(442433),
    p = n(263063),
    f = n(562153),
    A = n(939496),
    _ = n(518477),
    g = n(996988),
    m = n(341934);
let x = (0, r.FT)(r._3.SIZE_16);
function E(e) {
    let { user: t, guild: E, nick: y, onSelect: v } = e,
        { theme: S, themeType: C } = (0, A.E)(),
        I = t.hasAvatarForGuild(E.id);
    return (0, i.jsxs)(o.D, {
        focusProps: C === g.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: m.nM,
        onClick: v,
        onContextMenu: (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("96382"),
                    n.e("20044"),
                    n.e("92493"),
                    n.e("28136"),
                    n.e("37457"),
                    n.e("97278"),
                    n.e("374"),
                    n.e("8555"),
                    n.e("82486"),
                    n.e("40396"),
                    n.e("64243"),
                    n.e("43600"),
                    n.e("97386"),
                    n.e("47742"),
                    n.e("48330"),
                    n.e("77602"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("68587"),
                    n.e("7034"),
                    n.e("14504"),
                    n.e("86546"),
                    n.e("37372"),
                    n.e("15373"),
                    n.e("95752"),
                    n.e("9648"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("56403"),
                    n.e("13334"),
                    n.e("25961"),
                    n.e("2736"),
                    n.e("84560"),
                    n.e("13848"),
                    n.e("47810"),
                    n.e("93764"),
                    n.e("31667"),
                    n.e("54828"),
                    n.e("94683"),
                    n.e("50796"),
                    n.e("8458"),
                    n.e("18496"),
                    n.e("17535"),
                    n.e("94253"),
                    n.e("11810"),
                    n.e("72756"),
                    n.e("21908"),
                    n.e("79668"),
                    n.e("82666"),
                    n.e("49862"),
                    n.e("13337"),
                    n.e("54469"),
                    n.e("30131"),
                    n.e("17965"),
                    n.e("43258"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: E });
            });
        },
        children: [
            (0, i.jsx)(p.Ay, {
                tabIndex: -1,
                guild: E,
                showBadge: !0,
                className: null != E.icon ? m.Kk : m.lN,
                badgeStrokeColor: (0, a.M)(S) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: d.oM.PRIMARY,
                badgeTooltipDelay: _.In,
                size: p.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: m.zH,
                children: [
                    (0, i.jsx)("div", { className: m.UU, children: E.name }),
                    I &&
                        (0, i.jsxs)("div", {
                            className: m.C9,
                            children: [
                                (0, i.jsx)(c.eu, {
                                    src: t.getAvatarURL(E.id, x),
                                    size: r._3.SIZE_16,
                                    className: m.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(l.A, {
                                        delay: _.In,
                                        children: y ?? f.Ay.getName(E.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !I &&
                        null != y &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(l.A, { delay: _.In, children: y }),
                        }),
                ],
            }),
        ],
    });
}
