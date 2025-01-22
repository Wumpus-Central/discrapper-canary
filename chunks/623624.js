r.d(n, {
    f: function () {
        return m;
    }
});
var i = r(200651);
r(192379);
var a = r(512722),
    o = r.n(a),
    s = r(442837),
    l = r(100527),
    u = r(906732),
    c = r(84615),
    d = r(430824),
    f = r(594174),
    p = r(443002);
let h = 'BoostedGuildPerksModalConnected',
    _ = (e) => {
        let { guildId: n, close: r, location: a } = e,
            c = (0, s.e7)([f.default], () => f.default.getCurrentUser());
        o()(null != c, 'PremiumGuildPerksModalConnected: currentUser cannot be undefined');
        let h = (0, s.e7)([d.Z], () => d.Z.getGuild(n), [n]),
            { analyticsLocations: _ } = (0, u.ZP)(l.Z.BOOSTED_GUILD_PERKS_MODAL);
        return null == h
            ? null
            : (0, i.jsx)(u.Gt, {
                  value: _,
                  children: (0, i.jsx)(p.Z, {
                      analyticsLocation: a,
                      onClose: r,
                      guild: h
                  })
              });
    };
function m(e) {
    let { guildId: n, location: r } = e;
    (0, c.q4)(
        (e) => {
            let { closeLayer: a } = e;
            return (0, i.jsx)(_, {
                close: a,
                guildId: n,
                location: r
            });
        },
        { layerKey: h }
    );
}
