"use strict";
n.d(t, { M: () => _, a: () => d });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(862482),
    l = n(725570),
    u = n(397927),
    c = n(818284);
function d(e) {
    let t,
        n,
        {
            header: a,
            children: d,
            confirmText: _,
            cancelText: f,
            className: p,
            onConfirm: h,
            onCancel: m,
            onClose: g,
            onCloseCallback: E,
            bodyClassName: A,
            transitionState: I,
            loading: T = !1,
            confirmButtonColor: y = o.$n.Colors.RED,
            focusCancel: S = !1,
            impression: v,
        } = e,
        C = i.useRef(null);
    return (
        i.useEffect(() => {
            S || setTimeout(() => C.current?.focus(), 0);
        }, [S]),
        i.useLayoutEffect(() => () => E?.()),
        null != f &&
            (t = (0, r.jsx)(o.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: o.$n.Looks.FILLED,
                color: o.$n.Colors.PRIMARY,
                className: c.x,
                size: o.$n.Sizes.MEDIUM,
                disabled: T,
                onClick: () => {
                    m?.(), g();
                },
                autoFocus: S,
                children: f,
            })),
        null != _ &&
            (n = (0, r.jsx)(o.$n, {
                "data-migration-pending": !0,
                buttonRef: C,
                type: "submit",
                size: o.$n.Sizes.MEDIUM,
                color: y,
                submitting: T,
                onClick: async () => {
                    try {
                        await h?.(), g();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !S,
                children: _,
            })),
        (0, r.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: p,
            transitionState: I,
            impression: v,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, r.jsx)(l.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, r.jsx)(u.Heading, { variant: "heading-lg/semibold", children: a }),
                      })
                    : null,
                (0, r.jsx)(l.$m, { "data-migration-pending": !0, className: s()(c.Q, A), children: d }),
                (0, r.jsxs)(l.jl, { "data-migration-pending": !0, children: [n, t] }),
            ],
        })
    );
}
function _(e) {
    return (0, r.jsx)(l.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(d, { ...t, ...e }),
    });
}
