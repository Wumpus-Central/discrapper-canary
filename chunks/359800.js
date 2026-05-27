n.d(t, { z: () => h });
var i = n(627968),
    l = n(64700),
    s = n(192308),
    r = n(691540),
    a = n(97483),
    o = n(475743),
    d = n(942370),
    c = n(311350),
    u = n(375708);
let m = "in-game-auth-check-modal";
function h(e, t) {
    let { showInGameModal: h = !0, showToastOnSuccess: g = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [p, A] = l.useState(!1),
        x = l.useCallback(
            function () {
                for (var t = arguments.length, l = Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                A(!0);
                let a = e(...l);
                return (
                    a === d._M.RPC &&
                        h &&
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: m },
                        ),
                    a
                );
            },
            [e, A, h],
        ),
        f = (0, o.A)(t);
    return (
        l.useEffect(() => {
            if (p && !1 === f && !0 === t) {
                if (((0, s.closeModal)(m), A(!1), !g)) return;
                let e = () => {
                    (0, r.P0)({
                        id: "account-linked-toast",
                        message: u.intl.string(c.default.uG6teD),
                        type: a.Ck.SUCCESS,
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
        }, [p, t, f, g]),
        x
    );
}
