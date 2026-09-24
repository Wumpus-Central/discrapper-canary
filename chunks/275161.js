r.d(t, { Y: () => l });
let n = (0, r(945810).mj)({
    name: "2026-09-new-hscroll",
    kind: "user",
    defaultConfig: { useNewHScroll: !1 },
    variations: { 0: { useNewHScroll: !1 }, 1: { useNewHScroll: !0 } },
});
function l(e) {
    return n.useConfig({ location: e }).useNewHScroll;
}
