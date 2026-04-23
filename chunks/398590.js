"use strict";
n.d(t, { bz: () => a, id: () => i, jH: () => s });
var r = n(73153);
function i(e) {
    r.h.dispatch({ type: "LAYER_PUSH", component: e });
}
function s() {
    r.h.dispatch({ type: "LAYER_POP" });
}
function a() {
    r.h.dispatch({ type: "LAYER_POP_ALL" });
}
