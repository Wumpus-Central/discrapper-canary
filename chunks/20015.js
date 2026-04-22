"use strict";
n.d(t, { K: () => s, n: () => a }), n(938796);
var r = n(136722),
    i = n(611010);
function s(e) {
    return null == e
        ? r.iu(0)
        : null != e &&
            (e instanceof i.Ay ||
                ("flags" in e && "bigint" == typeof e.flags) ||
                ("flags" in e && null != e.flags && "object" == typeof e.flags && "parts" in e.flags))
          ? e.flags
          : r.iu(e.flags_new ?? e.flags ?? 0);
}
function a(e, t) {
    return r.zy(s(e), t);
}
