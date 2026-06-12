n.d(a, { default: () => j });
var i = n(627968),
    t = n(64700),
    s = n(503698),
    l = n.n(s),
    r = n(192308),
    d = n(935462),
    c = n(825484),
    o = n(821609),
    u = n(548411),
    p = n(663417),
    h = n(393033),
    m = n(36149),
    f = n(40449),
    g = n(516761),
    x = n(375708),
    k = n(755432),
    C = n(971469);
let j = function (e) {
    let { onClose: a, onComplete: n, transitionState: s, webviewUrl: j } = e,
        v = (0, h.W$)(),
        [b, w] = t.useState(0),
        E = t.useCallback(() => {
            n(), a();
        }, [n, a]),
        W = t.useCallback(() => {
            (0, r.hasModalOpen)(f.SW) && E();
        }, [E]);
    (0, m.dZ)(W);
    let M = t.useCallback(
            (e) => {
                v && "" !== j && e?.data?.eventType === "Verification.Result" && E();
            },
            [j, E, v],
        ),
        y = t.useCallback(() => {
            w(b + 1);
        }, [b]);
    return (
        t.useEffect(
            () => (
                window.addEventListener("message", M),
                () => {
                    window.removeEventListener("message", M);
                }
            ),
            [M],
        ),
        (0, i.jsxs)(d.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            className: l()(C.zr, k.rh),
            parentComponent: "AgeVerificationExpressiveModal",
            size: d.rI.MEDIUM,
            children: [
                (0, i.jsx)(d.$m, {
                    "data-migration-pending": !0,
                    className: l()(C.Qs, C.WM),
                    scrollbarType: "none",
                    children: (0, i.jsx)(
                        "iframe",
                        { id: "frame", src: j, className: C.pU, allow: "camera; microphone" },
                        b,
                    ),
                }),
                (0, i.jsx)(d.jl, {
                    "data-migration-pending": !0,
                    children: (0, i.jsxs)(c.e, {
                        fullWidth: !0,
                        children: [
                            (0, i.jsx)(o.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: u.Z,
                                text: x.intl.string(g.default.b7Oqdu),
                                onClick: a,
                            }),
                            (0, i.jsx)(o.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: p.f,
                                text: x.intl.string(g.default["0vTx7j"]),
                                onClick: y,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
