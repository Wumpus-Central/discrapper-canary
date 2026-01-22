n.d(t, {
    default: () => a,
}),
    n(896048);
var r = n(627968),
    o = n(64700),
    l = n(397927),
    i = n(817281),
    c = n(985018);

function a(e) {
    let { onSubmit: t, onClose: n } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, n = Reflect.ownKeys(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.getOwnPropertyNames(e);
                    for (r = 0; r < l.length; r++)
                        (n = l[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
                    (r = n[o]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
            return l;
        })(e, ["onSubmit", "onClose"]),
        [u, s] = o.useState(!1);
    return (0, r.jsx)(
        l.uoB,
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
                title: c.intl.string(c.t.HlAPoq),
                subtitle: c.intl.string(c.t.Jz3oqA),
                variant: "active",
                confirmText: c.intl.string(c.t.rimG2R),
                cancelText: c.intl.string(c.t["ETE/oC"]),
                onConfirm: t,
                onClose: () => (
                    u &&
                        i.Ay.updatedUnsyncedSettings({
                            disableCallUserConfirmationPrompt: !0,
                        }),
                    n()
                ),
                checkboxProps: {
                    checked: u,
                    onChange: (e) => s(e),
                    label: c.intl.string(c.t["JdIQ/Y"]),
                },
            },
            a,
        ),
    );
}
