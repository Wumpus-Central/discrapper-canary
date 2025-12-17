n.d(t, { Z: () => g });
var r = n(54381);
n(473749);
var i = n(399606),
    l = n(481060),
    a = n(725803),
    s = n(999382),
    o = n(352981),
    c = n(469351),
    d = n(981631),
    u = n(674563);
function g() {
    let e = (0, i.e7)([s.Z], () => s.Z.getGuild()),
        t = (0, o.y)(null == e ? void 0 : e.id, "guild_product_settings"),
        { application: n, loading: g } = (0, a.Z)(null == e ? void 0 : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
        f = null != n && (null == e ? void 0 : e.features.has(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, r.jsx)("main", {
        children:
            null == e || !t || g
                ? (0, r.jsx)(l.$jN, {})
                : (0, r.jsx)(c.t, {
                      guildId: e.id,
                      hasValidApplication: f,
                  }),
    });
}
