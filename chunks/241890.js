let r, i;
n.d(t, { Z: () => p });
var o = n(200651);
n(192379);
var l = n(481060),
    s = n(570140),
    a = n(341382),
    c = n(981631);
let u = null;
function d(e) {
    null != r && e ? r() : null != i && i(), (r = null), (i = null);
}
let p = {
    init() {
        s.Z.subscribe('PREMIUM_REQUIRED_MODAL_OPEN', (e) => {
            let t;
            d(!1),
                (u = e.context),
                (r = e.resolve),
                (i = e.reject),
                c.e3s === e.context &&
                    ((t = !1),
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e('29393').then(n.bind(n, 134817));
                            return (n) => {
                                var r,
                                    i,
                                    { onClose: l } = n,
                                    s = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    o = Object.keys(e);
                                                for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var o = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(n, ['onClose']);
                                return (0, o.jsx)(
                                    e,
                                    ((r = (function (e) {
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
                                    })({}, s)),
                                    (i = i =
                                        {
                                            onClose: (e) => {
                                                (t = e), l();
                                            }
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    r)
                                );
                            };
                        },
                        {
                            onCloseCallback: () => {
                                (0, a.M)(t);
                            }
                        }
                    ));
        }),
            s.Z.subscribe('PREMIUM_REQUIRED_MODAL_CLOSE', (e) => {
                let { shouldContinue: t } = e;
                (u = null), d(t);
            }),
            s.Z.subscribe('OVERLAY_SET_INPUT_LOCKED', (e) => {
                let { locked: t } = e;
                t && null != u && ((u = null), d(!1));
            });
    }
};
