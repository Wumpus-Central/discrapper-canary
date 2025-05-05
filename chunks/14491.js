n.d(t, { Z: () => _ }), n(997841);
var r = n(255367),
    i = n(481060),
    a = n(783097),
    o = n(594174),
    s = n(572004),
    l = n(630388),
    c = n(311819),
    u = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { application: t, label: n, onSuccess: d, showIconFirst: _, focusedClassName: p } = e;
    if (__OVERLAY__ || !s.wS || null == t) return null;
    let h = o.default.getCurrentUser(),
        m = (0, a.Ow)(t);
    function g() {
        var e;
        if (null == t) return;
        let n = (0, l.yE)(null != (e = t.flags) ? e : 0, u.udG.EMBEDDED)
            ? (0, c.H)({
                  applicationId: t.id,
                  referrerId: null == h ? void 0 : h.id
              })
            : (0, c.J)(f({ id: t.id }, m));
        null != n && (0, s.JG)(n, d);
    }
    let E = 'copy-app-link-'.concat(t.id);
    return (0, r.jsx)(
        i.sNh,
        {
            id: E,
            label: n,
            action: g,
            icon: _ ? void 0 : i.xPt,
            iconLeft: _ ? i.xPt : void 0,
            focusedClassName: p
        },
        E
    );
}
