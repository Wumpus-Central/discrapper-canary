t.d(n, { Z: () => a });
var r = t(951288);
t(647438);
var o = t(481060),
    l = t(493683),
    i = t(475413),
    c = t(388032);
function a(e) {
    var { type: n, userId: t, onClose: a } = e,
        s = (function (e, n) {
            if (null == e) return {};
            var t,
                r,
                o = (function (e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (t = l[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                })(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (t = l[r]),
                        !(n.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]);
            }
            return o;
        })(e, ["type", "userId", "onClose"]);
    let d = n === i.j8.TEXT ? i.tG : i.ef;
    return (0, r.jsx)(
        d,
        (function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        }),
                    )),
                    r.forEach(function (n) {
                        var r;
                        (r = t[n]),
                            n in e
                                ? Object.defineProperty(e, n, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[n] = r);
                    });
            }
            return e;
        })(
            {
                action: "SEND_MESSAGE",
                icon: o.kBi,
                text: c.intl.string(c.t.zROXER),
                tooltipText: c.intl.string(c.t.zROXER),
                onClick: () => {
                    l.Z.openPrivateChannel({ recipientIds: t }), null == a || a();
                },
            },
            s,
        ),
    );
}
