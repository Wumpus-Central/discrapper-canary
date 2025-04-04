n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(952265),
    o = n(468026),
    a = n(388032);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = {
    show(e) {
        let { title: t, body: n, confirmColor: a, confirmText: s, cancelText: c, onConfirm: d, onCancel: f, onCloseCallback: _, secondaryConfirmText: p, onConfirmSecondary: h, className: m, titleClassName: g, contextKey: E } = e;
        (0, i.h7)(
            (e) =>
                (0, r.jsx)(
                    o.default,
                    u(l({}, e), {
                        title: t,
                        body: n,
                        confirmColor: a,
                        confirmText: s,
                        cancelText: c,
                        onConfirm: d,
                        onCancel: f,
                        secondaryConfirmText: p,
                        onConfirmSecondary: h,
                        className: m,
                        titleClassName: g
                    })
                ),
            { onCloseCallback: _ },
            E
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show(
                l(
                    {
                        onConfirm() {
                            t(!0);
                        },
                        cancelText: a.NW.string(a.t['ETE/oK']),
                        onCancel() {
                            t(!1);
                        }
                    },
                    e
                )
            );
        });
    }
};
