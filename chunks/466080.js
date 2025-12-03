n.d(e, { default: () => c });
var r = n(54381);
n(473749);
var o = n(793030),
    i = n(388032);
function c(t) {
    var { onConfirm: e, onBack: n } = t,
        c = (function (t, e) {
            if (null == t) return {};
            var n,
                r,
                o = (function (t, e) {
                    if (null == t) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                    return o;
                })(t, e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(t);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
            }
            return o;
        })(t, ["onConfirm", "onBack"]);
    return (0, r.jsx)(
        o.ConfirmModal,
        (function (t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(n).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(n, t).enumerable;
                        }),
                    )),
                    r.forEach(function (e) {
                        var r;
                        (r = n[e]),
                            e in t
                                ? Object.defineProperty(t, e, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[e] = r);
                    });
            }
            return t;
        })(
            {
                title: i.intl.string(i.t.YrV3I9),
                subtitle: i.intl.string(i.t.MXSMtl),
                confirmText: i.intl.string(i.t.X7eUJq),
                cancelText: i.intl.string(i.t["13/7kX"]),
                onConfirm: e,
                onCancel: n,
            },
            c,
        ),
    );
}
