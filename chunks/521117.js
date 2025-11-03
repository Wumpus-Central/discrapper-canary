n.d(t, { Z: () => b }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(159691),
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
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = g(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function E(e) {
    let t, n;
    var { afk: a } = e,
        s = m(e, ["afk"]);
    let [c, u] = i.useState(!1);
    return (
        a
            ? ((t = d.intl.string(d.t.Y40Jke)), (n = d.intl.string(d.t["5J4yGc"])))
            : ((t = d.intl.string(d.t.FJSZVM)), (n = d.intl.string(d.t.etJjgW))),
        (0, r.jsx)(
            o.u_l,
            _(
                {
                    size: "md",
                    title: t,
                    subtitle: n,
                    actions: [
                        {
                            text: d.intl.string(d.t.BddRzS),
                            onClick: () => {
                                s.onClose(), l.Z.clearSuppressWarning(c);
                            },
                            variant: "primary",
                        },
                    ],
                    actionBarInput: (0, r.jsx)(o.XZJ, {
                        checked: c,
                        onChange: (e) => u(e),
                        label: d.intl.string(d.t["5E9SB9"]),
                        labelType: "secondary",
                    }),
                },
                s,
            ),
        )
    );
}
let b = () => {
    let e = i.useRef(null);
    function t() {
        null !== e.current && ((0, s.Mr3)(e.current), (e.current = null));
    }
    let [o, l] = (0, a.Wu)([u.Z], () => [u.Z.shouldShowWarning(), u.Z.isAFKChannel()], []),
        d = i.useCallback(() => {
            e.current = (0, s.h7j)((e) => (0, r.jsx)(E, _({ afk: l }, e)));
        }, [l]),
        f = i.useCallback(() => {
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
                o && (0, c.p)() ? f() : o ? d() : t(),
                () => {
                    t();
                }
            ),
            [o, d, f],
        ),
        null
    );
};
