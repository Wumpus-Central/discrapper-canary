n.d(t, {
    A: () => v,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(735438),
    s = n(451988),
    o = n(397927),
    l = n(954571),
    c = n(957565),
    u = n(927813),
    d = n(652215),
    f = n(985018);

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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = E(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function E(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let b = u.A.Millis.SECOND,
    y = 2 * b,
    O = u.A.Millis.HALF_SECOND,
    A = [
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

function v(e) {
    let { text: t, copyValue: n, children: u, onCopy: f, "aria-label": p, delay: h = O, dataMeticulousIgnore: E } = e,
        [v, S] = i.useState(0),
        [I, T] = i.useState(!1),
        [C, N] = i.useState(!1),
        [R] = i.useState(() => new s.Ep()),
        [w] = i.useState(() => new s.Ep());
    if (
        (i.useEffect(
            () => () => {
                R.stop(), w.stop();
            },
            [R, w],
        ),
        !c.p5)
    )
        return (0, r.jsx)(r.Fragment, {
            children: u({}),
        });
    let P = v >= A.length - 1,
        D = P ? o.oMw.RED : o.oMw.GREEN,
        x = I ? D : o.oMw.PRIMARY,
        L = () => {
            var e;
            if (!I) return t;
            let n = (0, a.clamp)(v - 1, 0, A.length - 1),
                i = null != (e = A[n]) ? e : A[0];
            return (0, r.jsx)(o.bfh, {
                isShaking: P,
                children: i(),
            });
        },
        j = (e, t) => {
            !C && I && t.phase === d.lLE.LEAVE && T(!1);
        },
        M = () => {
            null == f || f(),
                (0, c.C)(n),
                l.default.track(d.HAw.TEXT_COPIED),
                C || S(v + 1),
                N(!0),
                T(!0),
                R.start(b, () => N(!1)),
                w.start(y, () => S(0));
        };
    return (0, r.jsx)(o.STz, {
        text: L(),
        delay: h,
        "aria-label": p,
        dataMeticulousIgnore: E,
        color: x,
        forceOpen: C,
        onAnimationRest: j,
        children: (e) => {
            let { onClick: t, onMouseEnter: n } = e;
            return u(
                m(_({}, g(e, ["onClick", "onMouseEnter"])), {
                    onClick: () => {
                        null == t || t(), M();
                    },
                    onMouseEnter: () => {
                        if (!I) {
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
