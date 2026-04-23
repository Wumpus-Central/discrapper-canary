n.d(t, { JM: () => o, T8: () => l });
var i = n(989441),
    r = n(802516),
    a = n(49381),
    s = n(778591),
    _ = n(985018);
let l = {
        [i.D.XBOX_GAME_PASS]: {
            distributor: i.D.XBOX_GAME_PASS,
            getLabel: () => _.intl.string(_.t["s7+3um"]),
            getStoreName: () => _.intl.string(_.t["QpN/Iz"]),
            icon: r.Y,
            getStoreUrl: function (e) {
                return `https://www.xbox.com/en-US/games/store/-/${encodeURIComponent(e)}`;
            },
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [i.D.STEAM]: {
            distributor: i.D.STEAM,
            getLabel: () => _.intl.string(_.t.OlubC8),
            getStoreName: () => _.intl.string(_.t.FsANs4),
            icon: a.N,
            getStoreUrl: s.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    o = [i.D.XBOX_GAME_PASS, i.D.STEAM];
