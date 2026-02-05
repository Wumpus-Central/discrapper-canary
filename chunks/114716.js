n.d(t, { C: () => o });
var i = n(627968);
n(64700);
var r = n(961350),
    a = n(612181),
    l = n(642277),
    s = n(652215);
function o(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { passProps: !0 };
    function o(o) {
        return !(0, a.wR)() && r.default.getLoginStatus() !== s.aUe.LOGGING_IN && r.default.allowLogoutRedirect()
            ? null != t
                ? (0, i.jsx)(t, { renderRedirect: (0, i.jsx)(l.A, {}) })
                : (0, i.jsx)(l.A, {})
            : (0, i.jsx)(e, { ...(n.passProps ? o : null) });
    }
    return (o.displayName = `Authenticated(${e.displayName ?? e.name ?? "<Unknown>"})`), o;
}
