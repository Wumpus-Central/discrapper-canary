"use strict";
n.d(t, { DynamicGraphicComponent: () => l, Q: () => _, m: () => o });
var i,
    r = n(582128),
    a = n(268218),
    s = n(38405),
    l =
        (((i = {})[(i.DEMO = 0)] = "DEMO"),
        (i[(i.COLLECTIBLES_PREVIEW = 1)] = "COLLECTIBLES_PREVIEW"),
        (i[(i.GUILD_TAG_COACHMARK_ASSET = 2)] = "GUILD_TAG_COACHMARK_ASSET"),
        (i[(i.ACCOUNT_LINK_DISPLAY = 3)] = "ACCOUNT_LINK_DISPLAY"),
        (i[(i.GAME_SERVER_GAME_INSTRUCTIONS_ASSET = 4)] = "GAME_SERVER_GAME_INSTRUCTIONS_ASSET"),
        (i[(i.APPLICATION_IMAGE_HEADER = 5)] = "APPLICATION_IMAGE_HEADER"),
        (i[(i.SOCIAL_LAYER_SKU_PREVIEW = 6)] = "SOCIAL_LAYER_SKU_PREVIEW"),
        (i[(i.GUILD_POWERUPS_COACHMARK_ASSET = 7)] = "GUILD_POWERUPS_COACHMARK_ASSET"),
        (i[(i.BADGE_IMAGE_WITH_PROGRESS_CIRCLE = 8)] = "BADGE_IMAGE_WITH_PROGRESS_CIRCLE"),
        (i[(i.QUEST_ACTIVITY_UNENROLLED = 9)] = "QUEST_ACTIVITY_UNENROLLED"),
        (i[(i.GUILD_THEME_NUX_PREVIEW = 10)] = "GUILD_THEME_NUX_PREVIEW"),
        (i[(i.BADGE_DIRECTORY_NUX = 11)] = "BADGE_DIRECTORY_NUX"),
        i);
let o = {
        0: () => Promise.all([n.e("39382"), n.e("48565")]).then(n.bind(n, 732852)),
        1: () =>
            Promise.all([
                n.e("5987"),
                n.e("29083"),
                n.e("9140"),
                n.e("50564"),
                n.e("85090"),
                n.e("70772"),
                n.e("2285"),
                n.e("54303"),
                n.e("73864"),
                n.e("81353"),
                n.e("7167"),
                n.e("61060"),
                n.e("98329"),
                n.e("54622"),
                n.e("29963"),
                n.e("76428"),
                n.e("48900"),
                n.e("71234"),
                n.e("77473"),
                n.e("60177"),
                n.e("75016"),
                n.e("23276"),
                n.e("35996"),
                n.e("25279"),
                n.e("11301"),
                n.e("48720"),
                n.e("11133"),
                n.e("3162"),
            ]).then(n.bind(n, 510273)),
        2: () => Promise.all([n.e("53020"), n.e("58831")]).then(n.bind(n, 677074)),
        3: () => Promise.all([n.e("57073"), n.e("21041"), n.e("38672")]).then(n.bind(n, 289363)),
        4: () => Promise.all([n.e("58295"), n.e("47662"), n.e("9010")]).then(n.bind(n, 892740)),
        5: () => Promise.all([n.e("61686"), n.e("58038"), n.e("62507")]).then(n.bind(n, 839238)),
        6: () =>
            Promise.all([n.e("64293"), n.e("77873"), n.e("58529"), n.e("88990"), n.e("59880")]).then(n.bind(n, 275256)),
        7: () => Promise.all([n.e("58295"), n.e("58407")]).then(n.bind(n, 939034)),
        8: () => Promise.all([n.e("5211"), n.e("54282")]).then(n.bind(n, 140049)),
        9: () =>
            Promise.all([
                n.e("75459"),
                n.e("43300"),
                n.e("73470"),
                n.e("77004"),
                n.e("32886"),
                n.e("41426"),
                n.e("60955"),
                n.e("11310"),
                n.e("53930"),
                n.e("32191"),
                n.e("61268"),
                n.e("85350"),
                n.e("8563"),
                n.e("24265"),
                n.e("71695"),
            ]).then(n.bind(n, 392498)),
        10: () => Promise.all([n.e("20182"), n.e("46570"), n.e("44262")]).then(n.bind(n, 276837)),
        11: () => Promise.all([n.e("74905"), n.e("77433")]).then(n.bind(n, 868544)),
    },
    d = {
        0: 732852,
        1: 510273,
        2: 677074,
        3: 289363,
        4: 892740,
        5: 839238,
        6: 275256,
        7: 939034,
        8: 140049,
        9: 392498,
        10: 276837,
        11: 868544,
    };
function c() {
    return null;
}
function u(e) {
    return r.lazy(() =>
        (0, a.sq)({ createPromise: o[e], webpackId: d[e], name: `DynamicGraphic:${l[e]}` }).catch((t) => {
            let i = l[e],
                r = d[e] in n.c ? "module_execution" : "chunk_load";
            return (
                s.A.captureException(Error(`Dynamic graphic failed to load: ${i}`, { cause: t }), {
                    tags: { dynamic_graphic: i, dynamic_graphic_failure_reason: r },
                    extra: { originalError: String(t) },
                }),
                { default: c }
            );
        }),
    );
}
let _ = {
    0: u(0),
    1: u(1),
    2: u(2),
    3: u(3),
    4: u(4),
    5: u(5),
    6: u(6),
    7: u(7),
    8: u(8),
    9: u(9),
    10: u(10),
    11: u(11),
};
