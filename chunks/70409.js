n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(372444),
    a = n(267642),
    l = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(109626);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        m = t.premiumTier,
        g = (0, a.FZ)(m),
        p = o._k[m] - 2;
    if (null == g || m === l.Eu4.TIER_3 || n < p) return null;
    let h = u
        ? {
              color: i.Ttl.GREEN,
              look: i.iLD.FILLED,
              text: c.NW.string(c.t.cYzxGh)
          }
        : void 0;
    return (0, r.jsx)(s.Z, {
        header: c.NW.string(c.t.zT9Sxc),
        text: c.NW.formatToPlainString(c.t.OKqEAQ, {
            level: g,
            numAdditional: (0, a.Je)(g)
        }),
        headerColor: 'header-primary',
        textColor: 'text-normal',
        buttonProps: h,
        guild: t,
        analyticsLocation: {
            page: l.ZY5.GUILD_SETTINGS,
            section: l.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: l.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, a.ge)(g)
        },
        className: d.container
    });
}
