e.d(r, { default: () => c });
var n = e(54381);
e(473749);
var i = e(793030),
    o = e(388032);
function c(t) {
    var { onConfirm: r } = t,
        e = (function (t, r) {
            if (null == t) return {};
            var e,
                n,
                i = (function (t, r) {
                    if (null == t) return {};
                    var e,
                        n,
                        i = {},
                        o = Object.keys(t);
                    for (n = 0; n < o.length; n++) (e = o[n]), r.indexOf(e) >= 0 || (i[e] = t[e]);
                    return i;
                })(t, r);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++)
                    (e = o[n]),
                        !(r.indexOf(e) >= 0) && Object.prototype.propertyIsEnumerable.call(t, e) && (i[e] = t[e]);
            }
            return i;
        })(t, ["onConfirm"]);
    return (0, n.jsx)(
        i.ConfirmModal,
        (function (t) {
            for (var r = 1; r < arguments.length; r++) {
                var e = null != arguments[r] ? arguments[r] : {},
                    n = Object.keys(e);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(e).filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        }),
                    )),
                    n.forEach(function (r) {
                        var n;
                        (n = e[r]),
                            r in t
                                ? Object.defineProperty(t, r, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (t[r] = n);
                    });
            }
            return t;
        })(
            {
                title: o.intl.string(o.t["5yTUuc"]),
                subtitle: o.intl.string(o.t.dRhrXh),
                variant: "primary",
                confirmText: o.intl.string(o.t.TyCVIq),
                onConfirm: r,
            },
            e,
        ),
    );
}
