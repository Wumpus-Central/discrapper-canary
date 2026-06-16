"use strict";
n.d(t, { Lc: () => s, wv: () => r });
let i = (0, n(240921).Ay)({
    name: "2026-04-inappropriate-conversations-prescan",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = i.getConfig({ location: t });
    return n;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
