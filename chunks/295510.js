n.d(t, { Z: () => a });
var r = n(951288);
n(647438);
var i = n(153867),
    l = n(468026),
    o = n(394059),
    u = n(388032);
function a(e) {
    var { type: t, onConfirm: n } = e,
        a = (function (e, t) {
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
    let c = t === o.K.STREAM ? u.intl.string(u.t["/lFMWl"]) : u.intl.string(u.t.xzxhZW),
        d = t === o.K.STREAM ? u.intl.string(u.t.xaOX7e) : u.intl.string(u.t.oU1p9P);
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
                confirmText: u.intl.string(u.t["cY+Ooa"]),
                secondaryConfirmText: u.intl.string(u.t["JdIQ/f"]),
                title: c,
                cancelText: u.intl.string(u.t["ETE/oK"]),
                onConfirm: n,
                onConfirmSecondary: () => {
                    i.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 });
                },
                body: d,
            },
            a,
        ),
    );
}
