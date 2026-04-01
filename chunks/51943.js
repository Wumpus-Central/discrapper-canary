n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var a = n(827734),
    l = n(3026),
    s = n(582754),
    r = n(397927),
    o = n(442433),
    c = n(263063),
    d = n(562153),
    u = n(939496),
    m = n(518477),
    g = n(996988),
    p = n(752318);
let x = (0, r.FT9)(r._3J.SIZE_16);
function f(e) {
    let { user: t, guild: f, nick: _, onSelect: h } = e,
        { theme: A, themeType: I } = (0, u.E)(),
        v = t.hasAvatarForGuild(f.id);
    return (0, i.jsxs)(r.DUT, {
        focusProps: I === g.d.MODAL_V2 ? { offset: { top: 4, right: 4, left: 4 } } : { offset: { right: 8 } },
        className: p.nM,
        onClick: h,
        onContextMenu: (e) => {
            (0, o.L3)(e, async () => {
                let { default: e } = await Promise.all([
                    n.e("57174"),
                    n.e("49681"),
                    n.e("11478"),
                    n.e("14138"),
                    n.e("49924"),
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
                    n.e("48840"),
                    n.e("49559"),
                    n.e("42006"),
                    n.e("37372"),
                    n.e("28136"),
                    n.e("41514"),
                    n.e("63379"),
                    n.e("56026"),
                    n.e("16301"),
                    n.e("22191"),
                    n.e("25961"),
                    n.e("84609"),
                    n.e("8018"),
                    n.e("5813"),
                    n.e("79463"),
                    n.e("91872"),
                    n.e("35894"),
                    n.e("50796"),
                    n.e("53662"),
                    n.e("41606"),
                    n.e("8458"),
                    n.e("11810"),
                    n.e("34656"),
                    n.e("68890"),
                    n.e("30453"),
                    n.e("17537"),
                    n.e("49862"),
                    n.e("37207"),
                    n.e("56475"),
                    n.e("54816"),
                    n.e("59541"),
                    n.e("54469"),
                    n.e("29350"),
                ]).then(n.bind(n, 544676));
                return (t) => (0, i.jsx)(e, { ...t, guild: f });
            });
        },
        children: [
            (0, i.jsx)(c.Ay, {
                tabIndex: -1,
                guild: f,
                showBadge: !0,
                className: null != f.icon ? p.Kk : p.lN,
                badgeStrokeColor: (0, s.Mw)(A) ? a.A.unsafe_rawColors.PRIMARY_600.css : a.A.unsafe_rawColors.WHITE.css,
                badgeTooltipColor: r.oMw.PRIMARY,
                badgeTooltipDelay: m.In,
                size: c.Ay.Sizes.MEDIUM,
                active: !0,
            }),
            (0, i.jsxs)("div", {
                className: p.zH,
                children: [
                    (0, i.jsx)("div", { className: p.UU, children: f.name }),
                    v &&
                        (0, i.jsxs)("div", {
                            className: p.C9,
                            children: [
                                (0, i.jsx)(r.euF, {
                                    src: t.getAvatarURL(f.id, x),
                                    size: r._3J.SIZE_16,
                                    className: p.my,
                                    "aria-hidden": !0,
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: "text-xs/medium",
                                    children: (0, i.jsx)(l.A, {
                                        delay: m.In,
                                        children: _ ?? d.Ay.getName(f.id, void 0, t),
                                    }),
                                }),
                            ],
                        }),
                    !v &&
                        null != _ &&
                        (0, i.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            children: (0, i.jsx)(l.A, { delay: m.In, children: _ }),
                        }),
                ],
            }),
        ],
    });
}
