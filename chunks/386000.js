n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(906732),
    o = n(628581),
    s = n(522651),
    l = n(8404),
    c = n(871499);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = _(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
function p(e) {
    var { selfMute: t, serverMute: n, suppress: u, centerButton: _ = !1, awaitingRemote: p, onMouseEnter: h, onMouseLeave: m, onClick: g } = e,
        E = f(e, ['selfMute', 'serverMute', 'suppress', 'centerButton', 'awaitingRemote', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { parentAnalyticsLocation: b } = (0, a.ZP)(),
        y = t || n || u,
        O = _ ? c.d : c.Z,
        v = (0, o.Z)(t, n, u, p),
        { events: I, play: T, Component: S } = (0, l.b)(y);
    return (
        i.useEffect(() => () => T(), [T, y]),
        (0, r.jsx)(
            O,
            d(
                {
                    iconComponent: S,
                    isTrayButton: !0,
                    caretColor: y ? 'red' : 'primaryDark',
                    color: y ? 'red' : void 0,
                    label: v,
                    onMouseEnter: (e) => {
                        (null == h || h(e), I.onMouseEnter());
                    },
                    onMouseLeave: (e) => {
                        (null == m || m(e), I.onMouseLeave());
                    },
                    onClick: (e) => {
                        (null == g || g(e), (0, s.v)(b, s.d.MIC, t));
                    }
                },
                E
            )
        )
    );
}
