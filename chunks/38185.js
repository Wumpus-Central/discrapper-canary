"use strict";
n.d(t, { i: () => s });
let i = (0, n(945810).mj)({
    name: "2026-03-slayer-gifting-mini-shelf-removal",
    kind: "user",
    defaultConfig: { isMiniShelfEnabled: !0 },
    variations: { 0: { isMiniShelfEnabled: !0 }, 1: { isMiniShelfEnabled: !1 } },
});
function s(e) {
    let { location: t } = e;
    return i.useConfig({ location: t }).isMiniShelfEnabled;
}
