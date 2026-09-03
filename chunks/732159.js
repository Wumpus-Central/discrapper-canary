n.d(t, { ConfirmModal: () => o });
var i = n(477900),
    r = n(582128),
    a = n(460890),
    s = n(189213),
    l = n(696208);
function o(e) {
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
        I = h.CANCEL,
        f = h.INLINE_NOTICE_GENERIC_ERROR,
        [p, T] = r.useState(!1),
        m = r.useRef(u);
    r.useLayoutEffect(() => {
        m.current = u;
    }),
        r.useLayoutEffect(
            () => () => {
                m.current?.();
            },
            [],
        );
    let [g, S] = r.useState(void 0);
    function N(e) {
        S(e);
    }
    return (0, i.jsx)(s.Modal, {
        actions: [
            {
                text: n ?? I,
                variant: "secondary",
                onClick: () => {
                    c?.(), A.onClose();
                },
            },
            {
                text: t,
                variant: "critical" === _ ? "critical-primary" : _,
                onClick: async () => {
                    S(void 0), T(!0);
                    try {
                        await d?.(N), A.onClose();
                    } catch (e) {
                        throw (T(!1), S((e) => e ?? f), e);
                    }
                },
                disabled: p,
                loading: p,
            },
        ],
        actionBarInput: null != o ? (0, i.jsx)(l.e, { ...o }) : void 0,
        role: "alertdialog",
        notice: null != g ? { message: g, type: "critical" } : void 0,
        ...A,
        children: E,
    });
}
