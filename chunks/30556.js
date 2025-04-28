n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var l = n(481060),
    o = n(493683),
    i = n(475413),
    u = n(388032);
function c(e) {
    var { type: t, userId: n, onClose: c } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['type', 'userId', 'onClose']);
    let a = t === i.j8.TEXT ? i.tG : i.ef;
    return (0, r.jsx)(
        a,
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
                action: 'SEND_MESSAGE',
                icon: l.kBi,
                text: u.intl.string(u.t.zROXER),
                tooltipText: u.intl.string(u.t.zROXER),
                onClick: () => {
                    o.Z.openPrivateChannel({ recipientIds: n }), null == c || c();
                }
            },
            s
        )
    );
}
