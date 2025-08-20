n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(153867),
    l = n(468026),
    a = n(394059),
    o = n(388032);
function s(e) {
    var { type: t, onConfirm: n } = e,
        s = (function (e, t) {
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
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["type", "onConfirm"]);
    let c = t === a.K.STREAM ? o.intl.string(o.t["/lFMWl"]) : o.intl.string(o.t.xzxhZW),
        u = t === a.K.STREAM ? o.intl.string(o.t.xaOX7e) : o.intl.string(o.t.oU1p9P);
    return (0, r.jsx)(
        l.default,
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
                confirmText: o.intl.string(o.t["cY+Ooa"]),
                secondaryConfirmText: o.intl.string(o.t["JdIQ/f"]),
                title: c,
                cancelText: o.intl.string(o.t["ETE/oK"]),
                onConfirm: n,
                onConfirmSecondary: () => {
                    i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 });
                },
                body: u,
            },
            s,
        ),
    );
}
