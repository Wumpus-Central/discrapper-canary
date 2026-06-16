"use strict";
n.d(t, { I_: () => a, NC: () => i, Sf: () => s, xz: () => o });
let i = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
    r = null;
function s() {
    return r;
}
function a(e) {
    r = e;
}
function o(e) {
    r === e && (r = null);
}
