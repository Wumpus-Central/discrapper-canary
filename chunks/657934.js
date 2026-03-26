"use strict";
n.d(t, { JM: () => c, T8: () => u });
var r = n(989441),
    i = n(397927),
    s = n(778591),
    a = n(985018);
let o = "https://www.xbox.com/en-US/games/store/-";
function l(e) {
    return `${o}/${encodeURIComponent(e)}`;
}
let u = {
        [r.D.XBOX_GAME_PASS]: {
            distributor: r.D.XBOX_GAME_PASS,
            getLabel: () => a.intl.string(a.t["s7+3um"]),
            getStoreName: () => a.intl.string(a.t["QpN/Iz"]),
            icon: i.YWd,
            getStoreUrl: l,
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [r.D.STEAM]: {
            distributor: r.D.STEAM,
            getLabel: () => a.intl.string(a.t.OlubC8),
            getStoreName: () => a.intl.string(a.t.FsANs4),
            icon: i.NXQ,
            getStoreUrl: s.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    c = [r.D.XBOX_GAME_PASS, r.D.STEAM];
