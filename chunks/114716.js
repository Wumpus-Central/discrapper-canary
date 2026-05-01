n.d(t, { C: () => o });
var i = n(627968);
n(64700);
var a = n(495544),
    r = n(612181),
    s = n(642277),
    l = n(652215);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function o(o) {
        return !(0, r.wR)() && a.default.getLoginStatus() !== l.aUe.LOGGING_IN && a.default.allowLogoutRedirect()
            ? null != t
                ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(s.A, {}) })
                : (0, i.jsx)(s.A, {})
            : (0, i.jsx)(e, { ...(n.passProps ? o : null) });
    }
    return (o.displayName = `Authenticated(${e.displayName ?? e.name ?? "<Unknown>"})`), o;
}
