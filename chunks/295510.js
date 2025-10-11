r.d(t, { Z: () => a });
var n = r(951288);
r(647438);
var o = r(153867),
    i = r(468026),
    l = r(394059),
    c = r(388032);
function a(e) {
    var { type: t, onConfirm: r } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["type", "onConfirm"]);
    let u = t === l.K.STREAM ? c.intl.string(c.t["/lFMWl"]) : c.intl.string(c.t.xzxhZW),
        f = t === l.K.STREAM ? c.intl.string(c.t.xaOX7e) : c.intl.string(c.t.oU1p9P);
    return (0, n.jsx)(
        i.default,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                confirmText: c.intl.string(c.t["cY+Ooa"]),
                secondaryConfirmText: c.intl.string(c.t["JdIQ/f"]),
                title: u,
                cancelText: c.intl.string(c.t["ETE/oK"]),
                onConfirm: r,
                onConfirmSecondary: () => {
                    o.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 });
                },
                body: f,
            },
            a,
        ),
    );
}
