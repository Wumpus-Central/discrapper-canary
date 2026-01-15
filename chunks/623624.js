n.d(t, { f: () => m });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(100527),
    o = n(906732),
    s = n(84615),
    l = n(70394),
    c = n(430824),
    u = n(594174),
    d = n(443002),
    f = n(218319);
let p = "BoostedGuildPerksModalConnected",
    _ = (e) => {
        let { guildId: t, close: n, location: s, scrollToPowerupCards: p } = e,
            _ = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
            m = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
            { analyticsLocations: h } = (0, o.ZP)(a.Z.BOOSTED_GUILD_PERKS_MODAL),
            g = (0, l.$)("BoostedGuildPerksModal");
        if (null == _ || null == m) return null;
        let E = g ? f.Z : d.Z;
        return (0, r.jsx)(o.Gt, {
            value: h,
            children: (0, r.jsx)(E, {
                analyticsLocation: s,
                onClose: n,
                guild: m,
                scrollToPowerupCards: p,
            }),
        });
    };
function m(e) {
    let { guildId: t, location: n, scrollToPowerupCards: i } = e;
    (0, s.q4)(
        (e) => {
            let { closeLayer: a } = e;
            return (0, r.jsx)(_, {
                close: a,
                guildId: t,
                location: n,
                scrollToPowerupCards: i,
            });
        },
        { layerKey: p },
    );
}
