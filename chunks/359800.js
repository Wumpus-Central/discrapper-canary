"use strict";
n.d(t, { z: () => h });
var i = n(627968),
    r = n(64700),
    s = n(192308),
    a = n(691540),
    o = n(97483),
    l = n(475743),
    u = n(942370),
    c = n(311350),
    d = n(375708);
let _ = "in-game-auth-check-modal";
function h(e, t) {
    let { showInGameModal: h = !0, showToastOnSuccess: f = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [p, E] = r.useState(!1),
        m = r.useCallback(
            function () {
                for (var t = arguments.length, r = Array(t), a = 0; a < t; a++) r[a] = arguments[a];
                E(!0);
                let o = e(...r);
                return (
                    o === u._M.RPC &&
                        h &&
                        (0, s.openModalLazy)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: _ },
                        ),
                    o
                );
            },
            [e, E, h],
        ),
        g = (0, l.A)(t);
    return (
        r.useEffect(() => {
            if (p && !1 === g && !0 === t) {
                if (((0, s.closeModal)(_), E(!1), !f)) return;
                let e = () => {
                    (0, a.P0)({
                        id: "account-linked-toast",
                        message: d.intl.string(c.default.uG6teD),
                        type: o.Ck.SUCCESS,
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
        }, [p, t, g, f]),
        m
    );
}
