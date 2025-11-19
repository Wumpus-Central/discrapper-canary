n.d(t, { Z: () => s }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(159691),
    o = n(153867),
    a = n(394059),
    c = n(388032);
function s(e) {
    var { type: t, onConfirm: n, onClose: s } = e,
        u = (function (e, t) {
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
        })(e, ["type", "onConfirm", "onClose"]);
    let [d, p] = l.useState(!1),
        f = l.useCallback(() => {
            d && o.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n(), s();
        }, [n, d, s]),
        b = t === a.K.STREAM ? c.intl.string(c.t["/lFMWr"]) : c.intl.string(c.t.xzxhZS),
        h = t === a.K.STREAM ? c.intl.string(c.t.xaOX7d) : c.intl.string(c.t.oU1p9O);
    return (0, r.jsx)(
        i.u_l,
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
                size: "md",
                actionBarInput: (0, r.jsx)(i.XZJ, {
                    checked: d,
                    onChange: (e) => p(e),
                    label: c.intl.string(c.t["JdIQ/Y"]),
                    labelType: "secondary",
                }),
                actions: [
                    {
                        variant: "secondary",
                        text: c.intl.string(c.t["ETE/oC"]),
                        onClick: s,
                    },
                    {
                        variant: "primary",
                        text: c.intl.string(c.t.BddRzS),
                        onClick: f,
                    },
                ],
                title: b,
                subtitle: h,
                onClose: s,
            },
            u,
        ),
    );
}
