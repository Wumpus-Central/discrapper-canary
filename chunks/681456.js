n.d(t, {
    SO: () => i,
    Yd: () => r,
    iS: () => u,
    n_: () => a,
    pM: () => o,
    sn: () => c,
    v4: () => s,
    z9: () => l,
});
var r = "dnd-core/ADD_SOURCE",
    i = "dnd-core/ADD_TARGET",
    a = "dnd-core/REMOVE_SOURCE",
    s = "dnd-core/REMOVE_TARGET";
function o(e) {
    return {
        type: r,
        payload: { sourceId: e },
    };
}
function l(e) {
    return {
        type: i,
        payload: { targetId: e },
    };
}
function c(e) {
    return {
        type: a,
        payload: { sourceId: e },
    };
}
function u(e) {
    return {
        type: s,
        payload: { targetId: e },
    };
}
