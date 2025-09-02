n.d(t, { W: () => i });
let r = (0, n(427164).le)({
    name: "2025-08-data-usage-3p-toggle",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1 },
        1: { enabled: !0 },
    },
});
function i(e) {
    let { enabled: t } = r.useConfig({ location: e });
    return t;
}
