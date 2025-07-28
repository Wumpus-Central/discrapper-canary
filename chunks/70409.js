n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(372444),
    a = n(267642),
    s = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(109626);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        m = t.premiumTier,
        g = (0, a.FZ)(m),
        p = o._k[m] - 2;
    if (null == g || m === s.Eu4.TIER_3 || n < p) return null;
    let h = u
        ? {
              color: i.Tt.GREEN,
              look: i.iL.FILLED,
              text: c.intl.string(c.t.cYzxGh)
          }
        : void 0;
    return (0, r.jsx)(l.Z, {
        header: c.intl.string(c.t.zT9Sxc),
        text: c.intl.formatToPlainString(c.t.OKqEAQ, {
            level: g,
            numAdditional: (0, a.Je)(g)
        }),
        headerColor: 'header-primary',
        textColor: 'text-default',
        buttonProps: h,
        guild: t,
        analyticsLocation: {
            page: s.ZY5.GUILD_SETTINGS,
            section: s.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: s.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, a.ge)(g)
        },
        className: d.container
    });
}
