n.d(t, { Z: () => s }), n(388685);
var r = n(951288),
    o = n(647438),
    l = n(264418),
    i = n(493773),
    a = n(921944);
function s(e) {
    let { dismissibleContentType: t, targetElementRef: n, visibleContent: s, markAsDismissed: c, props: u } = e,
        [d, f] = o.useState(!1),
        b = o.useRef(null);
    (0, i.ZP)(
        () => (
            (b.current = setTimeout(() => f(!0), 250)),
            () => {
                clearTimeout(b.current), c(a.L.AUTO_DISMISS);
            }
        ),
    );
    let m = o.useCallback(
        (e) => {
            c("user:explicit" === e ? a.L.USER_DISMISS : a.L.AUTO_DISMISS);
        },
        [c],
    );
    return (0, r.jsx)(
        l.Z,
        (function (e) {
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
                        var r;
                        (r = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })(
            {
                targetElementRef: n,
                shouldShow: d && s === t,
                onRequestClose: m,
            },
            u,
        ),
    );
}
