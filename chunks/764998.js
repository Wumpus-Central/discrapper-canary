n.d(e, { default: () => a });
var r = n(54381);
n(473749);
var o = n(793030),
    i = n(388032);
function a(t) {
    var { onConfirmUninstall: e, game: n } = t,
        a = (function (t, e) {
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
        })(t, ["onConfirmUninstall", "game"]);
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
                title: i.intl.formatToPlainString(i.t["f/BAbC"], { gameName: n.name }),
                subtitle: i.intl.format(i.t["FP+NKV"], { gameName: n.name }),
                confirmText: i.intl.string(i.t.RVy6Vl),
                cancelText: i.intl.string(i.t["96dwMR"]),
                onConfirm: e,
            },
            a,
        ),
    );
}
