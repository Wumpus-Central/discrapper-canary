n.d(e, { default: () => a }), n(388685);
var r = n(54381),
    o = n(473749),
    i = n(481060),
    l = n(153867),
    c = n(388032);
function a(t) {
    var { onSubmit: e, onClose: n } = t,
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
        })(t, ["onSubmit", "onClose"]);
    let [u, s] = o.useState(!1);
    return (0, r.jsx)(
        i.sm4,
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
                title: c.intl.string(c.t.HlAPoq),
                subtitle: c.intl.string(c.t.Jz3oqA),
                variant: "active",
                confirmText: c.intl.string(c.t.rimG2R),
                cancelText: c.intl.string(c.t["ETE/oC"]),
                onConfirm: e,
                onClose: () => (u && l.ZP.updatedUnsyncedSettings({ disableCallUserConfirmationPrompt: !0 }), n()),
                checkboxProps: {
                    checked: u,
                    onChange: (t) => s(t),
                    label: c.intl.string(c.t["JdIQ/Y"]),
                },
            },
            a,
        ),
    );
}
