n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(273352),
    s = n(481060),
    l = n(923928),
    c = n(503856),
    u = n(209590),
    d = n(388032);
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = () => {
        l.Z.clearSuppressWarning();
    },
    g = () => {
        l.Z.clearSuppressWarning(!0);
    },
    E = () => {
        let e = i.useRef(null);
        function t() {
            null !== e.current && ((0, s.Mr3)(e.current), (e.current = null));
        }
        let [l, f] = (0, a.Wu)([u.Z], () => [u.Z.shouldShowWarning(), u.Z.isAFKChannel()], []),
            p = i.useCallback(() => {
                let t, n;
                f
                    ? ((t = d.intl.string(d.t.Y40Jke)), (n = d.intl.string(d.t["5J4yGc"])))
                    : ((t = d.intl.string(d.t.FJSZVM)), (n = d.intl.string(d.t.etJjgW))),
                    (e.current = (0, s.h7j)((e) =>
                        (0, r.jsx)(
                            o.default,
                            _(
                                {
                                    title: t,
                                    body: n,
                                    onConfirm: m,
                                    confirmText: d.intl.string(d.t.BddRzS),
                                    secondaryConfirmText: d.intl.string(d.t["5E9SB9"]),
                                    onConfirmSecondary: g,
                                },
                                e,
                            ),
                        ),
                    ));
            }, [f]),
            E = i.useCallback(() => {
                (0, s.ZDy)(async () => {
                    let { default: e } = await n.e("41281").then(n.bind(n, 669732));
                    return (t) => (0, r.jsx)(e, h(_({}, t), { showHideSuppressWarning: !0 }));
                }).then((t) => {
                    null != t && (e.current = t);
                });
            }, []);
        return (
            i.useEffect(
                () => (
                    l && (0, c.p)() ? E() : l ? p() : t(),
                    () => {
                        t();
                    }
                ),
                [l, p, E],
            ),
            null
        );
    };
