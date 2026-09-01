n.d(e, { A: () => r });
let l = (0, n(945810).mj)({
    name: "2025-12-katsudon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(t) {
    let { location: e } = t,
        { enabled: n } = l.useConfig({ location: e });
    return n;
}
