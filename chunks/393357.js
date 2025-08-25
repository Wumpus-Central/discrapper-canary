n.r(t), n.d(t, { default: () => _ });
var r = n(951288);
n(647438);
var o = n(990547),
    i = n(442837),
    l = n(906732),
    s = n(213609),
    a = n(353926),
    c = n(443002),
    u = n(703656),
    d = n(430824),
    p = n(639777),
    m = n(504392),
    f = n(981631);
function _(e) {
    let { guildId: t, powerupListingId: n } = e,
        _ = (0, i.e7)([d.Z], () => d.Z.getGuild(t)),
        x = (0, i.e7)([a.Z], () => a.Z.hasLoadedExperiments),
        g = (0, p.Z)(t),
        v = (0, u.At)(),
        b = !x || null == g || null == _,
        h = (0, l.ZP)(null != v ? v : []);
    return ((0, s.Z)(
        {
            type: o.ImpressionTypes.VIEW,
            name: o.ImpressionNames.BOOST_SHOP_OPENED,
            properties: { location_stack: h.analyticsLocations },
        },
        { disableTrack: b },
    ),
    b)
        ? null
        : g
          ? (0, r.jsx)(m.Z, {
                guildId: t,
                powerupListingId: n,
            })
          : (0, r.jsx)(c.Z, {
                analyticsLocation: {
                    section: f.jXE.CHANNEL_LIST,
                    object: f.qAy.GUILD_POWERUPS_CHANNEL_LIST_ITEM,
                },
                guild: _,
            });
}
