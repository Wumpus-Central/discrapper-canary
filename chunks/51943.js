"use strict";
n.d(t, { A: () => _ });
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
    f = n(7319);
let A = (0, r.FT9)(r._3J.SIZE_16);
function _(e) {
    let { user: t, guild: _, nick: g, onSelect: m } = e,
        { theme: E, themeType: x } = (0, u.E)(),
        v = t.hasAvatarForGuild(_.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: x === p.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: f.nM,
        onClick: m,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("49681"),
                    n.e("3795"),
                    n.e("8555"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("43600"),
                    n.e("37372"),
                    n.e("99970"),
                    n.e("68587"),
                    n.e("95095"),
                    n.e("28136"),
                    n.e("3183"),
                    n.e("53890"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("8018"),
                    n.e("21968"),
                    n.e("35894"),
                    n.e("67231"),
                    n.e("50796"),
                    n.e("41595"),
                    n.e("24202"),
                    n.e("41606"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("39048"),
                    n.e("73368"),
                    n.e("45266"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("33105"),
                    n.e("56475"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("79168"),
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
                badgeStrokeColor: (0, a.Mw)(E) ? s.A.unsafe_rawColors.PRIMARY_600.css : s.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: h.In,
                size: d.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: f.zH,
                children: [
                    (0, i.jsx)("div", { className: f.UU, children: _.name }),
                    v &&
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
                                    children: (0, i.jsx)(l.A, {
                                        delay: h.In,
                                        children: g ?? c.Ay.getName(_.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !v &&
                        null != g &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(l.A, { delay: h.In, children: g }),
                        }),
                ],
            }),
        ],
    });
}
