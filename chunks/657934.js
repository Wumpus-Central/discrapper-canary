n.d(t, { JM: () => u, T8: () => o });
var r = n(989441),
    l = n(802516),
    i = n(49381),
    a = n(778591),
    s = n(985018);
let o = {
        [r.D.XBOX_GAME_PASS]: {
            distributor: r.D.XBOX_GAME_PASS,
            getLabel: () => s.intl.string(s.t["s7+3um"]),
            getStoreName: () => s.intl.string(s.t["QpN/Iz"]),
            icon: l.Y,
            getStoreUrl: function (e) {
                return `https://www.xbox.com/en-US/games/store/-/${encodeURIComponent(e)}`;
            },
            analyticsAction: "PRESS_PLAY_WITH_XBOX_GAME_PASS_BUTTON",
        },
        [r.D.STEAM]: {
            distributor: r.D.STEAM,
            getLabel: () => s.intl.string(s.t.OlubC8),
            getStoreName: () => s.intl.string(s.t.FsANs4),
            icon: i.N,
            getStoreUrl: a.Z,
            analyticsAction: "PRESS_PLAY_ON_STEAM_BUTTON",
        },
    },
    u = [r.D.XBOX_GAME_PASS, r.D.STEAM];
