n.d(t, { A: () => s }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(732955),
    o = n(817281),
    a = n(951829),
    c = n(985018);
function s(e) {
    let { type: t, onConfirm: n, onClose: s } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (r = 0; r < i.length; r++)
                        (n = i[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i;
        })(e, ["type", "onConfirm", "onClose"]),
        [u, p] = l.useState(!1),
        b = l.useCallback(() => {
            u && o.Ay.updatedUnsyncedSettings({ disableHideSelfStreamAndVideoConfirmationAlert: !0 }), n(), s();
        }, [n, u, s]),
        f = t === a.f.STREAM ? c.intl.string(c.t["/lFMWr"]) : c.intl.string(c.t.xzxhZS),
        m = t === a.f.STREAM ? c.intl.string(c.t.xaOX7d) : c.intl.string(c.t.oU1p9O);
    return (0, r.jsx)(
        i.aFV,
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
                actionBarInput: (0, r.jsx)(i.Sc0, {
                    checked: u,
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
                        onClick: b,
                    },
                ],
                title: f,
                subtitle: m,
                onClose: s,
            },
            d,
        ),
    );
}
