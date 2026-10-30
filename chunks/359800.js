n.d(e, { z: () => g });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    u = n(858899),
    a = n(475743),
    o = n(942370),
    s = n(673051),
    c = n(105292);
let f = "in-game-auth-check-modal";
function g(t, e) {
    let { showInGameModal: g = !0, showToastOnSuccess: m = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [d, A] = r.useState(!1),
        I = r.useCallback(
            function () {
                for (var e = arguments.length, r = Array(e), u = 0; u < e; u++) r[u] = arguments[u];
                A(!0);
                let a = t(...r);
                return (
                    a === o._.RPC &&
                        g &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: t } = await n.e("630724").then(n.bind(n, 272047));
                                return (e) => (0, i.jsx)(t, { ...e });
                            },
                            { modalKey: f },
                        ),
                    a
                );
            },
            [t, A, g],
        ),
        E = (0, a.Ay)(e);
    return (
        r.useEffect(() => {
            if (d && !1 === E && !0 === e) {
                function t() {
                    (0, u.P0)({ text: c.intl.string(s.default.uG6teD), variant: "success" });
                }
                ((0, l.closeModal)(f),
                    A(!1),
                    m &&
                        ("visible" === document.visibilityState
                            ? t()
                            : document.addEventListener("visibilitychange", function e() {
                                  "visible" === document.visibilityState &&
                                      (t(), document.removeEventListener("visibilitychange", e));
                              })));
            }
        }, [d, e, E, m]),
        I
    );
}
