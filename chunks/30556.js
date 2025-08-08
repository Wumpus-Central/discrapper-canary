n.d(t, { Z: () => c });
var r = n(255367);
n(73800);
var l = n(481060),
    i = n(493683),
    o = n(475413),
    a = n(388032);
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
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["type", "userId", "onClose"]);
    let d = t === o.j8.TEXT ? o.tG : o.ef;
    return (0, r.jsx)(
        d,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                action: "SEND_MESSAGE",
                icon: l.kBi,
                text: a.intl.string(a.t.zROXER),
                tooltipText: a.intl.string(a.t.zROXER),
                onClick: () => {
                    i.Z.openPrivateChannel({ recipientIds: n }), null == c || c();
                },
            },
            s,
        ),
    );
}
