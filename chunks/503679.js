var i = d(783285),
    e = d(768611),
    c = d(326144),
    a = d(538553),
    s = d(264957),
    n = d(540647),
    Z = d(455939),
    b = d(612346),
    m = d(538289);
d.d(
    t,
    {},
    {
        t: ({
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
            footerBrandingSlot: r,
        }) => {
            let { t: X } = (0, i.n)(),
                y = !!(W || G),
                Y = (() => {
                    if ("submitting" === l)
                        return {
                            mainContent: (0, e.v)(a.t, { title: t ?? X("verification.processing"), subtitle: h }),
                            showActions: !1,
                        };
                    let i = {
                            success: (0, e.v)(b.t, { size: 64 }),
                            warning: (0, e.v)(Z.h, { size: 40 }),
                            failure: (0, e.v)(n.t, { size: 64 }),
                        },
                        c = {
                            success: d ?? X("verification.successTitle"),
                            warning: u ?? X("verification.failureTitle"),
                            failure: o ?? X("verification.failureTitle"),
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
                    footerBrandingSlot: r,
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
                                              children: p ?? X("common.tryAgain"),
                                          }),
                                      G &&
                                          (0, e.v)(s.t, {
                                              onClick: G,
                                              variant: "secondary",
                                              "data-testid": "verification-skip",
                                              children: N ?? X("common.skip"),
                                          }),
                                  ],
                              })
                            : null,
                    ],
                },
                l,
            );
        },
    },
);
