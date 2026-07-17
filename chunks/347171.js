s.d(e, { default: () => B });
var i = s(627968),
    a = s(64700),
    l = s(224640),
    n = s(821609),
    c = s(408278),
    r = s(314116),
    d = s(704333),
    o = s(414499),
    u = s(597770),
    x = s(500060),
    m = s(297264),
    f = s(834730),
    b = s(885574),
    g = s(972213),
    h = s(866665),
    j = s(793574),
    p = s(688810),
    N = s(792656),
    v = s(174459),
    C = s(183972),
    A = s(196099),
    E = s(297966),
    k = s(375776),
    O = s(727811),
    S = s(870975),
    L = s(263910),
    R = s(102488),
    _ = s(631368),
    D = s(222652),
    T = s(652215),
    I = s(202541),
    P = s(933287),
    y = s(375708),
    z = s(660478);
let M = [
    { icon: d.B, message: P.default.bpksos },
    { icon: o.h, message: P.default["5rbQbD"] },
    { icon: u.o, message: P.default.b1X5Jf, tooltip: P.default.AyECej },
    { icon: x.o, message: P.default.xZiyZj },
];
function w(t) {
    let { transitionState: e, onClose: s, variant: d, claimStatus: o, redirect: u, requestInProgress: x } = t,
        j = (0, L.A)(u),
        p = (0, A.M)("xbox"),
        v = (function (t) {
            let {
                variant: e,
                claimStatus: s,
                handleActivationClick: i,
                cancelXboxPartnerPass: a,
                requestInProgress: l,
            } = t;
            if (e === _.C.NO_ACCESS) return { kind: D.N.SUBSCRIBE, text: y.intl.string(y.t.sEAnVH) };
            switch (s) {
                case O.P.NOT_CLAIMED:
                case O.P.CLAIM_IN_PROGRESS:
                    return {
                        kind: D.N.DEFAULT,
                        ctaText: y.intl.string(P.default.EL3rU4),
                        ctaVariant: "primary",
                        ctaOnClick: i,
                        processing: l,
                        disclaimer: s === O.P.CLAIM_IN_PROGRESS ? y.intl.string(P.default.Fs74z9) : void 0,
                    };
                case O.P.CLAIMED:
                    return {
                        kind: D.N.DEFAULT,
                        ctaText: y.intl.string(P.default["Z2Ipu/"]),
                        ctaVariant: "critical-secondary",
                        ctaOnClick: a,
                        processing: l,
                        disclaimer: y.intl.string(P.default.hjlZZf),
                    };
                case O.P.CANCELLATION_IN_PROGRESS:
                    return {
                        kind: D.N.DEFAULT,
                        ctaText: y.intl.string(P.default.wBz9aO),
                        ctaVariant: "critical-secondary",
                        ctaDisabled: !0,
                        disclaimer: y.intl.string(P.default.hjlZZf),
                    };
            }
        })({
            variant: d,
            claimStatus: o,
            handleActivationClick: j,
            cancelXboxPartnerPass: a.useCallback(() => {
                (0, r.A)({
                    title: y.intl.string(P.default["/GObQk"]),
                    subtitle: y.intl.string(P.default["r/jeXi"]),
                    confirmText: y.intl.string(P.default.bVwQhX),
                    variant: "critical",
                    onConfirm: () => (0, C.RB)(E.n9.XGPP),
                }),
                    p(A.H.CANCEL);
            }, [p]),
            requestInProgress: x,
        });
    return (0, i.jsx)(l.d, {
        transitionState: e,
        onClose: s,
        size: "xl",
        "aria-label": y.intl.string(P.default.ukvxpp),
        children: (0, i.jsxs)("div", {
            className: z.yl,
            children: [
                (0, i.jsxs)("div", {
                    className: z.XN,
                    children: [
                        (0, i.jsx)("img", {
                            className: z.wm,
                            src: "https://cdn.discordapp.com/assets/content/7ade8acce1774614eee4dbeb37b20b44fe7cb2a2b70b5107413ed7ee724e1344.png",
                            alt: "Xbox Game Pass",
                        }),
                        (0, i.jsxs)("div", {
                            className: z.FD,
                            children: [
                                (0, i.jsxs)("div", {
                                    className: z.gY,
                                    children: [
                                        (0, i.jsx)(m.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: y.intl.string(P.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(f.E, {
                                            variant: "text-sm/medium",
                                            color: "text-subtle",
                                            children: y.intl.format(P.default.FO4faL, { termsLink: (0, S.xA)() }),
                                        }),
                                    ],
                                }),
                                v.kind === D.N.SUBSCRIBE
                                    ? (0, i.jsx)(N.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: v.text,
                                          subscriptionTier: I.pe.TIER_2,
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(n.$, {
                                                  fullWidth: !0,
                                                  variant: v.ctaVariant,
                                                  size: "md",
                                                  text: v.ctaText,
                                                  onClick: v.ctaOnClick,
                                                  disabled: v.ctaDisabled,
                                                  loading: v.processing,
                                              }),
                                              null != v.disclaimer &&
                                                  (0, i.jsxs)("div", {
                                                      className: z.ed,
                                                      children: [
                                                          (0, i.jsx)(b.m, { size: "xs", color: "var(--text-subtle)" }),
                                                          (0, i.jsx)(f.E, {
                                                              variant: "text-xs/medium",
                                                              color: "text-subtle",
                                                              children: v.disclaimer,
                                                          }),
                                                      ],
                                                  }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsxs)("div", {
                    className: z.Hh,
                    children: [
                        (0, i.jsx)("img", {
                            src: "https://cdn.discordapp.com/assets/content/b565e9fbc877550c994314613b3d30af48001372642b027b45bd577f71a86442.png",
                            className: z.d3,
                            alt: "",
                        }),
                        (0, i.jsx)("div", { className: z.gm }),
                        (0, i.jsx)("div", {
                            className: z.b,
                            children: (0, i.jsx)(c.K, {
                                "aria-label": y.intl.string(y.t.cpT0Cq),
                                onClick: s,
                                icon: g.d,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: z.Jo,
                            children: M.map((t, e) => {
                                let { icon: s, message: a, tooltip: l } = t;
                                return (0, i.jsxs)(
                                    "div",
                                    {
                                        className: z.vD,
                                        children: [
                                            (0, i.jsx)(s, { size: "sm", color: "var(--icon-strong)" }),
                                            (0, i.jsx)(f.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: y.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: z.Jn,
                                                    children: (0, i.jsx)(h.m, {
                                                        text: y.intl.string(l),
                                                        position: "top",
                                                        children: (0, i.jsx)(b.m, {
                                                            size: "xxs",
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
function B(t) {
    let { transitionState: e, onClose: s, sourceAnalyticsLocations: l } = t,
        n = (0, _.$)(),
        { status: c, redirect: r, requestInProgress: d } = (0, R.L)(),
        { analyticsLocations: o } = (0, p.Ay)(
            ...(null != l ? [l, j.A.CROISSANT_REWARD_MODAL] : [j.A.CROISSANT_REWARD_MODAL]),
        ),
        u = n === _.C.NONE;
    a.useEffect(() => {
        u && s();
    }, [u, s]);
    let x = a.useRef(!1);
    return (a.useEffect(() => {
        u || x.current || ((x.current = !0), v.default.track(T.HAw.OPEN_MODAL, { type: k.x, location_stack: o }));
    }, [u, o]),
    u)
        ? null
        : (0, i.jsx)(p.f5, {
              value: o,
              children: (0, i.jsx)(w, {
                  transitionState: e,
                  onClose: s,
                  variant: n,
                  claimStatus: c,
                  redirect: r,
                  requestInProgress: d,
              }),
          });
}
