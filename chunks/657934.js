"use strict";
n.d(t, { JM: () => u, T8: () => l });
var r = n(989441),
    i = n(802516),
    s = n(49381),
    a = n(778591),
    o = n(985018);
let l = {
        [r.D.XBOX_GAME_PASS]: {
            distributor: r.D.XBOX_GAME_PASS,
            getLabel: () => o.intl.string(o.t["s7+3um"]),
            getStoreName: () => o.intl.string(o.t["QpN/Iz"]),
            icon: i.Y,
            getStoreUrl: function (e) {
                return `https://www.xbox.com/en-US/games/store/-/${encodeURIComponent(e)}`;
            },
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [r.D.STEAM]: {
            distributor: r.D.STEAM,
            getLabel: () => o.intl.string(o.t.OlubC8),
            getStoreName: () => o.intl.string(o.t.FsANs4),
            icon: s.N,
            getStoreUrl: a.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    u = [r.D.XBOX_GAME_PASS, r.D.STEAM];
