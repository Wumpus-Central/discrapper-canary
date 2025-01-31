n.d(t, { f: () => h });
var i = n(200651);
n(192379);
var r = n(512722),
    a = n.n(r),
    s = n(442837),
    o = n(100527),
    l = n(906732),
    u = n(84615),
    c = n(430824),
    d = n(594174),
    f = n(443002);
let _ = 'BoostedGuildPerksModalConnected',
    p = (e) => {
        let { guildId: t, close: n, location: r } = e,
            u = (0, s.e7)([d.default], () => d.default.getCurrentUser());
        a()(null != u, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
        let _ = (0, s.e7)([c.Z], () => c.Z.getGuild(t), [t]),
            { analyticsLocations: p } = (0, l.ZP)(o.Z.BOOSTED_GUILD_PERKS_MODAL);
        return null == _
            ? null
            : (0, i.jsx)(l.Gt, {
                  value: p,
                  children: (0, i.jsx)(f.Z, {
                      analyticsLocation: r,
                      onClose: n,
                      guild: _
                  })
              });
    };
function h(e) {
    let { guildId: t, location: n } = e;
    (0, u.q4)(
        (e) => {
            let { closeLayer: r } = e;
            return (0, i.jsx)(p, {
                close: r,
                guildId: t,
                location: n
            });
        },
        { layerKey: _ }
    );
}
