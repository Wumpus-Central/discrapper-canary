s.d(e, { default: () => w });
var i = s(477900),
    a = s(582128),
    n = s(224640),
    l = s(408278),
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
    C = s(174459),
    v = s(183972),
    A = s(196099),
    E = s(297966),
    k = s(375776),
    I = s(727811),
    O = s(870975),
    S = s(263910),
    L = s(102488),
    R = s(631368),
    _ = s(222652),
    D = s(652215),
    T = s(202541),
    P = s(428685),
    y = s(375708),
    z = s(367863);
let M = [
    { icon: r.B, message: P.default.bpksos },
    { icon: d.h, message: P.default["5rbQbD"] },
    { icon: o.GiftIcon, message: P.default.b1X5Jf, tooltip: P.default.AyECej },
    { icon: u.o, message: P.default.xZiyZj },
];
function X(t) {
    let { transitionState: e, onClose: s, variant: r, claimStatus: d, redirect: o, requestInProgress: u } = t,
        h = (0, S.A)(o),
        j = (0, A.M)("xbox"),
        C = (function (t) {
            let {
                variant: e,
                claimStatus: s,
                handleActivationClick: i,
                cancelXboxPartnerPass: a,
                requestInProgress: n,
            } = t;
            if (e === R.C.NO_ACCESS) return { kind: _.N.SUBSCRIBE, text: y.intl.string(y.t.sEAnVH) };
            switch (s) {
                case I.P.NOT_CLAIMED:
                case I.P.CLAIM_IN_PROGRESS:
                    return {
                        kind: _.N.DEFAULT,
                        ctaText: y.intl.string(P.default.EL3rU4),
                        ctaVariant: "primary",
                        ctaOnClick: i,
                        processing: n,
                        disclaimer: s === I.P.CLAIM_IN_PROGRESS ? y.intl.string(P.default.Fs74z9) : void 0,
                    };
                case I.P.CLAIMED:
                    return {
                        kind: _.N.DEFAULT,
                        ctaText: y.intl.string(P.default["Z2Ipu/"]),
                        ctaVariant: "critical-secondary",
                        ctaOnClick: a,
                        processing: n,
                        disclaimer: y.intl.string(P.default.hjlZZf),
                    };
                case I.P.CANCELLATION_IN_PROGRESS:
                    return {
                        kind: _.N.DEFAULT,
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
                    onConfirm: () => (0, v.RB)(E.n9.XGPP),
                }),
                    j(A.H.CANCEL);
            }, [j]),
            requestInProgress: u,
        });
    return (0, i.jsx)(n.d, {
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
                                            children: y.intl.format(P.default.FO4faL, { termsLink: (0, O.xA)() }),
                                        }),
                                    ],
                                }),
                                C.kind === _.N.SUBSCRIBE
                                    ? (0, i.jsx)(N.A, {
                                          fullWidth: !0,
                                          defaultTextOverride: C.text,
                                          subscriptionTier: T.pe.TIER_2,
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                          children: [
                                              (0, i.jsx)(p.A, {
                                                  fullWidth: !0,
                                                  variant: C.ctaVariant,
                                                  size: "md",
                                                  text: C.ctaText,
                                                  onClick: C.ctaOnClick,
                                                  disabled: C.ctaDisabled,
                                                  loading: C.processing,
                                              }),
                                              null != C.disclaimer &&
                                                  (0, i.jsxs)("div", {
                                                      className: z.ed,
                                                      children: [
                                                          (0, i.jsx)(f.CircleInformationIcon, {
                                                              size: "xs",
                                                              color: "var(--text-subtle)",
                                                          }),
                                                          (0, i.jsx)(m.E, {
                                                              variant: "text-xs/medium",
                                                              color: "text-subtle",
                                                              children: C.disclaimer,
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
                            children: (0, i.jsx)(l.K, {
                                "aria-label": y.intl.string(y.t.cpT0Cq),
                                onClick: s,
                                icon: b.XLargeIcon,
                                variant: "overlay-secondary",
                                size: "sm",
                            }),
                        }),
                        (0, i.jsx)("div", {
                            className: z.Jo,
                            children: M.map((t, e) => {
                                let { icon: s, message: a, tooltip: n } = t;
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
                                            null != n &&
                                                (0, i.jsx)("div", {
                                                    className: z.Jn,
                                                    children: (0, i.jsx)(g.m, {
                                                        text: y.intl.string(n),
                                                        position: "top",
                                                        children: (0, i.jsx)(f.CircleInformationIcon, {
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
function w(t) {
    let { transitionState: e, onClose: s, sourceAnalyticsLocations: n } = t,
        l = (0, R.$)(),
        { status: c, redirect: r, requestInProgress: d } = (0, L.L)(),
        { analyticsLocations: o } = (0, j.Ay)(
            ...(null != n ? [n, h.A.CROISSANT_REWARD_MODAL] : [h.A.CROISSANT_REWARD_MODAL]),
        ),
        u = l === R.C.NONE;
    a.useEffect(() => {
        u && s();
    }, [u, s]);
    let x = a.useRef(!1);
    return (a.useEffect(() => {
        u || x.current || ((x.current = !0), C.default.track(D.HAw.OPEN_MODAL, { type: k.x, location_stack: o }));
    }, [u, o]),
    u)
        ? null
        : (0, i.jsx)(j.f5, {
              value: o,
              children: (0, i.jsx)(X, {
                  transitionState: e,
                  onClose: s,
                  variant: l,
                  claimStatus: c,
                  redirect: r,
                  requestInProgress: d,
              }),
          });
}
