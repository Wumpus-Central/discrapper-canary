"use strict";
n.d(t, { bz: () => s, id: () => r, jH: () => a });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "LAYER_PUSH", component: e });
}
function a() {
    i.h.dispatch({ type: "LAYER_POP" });
}
function s() {
    i.h.dispatch({ type: "LAYER_POP_ALL" });
}
