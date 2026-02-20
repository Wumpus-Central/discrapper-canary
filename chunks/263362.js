"use strict";
n.d(t, { JC: () => i, Kf: () => a, au: () => s });
var r = n(945810),
    i = (function (e) {
        return (
            (e[(e.WITH_REWARD_DURATION = 1)] = "WITH_REWARD_DURATION"),
            (e[(e.WITH_REWARD_DURATION_NO_GAME_TITLE = 2)] = "WITH_REWARD_DURATION_NO_GAME_TITLE"),
            e
        );
    })({});
let s = (0, r.mj)({
    name: "2026-02-quest-card-description",
    kind: "user",
    defaultConfig: { enabled: !1, variant: null },
    variations: { 1: { enabled: !0, variant: 1 }, 2: { enabled: !0, variant: 2 } },
});
function a(e) {
    return 1 === e || 2 === e;
}
