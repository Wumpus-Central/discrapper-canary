n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(372444),
    a = n(267642),
    s = n(981631),
    o = n(474936),
    c = n(388032),
    d = n(750899);
function u(e) {
    let { guild: t, numSounds: n, isOutOfSlots: u } = e,
        m = t.premiumTier,
        h = (0, a.FZ)(m, t.id),
        g = o._k[m] - 2;
    if (null == h || m === s.Eu4.TIER_3 || n < g) return null;
    let x = u
        ? {
              color: r.ButtonColors.GREEN,
              look: r.ButtonLooks.FILLED,
              text: c.intl.string(c.t.cYzxGh)
          }
        : void 0;
    return (0, i.jsx)(l.Z, {
        header: c.intl.string(c.t.zT9Sxc),
        text: c.intl.formatToPlainString(c.t.OKqEAQ, {
            level: h,
            numAdditional: (0, a.Je)(h)
        }),
        headerColor: 'header-primary',
        textColor: 'text-normal',
        buttonProps: x,
        guild: t,
        analyticsLocation: {
            page: s.ZY5.GUILD_SETTINGS,
            section: s.jXE.GUILD_SETTINGS_SOUNDBOARD,
            object: s.qAy.BOOST_UPSELL_BANNER_SLOTS_FULL,
            objectType: (0, a.ge)(h)
        },
        className: d.container
    });
}
