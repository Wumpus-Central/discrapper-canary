"use strict";
n.d(t, { C: () => l });
var i = n(627968);
n(64700);
var r = n(495544),
    s = n(612181),
    a = n(642277),
    o = n(652215);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function l(l) {
        return !(0, s.wR)() && r.default.getLoginStatus() !== o.aUe.LOGGING_IN && r.default.allowLogoutRedirect()
            ? null != t
                ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(a.A, {}) })
                : (0, i.jsx)(a.A, {})
            : (0, i.jsx)(e, { ...(n.passProps ? l : null) });
    }
    return (l.displayName = `Authenticated(${e.displayName ?? e.name ?? "<Unknown>"})`), l;
}
