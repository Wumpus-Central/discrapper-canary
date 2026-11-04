let i = (0, n(945810).mj)({
    name: "2026-10-add-server-join-first",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
n.d(
    t,
    {},
    {
        P: function (e) {
            return i.useConfig({ location: e }).enabled;
        },
        i: function (e) {
            return i.getConfig({ location: e }).enabled;
        },
    },
);
