"use strict";
n.d(t, { I_: () => s, NC: () => r, Sf: () => a, xz: () => o });
let r = ["click", "mousedown", "mouseup", "keydown", "keyup", "keypress", "contextmenu"],
    i = null;
function a() {
    return i;
}
function s(e) {
    i = e;
}
function o(e) {
    i === e && (i = null);
}
