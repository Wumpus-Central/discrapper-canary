n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(399606),
    s = n(481060),
    a = n(725803),
    l = n(999382),
    o = n(352981),
    c = n(469351),
    d = n(981631),
    u = n(674563);
function m() {
    let e = (0, i.e7)([l.Z], () => l.Z.getGuild()),
        t = (0, o.y)(null == e ? void 0 : e.id, 'guild_product_settings'),
        { application: n, loading: m } = (0, a.Z)(null == e ? void 0 : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
        g = null != n && (null == e ? void 0 : e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, r.jsx)('main', {
        children:
            null == e || !t || m
                ? (0, r.jsx)(s.$jN, {})
                : (0, r.jsx)(c.t, {
                      guildId: e.id,
                      hasValidApplication: g
                  })
    });
}
