"use strict";
n.d(t, { F: () => c }), n(321073);
var r = n(73153);
let i = 1e3,
    a = 100,
    s = [],
    o = null;
function l() {
    0 !== s.length &&
        (r.h.dispatch({ type: "OVERLAY_ADD_LOGS_BATCH", logs: s }),
        (s = []),
        null != o && (clearTimeout(o), (o = null)));
}
function u() {
    null == o &&
        (o = setTimeout(() => {
            l();
        }, i));
}
function c(e) {
    s.push(e), s.length >= a ? l() : u();
}
