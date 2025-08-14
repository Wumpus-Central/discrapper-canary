n.d(e, { Z: () => _ }), n(388685);
var i = n(255367),
    r = n(73800),
    s = n(481060),
    l = n(230711),
    a = n(63063),
    o = n(378298),
    c = n(584656),
    u = n(993750),
    d = n(981631),
    T = n(526761),
    S = n(388032),
    x = n(328355);
let _ = function (t) {
    let { onClose: e, channelId: n } = t,
        [_, O] = r.useState(!1),
        b = r.useCallback(() => {
            l.Z.open(d.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        E = r.useCallback(() => {
            _ ||
                (O(!0),
                (0, o.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: S.intl.string(S.t.FhgVWl),
                                id: "safety-tools-report-false-positive",
                            });
                    })
                    .catch(() => {
                        O(!1), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE));
                    }));
        }, [n, e, _]);
    return (0, i.jsxs)(u.Z, {
        style: x.wrapperStyle,
        children: [
            (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: S.intl.format(S.t["njJ/Cg"], { learnMoreLink: a.Z.getArticleURL(d.BhN.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(s.zxk, {
                        onClick: b,
                        fullWidth: !0,
                        text: S.intl.string(S.t.qpWnyM),
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: x.reportFalsePositiveText,
                        children: S.intl.format(S.t["2uYViI"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(
                                    s.P3F,
                                    {
                                        className: x.reportFalsePositiveButton,
                                        tag: "span",
                                        onClick: E,
                                        children: t,
                                    },
                                    e,
                                ),
                        }),
                    }),
                ],
            }),
        ],
    });
};
