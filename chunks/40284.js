n.d(t, {
    BT: () => u,
    IS: () => a,
    Rd: () => i,
    SG: () => o,
    fu: () => r,
    j1: () => s,
    jn: () => l,
    wZ: () => c
});
var r = 'dnd-core/ADD_SOURCE',
    i = 'dnd-core/ADD_TARGET',
    o = 'dnd-core/REMOVE_SOURCE',
    a = 'dnd-core/REMOVE_TARGET';
function s(e) {
    return {
        type: r,
        payload: { sourceId: e }
    };
}
function l(e) {
    return {
        type: i,
        payload: { targetId: e }
    };
}
function c(e) {
    return {
        type: o,
        payload: { sourceId: e }
    };
}
function u(e) {
    return {
        type: a,
        payload: { targetId: e }
    };
}
