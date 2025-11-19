r.d(t, { Z: () => u }), r(388685);
var n = r(54381),
    o = r(473749),
    i = r(159691),
    l = r(153867),
    c = r(394059),
    a = r(388032);
function u(e) {
    var { type: t, onConfirm: r, onClose: u } = e,
        s = (function (e, t) {
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
        })(e, ["type", "onConfirm", "onClose"]);
    let [f, b] = o.useState(!1),
        p = o.useCallback(() => {
            f && l.ZP.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), r(), u();
        }, [r, f, u]),
        y = t === c.K.STREAM ? a.intl.string(a.t["/lFMWr"]) : a.intl.string(a.t.xzxhZS),
        O = t === c.K.STREAM ? a.intl.string(a.t.xaOX7d) : a.intl.string(a.t.oU1p9O);
    return (0, n.jsx)(
        i.u_l,
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
                size: "md",
                actionBarInput: (0, n.jsx)(i.XZJ, {
                    checked: f,
                    onChange: (e) => b(e),
                    label: a.intl.string(a.t["JdIQ/Y"]),
                    labelType: "secondary",
                }),
                actions: [
                    {
                        variant: "secondary",
                        text: a.intl.string(a.t["ETE/oC"]),
                        onClick: u,
                    },
                    {
                        variant: "primary",
                        text: a.intl.string(a.t.BddRzS),
                        onClick: p,
                    },
                ],
                title: y,
                subtitle: O,
                onClose: u,
            },
            s,
        ),
    );
}
