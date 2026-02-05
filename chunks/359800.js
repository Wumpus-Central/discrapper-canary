n.d(t, { z: () => u });
var i = n(627968),
    l = n(64700),
    a = n(397927),
    r = n(475743),
    s = n(362490),
    o = n(271469),
    d = n(985018);
let c = "in-game-auth-check-modal";
function u(e, t) {
    let { showInGameModal: u = !0, showToastOnSuccess: m = !0 } =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        [_, h] = l.useState(!1),
        p = l.useCallback(
            function () {
                for (var t = arguments.length, l = Array(t), r = 0; r < t; r++) l[r] = arguments[r];
                h(!0);
                let o = e(...l);
                return (
                    o === s._M.RPC &&
                        u &&
                        (0, a.mMO)(
                            async () => {
                                let { default: e } = await n.e("30724").then(n.bind(n, 272047));
                                return (t) => (0, i.jsx)(e, { ...t });
                            },
                            { modalKey: c },
                        ),
                    o
                );
            },
            [e, h, u],
        ),
        g = (0, r.A)(t);
    return (
        l.useEffect(() => {
            if (_ && !1 === g && !0 === t) {
                if (((0, a.OoC)(c), h(!1), !m)) return;
                let e = () => {
                    (0, a.showToast)({
                        id: "account-linked-toast",
                        message: d.intl.string(o.default.uG6teD),
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
        }, [_, t, g, m]),
        p
    );
}
