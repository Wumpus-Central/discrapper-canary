n.d(t, { C: () => o });
var i = n(477900);
n(582128);
var r = n(280450),
    a = n(612181),
    s = n(642277),
    l = n(652215);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function o(o) {
        return !(0, a.wR)() && r.default.getLoginStatus() !== l.aUe.LOGGING_IN && r.default.allowLogoutRedirect()
            ? null != t
                ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(s.A, {}) })
                : (0, i.jsx)(s.A, {})
            : (0, i.jsx)(e, { ...(n.passProps ? o : null) });
    }
    return (o.displayName = `Authenticated(${e.displayName ?? e.name ?? "<Unknown>"})`), o;
}
