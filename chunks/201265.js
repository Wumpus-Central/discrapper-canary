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
    var { confirmText: t, cancelText: n, onConfirm: s, onCancel: u, onCloseCallback: d, variant: f = "critical" } = e,
        p = c(e, ["confirmText", "cancelText", "onConfirm", "onCancel", "onCloseCallback", "variant"]);
    let { i18n: _ } = (0, a.ZF)(),
        m = _.CANCEL,
        h = _.INLINE_NOTICE_GENERIC_ERROR,
        [g, E] = i.useState(!1),
        b = i.useRef(d);
    i.useLayoutEffect(() => {
        b.current = d;
    }),
        i.useLayoutEffect(
            () => () => {
                var e;
                null == (e = b.current) || e.call(b);
            },
            [],
        );
    let [y, O] = i.useState(void 0),
        v = (e) => {
            O(e);
        };
    return (0, r.jsx)(
        o.Modal,
        l(
            {
                actions: [
                    {
                        text: null != n ? n : m,
                        variant: "secondary",
                        onClick: () => {
                            null == u || u(), p.onClose();
                        },
                    },
                    {
                        text: t,
                        variant: "primary" === f ? "primary" : "critical-primary",
                        onClick: async () => {
                            O(void 0), E(!0);
                            try {
                                await (null == s ? void 0 : s(v)), p.onClose();
                            } catch (e) {
                                throw (E(!1), O((e) => (null != e ? e : h)), e);
                            }
                        },
                        disabled: g,
                        loading: g,
                    },
                ],
                role: "alertdialog",
                notice:
                    null != y
                        ? {
                              message: y,
                              type: "critical",
                          }
                        : void 0,
            },
            p,
        ),
    );
}
