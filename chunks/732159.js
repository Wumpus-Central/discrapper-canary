n.d(t, {
    ConfirmModal: () => _,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(460890),
    o = n(189213),
    s = n(696208);

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
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = p(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function _(e) {
    let {
            confirmText: t,
            cancelText: n,
            checkboxProps: l,
            onConfirm: u,
            onCancel: p,
            onCloseCallback: _,
            variant: h = "critical",
            children: m,
        } = e,
        g = f(e, [
            "confirmText",
            "cancelText",
            "checkboxProps",
            "onConfirm",
            "onCancel",
            "onCloseCallback",
            "variant",
            "children",
        ]),
        { i18n: E } = (0, a.G9)(),
        y = E.CANCEL,
        b = E.INLINE_NOTICE_GENERIC_ERROR,
        [O, v] = i.useState(!1),
        A = i.useRef(_);
    i.useLayoutEffect(() => {
        A.current = _;
    }),
        i.useLayoutEffect(
            () => () => {
                var e;
                null == (e = A.current) || e.call(A);
            },
            [],
        );
    let [I, S] = i.useState(void 0),
        T = (e) => {
            S(e);
        };
    return (0, r.jsx)(
        o.Modal,
        d(
            c(
                {
                    actions: [
                        {
                            text: null != n ? n : y,
                            variant: "secondary",
                            onClick: () => {
                                null == p || p(), g.onClose();
                            },
                        },
                        {
                            text: t,
                            variant: "critical" === h ? "critical-primary" : h,
                            onClick: async () => {
                                S(void 0), v(!0);
                                try {
                                    await (null == u ? void 0 : u(T)), g.onClose();
                                } catch (e) {
                                    throw (v(!1), S((e) => (null != e ? e : b)), e);
                                }
                            },
                            disabled: O,
                            loading: O,
                        },
                    ],
                    actionBarInput: null != l ? (0, r.jsx)(s.e, c({}, l)) : void 0,
                    role: "alertdialog",
                    notice:
                        null != I
                            ? {
                                  message: I,
                                  type: "critical",
                              }
                            : void 0,
                },
                g,
            ),
            {
                children: m,
            },
        ),
    );
}
