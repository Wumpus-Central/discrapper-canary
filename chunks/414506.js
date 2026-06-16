e.d(a, { default: () => A });
var i = e(627968);
e(64700);
var n = e(980707),
    r = e(477782),
    d = e(442433),
    l = e(847767),
    s = e(358367),
    c = e(793574),
    o = e(688810),
    u = e(180798),
    E = e(652215),
    _ = e(375708);
let A = (0, s.A)(
    (0, l.A)(
        function (t) {
            let { user: a, guildId: e, onSelect: l, analyticsLocations: s, onCloseContextMenu: E, isViewOnly: A } = t,
                { analyticsLocations: N } = (0, o.Ay)(c.A.CONTEXT_MENU),
                h = s?.[0] ?? N[0],
                p = (0, u.A)(a.id, e, !0, h, A);
            return (0, i.jsx)(n.W, {
                "data-menu-migrated": !0,
                navId: "guild-moderation-roles",
                onClose: () => {
                    (0, d.Z_)(), E?.();
                },
                "aria-label": _.intl.string(_.t.liqwPJ),
                onSelect: l,
                children: (0, i.jsx)(r.rX, { children: p }),
            });
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.GUILD_MODERATION_USER_MENU],
);
