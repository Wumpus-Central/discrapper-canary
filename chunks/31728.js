"use strict";
n.d(t, { EB: () => u, I_: () => c, VN: () => s, WU: () => o, ho: () => i, jD: () => a, mf: () => d, tw: () => l });
var r = n(73153);
function i(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_OPEN", id: e, component: t, props: n });
}
function s(e) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_CLOSE", id: e });
}
function a(e) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_HIDE", id: e });
}
function o(e) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_SHOW", id: e });
}
function l(e, t) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_MOVE", id: e, position: t });
}
function u(e, t) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_RESIZE", width: e, pipType: t });
}
function c(e, t) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_RECT", id: e, rect: t });
}
function d(e) {
    r.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW", id: e });
}
