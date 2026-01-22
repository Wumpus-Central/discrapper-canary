n.d(t, { A: () => d });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(688810),
    s = n(980923),
    o = n(384059),
    c = n(277342),
    u = n(709562);
function d(e) {
    let {
            selfMute: t,
            serverMute: n,
            suppress: d,
            centerButton: f = !1,
            awaitingRemote: p,
            onMouseEnter: h,
            onMouseLeave: b,
            onClick: g,
        } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, [
            "selfMute",
            "serverMute",
            "suppress",
            "centerButton",
            "awaitingRemote",
            "onMouseEnter",
            "onMouseLeave",
            "onClick",
        ]),
        { parentAnalyticsLocation: A } = (0, a.Ay)(),
        y = t || n || d,
        O = f ? u.l : u.A,
        j = (0, s.A)(t, n, d, p),
        { events: v, play: x, Component: E } = (0, c.q)(y),
        _ = n || d ? i.O1p : E;
    return (
        l.useEffect(() => () => x(), [x, y]),
        (0, r.jsx)(
            O,
            (function (e) {
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
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    iconComponent: _,
                    isTrayButton: !0,
                    caretColor: y ? "red" : "primaryDark",
                    color: y ? "red" : void 0,
                    label: j,
                    onMouseEnter: (e) => {
                        null == h || h(e), v.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == b || b(e), v.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == g || g(e), (0, o.X)(A, o.O.MIC, t);
                    },
                },
                m,
            ),
        )
    );
}
