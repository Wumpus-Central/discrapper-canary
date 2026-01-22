n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(421380),
    l = n(945086),
    s = n(473145),
    a = n(652215),
    c = n(788868),
    o = n(985018),
    d = n(914016);

function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        f = t.premiumTier,
        g = (0, s.ax)(f),
        b = c.y7[f] - 2;
    if (null == g || f === a.TVA.TIER_3 || n < b) return null;
    let m = u
        ? {
              color: i.XD.GREEN,
              look: i.pR.FILLED,
              text: o.intl.string(o.t.cYzxGn),
          }
        : void 0;
    return (0, r.jsx)(l.A, {
        header: o.intl.string(o.t.zT9SxY),
        text: o.intl.formatToPlainString(o.t.OKqEAU, {
            level: g,
            numAdditional: (0, s.Ry)(g),
        }),
        headerColor: "text-strong",
        textColor: "text-default",
        buttonProps: m,
        useExpressiveButton: !0,
        guild: t,
        analyticsLocation: {
            page: a.liQ.GUILD_SETTINGS,
            section: a.JJy.GUILD_SETTINGS_SOUNDBOARD,
            object: a.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, s.k1)(g),
        },
        className: d.k,
    });
}
