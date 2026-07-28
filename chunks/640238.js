"use strict";
n.d(t, { M: () => E, a: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(862482),
    o = n(935462),
    d = n(725570),
    c = n(297264),
    u = n(648795);
function _(e) {
    let t,
        n,
        {
            header: a,
            children: d,
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
            confirmButtonColor: S = l.$n.Colors.RED,
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
            (t = (0, i.jsx)(l.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: l.$n.Looks.FILLED,
                color: l.$n.Colors.PRIMARY,
                className: u.x,
                size: l.$n.Sizes.MEDIUM,
                disabled: g,
                onClick: () => {
                    I?.(), f();
                },
                autoFocus: N,
                children: E,
            })),
        null != _ &&
            (n = (0, i.jsx)(l.$n, {
                "data-migration-pending": !0,
                buttonRef: O,
                type: "submit",
                size: l.$n.Sizes.MEDIUM,
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
        (0, i.jsxs)(o.EO, {
            "data-migration-pending": !0,
            className: A,
            transitionState: m,
            impression: C,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, i.jsx)(o.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, i.jsx)(c.D, { variant: "heading-lg/semibold", children: a }),
                      })
                    : null,
                (0, i.jsx)(o.$m, { "data-migration-pending": !0, className: s()(u.Q, T), children: d }),
                (0, i.jsxs)(o.jl, { "data-migration-pending": !0, children: [n, t] }),
            ],
        })
    );
}
function E(e) {
    return (0, i.jsx)(d.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, i.jsx)(_, { ...t, ...e }),
    });
}
