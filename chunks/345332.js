t.d(n, { default: () => k });
var a = t(627968);
t(64700);
var l = t(417597),
    r = t(861672),
    e = t(477782),
    s = t(442433),
    c = t(58149),
    d = t(576705),
    o = t(954571),
    _ = t(147036),
    u = t(957565),
    p = t(634654),
    h = t(652215),
    C = t(746080),
    b = t(985018);
function k(i) {
    let { guild: n, onSelect: t } = i,
        k = (0, l.bG)([d.A], () => null != n && d.A.can(h.xBc.ADMINISTRATOR, n));
    return (0, a.jsx)(r.W, {
        "data-menu-migrated": !0,
        navId: "guild-shop-context",
        "aria-label": b.intl.string(b.t.g3KvYF),
        onClose: s.Z_,
        onSelect: t,
        children: (0, a.jsx)(e.rX, {
            children: (0, a.jsx)(e.Dr, {
                id: "role-subscription-copy-link",
                label: b.intl.string(b.t.WqhZss),
                action: () => {
                    o.default.track(h.HAw.GUILD_SHOP_COPY_LINK, {
                        ...(0, c.H$)(n.id),
                        is_admin_or_owner: k,
                        copy_location: p.lJ.CHANNEL_ROW_CONTEXT_MENU,
                    }),
                        (0, u.C)((0, _.n)(n.id, C.VV.GUILD_SHOP));
                },
            }),
        }),
    });
}
