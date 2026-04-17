"use strict";
n.d(t, { Lc: () => s, wv: () => i });
let r = (0, n(250105).Ay)({
    name: "2026-04-inappropriate-conversations-prescan",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e,
        { enabled: n } = r.getConfig({ location: t });
    return n;
}
function s(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
