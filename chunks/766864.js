n.d(t, {
    X9: () => i,
    YK: () => u,
    aY: () => c,
    vB: () => l,
    zZ: () => o,
});
var r = n(250105),
    i = (function (e) {
        return (
            (e.OLDEST_CREATION_DATE = "oldest_creation_date"),
            (e.TOP_SOUNDS = "top_sounds"),
            (e.NEWEST_CREATION_DATE = "newest_creation_date"),
            (e.RECENTLY_USED_BY_USER = "recently_used_by_user"),
            (e.METRICS_CAPTURE = "metrics_capture"),
            e
        );
    })({});
let a = (0, r.Ay)({
    name: "2025-10-soundboard-xp-3",
    kind: "user",
    defaultConfig: {
        sortingStrategy: "oldest_creation_date",
    },
    variations: {
        0: {
            sortingStrategy: "oldest_creation_date",
        },
        1: {
            sortingStrategy: "top_sounds",
        },
        2: {
            sortingStrategy: "newest_creation_date",
        },
        3: {
            sortingStrategy: "recently_used_by_user",
        },
        4: {
            sortingStrategy: "metrics_capture",
        },
    },
});

function s(e) {
    return a.getConfig({
        location: e,
    });
}

function o(e) {
    return a.useConfig({
        location: e,
    });
}

function l(e) {
    return "top_sounds" === s(e).sortingStrategy;
}

function c(e) {
    return "metrics_capture" === s(e).sortingStrategy;
}

function u(e) {
    return "recently_used_by_user" === s(e).sortingStrategy;
}
