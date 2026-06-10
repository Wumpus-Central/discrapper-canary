r.d(t, { Q: () => l, l: () => s });
let i = (0, r(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function s(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
}
function l(e) {
    let { enabled: t } = i.getConfig({ location: e });
    return t;
}
