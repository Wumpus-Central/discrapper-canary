t.d(a, { default: () => p });
var n = t(627968),
    s = t(64700),
    i = t(192308),
    o = t(393033),
    r = t(36149),
    c = t(793163),
    l = t(40449),
    d = t(788920);
let p = function (e) {
    let { onClose: a, onComplete: t, onCancel: p, transitionState: u, webviewUrl: m } = e,
        f = (0, o.W$)(),
        h = s.useCallback(() => {
            t(), a();
        }, [t, a]),
        k = s.useCallback(() => {
            (0, i.hasModalOpen)(l.SW) && h();
        }, [h]);
    (0, r.dZ)(k);
    let C = s.useCallback(
        (e) => {
            f && "" !== m && e?.data?.eventType === "Verification.Result" && h();
        },
        [m, h, f],
    );
    return (
        s.useEffect(
            () => (
                window.addEventListener("message", C),
                () => {
                    window.removeEventListener("message", C);
                }
            ),
            [C],
        ),
        (0, n.jsx)(c.A, {
            parentComponent: "AgeVerificationModal",
            transitionState: u,
            onBackToStart: a,
            onCancel: p,
            children: (0, n.jsx)("iframe", { id: "frame", src: m, className: d.pU, allow: "camera; microphone" }),
        })
    );
};
