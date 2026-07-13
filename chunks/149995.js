"use strict";
n.d(t, { LR: () => d, S9: () => o, Se: () => l, Zk: () => s });
var i = n(945810);
let r = (0, i.mj)({
        kind: "user",
        name: "2026-05-kontrolfreek-deprecated-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    }),
    a = (0, i.mj)({
        kind: "user",
        name: "2026-05-steelseries-higher-discount-ff",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function s(e) {
    let { location: t } = e,
        { enabled: n } = r.useConfig({ location: t });
    return n;
}
function l(e) {
    let { enabled: t } = r.getConfig({ location: e });
    return t;
}
function o(e) {
    let { location: t } = e,
        { enabled: n } = a.useConfig({ location: t });
    return n;
}
function d(e) {
    let { enabled: t } = a.getConfig({ location: e });
    return t;
}
