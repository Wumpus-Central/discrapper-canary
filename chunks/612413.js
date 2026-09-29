n.d(t, { Tp: () => a, mh: () => s, zA: () => r });
var i = n(945810);
let l = (0, i.mj)({
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
function s(e) {
    let { location: t } = e,
        { enabled: n } = l.useConfig({ location: t });
    return n;
}
function a(e) {
    let { location: t } = e,
        { enabled: n } = l.getConfig({ location: t });
    return n;
}
