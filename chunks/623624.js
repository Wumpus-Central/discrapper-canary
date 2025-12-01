n.d(t, { f: () => m });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(100527),
    l = n(906732),
    c = n(84615),
    u = n(430824),
    d = n(594174),
    f = n(443002);
let p = "BoostedGuildPerksModalConnected",
    _ = (e) => {
        let { guildId: t, close: n, location: i } = e,
            c = (0, o.e7)([d.default], () => d.default.getCurrentUser());
        a()(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
        let p = (0, o.e7)([u.Z], () => u.Z.getGuild(t), [t]),
            { analyticsLocations: _ } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL);
        return null == p
            ? null
            : (0, r.jsx)(l.Gt, {
                  value: _,
                  children: (0, r.jsx)(f.Z, {
                      analyticsLocation: i,
                      onClose: n,
                      guild: p,
                  }),
              });
    };
function m(e) {
    let { guildId: t, location: n } = e;
    (0, c.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(_, {
                close: i,
                guildId: t,
                location: n,
            });
        },
        { layerKey: p },
    );
}
