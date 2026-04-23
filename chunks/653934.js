a.d(e, { default: () => I });
var s = a(627968),
    i = a(64700),
    l = a(224640),
    r = a(821609),
    n = a(408278),
    c = a(314116),
    d = a(990078),
    o = a(704333),
    b = a(414499),
    m = a(597770),
    u = a(500060),
    x = a(534514),
    p = a(834730),
    f = a(885574),
    g = a(972213),
    _ = a(276666),
    h = a(777376),
    j = a(758209),
    v = a(915418),
    N = a(674567),
    C = a(237146),
    k = a(985018),
    O = a(691539);
let E = [
    { icon: o.B, message: C.default.bpksos },
    { icon: b.h, message: C.default["5rbQbD"] },
    { icon: m.o, message: C.default.b1X5Jf, tooltip: C.default.AyECej },
    { icon: u.o, message: C.default.xZiyZj },
];
function I(t) {
    let { transitionState: e, onClose: a } = t,
        o = (0, N.V)(),
        { status: b, redirect: m, requestInProgress: u } = (0, v.r)(),
        I = (0, j.A)(m),
        w = i.useCallback(() => {
            (0, c.A)({
                title: k.intl.string(C.default["/GObQk"]),
                subtitle: k.intl.string(C.default["r/jeXi"]),
                confirmText: k.intl.string(C.default.bVwQhX),
                variant: "critical",
                onConfirm: () => (0, _.RB)(h.n9.XGPP),
            });
        }, []),
        y = o === N.s.NONE || o === N.s.NON_NITRO;
    if (
        (i.useEffect(() => {
            y && a();
        }, [y, a]),
        y)
    )
        return null;
    let D = (function (t) {
        let { claimStatus: e, handleActivationClick: a, cancelCroissant: s, requestInProgress: i } = t;
        switch (e) {
            case h.p1.NOT_CLAIMED:
            case h.p1.CLAIM_IN_PROGRESS:
                return {
                    ctaText: k.intl.string(C.default.EL3rU4),
                    ctaVariant: "primary",
                    ctaOnClick: a,
                    processing: i,
                    disclaimer: e === h.p1.CLAIM_IN_PROGRESS ? k.intl.string(C.default.Fs74z9) : void 0,
                };
            case h.p1.CLAIMED:
                return {
                    ctaText: k.intl.string(C.default["Z2Ipu/"]),
                    ctaVariant: "critical-secondary",
                    ctaOnClick: s,
                    processing: i,
                    disclaimer: k.intl.string(C.default.hjlZZf),
                };
            case h.p1.CANCELLATION_IN_PROGRESS:
                return {
                    ctaText: k.intl.string(C.default.wBz9aO),
                    ctaVariant: "critical-secondary",
                    ctaDisabled: !0,
                    disclaimer: k.intl.string(C.default.hjlZZf),
                };
        }
    })({ claimStatus: b, handleActivationClick: I, cancelCroissant: w, requestInProgress: u });
    return (0, s.jsx)(l.d, {
        transitionState: e,
        onClose: a,
        size: "xl",
        "aria-label": k.intl.string(C.default.ukvxpp),
        children: (0, s.jsxs)("div", {
            className: O.yl,
            children: [
                (0, s.jsxs)("div", {
                    className: O.XN,
                    children: [
                        (0, s.jsx)("img", {
                            className: O.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, s.jsxs)("div", {
                            className: O.FD,
                            children: [
                                (0, s.jsxs)("div", {
                                    className: O.gY,
                                    children: [
                                        (0, s.jsx)(x.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: k.intl.string(C.default.ukvxpp),
                                        }),
                                        (0, s.jsx)(p.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: k.intl.format(C.default.FO4faL, { termsLink: "#" }),
                                        }),
                                    ],
                                }),
                                null != D &&
                                    (0, s.jsxs)(s.Fragment, {
                                        children: [
                                            (0, s.jsx)(r.$, {
                                                fullWidth: !0,
                                                variant: D.ctaVariant,
                                                size: "md",
                                                text: D.ctaText,
                                                onClick: D.ctaOnClick,
                                                disabled: D.ctaDisabled,
                                                loading: D.processing,
                                            }),
                                            null != D.disclaimer &&
                                                (0, s.jsxs)("div", {
                                                    className: O.ed,
                                                    children: [
                                                        (0, s.jsx)(f.m, { size: "xs", color: "var(--text-subtle)" }),
                                                        (0, s.jsx)(p.E, {
                                                            variant: "text-xs/medium",
                                                            color: "text-subtle",
                                                            children: D.disclaimer,
                                                        }),
                                                    ],
                                                }),
                                        ],
                                    }),
                            ],
                        }),
                    ],
                }),
                (0, s.jsxs)("div", {
                    className: O.Hh,
                    children: [
                        (0, s.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: O.d3,
                            alt: "",
                        }),
                        (0, s.jsx)("div", { className: O.gm }),
                        (0, s.jsx)("div", {
                            className: O.b,
                            children: (0, s.jsx)(n.K, {
                                "aria-label": k.intl.string(k.t.cpT0Cq),
                                onClick: a,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, s.jsx)("div", {
                            className: O.Jo,
                            children: E.map((t, e) => {
                                let { icon: a, message: i, tooltip: l } = t;
                                return (0, s.jsxs)(
                                    "div",
                                    {
                                        className: O.vD,
                                        children: [
                                            (0, s.jsx)(a, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, s.jsx)(p.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: k.intl.string(i),
                                            }),
                                            null != l &&
                                                (0, s.jsx)("div", {
                                                    className: O.Jn,
                                                    children: (0, s.jsx)(d.m, {
                                                        text: k.intl.string(l),
                                                        position: "top",
                                                        children: (0, s.jsx)(f.m, {
                                                            size: "xs",
                                                            color: "var(--icon-default)",
                                                        }),
                                                    }),
                                                }),
                                        ],
                                    },
                                    e,
                                );
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
