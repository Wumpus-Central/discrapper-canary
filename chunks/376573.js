t.d(n, { default: () => C });
var l = t(200651);
t(192379);
var r = t(852229),
    o = t(399606),
    s = t(481060),
    a = t(239091),
    c = t(367907),
    e = t(496675),
    d = t(626135),
    _ = t(934415),
    u = t(629481),
    h = t(981631),
    p = t(176505),
    k = t(388032);
function C(i) {
    let { guild: n, onSelect: t } = i,
        C = (0, o.e7)([e.Z], () => null != n && e.Z.can(h.Plq.ADMINISTRATOR, n));
    return (0, l.jsx)(s.v2r, {
        navId: 'guild-shop-context',
        'aria-label': k.intl.string(k.t.g3KvYG),
        onClose: a.Zy,
        onSelect: t,
        children: (0, l.jsx)(s.kSQ, {
            children: (0, l.jsx)(s.sNh, {
                id: 'role-subscription-copy-link',
                label: k.intl.string(k.t.WqhZsr),
                action: () => {
                    d.default.track(h.rMx.GUILD_SHOP_COPY_LINK, {
                        ...(0, c.hH)(n.id),
                        is_admin_or_owner: C,
                        copy_location: u.xv.CHANNEL_ROW_CONTEXT_MENU
                    }),
                        (0, r.J)((0, _.wR)(n.id, p.oC.GUILD_SHOP));
                }
            })
        })
    });
}
