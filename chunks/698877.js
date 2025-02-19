n.d(t, { O: () => d });
var r = n(200651),
    i = n(192379),
    l = n(864094),
    o = n(682901),
    a = n(861254),
    s = n(82965),
    c = n(871499),
    u = n(388032);
function d(e) {
    let t, n;
    var { hasPermission: d, streamActive: p, isSelfStream: h, centerButton: f, onMouseEnter: m, onMouseLeave: g, premiumGlow: b, renderNUXHighlight: _, buttonRef: C } = e,
        v = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['hasPermission', 'streamActive', 'isSelfStream', 'centerButton', 'onMouseEnter', 'onMouseLeave', 'premiumGlow', 'renderNUXHighlight', 'buttonRef']);
    let { mode: y } = (0, a.ZP)({ location: 'StreamButton' }),
        x = (0, s.Z)({ location: 'StreamButton' }),
        { enabled: j } = (0, o.Z)({ location: 'StreamButton' }),
        O = f ? c.d : c.Z;
    t = p ? (h ? u.NW.string(u.t.S5anIS) : u.NW.string(u.t.q3O3Jy)) : d ? u.NW.string(u.t.fjBNo6) : u.NW.string(u.t.uQn9Bw);
    let { Component: N, events: E, play: P } = (0, l.P)(p ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => P(), [p, P]),
        (0, r.jsx)(
            O,
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })(
                {
                    buttonRef: C,
                    label: t,
                    disabled: !d,
                    iconComponent: N,
                    isActive: !x && !j && p,
                    color: (_ ? (n = 'premiumGradient') : y === a.BK.GroupedButtonsRedMic && p && (n = 'green'), n),
                    ignoreColorForCaret: y === a.BK.GroupedButtonsRedMic && p,
                    onMouseEnter: (e) => {
                        null == m || m(e), E.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == g || g(e), E.onMouseLeave();
                    },
                    premiumGlow: b
                },
                v
            )
        )
    );
}
