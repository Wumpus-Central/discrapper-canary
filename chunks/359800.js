n.d(t, { z: () => f });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    s = n(858899),
    a = n(475743),
    o = n(942370),
    u = n(211850),
    c = n(105292);
let d = "in-game-auth-check-modal";
function f(e, t) {
    let { showInGameModal: f = !0, showToastOnSuccess: m = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [g, A] = r.useState(!1),
        E = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                A(!0);
                let a = e(...r);
                return (
                    a === o._.RPC &&
                        f &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("630724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: d },
                        ),
                    a
                );
            },
            [e, A, f],
        ),
        C = (0, a.Ay)(t);
    return (
        r.useEffect(() => {
            if (g && !1 === C && !0 === t) {
                function e() {
                    (0, s.P0)({ text: c.intl.string(u.default.uG6teD), variant: "success" });
                }
                ((0, l.closeModal)(d),
                    A(!1),
                    m &&
                        ("visible" === document.visibilityState
                            ? e()
                            : document.addEventListener("visibilitychange", function t() {
                                  "visible" === document.visibilityState &&
                                      (e(), document.removeEventListener("visibilitychange", t));
                              })));
            }
        }, [g, t, C, m]),
        E
    );
}
