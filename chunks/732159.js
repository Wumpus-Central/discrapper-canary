var i = n(477900),
    r = n(582128),
    a = n(116711),
    s = n(189213),
    l = n(696208);
n.d(
    t,
    {},
    {
        u: function (e) {
            let {
                    confirmText: t,
                    cancelText: n,
                    checkboxProps: o,
                    onConfirm: d,
                    onCancel: c,
                    onCloseCallback: u,
                    variant: _ = "critical",
                    children: E,
                    ...A
                } = e,
                { i18n: h } = (0, a.G9)(),
                f = h.CANCEL,
                I = h.INLINE_NOTICE_GENERIC_ERROR,
                [p, m] = r.useState(!1),
                g = r.useRef(u);
            (r.useLayoutEffect(() => {
                g.current = u;
            }),
                r.useLayoutEffect(
                    () => () => {
                        g.current?.();
                    },
                    [],
                ));
            let [T, S] = r.useState(void 0);
            function N(e) {
                S(e);
            }
            return (0, i.jsx)(s.a, {
                actions: [
                    {
                        text: n ?? f,
                        variant: "secondary",
                        onClick: () => {
                            (c?.(), A.onClose());
                        },
                    },
                    {
                        text: t,
                        variant: "critical" === _ ? "critical-primary" : _,
                        onClick: async () => {
                            (S(void 0), m(!0));
                            try {
                                (await d?.(N), A.onClose());
                            } catch (e) {
                                throw (m(!1), S((e) => e ?? I), e);
                            }
                        },
                        disabled: p,
                        loading: p,
                    },
                ],
                actionBarInput: null != o ? (0, i.jsx)(l.e, { ...o }) : void 0,
                role: "alertdialog",
                notice: null != T ? { message: T, type: "critical", role: "alert" } : void 0,
                ...A,
                children: E,
            });
        },
    },
);
