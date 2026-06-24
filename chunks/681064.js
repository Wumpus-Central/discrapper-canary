n.d(t, { R: () => u, V: () => a });
var i = n(945810);
let a = new Date("2026-08-05T11:00:00-07:00"),
    r = (0, i.mj)({
        name: "2026-04-slayer-storefront-orbs",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
    });
function u(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
