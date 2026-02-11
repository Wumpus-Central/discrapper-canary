"use strict";
n.d(t, { K: () => s, n: () => o }), n(938796);
var r = n(136722),
    i = n(611010);
function a(e) {
    return (
        null != e &&
        (e instanceof i.Ay ||
            ("flags" in e && "bigint" == typeof e.flags) ||
            ("flags" in e && null != e.flags && "object" == typeof e.flags && "parts" in e.flags))
    );
}
function s(e) {
    return null == e ? r.iu(0) : a(e) ? e.flags : r.iu(e.flags_new ?? e.flags ?? 0);
}
function o(e, t) {
    return r.zy(s(e), t);
}
