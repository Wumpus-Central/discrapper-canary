n.d(t, {
    default: () => A,
});
var l = n(627968);
n(64700);
var r = n(397927),
    i = n(442433),
    o = n(847767),
    u = n(358367),
    c = n(793574),
    a = n(688810),
    d = n(180798),
    s = n(652215),
    _ = n(985018);
let A = (0, u.A)(
    (0, o.A)(
        function (e) {
            var t;
            let { user: n, guildId: o, onSelect: u, analyticsLocations: s, onCloseContextMenu: A, isViewOnly: b } = e,
                { analyticsLocations: E } = (0, a.Ay)(c.A.CONTEXT_MENU),
                f = null != (t = null == s ? void 0 : s[0]) ? t : E[0],
                O = (0, d.A)(n.id, o, !0, f, b);
            return (0, l.jsx)(r.W1t, {
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, i.Z_)(), null == A || A();
                },
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: u,
                children: (0, l.jsx)(r.rXV, {
                    children: O,
                }),
            });
        },
        {
            object: s.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_USER_MENU],
);
