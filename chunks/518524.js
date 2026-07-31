d.d(t, { t: () => o });
var i = d(323766),
    e = d(515322),
    c = d(70175),
    a = d(617680),
    s = d(241614),
    n = d(331082),
    Z = d(284738),
    b = d(626091),
    m = d(266078),
    o = ({
        status: l,
        submittingTitle: t,
        successTitle: d,
        failureTitle: o,
        warningTitle: u,
        submittingSubtitle: h,
        onRetry: W,
        onSkip: G,
        retryLabel: p,
        skipLabel: N,
        hideFooterBranding: M = !0,
        footerBrandingSlot: X,
    }) => {
        let { t: r } = (0, i.n)(),
            y = !!(W || G),
            Y = (() => {
                if ("submitting" === l)
                    return {
                        mainContent: (0, e.v)(a.t, { title: t ?? r("verification.processing"), subtitle: h }),
                        showActions: !1,
                    };
                let i = {
                        success: (0, e.v)(b.t, { size: 64 }),
                        warning: (0, e.v)(Z.h, { size: 40 }),
                        failure: (0, e.v)(n.t, { size: 64 }),
                    },
                    c = {
                        success: d ?? r("verification.successTitle"),
                        warning: u ?? r("verification.failureTitle"),
                        failure: o ?? r("verification.failureTitle"),
                    };
                return {
                    mainContent: (0, e.v)(e.x, {
                        children: [
                            i[l],
                            (0, e.v)(m.t, { className: "IncodeVerificationResult__title", children: c[l] }),
                        ],
                    }),
                    showActions: "warning" === l || "failure" === l,
                };
            })();
        return (0, e.v)(
            c.t,
            {
                className: "IncodeVerificationResult",
                hideFooterBranding: M,
                footerBrandingSlot: X,
                children: [
                    (0, e.v)("div", { className: "IncodeVerificationResult__center", children: Y.mainContent }),
                    Y.showActions && y
                        ? (0, e.v)("div", {
                              className: "IncodeVerificationResult__actions",
                              children: [
                                  W &&
                                      (0, e.v)(s.t, {
                                          onClick: W,
                                          "data-testid": "verification-retry",
                                          children: p ?? r("common.tryAgain"),
                                      }),
                                  G &&
                                      (0, e.v)(s.t, {
                                          onClick: G,
                                          variant: "secondary",
                                          "data-testid": "verification-skip",
                                          children: N ?? r("common.skip"),
                                      }),
                              ],
                          })
                        : null,
                ],
            },
            l,
        );
    };
