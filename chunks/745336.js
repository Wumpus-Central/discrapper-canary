n.d(a, {
    default: () => f,
});
var s = n(627968),
    t = n(64700),
    i = n(503698),
    r = n.n(i),
    c = n(397927),
    l = n(393033),
    d = n(36149),
    o = n(40449),
    p = n(985018),
    u = n(831498);
let f = function (e) {
    let { onClose: a, onComplete: n, onCancel: i, transitionState: f, webviewUrl: b } = e,
        m = (0, l.W$)(),
        h = t.useCallback(() => {
            n(), a();
        }, [n, a]),
        g = t.useCallback(() => {
            (0, c.kBI)(o.SW) && h();
        }, [h]);
    (0, d.dZ)(g);
    let j = t.useCallback(
        (e) => {
            if (m && "" !== b) {
                var a;
                (null == e || null == (a = e.data) ? void 0 : a.eventType) === "Verification.Result" && h();
            }
        },
        [b, h, m],
    );
    return (
        t.useEffect(
            () => (
                window.addEventListener("message", j),
                () => {
                    window.removeEventListener("message", j);
                }
            ),
            [j],
        ),
        (0, s.jsxs)(c.EOs, {
            "data-migration-pending": !0,
            transitionState: f,
            className: r()(u.zr, u.rh),
            parentComponent: "AgeVerificationModal",
            size: c.rIJ.MEDIUM,
            children: [
                (0, s.jsx)(c.$mQ, {
                    "data-migration-pending": !0,
                    className: r()(u.Qs, u.WM),
                    scrollbarType: "none",
                    children: (0, s.jsx)("iframe", {
                        id: "frame",
                        src: b,
                        className: u.pU,
                        allow: "camera; microphone",
                    }),
                }),
                (0, s.jsx)(c.jlY, {
                    "data-migration-pending": !0,
                    children: (0, s.jsx)("div", {
                        className: u.qr,
                        children: (0, s.jsxs)(c.ButtonGroup, {
                            justify: "space-between",
                            fullWidthContainer: !0,
                            children: [
                                (0, s.jsx)(c.QWc, {
                                    variant: "secondary",
                                    text: p.intl.string(p.t.fjKFae),
                                    onClick: a,
                                }),
                                null != i &&
                                    (0, s.jsx)(c.QWc, {
                                        variant: "secondary",
                                        text: p.intl.string(p.t["4gTnU0"]),
                                        onClick: i,
                                    }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
};
