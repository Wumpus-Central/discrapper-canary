n.d(t, { Z: () => p }), n(997841);
var r = n(54381),
    i = n(95015),
    a = n(481060),
    o = n(783097),
    s = n(594174),
    l = n(572004),
    c = n(311819),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    let { application: t, label: n, onSuccess: d, showIconFirst: p, focusedClassName: _ } = e;
    if (__OVERLAY__ || !l.wS || null == t) return null;
    let m = s.default.getCurrentUser(),
        h = (0, o.Ow)(t);
    function g() {
        var e;
        if (null == t) return;
        let n = (0, i.yE)(null != (e = t.flags) ? e : 0, u.udG.EMBEDDED)
            ? (0, c.H)({
                  applicationId: t.id,
                  referrerId: null == m ? void 0 : m.id,
              })
            : (0, c.J)(f({ id: t.id }, h));
        null != n && (0, l.JG)(n, d);
    }
    let E = "copy-app-link-".concat(t.id);
    return (0, r.jsx)(
        a.sNh,
        {
            id: E,
            label: n,
            action: g,
            icon: p ? void 0 : a.xPt,
            iconLeft: p ? a.xPt : void 0,
            focusedClassName: _,
        },
        E,
    );
}
