n.d(t, { z: () => g });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    s = n(691540),
    a = n(97483),
    o = n(475743),
    u = n(942370),
    c = n(311350),
    d = n(375708);
let f = "in-game-auth-check-modal";
function g(e, t) {
    let { showInGameModal: g = !0, showToastOnSuccess: m = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [E, A] = r.useState(!1),
        C = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                A(!0);
                let a = e(...r);
                return (
                    a === u._M.RPC &&
                        g &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: f },
                        ),
                    a
                );
            },
            [e, A, g],
        ),
        _ = (0, o.Ay)(t);
    return (
        r.useEffect(() => {
            if (E && !1 === _ && !0 === t) {
                function e() {
                    (0, s.P0)({
                        id: "account-linked-toast",
                        message: d.intl.string(c.default.uG6teD),
                        type: a.Ck.SUCCESS,
                    });
                }
                (0, l.closeModal)(f),
                    A(!1),
                    m &&
                        ("visible" === document.visibilityState
                            ? e()
                            : document.addEventListener("visibilitychange", function t() {
                                  "visible" === document.visibilityState &&
                                      (e(), document.removeEventListener("visibilitychange", t));
                              }));
            }
        }, [E, t, _, m]),
        C
    );
}
