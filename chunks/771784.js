n.d(t, {
    Lq: () => u,
    cI: () => l,
    du: () => i,
    q3: () => s,
    sI: () => c,
});
var r = n(722733),
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
let a = (0, r.ZP)({
    name: "2025-10-soundboard-xp-3",
    kind: "user",
    defaultConfig: { sortingStrategy: "oldest_creation_date" },
    variations: {
        0: { sortingStrategy: "oldest_creation_date" },
        1: { sortingStrategy: "top_sounds" },
        2: { sortingStrategy: "newest_creation_date" },
        3: { sortingStrategy: "recently_used_by_user" },
        4: { sortingStrategy: "metrics_capture" },
    },
});
function o(e) {
    return a.getConfig({ location: e });
}
function s(e) {
    return a.useConfig({ location: e });
}
function l(e) {
    return "top_sounds" === o(e).sortingStrategy;
}
function c(e) {
    return "metrics_capture" === o(e).sortingStrategy;
}
function u(e) {
    return "recently_used_by_user" === o(e).sortingStrategy;
}
