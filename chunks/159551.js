"use strict";
n.d(t, { F: () => o }), n(321073);
var r = n(73153);
let i = [],
    s = null;
function a() {
    0 !== i.length &&
        (r.h.dispatch({ type: "OVERLAY_ADD_LOGS_BATCH", logs: i }),
        (i = []),
        null != s && (clearTimeout(s), (s = null)));
}
function o(e) {
    i.push(e),
        i.length >= 100
            ? a()
            : null == s &&
              (s = setTimeout(() => {
                  a();
              }, 1e3));
}
