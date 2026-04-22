n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var l = n(862482),
    s = n(945086),
    r = n(473145),
    a = n(652215),
    o = n(788868),
    d = n(985018),
    c = n(648357);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        m = t.premiumTier,
        g = (0, r.ax)(m),
        h = o.y7[m] - 2;
    if (null == g || m === a.TVA.TIER_3 || n < h) return null;
    let x = u ? { color: l.XD.GREEN, look: l.pR.FILLED, text: d.intl.string(d.t.cYzxGn) } : void 0;
    return (0, i.jsx)(s.A, {
        header: d.intl.string(d.t.zT9SxY),
        text: d.intl.formatToPlainString(d.t.OKqEAU, { level: g, numAdditional: (0, r.Ry)(g) }),
        headerColor: "text-strong",
        textColor: "text-default",
        buttonProps: x,
        useExpressiveButton: !0,
        guild: t,
        analyticsLocation: {
            page: a.liQ.GUILD_SETTINGS,
            section: a.JJy.GUILD_SETTINGS_SOUNDBOARD,
            object: a.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, r.k1)(g),
        },
        className: c.k,
    });
}
