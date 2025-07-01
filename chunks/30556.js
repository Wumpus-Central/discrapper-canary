t.d(n, { Z: () => a });
var l = t(255367);
t(73800);
var r = t(481060),
    i = t(493683),
    o = t(475413),
    s = t(388032);
function a(e) {
    var { type: n, userId: t, onClose: a } = e,
        c = (function (e, n) {
            if (null == e) return {};
            var t,
                l,
                r = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        l,
                        r = {},
                        i = Object.keys(e);
                    for (l = 0; l < i.length; l++) ((t = i[l]), n.indexOf(t) >= 0 || (r[t] = e[t]));
                    return r;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (l = 0; l < i.length; l++) ((t = i[l]), !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]));
            }
            return r;
        })(e, ['type', 'userId', 'onClose']);
    let u = n === o.j8.TEXT ? o.tG : o.ef;
    return (0, l.jsx)(
        u,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    l = Object.keys(t);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (l = l.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })
                    )),
                    l.forEach(function (n) {
                        var l;
                        ((l = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: l,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[n] = l));
                    }));
            }
            return e;
        })(
            {
                action: 'SEND_MESSAGE',
                icon: r.kBi,
                text: s.intl.string(s.t.zROXER),
                tooltipText: s.intl.string(s.t.zROXER),
                onClick: () => {
                    (i.Z.openPrivateChannel({ recipientIds: t }), null == a || a());
                }
            },
            c
        )
    );
}
