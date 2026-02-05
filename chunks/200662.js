"use strict";
n.d(t, { Eu: () => a, UZ: () => s, p6: () => i });
var r = n(155718);
function i(e, t) {
    return e === r.kc.CHAT ? "/" + t : t;
}
function a(e, t) {
    return `${e}:${t}`;
}
function s(e) {
    return Object.fromEntries(e.map((e) => [a(e.id, e.type), e]));
}
n(392054);
