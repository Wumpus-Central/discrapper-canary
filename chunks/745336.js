a.d(t, { default: () => b });
var n = a(627968),
    r = a(64700),
    s = a(503698),
    i = a.n(s),
    l = a(192308),
    o = a(935462),
    c = a(825484),
    d = a(123292),
    m = a(393033),
    u = a(36149),
    p = a(40449),
    _ = a(985018),
    x = a(971469);
let b = function (e) {
    let { onClose: t, onComplete: a, onCancel: s, transitionState: b, webviewUrl: h } = e,
        f = (0, m.W$)(),
        j = r.useCallback(() => {
            a(), t();
        }, [a, t]),
        y = r.useCallback(() => {
            (0, l.hasModalOpen)(p.SW) && j();
        }, [j]);
    (0, u.dZ)(y);
    let g = r.useCallback(
        (e) => {
            f && "" !== h && e?.data?.eventType === "Verification.Result" && j();
        },
        [h, j, f],
    );
    return (
        r.useEffect(
            () => (
                window.addEventListener("message", g),
                () => {
                    window.removeEventListener("message", g);
                }
            ),
            [g],
        ),
        (0, n.jsxs)(o.EO, {
            "data-migration-pending": !0,
            transitionState: b,
            className: i()(x.zr, x.rh),
            parentComponent: "AgeVerificationModal",
            size: o.rI.MEDIUM,
            children: [
                (0, n.jsx)(o.$m, {
                    "data-migration-pending": !0,
                    className: i()(x.Qs, x.WM),
                    scrollbarType: "none",
                    children: (0, n.jsx)("iframe", {
                        id: "frame",
                        src: h,
                        className: x.pU,
                        allow: "camera; microphone",
                    }),
                }),
                (0, n.jsx)(o.jl, {
                    "data-migration-pending": !0,
                    children: (0, n.jsx)("div", {
                        className: x.qr,
                        children: (0, n.jsxs)(c.e, {
                            justify: "space-between",
                            fullWidthContainer: !0,
                            children: [
                                (0, n.jsx)(d.Q, { variant: "secondary", text: _.intl.string(_.t.fjKFae), onClick: t }),
                                null != s &&
                                    (0, n.jsx)(d.Q, {
                                        variant: "secondary",
                                        text: _.intl.string(_.t["4gTnU0"]),
                                        onClick: s,
                                    }),
                            ],
                        }),
                    }),
                }),
            ],
        })
    );
};
