"use strict";
n.r(t), n.d(t, { getIsValorantSocialSDKEnabled: () => u });
var i = n(945810);
let r = { 0: { enabled: !1 }, 1: { enabled: !0 } },
    s = { enabled: !1 },
    a = (0, i.mj)({ name: "2026-04-valorant-social-sdk", kind: "user", defaultConfig: s, variations: r }),
    o = (0, i.mj)({ name: "2026-05-valorant-social-sdk-us--canada", kind: "user", defaultConfig: s, variations: r }),
    l = (0, i.mj)({ name: "2026-05-valorant-social-sdk-all-regions", kind: "user", defaultConfig: s, variations: r });
function u(e) {
    let t = a.getConfig(e),
        n = o.getConfig(e),
        i = l.getConfig(e);
    return t.enabled || n.enabled || i.enabled;
}
