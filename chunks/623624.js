n.d(t, { f: () => g });
var r = n(54381);
n(473749);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    s = n(100527),
    l = n(906732),
    c = n(84615),
    u = n(70394),
    d = n(430824),
    f = n(594174),
    p = n(443002),
    _ = n(564394);
let m = "BoostedGuildPerksModalConnected",
    h = (e) => {
        let { guildId: t, close: n, location: i } = e,
            c = (0, o.e7)([f.default], () => f.default.getCurrentUser());
        a()(null != c, "PremiumGuildPerksModalConnected: currentUser cannot be undefined");
        let m = (0, o.e7)([d.Z], () => d.Z.getGuild(t), [t]),
            { analyticsLocations: h } = (0, l.ZP)(s.Z.BOOSTED_GUILD_PERKS_MODAL),
            g = (0, u.$)("BoostedGuildPerksModal");
        if (null == m) return null;
        let E = g ? _.Z : p.Z;
        return (0, r.jsx)(l.Gt, {
            value: h,
            children: (0, r.jsx)(E, {
                analyticsLocation: i,
                onClose: n,
                guild: m,
            }),
        });
    };
function g(e) {
    let { guildId: t, location: n } = e;
    (0, c.q4)(
        (e) => {
            let { closeLayer: i } = e;
            return (0, r.jsx)(h, {
                close: i,
                guildId: t,
                location: n,
            });
        },
        { layerKey: m },
    );
}
