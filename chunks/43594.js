r.d(t, { D: () => s });
let a = (0, r(250105).Ay)({
    name: "2026-02-boosting-refresh-modals",
    kind: "user",
    defaultConfig: { variant: "control" },
    variations: { 0: { variant: "control" }, 1: { variant: "refresh" }, 2: { variant: "refresh_expressive_cta" } },
});
function s(e) {
    return a.useConfig({ location: e }).variant;
}
