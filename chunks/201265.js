n.d(t, { ConfirmModal: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(402453),
    o = n(775086),
    s = n(144771);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = d(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function d(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function f(e) {
    var {
            confirmText: t,
            cancelText: n,
            checkboxProps: l,
            onConfirm: d,
            onCancel: f,
            onCloseCallback: p,
            variant: _ = "critical",
        } = e,
        m = u(e, ["confirmText", "cancelText", "checkboxProps", "onConfirm", "onCancel", "onCloseCallback", "variant"]);
    let { i18n: h } = (0, a.ZF)(),
        g = h.CANCEL,
        E = h.INLINE_NOTICE_GENERIC_ERROR,
        [b, y] = i.useState(!1),
        O = i.useRef(p);
    i.useLayoutEffect(() => {
        O.current = p;
    }),
        i.useLayoutEffect(
            () => () => {
                var e;
                null == (e = O.current) || e.call(O);
            },
            [],
        );
    let [v, S] = i.useState(void 0),
        I = (e) => {
            S(e);
        };
    return (0, r.jsx)(
        o.Modal,
        c(
            {
                actions: [
                    {
                        text: null != n ? n : g,
                        variant: "secondary",
                        onClick: () => {
                            null == f || f(), m.onClose();
                        },
                    },
                    {
                        text: t,
                        variant: "critical" === _ ? "critical-primary" : _,
                        onClick: async () => {
                            S(void 0), y(!0);
                            try {
                                await (null == d ? void 0 : d(I)), m.onClose();
                            } catch (e) {
                                throw (y(!1), S((e) => (null != e ? e : E)), e);
                            }
                        },
                        disabled: b,
                        loading: b,
                    },
                ],
                actionBarInput: null != l ? (0, r.jsx)(s.B, c({}, l)) : void 0,
                role: "alertdialog",
                notice:
                    null != v
                        ? {
                              message: v,
                              type: "critical",
                          }
                        : void 0,
            },
            m,
        ),
    );
}
