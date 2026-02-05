"use strict";
n.d(t, { ConfirmModal: () => l });
var r = n(627968),
    i = n(64700),
    a = n(460890),
    s = n(189213),
    o = n(696208);
function l(e) {
    let {
            confirmText: t,
            cancelText: n,
            checkboxProps: l,
            onConfirm: u,
            onCancel: c,
            onCloseCallback: d,
            variant: _ = "critical",
            children: f,
            ...p
        } = e,
        { i18n: h } = (0, a.G9)(),
        m = h.CANCEL,
        g = h.INLINE_NOTICE_GENERIC_ERROR,
        [E, A] = i.useState(!1),
        I = i.useRef(d);
    i.useLayoutEffect(() => {
        I.current = d;
    }),
        i.useLayoutEffect(
            () => () => {
                I.current?.();
            },
            [],
        );
    let [T, y] = i.useState(void 0),
        S = (e) => {
            y(e);
        };
    return (0, r.jsx)(s.Modal, {
        actions: [
            {
                text: n ?? m,
                variant: "secondary",
                onClick: () => {
                    c?.(), p.onClose();
                },
            },
            {
                text: t,
                variant: "critical" === _ ? "critical-primary" : _,
                onClick: async () => {
                    y(void 0), A(!0);
                    try {
                        await u?.(S), p.onClose();
                    } catch (e) {
                        throw (A(!1), y((e) => e ?? g), e);
                    }
                },
                disabled: E,
                loading: E,
            },
        ],
        actionBarInput: null != l ? (0, r.jsx)(o.e, { ...l }) : void 0,
        role: "alertdialog",
        notice: null != T ? { message: T, type: "critical" } : void 0,
        ...p,
        children: f,
    });
}
