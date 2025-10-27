n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(392711),
    o = n(846519),
    s = n(481060),
    l = n(626135),
    c = n(572004),
    u = n(70956),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = E(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let b = u.Z.Millis.SECOND,
    y = 2 * b,
    O = u.Z.Millis.HALF_SECOND,
    v = [
        () => f.intl.string(f.t.MSaeTe),
        () => f.intl.string(f.t.UmrCw7),
        () => f.intl.string(f.t.gKE0Jq),
        () => f.intl.string(f.t["4DSKbi"]),
        () => f.intl.string(f.t["+8ENdT"]),
        () => f.intl.string(f.t.GlWHv8),
        () => f.intl.string(f.t.hIzxU9),
        () => f.intl.string(f.t["26uMPL"]),
        () => f.intl.string(f.t.uFs7R2),
        () => f.intl.string(f.t.bLXdcY),
        () => f.intl.string(f.t.gPg9fS),
    ];
function I(e) {
    let { text: t, copyValue: n, children: u, onCopy: f, "aria-label": _, delay: h = O } = e,
        [E, I] = i.useState(0),
        [T, S] = i.useState(!1),
        [A, C] = i.useState(!1),
        [N] = i.useState(() => new o.V7()),
        [R] = i.useState(() => new o.V7());
    if (
        (i.useEffect(
            () => () => {
                N.stop(), R.stop();
            },
            [N, R],
        ),
        !c.wS)
    )
        return (0, r.jsx)(r.Fragment, { children: u({}) });
    let P = E >= v.length - 1,
        D = P ? s.r6K.RED : s.r6K.GREEN,
        w = T ? D : s.r6K.PRIMARY,
        L = () => {
            var e;
            if (!T) return t;
            let n = (0, a.clamp)(E - 1, 0, v.length - 1),
                i = null != (e = v[n]) ? e : v[0];
            return (0, r.jsx)(s.UkV, {
                isShaking: P,
                children: i(),
            });
        },
        x = (e, t) => {
            !A && T && t.phase === d.UkZ.LEAVE && S(!1);
        },
        M = () => {
            null == f || f(),
                (0, c.JG)(n),
                l.default.track(d.rMx.TEXT_COPIED),
                A || I(E + 1),
                C(!0),
                S(!0),
                N.start(b, () => C(!1)),
                R.start(y, () => I(0));
        };
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        text: L(),
        delay: h,
        "aria-label": _,
        color: w,
        forceOpen: A,
        onAnimationRest: x,
        children: (e) => {
            var { onClick: t, onMouseEnter: n } = e;
            return u(
                m(p({}, g(e, ["onClick", "onMouseEnter"])), {
                    onClick: () => {
                        null == t || t(), M();
                    },
                    onMouseEnter: () => {
                        if (!T) {
                            null == n || n();
                            return;
                        }
                        N.stop(), C(!1);
                    },
                }),
            );
        },
    });
}
