n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(749280),
    l = n(481060),
    o = n(456100),
    a = n(861254),
    s = n(221241),
    c = n(871499);
function u(e) {
    let t;
    var { isActivityActive: n, onMouseEnter: u, onMouseLeave: d, onClick: p } = e,
        h = (function (e, t) {
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
    let { mode: f } = (0, a.ZP)({ location: 'VideoButton' }),
        { squareButtonsEnabled: m } = (0, s.Z)({ location: 'VideoButton' }),
        { enabled: g } = o.c.useExperiment({ location: 'ActivityButton' }, { autoTrackExposure: !0 }),
        { Component: b, events: _, play: C } = (0, i.w)();
    return (
        (t = g ? l.iWm : b),
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
                    isActive: n,
                    color: (m || f === a.BK.GroupedButtonsRedMic) && n ? 'green' : void 0,
                    iconComponent: t,
                    onMouseEnter: (e) => {
                        null == u || u(e), _.onMouseEnter();
                    },
                    onMouseLeave: (e) => {
                        null == d || d(e), _.onMouseLeave();
                    },
                    onClick: (e) => {
                        null == p || p(e), C();
                    }
                },
                h
            )
        )
    );
}
