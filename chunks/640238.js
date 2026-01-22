n.d(t, {
    M: () => _,
    VoidConfirmModal: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(862482),
    l = n(725570),
    c = n(397927),
    u = n(818284);

function d(e, t, n) {
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

function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}

function p(e) {
    let t,
        n,
        {
            header: a,
            children: d,
            confirmText: f,
            cancelText: p,
            className: _,
            onConfirm: h,
            onCancel: m,
            onClose: g,
            onCloseCallback: E,
            bodyClassName: b,
            transitionState: y,
            loading: O = !1,
            confirmButtonColor: A = o.$n.Colors.RED,
            focusCancel: v = !1,
            impression: S,
        } = e,
        I = i.useRef(null);
    return (
        i.useEffect(() => {
            v ||
                setTimeout(() => {
                    var e;
                    return null == (e = I.current) ? void 0 : e.focus();
                }, 0);
        }, [v]),
        i.useLayoutEffect(() => () => (null == E ? void 0 : E())),
        null != p &&
            (t = (0, r.jsx)(o.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: o.$n.Looks.FILLED,
                color: o.$n.Colors.PRIMARY,
                className: u.x,
                size: o.$n.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    null == m || m(), g();
                },
                autoFocus: v,
                children: p,
            })),
        null != f &&
            (n = (0, r.jsx)(o.$n, {
                "data-migration-pending": !0,
                buttonRef: I,
                type: "submit",
                size: o.$n.Sizes.MEDIUM,
                color: A,
                submitting: O,
                onClick: async () => {
                    try {
                        await (null == h ? void 0 : h()), g();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !v,
                children: f,
            })),
        (0, r.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: _,
            transitionState: y,
            impression: S,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, r.jsx)(l.rQ, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-lg/semibold",
                              children: a,
                          }),
                      })
                    : null,
                (0, r.jsx)(l.$m, {
                    "data-migration-pending": !0,
                    className: s()(u.Q, b),
                    children: d,
                }),
                (0, r.jsxs)(l.jl, {
                    "data-migration-pending": !0,
                    children: [n, t],
                }),
            ],
        })
    );
}

function _(e) {
    return (0, r.jsx)(l.aF, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(p, f({}, t, e)),
    });
}
