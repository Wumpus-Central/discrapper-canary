n.d(t, {
    M: () => _,
    a: () => p,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(862482),
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
            bodyClassName: y,
            transitionState: b,
            loading: O = !1,
            confirmButtonColor: v = s.$n.Colors.RED,
            focusCancel: A = !1,
            impression: I,
        } = e,
        S = i.useRef(null);
    return (
        i.useEffect(() => {
            A ||
                setTimeout(() => {
                    var e;
                    return null == (e = S.current) ? void 0 : e.focus();
                }, 0);
        }, [A]),
        i.useLayoutEffect(() => () => (null == E ? void 0 : E())),
        null != p &&
            (t = (0, r.jsx)(s.$n, {
                "data-migration-pending": !0,
                type: "button",
                look: s.$n.Looks.FILLED,
                color: s.$n.Colors.PRIMARY,
                className: u.x,
                size: s.$n.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    null == m || m(), g();
                },
                autoFocus: A,
                children: p,
            })),
        null != f &&
            (n = (0, r.jsx)(s.$n, {
                "data-migration-pending": !0,
                buttonRef: S,
                type: "submit",
                size: s.$n.Sizes.MEDIUM,
                color: v,
                submitting: O,
                onClick: async () => {
                    try {
                        await (null == h ? void 0 : h()), g();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !A,
                children: f,
            })),
        (0, r.jsxs)(l.EO, {
            "data-migration-pending": !0,
            className: _,
            transitionState: b,
            impression: I,
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
                    className: o()(u.Q, y),
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
