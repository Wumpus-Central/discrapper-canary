n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(846519),
    s = n(481060),
    l = n(626135),
    c = n(572004),
    u = n(70956),
    d = n(981631),
    f = n(388032);
function p(e, t, n) {
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
function _(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
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
function S(e) {
    let { text: t, copyValue: n, children: u, onCopy: f, "aria-label": p, delay: m = O, dataMeticulousIgnore: E } = e,
        [S, I] = i.useState(0),
        [T, A] = i.useState(!1),
        [C, N] = i.useState(!1),
        [P] = i.useState(() => new o.V7()),
        [R] = i.useState(() => new o.V7());
    if (
        (i.useEffect(
            () => () => {
                P.stop(), R.stop();
            },
            [P, R],
        ),
        !c.wS)
    )
        return (0, r.jsx)(r.Fragment, { children: u({}) });
    let w = S >= v.length - 1,
        D = w ? s.r6K.RED : s.r6K.GREEN,
        x = T ? D : s.r6K.PRIMARY,
        L = () => {
            var e;
            if (!T) return t;
            let n = (0, a.clamp)(S - 1, 0, v.length - 1),
                i = null != (e = v[n]) ? e : v[0];
            return (0, r.jsx)(s.UkV, {
                isShaking: w,
                children: i(),
            });
        },
        j = (e, t) => {
            !C && T && t.phase === d.UkZ.LEAVE && A(!1);
        },
        M = () => {
            null == f || f(),
                (0, c.JG)(n),
                l.default.track(d.rMx.TEXT_COPIED),
                C || I(S + 1),
                N(!0),
                A(!0),
                P.start(b, () => N(!1)),
                R.start(y, () => I(0));
        };
    return (0, r.jsx)(s.aML, {
        "data-migration-pending": !0,
        text: L(),
        delay: m,
        "aria-label": p,
        dataMeticulousIgnore: E,
        color: x,
        forceOpen: C,
        onAnimationRest: j,
        children: (e) => {
            var { onClick: t, onMouseEnter: n } = e;
            return u(
                h(_({}, g(e, ["onClick", "onMouseEnter"])), {
                    onClick: () => {
                        null == t || t(), M();
                    },
                    onMouseEnter: () => {
                        if (!T) {
                            null == n || n();
                            return;
                        }
                        P.stop(), N(!1);
                    },
                }),
            );
        },
    });
}
