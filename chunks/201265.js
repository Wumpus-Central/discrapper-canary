n.d(t, { ConfirmModal: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(402453),
    o = n(775086);
function s(e, t, n) {
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
function l(e) {
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
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var {
            confirmText: t,
            cancelText: n,
            checkbox: s,
            onConfirm: u,
            onCancel: d,
            onCloseCallback: f,
            variant: p = "critical",
        } = e,
        _ = c(e, ["confirmText", "cancelText", "checkbox", "onConfirm", "onCancel", "onCloseCallback", "variant"]);
    let { i18n: m } = (0, a.ZF)(),
        h = m.CANCEL,
        g = m.INLINE_NOTICE_GENERIC_ERROR,
        [E, b] = i.useState(!1),
        y = i.useRef(f);
    i.useLayoutEffect(() => {
        y.current = f;
    }),
        i.useLayoutEffect(
            () => () => {
                var e;
                null == (e = y.current) || e.call(y);
            },
            [],
        );
    let [O, v] = i.useState(void 0),
        S = (e) => {
            v(e);
        };
    return (0, r.jsx)(
        o.Modal,
        l(
            {
                actions: [
                    {
                        text: null != n ? n : h,
                        variant: "secondary",
                        onClick: () => {
                            null == d || d(), _.onClose();
                        },
                    },
                    {
                        text: t,
                        variant: "primary" === p ? "primary" : "critical-primary",
                        onClick: async () => {
                            v(void 0), b(!0);
                            try {
                                await (null == u ? void 0 : u(S)), _.onClose();
                            } catch (e) {
                                throw (b(!1), v((e) => (null != e ? e : g)), e);
                            }
                        },
                        disabled: E,
                        loading: E,
                    },
                ],
                actionBarInput: s,
                role: "alertdialog",
                notice:
                    null != O
                        ? {
                              message: O,
                              type: "critical",
                          }
                        : void 0,
            },
            _,
        ),
    );
}
