var n = l(582128),
    r = l(855986),
    a = l(945810);
let i = (0, a.mj)({
    name: "2026-10-badges-unread-state",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
l.d(
    t,
    {},
    {
        e: function (e) {
            let { location: t, hasUnread: l } = e,
                u = (0, r.bG)([a.Bt], () => l && i.getConfig({ location: t }).enabled, [l, t]),
                [s, o] = n.useState(!1);
            return (u && !s && o(!0), u || s);
        },
    },
);
