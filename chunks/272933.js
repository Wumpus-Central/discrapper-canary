n.d(t, { C: () => p }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(110924),
    s = n(524995),
    l = n(349350),
    c = n(388032);
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
        [_, m] = i.useState(!1),
        h = i.useCallback(
            function () {
                for (var t = arguments.length, i = Array(t), o = 0; o < t; o++) i[o] = arguments[o];
                m(!0);
                let l = e(...i);
                return (
                    l === s.r.RPC &&
                        u &&
                        (0, a.ZDy)(
                            async () => {
                                let { default: e } = await n.e("59371").then(n.bind(n, 762466));
                                return (t) => (0, r.jsx)(e, d({}, t));
                            },
                            { modalKey: f },
                        ),
                    l
                );
            },
            [e, m, u],
        ),
        g = (0, o.Z)(t);
    return (
        i.useEffect(() => {
            if (_ && !1 === g && !0 === t) {
                if (((0, a.Mr3)(f), m(!1), !p)) return;
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
        h
    );
}
