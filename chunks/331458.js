r.d(t, {
    default: () => f,
});
var n = r(627968);
r(64700);
var o = r(397927),
    c = r(442433),
    i = r(847767),
    a = r(358367),
    l = r(793574),
    u = r(687392),
    b = r(762353),
    s = r(884790),
    O = r(652215),
    p = r(985018);
let f = (0, a.A)(
    (0, i.A)(
        function (e) {
            let { guildId: t, context: r, onSelect: i } = e,
                a = (0, b.A)(t, r),
                l = (0, s.A)(t, r),
                O = (0, u.A)(t, r);
            return (0, n.jsxs)(o.W1t, {
                "data-menu-migration-ready": !0,
                navId: "moderation-raid-context",
                onClose: c.Z_,
                "aria-label": p.intl.string(p.t.liqwPJ),
                onSelect: i,
                children: [
                    (0, n.jsx)(o.rXV, {
                        children: l,
                    }),
                    (0, n.jsxs)(o.rXV, {
                        children: [O, a],
                    }),
                ],
            });
        },
        {
            object: O.ZSU.CONTEXT_MENU,
        },
    ),
    [l.A.CONTEXT_MENU, l.A.GUILD_MODERATION_RAID_MENU],
);
