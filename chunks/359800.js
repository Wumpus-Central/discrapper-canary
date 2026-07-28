n.d(t, { z: () => m });
var i = n(477900),
    r = n(582128),
    l = n(192308),
    a = n(691540),
    s = n(97483),
    o = n(475743),
    u = n(942370),
    c = n(311350),
    d = n(375708);
let f = "in-game-auth-check-modal";
function m(e, t) {
    let { showInGameModal: m = !0, showToastOnSuccess: g = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [A, E] = r.useState(!1),
        C = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                E(!0);
                let s = e(...r);
                return (
                    s === u._M.RPC &&
                        m &&
                        (0, l.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: f },
                        ),
                    s
                );
            },
            [e, E, m],
        ),
        _ = (0, o.A)(t);
    return (
        r.useEffect(() => {
            if (A && !1 === _ && !0 === t) {
                function e() {
                    (0, a.P0)({
                        id: "account-linked-toast",
                        message: d.intl.string(c.default.uG6teD),
                        type: s.Ck.SUCCESS,
                    });
                }
                (0, l.closeModal)(f),
                    E(!1),
                    g &&
                        ("visible" === document.visibilityState
                            ? e()
                            : document.addEventListener("visibilitychange", function t() {
                                  "visible" === document.visibilityState &&
                                      (e(), document.removeEventListener("visibilitychange", t));
                              }));
            }
        }, [A, t, _, g]),
        C
    );
}
