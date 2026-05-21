i.d(e, { QW: () => l, rV: () => s });
let r = (0, i(945810).mj)({
        name: "2026-04-profile-frame-gifting",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    l = (t) => r.getConfig({ location: t }).enabled,
    s = (t) => r.useConfig({ location: t }).enabled;
