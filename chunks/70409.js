n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    s = n(372444),
    l = n(267642),
    a = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(676172);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        m = t.premiumTier,
        g = (0, l.FZ)(m),
        p = o._k[m] - 2;
    if (null == g || m === a.Eu4.TIER_3 || n < p) return null;
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
            numAdditional: (0, l.Je)(g)
        }),
        headerColor: 'header-primary',
        textColor: 'text-normal',
        buttonProps: h,
        guild: t,
        analyticsLocation: {
            page: a.ZY5.GUILD_SETTINGS,
            section: a.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: a.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, l.ge)(g)
        },
        className: d.container
    });
}
