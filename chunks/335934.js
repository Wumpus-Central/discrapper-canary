n.d(t, { HF: () => d, Lg: () => c, c: () => o, f8: () => u });
var i = n(945810),
    r = n(731699),
    a = n(735729);
let s = "hide_icymi_tab",
    l = (0, i.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function o(e) {
    let t = (0, a.A)(s),
        { enabled: n } = l.useConfig({ location: e }),
        i = _.useConfig({ location: e });
    return !t && n && i.icymiDesktopEnabled;
}
function d(e) {
    let t = r.A.get(s),
        { enabled: n } = l.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: i } = _.getConfig({ location: e });
        return !t && n && i;
    }
}
function c(e) {
    return d(e);
}
let u = (0, i.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    _ = (0, i.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    });
