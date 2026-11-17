var r = n(582128),
    l = n(855986),
    a = n(945810);
let i = (0, a.mj)({
    name: "2026-10-badges-unread-state",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        e: function (e) {
            let { location: t, hasUnread: n } = e,
                u = (0, l.bG)([a.Bt], () => n && i.getConfig({ location: t }).enabled, [n, t]),
                [s, o] = r.useState(!1);
            return (u && !s && o(!0), u || s);
        },
    },
);
