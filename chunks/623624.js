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
let p = 'BoostedGuildPerksModalConnected',
    _ = (e) => {
        let { guildId: t, close: n, location: i } = e,
            c = (0, a.e7)([d.default], () => d.default.getCurrentUser());
        o()(null != c, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
        let p = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]),
            { analyticsLocations: _ } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL);
        return null == p
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: _,
                  children: (0, r.jsx)(f.Z, {
                      analyticsLocation: i,
                      onClose: n,
                      guild: p
                  })
              });
    };
function h(e) {
    let { guildId: t, location: n } = e;
    (0, c.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(_, {
                close: i,
                guildId: t,
                location: n
            });
        },
        { layerKey: p }
    );
}
