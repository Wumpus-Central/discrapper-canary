n.d(t, {
    S: () => _,
    VoidConfirmModal: () => p,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(693789),
    l = n(709692),
    c = n(481060),
    u = n(933434);
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
            onConfirm: m,
            onCancel: h,
            onClose: g,
            onCloseCallback: E,
            bodyClassName: b,
            transitionState: y,
            loading: O = !1,
            confirmButtonColor: v = s.zx.Colors.RED,
            focusCancel: S = !1,
            impression: I,
        } = e,
        T = i.useRef(null);
    return (
        i.useEffect(() => {
            S ||
                setTimeout(() => {
                    var e;
                    return null == (e = T.current) ? void 0 : e.focus();
                }, 0);
        }, [S]),
        i.useLayoutEffect(() => () => (null == E ? void 0 : E())),
        null != p &&
            (t = (0, r.jsx)(s.zx, {
                "data-migration-pending": !0,
                type: "button",
                look: s.zx.Looks.FILLED,
                color: s.zx.Colors.PRIMARY,
                className: u.cancelButton,
                size: s.zx.Sizes.MEDIUM,
                disabled: O,
                onClick: () => {
                    null == h || h(), g();
                },
                autoFocus: S,
                children: p,
            })),
        null != f &&
            (n = (0, r.jsx)(s.zx, {
                "data-migration-pending": !0,
                buttonRef: T,
                type: "submit",
                size: s.zx.Sizes.MEDIUM,
                color: v,
                submitting: O,
                onClick: async () => {
                    try {
                        await (null == m ? void 0 : m()), g();
                    } catch (e) {
                        throw e;
                    }
                },
                autoFocus: !S,
                children: f,
            })),
        (0, r.jsxs)(l.Y0, {
            className: _,
            transitionState: y,
            impression: I,
            parentComponent: "ConfirmModal",
            children: [
                null != a
                    ? (0, r.jsx)(l.xB, {
                          "data-migration-pending": !0,
                          separator: !1,
                          children: (0, r.jsx)(c.Heading, {
                              variant: "heading-lg/semibold",
                              children: a,
                          }),
                      })
                    : null,
                (0, r.jsx)(l.hz, {
                    "data-migration-pending": !0,
                    className: o()(u.content, b),
                    children: d,
                }),
                (0, r.jsxs)(l.mz, {
                    "data-migration-pending": !0,
                    children: [n, t],
                }),
            ],
        })
    );
}
function _(e) {
    return (0, r.jsx)(l.u_, {
        onCloseRequest: e.dismissable ? e.onCancel : null,
        renderModal: (t) => (0, r.jsx)(p, f({}, t, e)),
    });
}
