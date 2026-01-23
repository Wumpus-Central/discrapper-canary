n.d(t, {
    default: () => _,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(442433),
    o = n(847767),
    u = n(358367),
    a = n(793574),
    c = n(688810),
    d = n(180798),
    s = n(652215),
    A = n(985018);
let _ = (0, u.A)(
    (0, o.A)(
        function (e) {
            var t;
            let { user: n, guildId: o, onSelect: u, analyticsLocations: s, onCloseContextMenu: _, isViewOnly: b } = e,
                { analyticsLocations: E } = (0, c.Ay)(a.A.CONTEXT_MENU),
                f = null != (t = null == s ? void 0 : s[0]) ? t : E[0],
                O = (0, d.A)(n.id, o, !0, f, b);
            return (0, r.jsx)(l.W1t, {
                "data-menu-migration-ready": !0,
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, i.Z_)(), null == _ || _();
                },
                "aria-label": A.intl.string(A.t.liqwPJ),
                onSelect: u,
                children: (0, r.jsx)(l.rXV, {
                    children: O,
                }),
            });
        },
        {
            object: s.ZSU.CONTEXT_MENU,
        },
    ),
    [a.A.CONTEXT_MENU, a.A.GUILD_MODERATION_USER_MENU],
);
