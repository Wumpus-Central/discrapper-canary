n.d(t, { O: () => u });
var r = n(200651),
    i = n(192379),
    l = n(864094),
    o = n(861254),
    a = n(221241),
    s = n(871499),
    c = n(388032);
function u(e) {
    let t, n;
    var { hasPermission: u, streamActive: d, isSelfStream: p, centerButton: h, onMouseEnter: f, onMouseLeave: m, premiumGlow: g, renderNUXHighlight: b, buttonRef: _ } = e,
        C = (function (e, t) {
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
    let { mode: y } = (0, o.ZP)({ location: 'StreamButton' }),
        { squareButtonsEnabled: x, coloredIconsEnabled: v } = (0, a.Z)({ location: 'StreamButton' }),
        j = h ? s.d : s.Z;
    t = d ? (p ? c.NW.string(c.t.S5anIS) : c.NW.string(c.t.q3O3Jy)) : u ? c.NW.string(c.t.fjBNo6) : c.NW.string(c.t.uQn9Bw);
    let { Component: O, events: E, play: N } = (0, l.P)(d ? 'disable' : 'enable');
    return (
        i.useEffect(() => () => N(), [d, N]),
        (0, r.jsx)(
            j,
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
                    buttonRef: _,
                    label: t,
                    disabled: !u,
                    iconComponent: O,
                    isActive: d,
                    color: (b ? (n = 'premiumGradient') : (x || y === o.BK.GroupedButtonsRedMic) && d && (n = 'green'), n),
                    caretColor: v ? 'green' : 'primaryDark',
                    onMouseEnter: (e) => {
                        null == f || f(e), E.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == m || m(e), E.onMouseLeave();
                    },
                    premiumGlow: g
                },
                C
            )
        )
    );
}
