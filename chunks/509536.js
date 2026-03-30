"use strict";
n.d(t, { K4: () => f, Zt: () => d });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(793574),
    a = n(688810),
    o = n(361158),
    l = n(71393),
    u = n(287809),
    c = n(426760);
let d = "BoostedGuildPerksModalConnected",
    _ = (e) => {
        let { guildId: t, close: n, location: o, scrollToPowerupCards: d } = e,
            _ = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
            f = (0, i.bG)([l.A], () => l.A.getGuild(t), [t]),
            { analyticsLocations: p } = (0, a.Ay)(s.A.BOOSTED_GUILD_PERKS_MODAL);
        return null == _ || null == f
            ? null
            : (0, r.jsx)(a.f5, {
                  value: p,
                  children: (0, r.jsx)(c.A, { analyticsLocation: o, onClose: n, guild: f, scrollToPowerupCards: d }),
              });
    };
function f(e) {
    let { guildId: t, location: n, scrollToPowerupCards: i } = e;
    (0, o.B8)(
        (e) => {
            let { closeLayer: s } = e;
            return (0, r.jsx)(_, { close: s, guildId: t, location: n, scrollToPowerupCards: i });
        },
        { layerKey: d },
    );
}
