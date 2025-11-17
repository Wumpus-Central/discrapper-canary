n.d(t, { Z: () => d }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(793030),
    a = n(705338),
    s = n(810568),
    o = n(981631),
    c = n(388032);
function d(e) {
    var t;
    let { invite: n, trackClick: d, closeModal: u } = e,
        m = l.useCallback(() => {
            (null == n ? void 0 : n.guild) != null && ((0, a.Z)({ invite: n }), u(), d(s.as.GameShop));
        }, [u, n, d]);
    return new Set(null == n || null == (t = n.guild) ? void 0 : t.features).has(
        o.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, i.jsx)(r.zxk, {
              variant: "primary",
              text: c.intl.string(c.t.v8UpgE),
              icon: r.EOn,
              onClick: m,
              fullWidth: !0,
          })
        : null;
}
