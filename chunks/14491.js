n.d(t, { Z: () => _ }), n(789020);
var r = n(200651),
    i = n(117447),
    o = n(481060),
    a = n(783097),
    s = n(594174),
    l = n(572004),
    c = n(630388),
    u = n(311819),
    d = n(981631);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function _(e) {
    let { application: t, label: n, onSuccess: f, showIconFirst: _, focusedClassName: h } = e;
    if (__OVERLAY__ || !l.wS || null == t) return null;
    let m = s.default.getCurrentUser(),
        g = (0, a.Ow)(t);
    function E() {
        var e;
        if (null == t) return;
        let n = (0, c.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, d.udG.EMBEDDED)
            ? (0, u.H)({
                  applicationId: t.id,
                  referrerId: null == m ? void 0 : m.id
              })
            : (0, u.J)(p({ id: t.id }, g));
        null != n && ((0, l.JG)(n), null == f || f());
    }
    let v = 'copy-app-link-'.concat(t.id);
    return (0, r.jsx)(
        o.sNh,
        {
            id: v,
            label: n,
            action: E,
            icon: _ ? void 0 : i.x,
            iconLeft: _ ? i.x : void 0,
            focusedClassName: h
        },
        v
    );
}
