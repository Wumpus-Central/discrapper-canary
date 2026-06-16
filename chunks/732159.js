"use strict";
n.d(t, { ConfirmModal: () => l });
var i = n(627968),
    r = n(64700),
    s = n(460890),
    a = n(189213),
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
            children: h,
            ...f
        } = e,
        { i18n: p } = (0, s.G9)(),
        E = p.CANCEL,
        m = p.INLINE_NOTICE_GENERIC_ERROR,
        [g, A] = r.useState(!1),
        I = r.useRef(d);
    r.useLayoutEffect(() => {
        I.current = d;
    }),
        r.useLayoutEffect(
            () => () => {
                I.current?.();
            },
            [],
        );
    let [T, S] = r.useState(void 0),
        y = (e) => {
            S(e);
        };
    return (0, i.jsx)(a.Modal, {
        actions: [
            {
                text: n ?? E,
                variant: "secondary",
                onClick: () => {
                    c?.(), f.onClose();
                },
            },
            {
                text: t,
                variant: "critical" === _ ? "critical-primary" : _,
                onClick: async () => {
                    S(void 0), A(!0);
                    try {
                        await u?.(y), f.onClose();
                    } catch (e) {
                        throw (A(!1), S((e) => e ?? m), e);
                    }
                },
                disabled: g,
                loading: g,
            },
        ],
        actionBarInput: null != l ? (0, i.jsx)(o.e, { ...l }) : void 0,
        role: "alertdialog",
        notice: null != T ? { message: T, type: "critical" } : void 0,
        ...f,
        children: h,
    });
}
