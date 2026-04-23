"use strict";
n.d(t, { bz: () => a, id: () => r, jH: () => s });
var i = n(228366);
function r(e) {
    i.h.dispatch({ type: "LAYER_PUSH", component: e });
}
function s() {
    i.h.dispatch({ type: "LAYER_POP" });
}
function a() {
    i.h.dispatch({ type: "LAYER_POP_ALL" });
}
