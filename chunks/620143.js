var d = n(582128),
    t = n(855986),
    i = n(945810);
let l = (0, i.mj)({
    name: "2026-10-badges-unread-state",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    a,
    {},
    {
        e: function (e) {
            let { location: a, hasUnread: n } = e,
                r = (0, t.bG)([i.Bt], () => n && l.getConfig({ location: a }).enabled, [n, a]),
                [u, b] = d.useState(!1);
            return (r && !u && b(!0), r || u);
        },
    },
);
