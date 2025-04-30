n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(562129),
    l = n(861254),
    o = n(221241),
    a = n(871499);
function s(e) {
    var { isActivityActive: t, onMouseEnter: n, onMouseLeave: s, onClick: c } = e,
        u = (function (e, t) {
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
    let { mode: d } = (0, l.ZP)({ location: 'VideoButton' }),
        { squareButtonsEnabled: p } = (0, o.Z)({ location: 'VideoButton' }),
        { Component: h, events: f, play: m } = (0, i.Z)('ActivityButton');
    return (0, r.jsx)(
        a.d,
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
                isActive: t,
                color: (p || d === l.BK.GroupedButtonsRedMic) && t ? 'green' : void 0,
                iconComponent: h,
                onMouseEnter: (e) => {
                    null == n || n(e), f.onMouseEnter();
                },
                onMouseLeave: (e) => {
                    null == s || s(e), f.onMouseLeave();
                },
                onClick: (e) => {
                    null == c || c(e), m();
                }
            },
            u
        )
    );
}
