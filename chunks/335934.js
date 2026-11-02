n.d(t, { HF: () => c, Lg: () => u, c: () => d, f8: () => _ });
var i = n(945810),
    r = n(731699),
    a = n(735729),
    s = n(841643),
    l = n(308190);
let o = (0, i.mj)({
    name: "2026-04-icymi-staff-only",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function d(e) {
    let t = (0, a.A)(l.P),
        { enabled: n } = o.useConfig({ location: e }),
        i = E.useConfig({ location: e });
    return ((0, s.hY)(e), !t && n && i.icymiDesktopEnabled);
}
function c(e) {
    let t = r.A.get(l.P),
        { enabled: n } = o.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = E.getConfig({ location: e });
        return !t && n && i;
    }
}
function u(e) {
    return c(e);
}
let _ = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    E = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    });
