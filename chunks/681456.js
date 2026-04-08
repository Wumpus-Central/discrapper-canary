"use strict";
n.d(t, { SO: () => i, Yd: () => r, iS: () => c, n_: () => s, pM: () => o, sn: () => u, v4: () => a, z9: () => l });
var r = "dnd-core/ADD_SOURCE",
    i = "dnd-core/ADD_TARGET",
    s = "dnd-core/REMOVE_SOURCE",
    a = "dnd-core/REMOVE_TARGET";
function o(e) {
    return { type: r, payload: { sourceId: e } };
}
function l(e) {
    return { type: i, payload: { targetId: e } };
}
function u(e) {
    return { type: s, payload: { sourceId: e } };
}
function c(e) {
    return { type: a, payload: { targetId: e } };
}
