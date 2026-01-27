n.d(t, {
    z: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(475743),
    s = n(362490),
    o = n(271469),
    c = n(985018);
let u = "in-game-auth-check-modal";

function d(e, t) {
    let { showInGameModal: d = !0, showToastOnSuccess: p = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [m, f] = i.useState(!1),
        g = i.useCallback(
            function () {
                for (var t = arguments.length, i = Array(t), a = 0; a < t; a++) i[a] = arguments[a];
                f(!0);
                let o = e(...i);
                return (
                    o === s._M.RPC &&
                        d &&
                        (0, l.mMO)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) =>
                                    (0, r.jsx)(
                                        e,
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
                                        })({}, t),
                                    );
                            },
                            {
                                modalKey: u,
                            },
                        ),
                    o
                );
            },
            [e, f, d],
        ),
        h = (0, a.A)(t);
    return (
        i.useEffect(() => {
            if (m && !1 === h && !0 === t) {
                if (((0, l.OoC)(u), f(!1), !p)) return;
                let e = () => {
                    (0, l.showToast)({
                        id: "account-linked-toast",
                        message: c.intl.string(o.default.uG6teD),
                        type: l.ToastType.SUCCESS,
                    });
                };
                if ("visible" === document.visibilityState) e();
                else {
                    let t = () => {
                        "visible" === document.visibilityState &&
                            (e(), document.removeEventListener("visibilitychange", t));
                    };
                    document.addEventListener("visibilitychange", t);
                }
            }
        }, [m, t, h, p]),
        g
    );
}
