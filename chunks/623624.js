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
        let { guildId: t, close: n, location: s } = e,
            p = (0, i.e7)([u.default], () => u.default.getCurrentUser()),
            _ = (0, i.e7)([c.Z], () => c.Z.getGuild(t), [t]),
            { analyticsLocations: m } = (0, o.ZP)(a.Z.BOOSTED_GUILD_PERKS_MODAL),
            h = (0, l.$)("BoostedGuildPerksModal");
        if (null == p || null == _) return null;
        let g = h ? f.Z : d.Z;
        return (0, r.jsx)(o.Gt, {
            value: m,
            children: (0, r.jsx)(g, {
                analyticsLocation: s,
                onClose: n,
                guild: _,
            }),
        });
    };
function m(e) {
    let { guildId: t, location: n } = e;
    (0, s.q4)(
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
