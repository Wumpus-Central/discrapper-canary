t.d(e, { t: () => v });
var n = t(31144),
    c = t(248702),
    r = t(727571),
    a = t(542075),
    s = t(443781),
    l = t(242003),
    o = t(288552),
    d = t(886567),
    v = ({
        status: i,
        submittingTitle: e,
        successTitle: t,
        failureTitle: v,
        warningTitle: u,
        submittingSubtitle: f,
        onRetry: h,
        onSkip: m,
        retryLabel: _,
        skipLabel: I,
        hideFooterBranding: g,
    }) => {
        let { t: k } = (0, n.n)(),
            p = (0, c.l)(null);
        if (
            ((0, c._)(() => {
                p.current?.focus();
            }, [i]),
            "submitting" === i)
        )
            return (0, c.v)(
                r.t,
                {
                    className: "IncodeVerificationResult",
                    hideFooterBranding: g,
                    children: (0, c.v)("div", {
                        className: "IncodeVerificationResult__center",
                        children: (0, c.v)(s.t, { title: e ?? k("verification.processing"), subtitle: f }),
                    }),
                },
                i,
            );
        if ("success" === i) {
            let e = t ?? k("verification.successTitle");
            return (0, c.v)(
                r.t,
                {
                    className: "IncodeVerificationResult",
                    hideFooterBranding: g,
                    children: (0, c.v)("div", {
                        className: "IncodeVerificationResult__center",
                        children: [
                            (0, c.v)(d.t, { size: 64 }),
                            (0, c.v)(a.t, {
                                ref: p,
                                className: "IncodeVerificationResult__title",
                                tabIndex: -1,
                                children: e,
                            }),
                        ],
                    }),
                },
                i,
            );
        }
        if ("warning" === i) {
            let e = u ?? k("verification.failureTitle");
            return (0, c.v)(
                r.t,
                {
                    className: "IncodeVerificationResult",
                    hideFooterBranding: g,
                    children: [
                        (0, c.v)("div", {
                            className: "IncodeVerificationResult__center",
                            children: [
                                (0, c.v)(o.h, { size: 40 }),
                                (0, c.v)(a.t, {
                                    ref: p,
                                    className: "IncodeVerificationResult__title",
                                    tabIndex: -1,
                                    children: e,
                                }),
                            ],
                        }),
                        (0, c.v)("div", {
                            className: "IncodeVerificationResult__actions",
                            children: [
                                h &&
                                    (0, c.v)(l.t, {
                                        onClick: h,
                                        "data-testid": "verification-retry",
                                        children: _ ?? k("common.tryAgain"),
                                    }),
                                m &&
                                    (0, c.v)(l.t, {
                                        onClick: m,
                                        variant: "secondary",
                                        "data-testid": "verification-skip",
                                        children: I ?? k("common.skip"),
                                    }),
                            ],
                        }),
                    ],
                },
                i,
            );
        }
        let R = v ?? k("verification.failureTitle");
        return (0, c.v)(
            r.t,
            {
                className: "IncodeVerificationResult",
                hideFooterBranding: g,
                children: [
                    (0, c.v)("div", {
                        className: "IncodeVerificationResult__center",
                        children: [
                            (0, c.v)(o.g, { size: 64 }),
                            (0, c.v)(a.t, {
                                ref: p,
                                className: "IncodeVerificationResult__title",
                                tabIndex: -1,
                                children: R,
                            }),
                        ],
                    }),
                    (0, c.v)("div", {
                        className: "IncodeVerificationResult__actions",
                        children: [
                            h &&
                                (0, c.v)(l.t, {
                                    onClick: h,
                                    "data-testid": "verification-retry",
                                    children: _ ?? k("common.tryAgain"),
                                }),
                            m &&
                                (0, c.v)(l.t, {
                                    onClick: m,
                                    variant: "secondary",
                                    "data-testid": "verification-skip",
                                    children: I ?? k("common.skip"),
                                }),
                        ],
                    }),
                ],
            },
            i,
        );
    };
