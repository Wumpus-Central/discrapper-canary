n.d(t, { z: () => m });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    s = n(739187),
    o = n(97483),
    u = n(475743),
    a = n(942370),
    c = n(211850),
    d = n(375708);
let f = "in-game-auth-check-modal";
function m(e, t) {
    let { showInGameModal: m = !0, showToastOnSuccess: g = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [E, A] = r.useState(!1),
        C = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                A(!0);
                let o = e(...r);
                return (
                    o === a._.RPC &&
                        m &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("630724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: f },
                        ),
                    o
                );
            },
            [e, A, m],
        ),
        _ = (0, u.Ay)(t);
    return (
        r.useEffect(() => {
            if (E && !1 === _ && !0 === t) {
                function e() {
                    (0, s.P)({
                        id: "account-linked-toast",
                        message: d.intl.string(c.default.uG6teD),
                        type: o.Ck.SUCCESS,
                    });
                }
                ((0, l.closeModal)(f),
                    A(!1),
                    g &&
                        ("visible" === document.visibilityState
                            ? e()
                            : document.addEventListener("visibilitychange", function t() {
                                  "visible" === document.visibilityState &&
                                      (e(), document.removeEventListener("visibilitychange", t));
                              })));
            }
        }, [E, t, _, g]),
        C
    );
}
