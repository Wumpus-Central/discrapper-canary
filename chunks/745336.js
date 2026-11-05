var n = t(477900),
    s = t(582128),
    i = t(192308),
    o = t(393033),
    r = t(36149),
    l = t(793163),
    c = t(40449),
    d = t(664188),
    u = t(792996),
    p = t(679017);
t.d(
    a,
    {},
    {
        default: function (e) {
            let { onClose: a, onComplete: t, onCancel: m, transitionState: f, webviewUrl: k } = e,
                w = (0, o.W$)(),
                C = s.useCallback(() => {
                    (t(), a());
                }, [t, a]),
                h = s.useCallback(() => {
                    (0, i.kB)(c.SW) && C();
                }, [C]);
            (0, r.dZ)(h);
            let b = s.useCallback(
                (e) => {
                    w && "" !== k && e?.data?.eventType === "Verification.Result" && C();
                },
                [k, C, w],
            );
            return (
                s.useEffect(
                    () => (
                        window.addEventListener("message", b),
                        () => {
                            window.removeEventListener("message", b);
                        }
                    ),
                    [b],
                ),
                (0, n.jsx)(l.A, {
                    parentComponent: "AgeVerificationModal",
                    transitionState: f,
                    onBackToStart: a,
                    onCancel: m,
                    children: (0, n.jsx)("iframe", {
                        id: "frame",
                        title: u.intl.string(d.default.eKo6mw),
                        src: k,
                        className: p.pU,
                        allow: "camera; microphone",
                    }),
                })
            );
        },
    },
);
