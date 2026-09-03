n.d(t, { B: () => o, m: () => l });
var i = n(945810);
let r = (0, i.mj)({
        name: "2026-01-favorites-server",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 }, 2: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        name: "2026-08-favorites-server",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function s(e, t) {
    return { enabled: e.enabled || t.enabled, isFreemium: e.enabled };
}
function l(e) {
    let { location: t } = e;
    return s(a.useConfig({ location: t }), r.useConfig({ location: t }));
}
function o(e) {
    let { location: t } = e;
    return s(a.getConfig({ location: t }), r.getConfig({ location: t }));
}
