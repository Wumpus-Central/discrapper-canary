t.d(n, { default: () => b });
var a = t(627968);
t(64700);
var l = t(417597),
    r = t(397927),
    e = t(442433),
    s = t(58149),
    c = t(576705),
    d = t(954571),
    o = t(147036),
    _ = t(957565),
    p = t(634654),
    u = t(652215),
    h = t(746080),
    C = t(985018);
function b(i) {
    let { guild: n, onSelect: t } = i,
        b = (0, l.bG)([c.A], () => null != n && c.A.can(u.xBc.ADMINISTRATOR, n));
    return (0, a.jsx)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "guild-shop-context",
        "aria-label": C.intl.string(C.t.g3KvYF),
        onClose: e.Z_,
        onSelect: t,
        children: (0, a.jsx)(r.rXV, {
            children: (0, a.jsx)(r.Drp, {
                id: "role-subscription-copy-link",
                label: C.intl.string(C.t.WqhZss),
                action: () => {
                    d.default.track(u.HAw.GUILD_SHOP_COPY_LINK, {
                        ...(0, s.H$)(n.id),
                        is_admin_or_owner: b,
                        copy_location: p.lJ.CHANNEL_ROW_CONTEXT_MENU,
                    }),
                        (0, _.C)((0, o.n)(n.id, h.VV.GUILD_SHOP));
                },
            }),
        }),
    });
}
