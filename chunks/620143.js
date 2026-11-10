var a = n(855986),
    r = n(945810);
let l = (0, r.mj)({
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
            let { location: t, hasUnread: n } = e;
            return (0, a.bG)([r.Bt], () => n && l.getConfig({ location: t }).enabled, [n, t]);
        },
    },
);
