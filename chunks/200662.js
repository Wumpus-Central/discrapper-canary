"use strict";
n.d(t, { Eu: () => s, UZ: () => a, p6: () => r });
var i = n(155718);
function r(e, t) {
    return e === i.kc.CHAT ? "/" + t : t;
}
function s(e, t) {
    return `${e}:${t}`;
}
function a(e) {
    return Object.fromEntries(e.map((e) => [s(e.id, e.type), e]));
}
n(392054);
