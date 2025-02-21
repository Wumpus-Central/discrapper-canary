n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(592471),
    l = n(749280),
    o = n(424602),
    a = n(861254),
    s = n(221241),
    c = n(871499);
function u(e) {
    let t, n, u, d;
    var { isActivityActive: p, onMouseEnter: h, onMouseLeave: f, onClick: m } = e,
        g = (function (e, t) {
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
        })(e, ['isActivityActive', 'onMouseEnter', 'onMouseLeave', 'onClick']);
    let { mode: b } = (0, a.ZP)({ location: 'VideoButton' }),
        { squareButtons: _ } = (0, s.Z)({ location: 'VideoButton' });
    (_ || b === a.BK.GroupedButtonsRedMic) && p && (t = 'green');
    let { enabled: C } = o.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: v, events: y, play: x } = (0, i.s)(),
        { Component: j, events: O, play: N } = (0, l.w)();
    return (
        C ? ((n = j), (u = O), (d = N)) : ((n = v), (u = y), (d = x)),
        (0, r.jsx)(
            c.d,
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
                    isActive: p,
                    color: t,
                    iconComponent: n,
                    onMouseEnter: (e) => {
                        null == h || h(e), u.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == f || f(e), u.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == m || m(e), d();
                    }
                },
                g
            )
        )
    );
}
