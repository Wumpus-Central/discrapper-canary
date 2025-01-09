n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(399606),
    l = n(481060),
    s = n(725803),
    a = n(999382),
    o = n(352981),
    c = n(469351),
    d = n(981631),
    u = n(674563);
function m() {
    let e = (0, r.e7)([a.Z], () => a.Z.getGuild()),
        t = (0, o.y)(null == e ? void 0 : e.id, 'guild_product_settings'),
        { application: n, loading: m } = (0, s.Z)(null == e ? void 0 : e.id, u.wW.GUILD_ROLE_SUBSCRIPTIONS),
        h = null != n && (null == e ? void 0 : e.hasFeature(d.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0;
    return (0, i.jsx)('main', {
        children:
            null == e || !t || m
                ? (0, i.jsx)(l.Spinner, {})
                : (0, i.jsx)(c.t, {
                      guildId: e.id,
                      hasValidApplication: h
                  })
    });
}
