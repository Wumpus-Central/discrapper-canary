t.d(a, { default: () => h }), t(896048);
var n = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(397927),
    d = t(393033),
    c = t(36149),
    o = t(40449),
    u = t(536242),
    p = t(985018),
    f = t(138596),
    b = t(831498);
let h = function (e) {
    let { onClose: a, onComplete: t, transitionState: s, webviewUrl: h } = e,
        m = (0, d.W$)(),
        [x, g] = i.useState(0),
        k = i.useCallback(() => {
            t(), a();
        }, [t, a]),
        v = i.useCallback(() => {
            (0, l.kBI)(o.SW) && k();
        }, [k]);
    (0, c.dZ)(v);
    let C = i.useCallback(
            (e) => {
                if (m && "" !== h) {
                    var a;
                    (null == e || null == (a = e.data) ? void 0 : a.eventType) === "Verification.Result" && k();
                }
            },
            [h, k, m],
        ),
        j = i.useCallback(() => {
            g(x + 1);
        }, [x]);
    return (
        i.useEffect(
            () => (
                window.addEventListener("message", C),
                () => {
                    window.removeEventListener("message", C);
                }
            ),
            [C],
        ),
        (0, n.jsxs)(l.EOs, {
            "data-migration-pending": !0,
            transitionState: s,
            className: r()(b.zr, f.rh),
            parentComponent: "AgeVerificationExpressiveModal",
            size: l.rIJ.MEDIUM,
            children: [
                (0, n.jsx)(l.$mQ, {
                    "data-migration-pending": !0,
                    className: r()(b.Qs, b.WM),
                    scrollbarType: "none",
                    children: (0, n.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: h,
                            className: b.pU,
                            allow: "camera; microphone",
                        },
                        x,
                    ),
                }),
                (0, n.jsx)(l.jlY, {
                    "data-migration-pending": !0,
                    children: (0, n.jsxs)(l.ButtonGroup, {
                        fullWidth: !0,
                        children: [
                            (0, n.jsx)(l.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: l.Zge,
                                text: p.intl.string(u.default.b7Oqdu),
                                onClick: a,
                            }),
                            (0, n.jsx)(l.Button, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: l.fNY,
                                text: p.intl.string(u.default["0vTx7j"]),
                                onClick: j,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
