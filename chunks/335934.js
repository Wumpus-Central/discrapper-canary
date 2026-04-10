"use strict";
n.d(t, { HF: () => u, c: () => l, f8: () => c, zF: () => _ });
var r = n(945810),
    i = n(303622),
    s = n(735729);
let a = "hide_icymi_tab",
    o = (0, r.mj)({
        name: "2026-04-icymi-staff-only",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    let t = (0, s.A)(a),
        { enabled: n } = o.useConfig({ location: e }),
        r = d.useConfig({ location: e });
    return !t && n && r.icymiDesktopEnabled;
}
function u(e) {
    let t = i.A.get(a),
        { enabled: n } = o.getConfig({ location: e });
    {
        let { icymiDesktopEnabled: r } = d.getConfig({ location: e });
        return !t && n && r;
    }
}
let c = (0, r.mj)({
        name: "2026-03-icymi-staff-debugging-utility",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    d = (0, r.mj)({
        name: "2026-03-icymi-desktop",
        kind: "user",
        defaultConfig: { icymiDesktopEnabled: !1 },
        variations: { 1: { icymiDesktopEnabled: !0 } },
    }),
    _ = (0, r.mj)({
        name: "2026-03-icymi-sunset-banner",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
