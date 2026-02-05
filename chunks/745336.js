n.d(a, { default: () => m });
var t = n(627968),
    s = n(64700),
    i = n(503698),
    r = n.n(i),
    l = n(397927),
    c = n(393033),
    o = n(36149),
    d = n(40449),
    p = n(985018),
    u = n(831498);
let m = function (e) {
    let { onClose: a, onComplete: n, onCancel: i, transitionState: m, webviewUrl: f } = e,
        h = (0, c.W$)(),
        _ = s.useCallback(() => {
            n(), a();
        }, [n, a]),
        g = s.useCallback(() => {
            (0, l.kBI)(d.SW) && _();
        }, [_]);
    (0, o.dZ)(g);
    let j = s.useCallback(
        (e) => {
            h && "" !== f && e?.data?.eventType === "Verification.Result" && _();
        },
        [f, _, h],
    );
    return (
        s.useEffect(
            () => (
                window.addEventListener("message", j),
                () => {
                    window.removeEventListener("message", j);
                }
            ),
            [j],
        ),
        (0, t.jsxs)(l.EOs, {
            "data-migration-pending": !0,
            transitionState: m,
            className: r()(u.zr, u.rh),
            parentComponent: "AgeVerificationModal",
            size: l.rIJ.MEDIUM,
            children: [
                (0, t.jsx)(l.$mQ, {
                    "data-migration-pending": !0,
                    className: r()(u.Qs, u.WM),
                    scrollbarType: "none",
                    children: (0, t.jsx)("iframe", {
                        id: "frame",
                        src: f,
                        className: u.pU,
                        allow: "camera; microphone",
                    }),
                }),
                (0, t.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    children: (0, t.jsx)("div", {
                        className: u.qr,
                        children: (0, t.jsxs)(l.ButtonGroup, {
                            justify: "space-between",
                            fullWidthContainer: !0,
                            children: [
                                (0, t.jsx)(l.QWc, {
                                    variant: "secondary",
                                    text: p.intl.string(p.t.fjKFae),
                                    onClick: a,
                                }),
                                null != i &&
                                    (0, t.jsx)(l.QWc, {
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
