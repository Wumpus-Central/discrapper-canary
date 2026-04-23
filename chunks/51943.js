n.d(t, { A: () => y });
var i = n(627968);
n(64700);
var s = n(661531),
    l = n(3026),
    a = n(462887),
    o = n(778712),
    r = n(939249),
    d = n(781696),
    c = n(97808),
    u = n(834730),
    h = n(442433),
    p = n(548118),
    _ = n(562153),
    f = n(939496),
    A = n(518477),
    g = n(996988),
    m = n(341934);
let E = (0, o.FT)(o._3.SIZE_16);
function y(e) {
    let { user: t, guild: y, nick: x, onSelect: v } = e,
        { theme: S, themeType: C } = (0, f.E)(),
        I = t.hasAvatarForGuild(y.id);
    return (0, i.jsxs)(r.D, {
        focusProps: C === g.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: m.nM,
        onClick: v,
        onContextMenu: (e) => {
            (0, h.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("96382"),
                    n.e("20044"),
                    n.e("24170"),
                    n.e("28136"),
                    n.e("44575"),
                    n.e("97278"),
                    n.e("8555"),
                    n.e("49328"),
                    n.e("34268"),
                    n.e("69295"),
                    n.e("82486"),
                    n.e("44236"),
                    n.e("97386"),
                    n.e("92414"),
                    n.e("65437"),
                    n.e("84812"),
                    n.e("17637"),
                    n.e("43765"),
                    n.e("25979"),
                    n.e("77602"),
                    n.e("33297"),
                    n.e("23297"),
                    n.e("95752"),
                    n.e("92754"),
                    n.e("68587"),
                    n.e("51440"),
                    n.e("62092"),
                    n.e("22547"),
                    n.e("86546"),
                    n.e("15373"),
                    n.e("49319"),
                    n.e("96045"),
                    n.e("42749"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("35614"),
                    n.e("22191"),
                    n.e("30501"),
                    n.e("25961"),
                    n.e("2736"),
                    n.e("93764"),
                    n.e("65848"),
                    n.e("13848"),
                    n.e("47810"),
                    n.e("46291"),
                    n.e("72564"),
                    n.e("41068"),
                    n.e("32347"),
                    n.e("8458"),
                    n.e("67925"),
                    n.e("61763"),
                    n.e("15666"),
                    n.e("11810"),
                    n.e("8018"),
                    n.e("95765"),
                    n.e("51299"),
                    n.e("49862"),
                    n.e("51873"),
                    n.e("2806"),
                    n.e("54792"),
                    n.e("13337"),
                    n.e("65338"),
                    n.e("60467"),
                    n.e("17965"),
                    n.e("42572"),
                ]).then(n.bind(n, 860417));
                return (t) => (0, i.jsx)(e, { ...t, guild: y });
            });
        },
        children: [
            (0, i.jsx)(p.Ay, {
                tabIndex: -1,
                guild: y,
                showBadge: !0,
                className: null != y.icon ? m.Kk : m.lN,
                badgeStrokeColor: (0, a.M)(S) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: d.oM.PRIMARY,
                badgeTooltipDelay: A.In,
                size: p.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: m.zH,
                children: [
                    (0, i.jsx)("div", { className: m.UU, children: y.name }),
                    I &&
                        (0, i.jsxs)("div", {
                            className: m.C9,
                            children: [
                                (0, i.jsx)(c.eu, {
                                    src: t.getAvatarURL(y.id, E),
                                    size: o._3.SIZE_16,
                                    className: m.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(u.E, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(l.A, {
                                        delay: A.In,
                                        children: x ?? _.Ay.getName(y.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !I &&
                        null != x &&
                        (0, i.jsx)(u.E, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(l.A, { delay: A.In, children: x }),
                        }),
                ],
            }),
        ],
    });
}
