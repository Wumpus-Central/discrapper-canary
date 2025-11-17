n.d(t, { Z: () => d });
var i = n(54381),
    r = n(473749),
    l = n(481060),
    a = n(906732),
    o = n(628581),
    s = n(522651),
    c = n(8404),
    u = n(871499);
function d(e) {
    var {
            selfMute: t,
            serverMute: n,
            suppress: d,
            centerButton: p = !1,
            awaitingRemote: h,
            onMouseEnter: f,
            onMouseLeave: m,
            onClick: g,
        } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, [
            "selfMute",
            "serverMute",
            "suppress",
            "centerButton",
            "awaitingRemote",
            "onMouseEnter",
            "onMouseLeave",
            "onClick",
        ]);
    let { parentAnalyticsLocation: y } = (0, a.ZP)(),
        C = t || n || d,
        v = p ? u.d : u.Z,
        _ = (0, o.Z)(t, n, d, h),
        { events: x, play: j, Component: O } = (0, c.b)(C),
        E = n || d ? l.v0G : O;
    return (
        r.useEffect(() => () => j(), [j, C]),
        (0, i.jsx)(
            v,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })(
                {
                    iconComponent: E,
                    isTrayButton: !0,
                    caretColor: C ? "red" : "primaryDark",
                    color: C ? "red" : void 0,
                    label: _,
                    onMouseEnter: (e) => {
                        null == f || f(e), x.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == m || m(e), x.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == g || g(e), (0, s.v)(y, s.d.MIC, t);
                    },
                },
                b,
            ),
        )
    );
}
