n.d(t, {
    BT: () => c,
    IS: () => s,
    Rd: () => r,
    SG: () => a,
    fu: () => i,
    j1: () => o,
    jn: () => l,
    wZ: () => u
});
var i = 'dnd-core/ADD_SOURCE',
    r = 'dnd-core/ADD_TARGET',
    a = 'dnd-core/REMOVE_SOURCE',
    s = 'dnd-core/REMOVE_TARGET';
function o(e) {
    return {
        type: i,
        payload: { sourceId: e }
    };
}
function l(e) {
    return {
        type: r,
        payload: { targetId: e }
    };
}
function u(e) {
    return {
        type: a,
        payload: { sourceId: e }
    };
}
function c(e) {
    return {
        type: s,
        payload: { targetId: e }
    };
}
