n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    l = n(386406),
    c = n(48686),
    u = n(737613),
    d = n(985018);

function f(e, t, n) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}

function _(e, t) {
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
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function m(e, t) {
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
    if (((a = g(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function E(e) {
    let t,
        n,
        { afk: a } = e,
        o = m(e, ["afk"]),
        [c, u] = i.useState(!1);
    return (
        a
            ? ((t = d.intl.string(d.t.Y40Jke)), (n = d.intl.string(d.t["5J4yGc"])))
            : ((t = d.intl.string(d.t.FJSZVM)), (n = d.intl.string(d.t.etJjgW))),
        (0, r.jsx)(
            s.aFV,
            p(
                {
                    size: "md",
                    title: t,
                    subtitle: n,
                    actions: [
                        {
                            text: d.intl.string(d.t.BddRzS),
                            onClick: () => {
                                o.onClose(), l.A.clearSuppressWarning(c);
                            },
                            variant: "primary",
                        },
                    ],
                    actionBarInput: (0, r.jsx)(s.Sc0, {
                        checked: c,
                        onChange: (e) => u(e),
                        label: d.intl.string(d.t["5E9SB9"]),
                        labelType: "secondary",
                    }),
                },
                o,
            ),
        )
    );
}
let b = () => {
    let e = i.useRef(null);

    function t() {
        null !== e.current && ((0, o.OoC)(e.current), (e.current = null));
    }
    let [s, l] = (0, a.yK)([u.A], () => [u.A.shouldShowWarning(), u.A.isAFKChannel()], []),
        d = i.useCallback(() => {
            e.current = (0, o.qfG)((e) =>
                (0, r.jsx)(
                    E,
                    p(
                        {
                            afk: l,
                        },
                        e,
                    ),
                ),
            );
        }, [l]),
        f = i.useCallback(() => {
            (0, o.mMO)(async () => {
                let { default: e } = await n.e("9586").then(n.bind(n, 742089));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        h(p({}, t), {
                            showHideSuppressWarning: !0,
                        }),
                    );
            }).then((t) => {
                null != t && (e.current = t);
            });
        }, []);
    return (
        i.useEffect(
            () => (
                s && (0, c.t)() ? f() : s ? d() : t(),
                () => {
                    t();
                }
            ),
            [s, d, f],
        ),
        null
    );
};
