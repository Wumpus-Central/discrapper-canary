n.d(t, { Z: () => u }), n(388685);
var a = n(54381),
    i = n(473749),
    r = n(793030),
    l = n(164670),
    s = n(705338),
    o = n(810568),
    c = n(981631),
    d = n(388032);
function u(e) {
    var t, n;
    let { invite: u, trackClick: m, closeModal: g } = e,
        f = i.useCallback(() => {
            (null == u ? void 0 : u.guild) != null && ((0, s.default)({ invite: u }), g(), m(o.as.GameShop));
        }, [g, u, m]);
    return new Set(null == u || null == (t = u.guild) ? void 0 : t.features).has(
        c.GuildFeatures.SOCIAL_LAYER_STOREFRONT,
    )
        ? (0, a.jsx)(r.zxk, {
              variant: "primary",
              text:
                  (null == u || null == (n = u.guild) ? void 0 : n.id) === (0, l.ac)()
                      ? d.intl.string(d.t.WTXyEQ)
                      : d.intl.string(d.t.v8UpgE),
              icon: r.EOn,
              onClick: f,
              fullWidth: !0,
          })
        : null;
}
