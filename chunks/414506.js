n.d(t, {
    default: () => _,
});
var l = n(627968);
n(64700);
var r = n(397927),
    o = n(442433),
    i = n(847767),
    c = n(358367),
    u = n(793574),
    a = n(688810),
    d = n(180798),
    s = n(652215),
    A = n(985018);
let _ = (0, c.A)(
    (0, i.A)(
        function (e) {
            var t;
            let { user: n, guildId: i, onSelect: c, analyticsLocations: s, onCloseContextMenu: _, isViewOnly: b } = e,
                { analyticsLocations: f } = (0, a.Ay)(u.A.CONTEXT_MENU),
                E = null != (t = null == s ? void 0 : s[0]) ? t : f[0],
                g = (0, d.A)(n.id, i, !0, E, b);
            return (0, l.jsx)(r.W1t, {
                "data-menu-migrated": !0,
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, o.Z_)(), null == _ || _();
                },
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: c,
                children: (0, l.jsx)(r.rXV, {
                    children: g,
                }),
            });
        },
        {
            object: s.ZSU.CONTEXT_MENU,
        },
    ),
    [u.A.CONTEXT_MENU, u.A.GUILD_MODERATION_USER_MENU],
);
