n.d(t, {
    Mq: () => i,
    Tw: () => c,
    p9: () => a
});
var r = n(562858),
    s = n(477839);
let o = {
    [s.uv.CLICKER_BUTTON_STRONGER]: {
        type: r.e.BASIC,
        points: 1
    },
    [s.uv.WEED_KILLER]: { type: r.e.NONE },
    [s.uv.BOUNCING_LOGO_MORE_LOGOS]: {
        type: r.e.BASIC,
        points: 15
    },
    [s.uv.BOUNCING_LOGO_CORNERS]: {
        type: r.e.MULTIPLIER,
        multiplier: 3
    },
    [s.uv.BOUNCING_LOGO_SPEED]: { type: r.e.NONE },
    [s.uv.BOUNCING_LOGO_COLORS]: {
        type: r.e.MULTIPLIER,
        multiplier: 2
    },
    [s.uv.CLICKER_BUTTON_AFFIRMATIONS]: {
        type: r.e.MULTIPLIER,
        multiplier: 2
    },
    [s.uv.SUN_RAISE]: {
        type: r.e.BASIC,
        points: 40
    },
    [s.uv.FULLSCREEN_AT_SOMEONE]: {
        type: r.e.MULTIPLIER,
        multiplier: 2
    },
    [s.uv.CLICKER_BUTTON_RAINBOW]: {
        type: r.e.BASIC,
        points: 1.5
    },
    [s.uv.MUSIC_CHANGE]: {
        type: r.e.BASIC,
        points: 10
    }
};
function a(e) {
    let t = o[e];
    switch (t.type) {
        case r.e.BASIC:
            return t.points;
        case r.e.NONE:
            return 0;
        case r.e.MULTIPLIER:
            return t.multiplier;
    }
}
let i = {
    [s.yN.CLICKER_BUTTON]: {
        type: r.e.UPGRADES,
        getPoints: (e) =>
            Math.floor(
                Object.keys(e).reduce((t, n) => {
                    var r;
                    return t + a(n) * (null != (r = e[n]) ? r : 0);
                }, 1) *
                    (null != e[s.uv.CLICKER_BUTTON_RAINBOW] ? a(s.uv.CLICKER_BUTTON_RAINBOW) : 1) *
                    (null != e[s.uv.CLICKER_BUTTON_AFFIRMATIONS] ? a(s.uv.CLICKER_BUTTON_AFFIRMATIONS) : 1)
            )
    },
    [s.yN.RAIN]: {
        type: r.e.BASIC,
        points: 42
    },
    [s.yN.SUN]: {
        type: r.e.SUN,
        getPoints: (e) => 55 + e * a(s.uv.SUN_RAISE)
    },
    [s.yN.STATS]: { type: r.e.NONE },
    [s.yN.RATE]: { type: r.e.NONE },
    [s.yN.ACHIEVEMENTS]: { type: r.e.NONE },
    [s.yN.SNEK]: {
        type: r.e.SNEK,
        getPoints: (e) => 1000 * e
    },
    [s.yN.WEEDS]: {
        type: r.e.BASIC,
        points: -10
    },
    [s.yN.PET_WUMPUS]: {
        type: r.e.BASIC,
        points: 30
    },
    [s.yN.BOUNCING_LOGO]: {
        type: r.e.BOUNCING_LOGOS,
        getPoints: (e, t, n) => {
            let r = a(s.uv.BOUNCING_LOGO_CORNERS),
                o = a(s.uv.BOUNCING_LOGO_COLORS);
            return 15 * (n ? o : 1) * (t && e ? r : 1);
        }
    },
    [s.yN.NAGBAR]: {
        type: r.e.NAGBAR,
        getPoints: (e) => e
    },
    [s.yN.MESSAGES]: {
        type: r.e.BASIC,
        points: 0
    },
    [s.yN.ANT]: {
        type: r.e.BASIC,
        points: 5
    },
    [s.yN.SNAIL]: {
        type: r.e.BASIC,
        points: 8
    },
    [s.yN.BEE]: {
        type: r.e.BASIC,
        points: 12
    },
    [s.yN.WORM]: {
        type: r.e.BASIC,
        points: 18
    },
    [s.yN.BUTTERFLY]: {
        type: r.e.BASIC,
        points: 31
    },
    [s.yN.TULIP]: {
        type: r.e.BASIC,
        points: 6
    },
    [s.yN.SUNFLOWER]: {
        type: r.e.BASIC,
        points: 1
    },
    [s.yN.ORCHID]: {
        type: r.e.BASIC,
        points: 22
    },
    [s.yN.LOOTBOXES]: {
        type: r.e.BASIC,
        points: 0
    },
    [s.yN.AT_SOMEONE]: {
        type: r.e.UPGRADES,
        getPoints: (e) => 70 * (null != e[s.uv.FULLSCREEN_AT_SOMEONE] ? a(s.uv.FULLSCREEN_AT_SOMEONE) : 1)
    },
    [s.yN.CURSORS]: {
        type: r.e.BASIC,
        points: 0
    },
    [s.yN.POURING_WATER]: {
        type: r.e.BASIC,
        points: 90
    },
    [s.yN.WATERING_CAN]: {
        type: r.e.BASIC,
        points: 15
    },
    [s.yN.LEVELING]: {
        type: r.e.BASIC,
        points: 0
    },
    [s.yN.MUSIC]: {
        type: r.e.UPGRADES,
        getPoints: (e) => (null != e[s.uv.MUSIC_CHANGE] ? 5 + a(s.uv.MUSIC_CHANGE) : 5)
    },
    [s.yN.LAWNMOWER]: {
        type: r.e.BASIC,
        points: -200
    },
    [s.yN.COMPLETE_GAME]: { type: r.e.NONE }
};
function c(e) {
    let t = i[e];
    switch (t.type) {
        case r.e.BASIC:
            return t.points;
        case r.e.NONE:
            return 0;
        case r.e.BOUNCING_LOGOS:
            return t.getPoints(!1, !1, !1);
        case r.e.UPGRADES:
            return t.getPoints({});
        case r.e.SUN:
            return t.getPoints(0);
        case r.e.SNEK:
            return t.getPoints(1);
        case r.e.NAGBAR:
            return t.getPoints(1000);
    }
}
