n.d(t, { EB: () => d, I_: () => c, VN: () => r, WU: () => l, ho: () => a, jD: () => s, mf: () => _, tw: () => o });
var i = n(228366);
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_OPEN", id: e, component: t, props: n });
}
function r(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_CLOSE", id: e });
}
function s(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_HIDE", id: e });
}
function l(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_SHOW", id: e });
}
function o(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_MOVE", id: e, position: t });
}
function d(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_RESIZE", width: e, pipType: t });
}
function c(e, t) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_RECT", id: e, rect: t });
}
function _(e) {
    i.h.dispatch({ type: "PICTURE_IN_PICTURE_UPDATE_SELECTED_WINDOW", id: e });
}
