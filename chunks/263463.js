n.d(t, { Z: () => f });
var r = n(54381);
n(473749);
var i = n(442837),
    l = n(780384),
    s = n(481060),
    o = n(210887),
    a = n(475595),
    c = n(231338),
    d = n(388032),
    u = n(453544);
let f = function (e) {
    let { quest: t } = e,
        n = (0, i.e7)([o.Z], () => o.Z.getState().theme),
        f = (0, l.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
    return (0, r.jsx)("div", {
        className: u.wrapper,
        children: (0, r.jsxs)("div", {
            className: u.content,
            children: [
                (0, r.jsx)("img", {
                    src: (0, a.fh)(t, a.eC.GAME_TILE, f).url,
                    alt: "",
                    className: u.gameTile,
                }),
                (0, r.jsxs)("div", {
                    className: u.copy,
                    children: [
                        (0, r.jsx)(s.Heading, {
                            color: "always-white",
                            variant: "text-sm/medium",
                            children: d.intl.format(d.t["5nMfBZ"], { gameTitle: t.config.messages.gameTitle }),
                        }),
                        (0, r.jsx)(s.Text, {
                            className: u.subheading,
                            color: "always-white",
                            variant: "text-xs/medium",
                            children: d.intl.string(d.t.mjbPtS),
                        }),
                    ],
                }),
            ],
        }),
    });
};
