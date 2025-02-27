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
    let t, n, u;
    var { isActivityActive: d, onMouseEnter: p, onMouseLeave: h, onClick: f } = e,
        m = (function (e, t) {
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
    let { mode: g } = (0, a.ZP)({ location: 'VideoButton' }),
        { squareButtonsEnabled: b } = (0, s.Z)({ location: 'VideoButton' }),
        { enabled: _ } = o.nS.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: C, events: v, play: y } = (0, i.s)(),
        { Component: x, events: j, play: O } = (0, l.w)();
    return (
        _ ? ((t = x), (n = j), (u = O)) : ((t = C), (n = v), (u = y)),
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
                    isActive: d,
                    color: (b || g === a.BK.GroupedButtonsRedMic) && d ? 'green' : void 0,
                    iconComponent: t,
                    onMouseEnter: (e) => {
                        null == p || p(e), n.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == h || h(e), n.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == f || f(e), u();
                    }
                },
                m
            )
        )
    );
}
