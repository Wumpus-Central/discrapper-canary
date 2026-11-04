var n = t(477900),
    s = t(582128),
    i = t(192308),
    o = t(393033),
    r = t(36149),
    c = t(793163),
    l = t(40449),
    d = t(679017);
t.d(
    a,
    {},
    {
        default: function (e) {
            let { onClose: a, onComplete: t, onCancel: p, transitionState: u, webviewUrl: k } = e,
                m = (0, o.W$)(),
                f = s.useCallback(() => {
                    (t(), a());
                }, [t, a]),
                C = s.useCallback(() => {
                    (0, i.kB)(l.SW) && f();
                }, [f]);
            (0, r.dZ)(C);
            let h = s.useCallback(
                (e) => {
                    m && "" !== k && e?.data?.eventType === "Verification.Result" && f();
                },
                [k, f, m],
            );
            return (
                s.useEffect(
                    () => (
                        window.addEventListener("message", h),
                        () => {
                            window.removeEventListener("message", h);
                        }
                    ),
                    [h],
                ),
                (0, n.jsx)(c.A, {
                    parentComponent: "AgeVerificationModal",
                    transitionState: u,
                    onBackToStart: a,
                    onCancel: p,
                    children: (0, n.jsx)("iframe", {
                        id: "frame",
                        src: k,
                        className: d.pU,
                        allow: "camera; microphone",
                    }),
                })
            );
        },
    },
);
