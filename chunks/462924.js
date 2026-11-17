var a = A(855986),
    E = A(945810),
    _ = A(207913),
    i = A(393033);
let n = (0, E.mj)({
    kind: "user",
    name: "2026-07-expressive-modal-v2",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
});
A.d(
    t,
    {},
    {
        M: function (e) {
            let t = (0, i.W$)(),
                A = (0, a.bG)([_.A], () => _.A.getIsExpressiveModalV2Enabled()),
                E = n.useConfig({ location: e }).enabled;
            return t ? A : E;
        },
        d: function (e) {
            return (0, i.qn)() ? _.A.getIsExpressiveModalV2Enabled() : n.getConfig({ location: e }).enabled;
        },
    },
);
