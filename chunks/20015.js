"use strict";
n.d(t, { K: () => a, n: () => s }), n(938796);
var i = n(136722),
    r = n(395671);
function a(e) {
    return null == e
        ? i.iu(0)
        : null != e &&
            (e instanceof r.Ay ||
                ("flags" in e && "bigint" == typeof e.flags) ||
                ("flags" in e && null != e.flags && "object" == typeof e.flags && "parts" in e.flags))
          ? e.flags
          : i.iu(e.flags_new ?? e.flags ?? 0);
}
function s(e, t) {
    return i.zy(a(e), t);
}
