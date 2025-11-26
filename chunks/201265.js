n.d(t, { s: () => u });
var r = n(54381);
n(473749);
var i = n(402453),
    a = n(775086);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = c(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function u(e) {
    var { confirmText: t, cancelText: n, onConfirm: o, onCancel: c, variant: u = "primary" } = e,
        d = l(e, ["confirmText", "cancelText", "onConfirm", "onCancel", "variant"]);
    let { i18n: f } = (0, i.ZF)(),
        _ = f.CANCEL;
    return (0, r.jsx)(
        a.Modal,
        s(
            {
                actions: [
                    {
                        text: null != n ? n : _,
                        variant: "secondary",
                        onClick: () => {
                            null == c || c(), d.onClose();
                        },
                    },
                    {
                        text: t,
                        variant: "critical" === u ? "critical-primary" : "primary",
                        onClick: async () => {
                            try {
                                await (null == o ? void 0 : o()), d.onClose();
                            } catch (e) {
                                throw e;
                            }
                        },
                    },
                ],
                role: "alertdialog",
            },
            d,
        ),
    );
}
