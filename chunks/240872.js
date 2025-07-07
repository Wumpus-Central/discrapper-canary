(n.d(t, { Z: () => p }), n(539854));
var r = n(255367);
n(73800);
var i = n(952265),
    a = n(82659),
    o = n(481060),
    s = n(468026),
    l = n(724723),
    c = n(388032);
function u(e, t, n) {
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
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {
    show(e) {
        let { title: t, body: n, confirmColor: u, confirmText: f, confirmVariant: p = 'primary', cancelText: h, onConfirm: m, onCancel: g, onCloseCallback: E, secondaryConfirmText: b, onConfirmSecondary: y, className: O, titleClassName: v, contextKey: I } = e,
            T = l.Z.getCurrentConfig({ location: 'AlertActionCreators' }, { autoTrackExposure: !0 }).enabled;
        (0, i.h7)(
            (e) => {
                if (null == b && T) {
                    let i = [];
                    return (
                        null != h &&
                            '' !== h &&
                            i.push({
                                text: h,
                                onClick: () => {
                                    (null == g || g(), e.onClose());
                                },
                                variant: 'secondary'
                            }),
                        i.push({
                            text: null != f ? f : c.intl.string(c.t.BddRzc),
                            onClick: () => {
                                (null == m || m(), e.onClose());
                            },
                            variant: p
                        }),
                        (0, r.jsx)(
                            a.u,
                            _(d({}, e), {
                                size: 'sm',
                                heading: t,
                                headerBody: n,
                                actions: i
                            })
                        )
                    );
                }
                return (0, r.jsx)(
                    s.default,
                    _(d({}, e), {
                        title: t,
                        body: n,
                        confirmColor: 'critical-primary' === p ? o.Ttl.RED : o.Ttl.BRAND,
                        confirmText: f,
                        cancelText: h,
                        onConfirm: m,
                        onCancel: g,
                        secondaryConfirmText: b,
                        onConfirmSecondary: y,
                        className: O,
                        titleClassName: v
                    })
                );
            },
            { onCloseCallback: E },
            I
        );
    },
    close() {},
    confirm(e) {
        return new Promise((t) => {
            this.show(
                d(
                    {
                        onConfirm() {
                            t(!0);
                        },
                        cancelText: c.intl.string(c.t['ETE/oK']),
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
