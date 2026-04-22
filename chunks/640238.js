"use strict";
n.d(t, { M: () => f, a: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(862482),
    l = n(935462),
    u = n(725570),
    d = n(534514),
    c = n(655923);
function _(e) {
    let t,
        n,
        {
            header: s,
            children: u,
            confirmText: _,
            cancelText: f,
            className: E,
            onConfirm: h,
            onCancel: p,
            onClose: m,
            onCloseCallback: g,
            bodyClassName: A,
            transitionState: I,
            loading: T = !1,
            confirmButtonColor: S = o.$n.Colors.RED,
            focusCancel: y = !1,
            impression: N,
        } = e,
        O = i.useRef(null);
    return (
        i.useEffect(() => {
            y || setTimeout(() => O.current?.focus(), 0);
        }, [y]),
        i.useLayoutEffect(() => () => g?.()),
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
                    p?.(), m();
                },
                autoFocus: y,
                children: f,
            })),
        null != _ &&
            (n = (0, r.jsx)(o.$n, {
                "data-migration-pending": !0,
                buttonRef: O,
                type: "submit",
                size: o.$n.Sizes.MEDIUM,
                color: S,
                submitting: T,
                onClick: async () => {
                    try {
                        await h?.(), m();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !y,
                children: _,
            })),
        (0, r.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: E,
            transitionState: I,
            impression: N,
            parentComponent: "ConfirmModal",
            children: [
                null != s
                    ? (0, r.jsx)(l.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, r.jsx)(d.D, { variant: "heading-lg/semibold", children: s }),
                      })
                    : null,
                (0, r.jsx)(l.$m, { "data-migration-pending": !0, className: a()(c.Q, A), children: u }),
                (0, r.jsxs)(l.jl, { "data-migration-pending": !0, children: [n, t] }),
            ],
        })
    );
}
function f(e) {
    return (0, r.jsx)(u.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(_, { ...t, ...e }),
    });
}
