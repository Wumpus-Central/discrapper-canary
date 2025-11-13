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
    let { text: t, copyValue: n, children: u, onCopy: f, "aria-label": _, delay: h = O, dataMeticulousIgnore: E } = e,
        [I, T] = i.useState(0),
        [S, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R] = i.useState(() => new o.V7()),
        [P] = i.useState(() => new o.V7());
    if (
        (i.useEffect(
            () => () => {
                R.stop(), P.stop();
            },
            [R, P],
        ),
        !c.wS)
    )
        return (0, r.jsx)(r.Fragment, { children: u({}) });
    let D = I >= v.length - 1,
        w = D ? s.r6K.RED : s.r6K.GREEN,
        x = S ? w : s.r6K.PRIMARY,
        L = () => {
            var e;
            if (!S) return t;
            let n = (0, a.clamp)(I - 1, 0, v.length - 1),
                i = null != (e = v[n]) ? e : v[0];
            return (0, r.jsx)(s.UkV, {
                isShaking: D,
                children: i(),
            });
        },
        M = (e, t) => {
            !C && S && t.phase === d.UkZ.LEAVE && A(!1);
        },
        j = () => {
            null == f || f(),
                (0, c.JG)(n),
                l.default.track(d.rMx.TEXT_COPIED),
                C || T(I + 1),
                N(!0),
                A(!0),
                R.start(b, () => N(!1)),
                P.start(y, () => T(0));
        };
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        text: L(),
        delay: h,
        "aria-label": _,
        dataMeticulousIgnore: E,
        color: x,
        forceOpen: C,
        onAnimationRest: M,
        children: (e) => {
            var { onClick: t, onMouseEnter: n } = e;
            return u(
                m(p({}, g(e, ["onClick", "onMouseEnter"])), {
                    onClick: () => {
                        null == t || t(), j();
                    },
                    onMouseEnter: () => {
                        if (!S) {
                            null == n || n();
                            return;
                        }
                        R.stop(), N(!1);
                    },
                }),
            );
        },
    });
}
