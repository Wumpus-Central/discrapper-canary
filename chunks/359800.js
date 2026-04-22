n.d(t, { z: () => _ });
var i = n(627968),
    l = n(64700),
    a = n(192308),
    s = n(691540),
    r = n(97483),
    o = n(475743),
    d = n(362490),
    c = n(311350),
    u = n(985018);
let m = "in-game-auth-check-modal";
function _(e, t) {
    let { showInGameModal: _ = !0, showToastOnSuccess: h = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [p, g] = l.useState(!1),
        A = l.useCallback(
            function () {
                for (var t = arguments.length, l = Array(t), s = 0; s < t; s++) l[s] = arguments[s];
                g(!0);
                let r = e(...l);
                return (
                    r === d._M.RPC &&
                        _ &&
                        (0, a.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: m },
                        ),
                    r
                );
            },
            [e, g, _],
        ),
        f = (0, o.A)(t);
    return (
        l.useEffect(() => {
            if (p && !1 === f && !0 === t) {
                if (((0, a.closeModal)(m), g(!1), !h)) return;
                let e = () => {
                    (0, s.P0)({
                        id: "account-linked-toast",
                        message: u.intl.string(c.default.uG6teD),
                        type: r.Ck.SUCCESS,
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
        }, [p, t, f, h]),
        A
    );
}
