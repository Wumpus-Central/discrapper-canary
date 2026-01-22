r.d(t, { A: () => i }), r(896048);
var n = r(627968),
    l = r(64700),
    o = r(43105),
    a = r(964486),
    c = r(49999);
function i(e) {
    let { dismissibleContentType: t, targetElementRef: r, visibleContent: i, markAsDismissed: s, props: u } = e,
        [f, b] = l.useState(!1),
        y = l.useRef(null);
    (0, a.Ay)(
        () => (
            (y.current = setTimeout(() => b(!0), 250)),
            () => {
                clearTimeout(y.current), s(c.i.AUTO_DISMISS);
            }
        ),
    );
    let d = l.useCallback(
        (e) => {
            s("user:explicit" === e ? c.i.USER_DISMISS : c.i.AUTO_DISMISS);
        },
        [s],
    );
    return (0, n.jsx)(
        o.h,
        (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })(
            {
                targetElementRef: r,
                shouldShow: f && i === t,
                onRequestClose: d,
            },
            u,
        ),
    );
}
