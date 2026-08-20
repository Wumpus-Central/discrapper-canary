"use strict";
n.d(t, { M: () => E, a: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(297264),
    o = n(862482),
    d = n(935462),
    c = n(725570),
    u = n(344146);
function _(e) {
    let t,
        n,
        {
            header: a,
            children: c,
            confirmText: _,
            cancelText: E,
            className: A,
            onConfirm: h,
            onCancel: I,
            onClose: f,
            onCloseCallback: p,
            bodyClassName: T,
            transitionState: m,
            loading: g = !1,
            confirmButtonColor: S = o.$n.Colors.RED,
            focusCancel: N = !1,
            impression: C,
        } = e,
        O = r.useRef(null);
    return (
        r.useEffect(() => {
            N || setTimeout(() => O.current?.focus(), 0);
        }, [N]),
        r.useLayoutEffect(() => () => p?.()),
        null != E &&
            (t = (0, i.jsx)(o.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: o.$n.Looks.FILLED,
                color: o.$n.Colors.PRIMARY,
                className: u.x,
                size: o.$n.Sizes.MEDIUM,
                disabled: g,
                onClick: () => {
                    I?.(), f();
                },
                autoFocus: N,
                children: E,
            })),
        null != _ &&
            (n = (0, i.jsx)(o.$n, {
                "data-migration-pending": !0,
                buttonRef: O,
                type: "submit",
                size: o.$n.Sizes.MEDIUM,
                color: S,
                submitting: g,
                onClick: async () => {
                    try {
                        await h?.(), f();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !N,
                children: _,
            })),
        (0, i.jsxs)(d.EO, {
            "data-migration-pending": !0,
            className: A,
            transitionState: m,
            impression: C,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, i.jsx)(d.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, i.jsx)(l.D, { variant: "heading-lg/semibold", children: a }),
                      })
                    : null,
                (0, i.jsx)(d.$m, { "data-migration-pending": !0, className: s()(u.Q, T), children: c }),
                (0, i.jsxs)(d.jl, { "data-migration-pending": !0, children: [n, t] }),
            ],
        })
    );
}
function E(e) {
    return (0, i.jsx)(c.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, i.jsx)(_, { ...t, ...e }),
    });
}
