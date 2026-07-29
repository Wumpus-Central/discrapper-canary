s.d(e, { default: () => B });
var i = s(477900),
    a = s(582128),
    l = s(224640),
    n = s(408278),
    c = s(314116),
    r = s(704333),
    d = s(414499),
    o = s(597770),
    u = s(500060),
    x = s(297264),
    m = s(834730),
    f = s(885574),
    b = s(972213),
    g = s(866665),
    h = s(793574),
    j = s(688810),
    p = s(51965),
    N = s(792656),
    v = s(174459),
    A = s(183972),
    C = s(196099),
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
    z = s(35158);
let M = [
    { icon: r.B, message: P.default.bpksos },
    { icon: d.h, message: P.default["5rbQbD"] },
    { icon: o.o, message: P.default.b1X5Jf, tooltip: P.default.AyECej },
    { icon: u.o, message: P.default.xZiyZj },
];
function w(t) {
    let { transitionState: e, onClose: s, variant: r, claimStatus: d, redirect: o, requestInProgress: u } = t,
        h = (0, L.A)(o),
        j = (0, C.M)("xbox"),
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
            variant: r,
            claimStatus: d,
            handleActivationClick: h,
            cancelXboxPartnerPass: a.useCallback(() => {
                (0, c.A)({
                    title: y.intl.string(P.default["/GObQk"]),
                    subtitle: y.intl.string(P.default["r/jeXi"]),
                    confirmText: y.intl.string(P.default.bVwQhX),
                    variant: "critical",
                    onConfirm: () => (0, A.RB)(E.n9.XGPP),
                }),
                    j(C.H.CANCEL);
            }, [j]),
            requestInProgress: u,
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
                                        (0, i.jsx)(x.D, {
                                            variant: "heading-xl/bold",
                                            color: "text-strong",
                                            children: y.intl.string(P.default.ukvxpp),
                                        }),
                                        (0, i.jsx)(m.E, {
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
                                              (0, i.jsx)(p.A, {
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
                                                          (0, i.jsx)(f.m, { size: "xs", color: "var(--text-subtle)" }),
                                                          (0, i.jsx)(m.E, {
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
                            children: (0, i.jsx)(n.K, {
                                "aria-label": y.intl.string(y.t.cpT0Cq),
                                onClick: s,
                                icon: b.d,
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
                                            (0, i.jsx)(m.E, {
                                                variant: "text-md/medium",
                                                color: "text-default",
                                                children: y.intl.string(a),
                                            }),
                                            null != l &&
                                                (0, i.jsx)("div", {
                                                    className: z.Jn,
                                                    children: (0, i.jsx)(g.m, {
                                                        text: y.intl.string(l),
                                                        position: "top",
                                                        children: (0, i.jsx)(f.m, {
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
        { analyticsLocations: o } = (0, j.Ay)(
            ...(null != l ? [l, h.A.CROISSANT_REWARD_MODAL] : [h.A.CROISSANT_REWARD_MODAL]),
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
        : (0, i.jsx)(j.f5, {
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
