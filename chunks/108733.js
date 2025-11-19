n.d(t, { Z: () => u }), n(388685);
var i = n(54381),
    l = n(473749),
    r = n(793030),
    a = n(705338),
    s = n(810568),
    o = n(981631),
    c = n(582113),
    d = n(388032);
function u(e) {
    var t, n;
    let { invite: u, trackClick: m, closeModal: f } = e,
        g = l.useCallback(() => {
            (null == u ? void 0 : u.guild) != null && ((0, a.Z)({ invite: u }), f(), m(s.as.GameShop));
        }, [f, u, m]);
    return new Set(null == u || null == (t = u.guild) ? void 0 : t.features).has(
        o.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, i.jsx)(r.zxk, {
              variant: "primary",
              text:
                  (null == u || null == (n = u.guild) ? void 0 : n.id) === c.ON
                      ? d.intl.string(d.t.WTXyEQ)
                      : d.intl.string(d.t.v8UpgE),
              icon: r.EOn,
              onClick: g,
              fullWidth: !0,
          })
        : null;
}
