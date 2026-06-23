u.d(e, { t: () => r });
let o = (0, u(945810).mj)({
    name: "2025-10-collectibles-custom-cursors",
    kind: "user",
    defaultConfig: { enableCustomCursors: !1 },
    variations: { 0: { enableCustomCursors: !1 }, 1: { enableCustomCursors: !0 } },
});
function r(s) {
    return o.getConfig({ location: s }).enableCustomCursors;
}
