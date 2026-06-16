"use strict";
n.d(t, { M: () => h, a: () => _ });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(862482),
    l = n(935462),
    u = n(725570),
    c = n(534514),
    d = n(655923);
function _(e) {
    let t,
        n,
        {
            header: s,
            children: u,
            confirmText: _,
            cancelText: h,
            className: f,
            onConfirm: p,
            onCancel: E,
            onClose: m,
            onCloseCallback: g,
            bodyClassName: A,
            transitionState: I,
            loading: T = !1,
            confirmButtonColor: S = o.$n.Colors.RED,
            focusCancel: y = !1,
            impression: C,
        } = e,
        N = r.useRef(null);
    return (
        r.useEffect(() => {
            y || setTimeout(() => N.current?.focus(), 0);
        }, [y]),
        r.useLayoutEffect(() => () => g?.()),
        null != h &&
            (t = (0, i.jsx)(o.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: o.$n.Looks.FILLED,
                color: o.$n.Colors.PRIMARY,
                className: d.x,
                size: o.$n.Sizes.MEDIUM,
                disabled: T,
                onClick: () => {
                    E?.(), m();
                },
                autoFocus: y,
                children: h,
            })),
        null != _ &&
            (n = (0, i.jsx)(o.$n, {
                "data-migration-pending": !0,
                buttonRef: N,
                type: "submit",
                size: o.$n.Sizes.MEDIUM,
                color: S,
                submitting: T,
                onClick: async () => {
                    try {
                        await p?.(), m();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !y,
                children: _,
            })),
        (0, i.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: f,
            transitionState: I,
            impression: C,
            parentComponent: "ConfirmModal",
            children: [
                null != s
                    ? (0, i.jsx)(l.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: s }),
                      })
                    : null,
                (0, i.jsx)(l.$m, { "data-migration-pending": !0, className: a()(d.Q, A), children: u }),
                (0, i.jsxs)(l.jl, { "data-migration-pending": !0, children: [n, t] }),
            ],
        })
    );
}
function h(e) {
    return (0, i.jsx)(u.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, i.jsx)(_, { ...t, ...e }),
    });
}
