n.d(t, { f: () => h });
var r = n(200651);
n(192379);
var i = n(512722),
    o = n.n(i),
    a = n(442837),
    s = n(100527),
    l = n(906732),
    c = n(84615),
    u = n(430824),
    d = n(594174),
    f = n(443002);
let _ = 'BoostedGuildPerksModalConnected',
    p = (e) => {
        let { guildId: t, close: n, location: i } = e,
            c = (0, a.e7)([d.default], () => d.default.getCurrentUser());
        o()(null != c, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
        let _ = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]),
            { analyticsLocations: p } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL);
        return null == _
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: p,
                  children: (0, r.jsx)(f.Z, {
                      analyticsLocation: i,
                      onClose: n,
                      guild: _
                  })
              });
    };
function h(e) {
    let { guildId: t, location: n } = e;
    (0, c.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(p, {
                close: i,
                guildId: t,
                location: n
            });
        },
        { layerKey: _ }
    );
}
