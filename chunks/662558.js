t.d(a, { default: () => w });
var l = t(627968),
    n = t(64700),
    s = t(503698),
    i = t.n(s),
    r = t(192308),
    o = t(935462),
    d = t(825484),
    c = t(821609),
    h = t(548411),
    p = t(663417),
    u = t(393033),
    f = t(36149),
    m = t(40449),
    _ = t(516761),
    g = t(985018),
    x = t(533051),
    v = t(971469);
let w = function (e) {
    let { onClose: a, onComplete: t, transitionState: s, webviewUrl: w } = e,
        C = (0, u.W$)(),
        [b, j] = n.useState(0),
        k = n.useCallback(() => {
            t(), a();
        }, [t, a]),
        E = n.useCallback(() => {
            (0, r.hasModalOpen)(m.SW) && k();
        }, [k]);
    (0, f.dZ)(E);
    let M = n.useCallback(
            (e) => {
                C && "" !== w && e?.data?.eventType === "Verification.Result" && k();
            },
            [w, k, C],
        ),
        W = n.useCallback(() => {
            j(b + 1);
        }, [b]);
    return (
        n.useEffect(
            () => (
                window.addEventListener("message", M),
                () => {
                    window.removeEventListener("message", M);
                }
            ),
            [M],
        ),
        (0, l.jsxs)(o.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            className: i()(v.zr, x.rh),
            parentComponent: "AgeVerificationExpressiveModal",
            size: o.rI.MEDIUM,
            children: [
                (0, l.jsx)(o.$m, {
                    "data-migration-pending": !0,
                    className: i()(v.Qs, v.WM),
                    scrollbarType: "none",
                    children: (0, l.jsx)(
                        "iframe",
                        { id: "frame", src: w, className: v.pU, allow: "camera; microphone" },
                        b,
                    ),
                }),
                (0, l.jsx)(o.jl, {
                    "data-migration-pending": !0,
                    children: (0, l.jsxs)(d.e, {
                        fullWidth: !0,
                        children: [
                            (0, l.jsx)(c.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: h.Z,
                                text: g.intl.string(_.default.b7Oqdu),
                                onClick: a,
                            }),
                            (0, l.jsx)(c.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: p.f,
                                text: g.intl.string(_.default["0vTx7j"]),
                                onClick: W,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
