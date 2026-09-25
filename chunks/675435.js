d.d(t, { t: () => o });
var i = d(689097),
    e = d(382591),
    c = d(367092),
    a = d(933669),
    s = d(882865),
    n = d(211019),
    Z = d(264183),
    b = d(701798),
    m = d(765885),
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
