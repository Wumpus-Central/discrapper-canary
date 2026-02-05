"use strict";
n.d(t, { bz: () => s, id: () => i, jH: () => a });
var r = n(73153);
function i(e) {
    r.h.dispatch({ type: "LAYER_PUSH", component: e });
}
function a() {
    r.h.dispatch({ type: "LAYER_POP" });
}
function s() {
    r.h.dispatch({ type: "LAYER_POP_ALL" });
}
