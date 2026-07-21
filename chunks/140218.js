l.d(t, { H: () => s });
let n = (0, l(945810).mj)({
    name: "2026-06-game-server-hosting-in-shop",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
function s(e) {
    let { location: t } = e;
    return n.useConfig({ location: t }).enabled;
}
