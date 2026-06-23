a.d(i, { default: () => A });
var e = a(627968);
a(64700);
var n = a(980707),
    r = a(477782),
    d = a(442433),
    l = a(847767),
    s = a(358367),
    c = a(793574),
    o = a(688810),
    u = a(180798),
    E = a(652215),
    _ = a(375708);
let A = (0, s.A)(
    (0, l.A)(
        function (t) {
            let { user: i, guildId: a, onSelect: l, analyticsLocations: s, onCloseContextMenu: E, isViewOnly: A } = t,
                { analyticsLocations: N } = (0, o.Ay)(c.A.CONTEXT_MENU),
                h = s?.[0] ?? N[0],
                p = (0, u.A)(i.id, a, !0, h, A);
            return (0, e.jsx)(n.W, {
                "data-menu-migrated": !0,
                navId: "guild-moderation-roles",
                onClose: function () {
                    (0, d.Z_)(), E?.();
                },
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: l,
                children: (0, e.jsx)(r.rX, { children: p }),
            });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_USER_MENU],
);
