"use strict";
n.d(t, { K: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(793574),
    s = n(688810),
    o = n(361158),
    l = n(375965),
    u = n(71393),
    c = n(287809),
    d = n(405680),
    _ = n(426760);
let f = "BoostedGuildPerksModalConnected",
    p = (e) => {
        let { guildId: t, close: n, location: o, scrollToPowerupCards: f } = e,
            p = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
            h = (0, i.bG)([u.A], () => u.A.getGuild(t), [t]),
            { analyticsLocations: m } = (0, s.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL),
            g = (0, l.j)("BoostedGuildPerksModal");
        if (null == p || null == h) return null;
        let E = g ? _.A : d.A;
        return (0, r.jsx)(s.f5, {
            value: m,
            children: (0, r.jsx)(E, { analyticsLocation: o, onClose: n, guild: h, scrollToPowerupCards: f }),
        });
    };
function h(e) {
    let { guildId: t, location: n, scrollToPowerupCards: i } = e;
    (0, o.B8)(
        (e) => {
            let { closeLayer: a } = e;
            return (0, r.jsx)(p, { close: a, guildId: t, location: n, scrollToPowerupCards: i });
        },
        { layerKey: f },
    );
}
