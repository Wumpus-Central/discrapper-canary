t.d(a, { default: () => E });
var i = t(477900),
    n = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(935462),
    c = t(192308),
    d = t(825484),
    o = t(821609),
    u = t(789645),
    p = t(548411),
    f = t(663417),
    h = t(393033),
    m = t(847599),
    g = t(36149),
    k = t(40449),
    v = t(841365),
    x = t(375708),
    C = t(511002),
    b = t(679017);
let E = function (e) {
    let { onClose: a, onComplete: t, transitionState: s, webviewUrl: E, isExpressiveModalV2: j, entryPoint: w } = e,
        y = (0, h.W$)(),
        [M, W] = n.useState(0),
        T = n.useCallback(() => {
            (t(), a());
        }, [t, a]),
        R = n.useCallback(() => {
            (0, c.hasModalOpen)(k.SW) && !j && T();
        }, [T, j]);
    (0, g.dZ)(R);
    let S = n.useCallback(
            (e) => {
                if ("" !== E) {
                    if (!j) {
                        y && e?.data?.eventType === "Verification.Result" && T();
                        return;
                    }
                    e?.data?.eventType === "Verification.Result"
                        ? t()
                        : e?.data?.eventType === "Widget.ExitReview" && a();
                }
            },
            [E, j, y, T, t, a],
        ),
        _ = n.useCallback(() => {
            W(M + 1);
        }, [M]);
    n.useEffect(
        () => (
            window.addEventListener("message", S),
            () => {
                window.removeEventListener("message", S);
            }
        ),
        [S],
    );
    let I = w === m.q1.SYSTEM_DM_MANUAL_REVIEW;
    return (0, i.jsxs)(r.EO, {
        "data-migration-pending": !0,
        transitionState: s,
        className: l()(b.zr, C.rh),
        parentComponent: "AgeVerificationExpressiveModal",
        size: r.rI.MEDIUM,
        children: [
            (0, i.jsx)(r.$m, {
                "data-migration-pending": !0,
                className: l()(b.Qs, b.WM),
                scrollbarType: "none",
                children: (0, i.jsx)(
                    "iframe",
                    {
                        id: "frame",
                        src: E,
                        className: b.pU,
                        allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                    },
                    M,
                ),
            }),
            (0, i.jsx)(r.jl, {
                "data-migration-pending": !0,
                children: (0, i.jsxs)(d.e, {
                    fullWidth: !0,
                    children: [
                        (0, i.jsx)(o.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            icon: I ? u.P : p.Z,
                            text: x.intl.string(I ? x.t.cpT0Cq : v.default.b7Oqdu),
                            onClick: a,
                        }),
                        (0, i.jsx)(o.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            icon: f.RefreshIcon,
                            text: x.intl.string(v.default["0vTx7j"]),
                            onClick: _,
                        }),
                    ],
                }),
            }),
        ],
    });
};
