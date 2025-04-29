n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(372444),
    s = n(267642),
    a = n(981631),
    o = n(474936),
    c = n(388032),
    u = n(109626);
function d(e) {
    let { guild: t, numSounds: n, isOutOfSlots: d } = e,
        m = t.premiumTier,
        g = (0, s.FZ)(m),
        p = o._k[m] - 2;
    if (null == g || m === a.Eu4.TIER_3 || n < p) return null;
    let h = d
        ? {
              color: i.Ttl.GREEN,
              look: i.iLD.FILLED,
              text: c.intl.string(c.t.cYzxGh)
          }
        : void 0;
    return (0, r.jsx)(l.Z, {
        header: c.intl.string(c.t.zT9Sxc),
        text: c.intl.formatToPlainString(c.t.OKqEAQ, {
            level: g,
            numAdditional: (0, s.Je)(g)
        }),
        headerColor: 'header-primary',
        textColor: 'text-normal',
        buttonProps: h,
        guild: t,
        analyticsLocation: {
            page: a.ZY5.GUILD_SETTINGS,
            section: a.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: a.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, s.ge)(g)
        },
        className: u.container
    });
}
