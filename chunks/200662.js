"use strict";
n.d(t, { Eu: () => s, UZ: () => a, p6: () => i });
var r = n(155718);
function i(e, t) {
    return e === r.kc.CHAT ? "/" + t : t;
}
function s(e, t) {
    return `${e}:${t}`;
}
function a(e) {
    return Object.fromEntries(e.map((e) => [s(e.id, e.type), e]));
}
n(392054);
