"use strict";
n.d(t, { SO: () => i, Yd: () => r, iS: () => c, n_: () => a, pM: () => o, sn: () => u, v4: () => s, z9: () => l });
var r = "dnd-core/ADD_SOURCE",
    i = "dnd-core/ADD_TARGET",
    a = "dnd-core/REMOVE_SOURCE",
    s = "dnd-core/REMOVE_TARGET";
function o(e) {
    return { type: r, payload: { sourceId: e } };
}
function l(e) {
    return { type: i, payload: { targetId: e } };
}
function u(e) {
    return { type: a, payload: { sourceId: e } };
}
function c(e) {
    return { type: s, payload: { targetId: e } };
}
