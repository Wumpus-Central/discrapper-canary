n.d(t, { Tp: () => o, mh: () => l, zA: () => r });
var i = n(945810);
let a = (0, i.mj)({
        kind: "user",
        name: "2026-09-youtube-3p",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    r = (0, i.mj)({
        kind: "user",
        name: "2026-09-youtube-3p-nagbar",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    let { location: t } = e,
        { enabled: n } = a.useConfig({ location: t });
    return n;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = a.getConfig({ location: t });
    return n;
}
