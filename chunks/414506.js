n.d(l, { default: () => b });
var t = n(627968);
n(64700);
var r = n(861672),
    o = n(477782),
    i = n(442433),
    c = n(847767),
    d = n(358367),
    s = n(793574),
    a = n(688810),
    u = n(180798),
    A = n(652215),
    g = n(985018);
let b = (0, d.A)(
    (0, c.A)(
        function (e) {
            let { user: l, guildId: n, onSelect: c, analyticsLocations: d, onCloseContextMenu: A, isViewOnly: b } = e,
                { analyticsLocations: h } = (0, a.Ay)(s.A.CONTEXT_MENU),
                j = d?.[0] ?? h[0],
                p = (0, u.A)(l.id, n, !0, j, b);
            return (0, t.jsx)(r.W, {
                "data-menu-migrated": !0,
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, i.Z_)(), A?.();
                },
                "aria-label": g.intl.string(g.t.liqwPJ),
                onSelect: c,
                children: (0, t.jsx)(o.rX, { children: p }),
            });
        },
        { object: A.ZSU.CONTEXT_MENU },
    ),
    [s.A.CONTEXT_MENU, s.A.GUILD_MODERATION_USER_MENU],
);
