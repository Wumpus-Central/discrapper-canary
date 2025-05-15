n.d(t, {
    BT: () => u,
    IS: () => o,
    Rd: () => i,
    SG: () => a,
    fu: () => r,
    j1: () => s,
    jn: () => l,
    wZ: () => c
});
var r = 'dnd-core/ADD_SOURCE',
    i = 'dnd-core/ADD_TARGET',
    a = 'dnd-core/REMOVE_SOURCE',
    o = 'dnd-core/REMOVE_TARGET';
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
        type: a,
        payload: { sourceId: e }
    };
}
function u(e) {
    return {
        type: o,
        payload: { targetId: e }
    };
}
