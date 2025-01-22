n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(399606),
    o = n(481060),
    s = n(607070),
    c = n(430824),
    u = n(506071),
    d = n(267101),
    m = n(240864),
    h = n(57949),
    f = n(400916),
    p = n(388032);
function _(e) {
    let { guildId: t, guildProductListingId: n, sourceAnalyticsLocations: r } = e,
        _ = (0, a.e7)([m.Z], () => m.Z.getGuildProduct(n)),
        g = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]),
        E = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        C = (0, u.n)();
    if ((l()(null != g, 'guild cannot be null'), l()(null != _, 'guildProductListing cannot be null'), (0, d.SO)(g)))
        return (0, i.jsx)(o.Tooltip, {
            text: p.intl.string(p.t.sAJr9f),
            children: (e) =>
                (0, i.jsx)(o.Button, {
                    ...e,
                    color: o.Button.Colors.BRAND,
                    disabled: !0,
                    children: p.intl.string(p.t.xUi3BA)
                })
        });
    if (!_.has_entitlement)
        return (0, i.jsx)(o.ShinyButton, {
            shineSize: o.ShinyButton.ShineSizes.SMALL,
            pauseAnimation: E || !C,
            onClick: () =>
                (0, h.z)({
                    guildProductListing: _,
                    guildId: g.id,
                    sourceAnalyticsLocations: r
                }),
            children: p.intl.string(p.t.xUi3BA)
        });
    return null != _.attachments
        ? (0, i.jsx)(f.Z, {
              guildId: g.id,
              productId: _.id
          })
        : (0, i.jsx)(o.Button, {
              color: o.Button.Colors.PRIMARY,
              disabled: !0,
              children: p.intl.string(p.t.RcTOGB)
          });
}
