n.d(t, { Z: () => c });
var l = n(200651);
n(192379);
var r = n(481060),
    i = n(493683),
    s = n(475413),
    o = n(388032);
function c(e) {
    var { type: t, userId: n, onClose: c } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                l,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) (n = i[l]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) (n = i[l]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['type', 'userId', 'onClose']);
    let d = t === s.j8.TEXT ? s.tG : s.ef;
    return (0, l.jsx)(
        d,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    l.forEach(function (t) {
                        var l;
                        (l = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = l);
                    });
            }
            return e;
        })(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                text: o.intl.string(o.t.zROXER),
                tooltipText: o.intl.string(o.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == c || c();
                }
            },
            a
        )
    );
}
