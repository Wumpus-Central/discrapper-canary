n.d(t, { z: () => f });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    s = n(376357),
    o = n(475743),
    u = n(942370),
    a = n(211850),
    c = n(660183);
let d = "in-game-auth-check-modal";
function f(e, t) {
    let { showInGameModal: f = !0, showToastOnSuccess: m = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [g, E] = r.useState(!1),
        A = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), s = 0; s < t; s++) r[s] = arguments[s];
                E(!0);
                let o = e(...r);
                return (
                    o === u._.RPC &&
                        f &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("630724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: d },
                        ),
                    o
                );
            },
            [e, E, f],
        ),
        C = (0, o.Ay)(t);
    return (
        r.useEffect(() => {
            if (g && !1 === C && !0 === t) {
                function e() {
                    (0, s.P0)({
                        id: "account-linked-toast",
                        message: c.intl.string(a.default.uG6teD),
                        type: s.Ck.SUCCESS,
                    });
                }
                ((0, l.closeModal)(d),
                    E(!1),
                    m &&
                        ("visible" === document.visibilityState
                            ? e()
                            : document.addEventListener("visibilitychange", function t() {
                                  "visible" === document.visibilityState &&
                                      (e(), document.removeEventListener("visibilitychange", t));
                              })));
            }
        }, [g, t, C, m]),
        A
    );
}
