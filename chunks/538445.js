n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(100527),
    a = n(18857),
    c = n(970731),
    u = n(981631),
    d = n(921944),
    h = n(93841),
    p = n(388032),
    f = n(951078),
    g = n(128647);
function m(e) {
    let { guild: t, markAsDismissed: n } = e,
        i = (null == t ? void 0 : t.premiumProgressBarEnabled) === !0 ? c.DF.LEFT_TOP : c.DF.TOP_CENTER,
        m = (0, a.Z)(t, s.Z.GUILD_BOOSTING_ENHANCED_ROLE_COLOR_COACHMARK, u.jXE.BOOSTER_ENHANCED_ROLE_COLORS_COACHMARK),
        b = i === c.DF.TOP_CENTER || i === c.DF.LEFT_TOP ? f[i] : '';
    return (0, r.jsx)(c.ZP, {
        asset: (0, r.jsxs)('div', {
            className: f.imageContainer,
            children: [
                (0, r.jsx)('img', {
                    alt: '',
                    src: g.Z,
                    className: f.image
                }),
                (0, r.jsx)(o.olH, {
                    className: f.close,
                    innerClassName: f.innerClose,
                    onClick: () => (null == n ? void 0 : n(d.L.USER_DISMISS))
                })
            ]
        }),
        header: (0, r.jsx)(o.Text, {
            variant: 'text-md/semibold',
            children: p.intl.string(h.default.bw76aG)
        }),
        content: (0, r.jsx)(o.Text, {
            variant: 'text-sm/medium',
            color: 'text-muted',
            children: p.intl.string(h.default['/DTbiY'])
        }),
        buttonCTA: p.intl.string(p.t['oPAx7+']),
        onClick: m,
        className: l()(f.container, b),
        caretPosition: i,
        markAsDismissed: n
    });
}
