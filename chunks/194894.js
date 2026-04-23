"use strict";
n.d(t, { n9: () => l, pU: () => r, vt: () => s });
var i = n(73153);
function s(e, t) {
    i.h.dispatch({ type: "LIBRARY_TABLE_SORT_UPDATE", key: e, direction: t });
}
function l(e) {
    i.h.dispatch({ type: "LIBRARY_APPLICATION_FILTER_UPDATE", query: e });
}
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    i.h.dispatch({ type: "LIBRARY_TABLE_ACTIVE_ROW_ID_UPDATE", key: e, isKeyboardEvent: t });
}
