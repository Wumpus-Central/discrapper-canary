t.d(l, { default: () => _ });
var n = t(627968);
t(64700);
var i = t(397927),
    r = t(442433),
    o = t(847767),
    a = t(358367),
    c = t(793574),
    u = t(688810),
    d = t(180798),
    s = t(652215),
    A = t(985018);
let _ = (0, a.A)(
    (0, o.A)(
        function (e) {
            let { user: l, guildId: t, onSelect: o, analyticsLocations: a, onCloseContextMenu: s, isViewOnly: _ } = e,
                { analyticsLocations: E } = (0, u.Ay)(c.A.CONTEXT_MENU),
                g = a?.[0] ?? E[0],
                M = (0, d.A)(l.id, t, !0, g, _);
            return (0, n.jsx)(i.W1t, {
                "data-menu-migrated": !0,
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, r.Z_)(), s?.();
                },
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: o,
                children: (0, n.jsx)(i.rXV, { children: M }),
            });
        },
        { object: s.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_USER_MENU],
);
