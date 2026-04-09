"use strict";
n.d(t, { A: () => _ });
var i = n(627968);
n(64700);
var s = n(827734),
    a = n(3026),
    l = n(582754),
    r = n(397927),
    o = n(442433),
    d = n(263063),
    c = n(562153),
    u = n(939496),
    h = n(518477),
    p = n(996988),
    f = n(823305);
let A = (0, r.FT9)(r._3J.SIZE_16);
function _(e) {
    let { user: t, guild: _, nick: g, onSelect: m } = e,
        { theme: x, themeType: E } = (0, u.E)(),
        y = t.hasAvatarForGuild(_.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: E === p.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: f.nM,
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
                    n.e("43600"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("68587"),
                    n.e("34779"),
                    n.e("49559"),
                    n.e("18976"),
                    n.e("10277"),
                    n.e("37372"),
                    n.e("28136"),
                    n.e("35169"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("91139"),
                    n.e("8018"),
                    n.e("76122"),
                    n.e("33424"),
                    n.e("33144"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("41595"),
                    n.e("41606"),
                    n.e("94253"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("90226"),
                    n.e("68890"),
                    n.e("38865"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("1637"),
                    n.e("54816"),
                    n.e("3788"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("72812"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: _ });
            });
        },
        children: [
            (0, i.jsx)(d.Ay, {
                tabIndex: -1,
                guild: _,
                showBadge: !0,
                className: null != _.icon ? f.Kk : f.lN,
                badgeStrokeColor: (0, l.Mw)(x) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: h.In,
                size: d.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: f.zH,
                children: [
                    (0, i.jsx)("div", { className: f.UU, children: _.name }),
                    y &&
                        (0, i.jsxs)("div", {
                            className: f.C9,
                            children: [
                                (0, i.jsx)(r.euF, {
                                    src: t.getAvatarURL(_.id, A),
                                    size: r._3J.SIZE_16,
                                    className: f.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(a.A, {
                                        delay: h.In,
                                        children: g ?? c.Ay.getName(_.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !y &&
                        null != g &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(a.A, { delay: h.In, children: g }),
                        }),
                ],
            }),
        ],
    });
}
