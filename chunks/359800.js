n.d(t, {
    z: () => p,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(475743),
    o = n(362490),
    l = n(271469),
    c = n(985018);

function u(e, t, n) {
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

function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
let f = "in-game-auth-check-modal";

function p(e, t) {
    let { showInGameModal: u = !0, showToastOnSuccess: p = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [_, h] = i.useState(!1),
        m = i.useCallback(
            function () {
                for (var t = arguments.length, i = Array(t), s = 0; s < t; s++) i[s] = arguments[s];
                h(!0);
                let l = e(...i);
                return (
                    l === o._M.RPC &&
                        u &&
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, r.jsx)(e, d({}, t));
                            },
                            {
                                modalKey: f,
                            },
                        ),
                    l
                );
            },
            [e, h, u],
        ),
        g = (0, s.A)(t);
    return (
        i.useEffect(() => {
            if (_ && !1 === g && !0 === t) {
                if (((0, a.OoC)(f), h(!1), !p)) return;
                let e = () => {
                    (0, a.showToast)({
                        id: "account-linked-toast",
                        message: c.intl.string(l.default.uG6teD),
                        type: a.ToastType.SUCCESS,
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
        }, [_, t, g, p]),
        m
    );
}
