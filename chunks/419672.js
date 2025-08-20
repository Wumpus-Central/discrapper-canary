n.d(e, { Z: () => x }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(481060),
    l = n(230711),
    a = n(63063),
    o = n(378298),
    c = n(584656),
    d = n(993750),
    u = n(981631),
    T = n(526761),
    _ = n(388032),
    S = n(328355);
let x = function (t) {
    let { onClose: e, channelId: n } = t,
        [x, p] = s.useState(!1),
        b = s.useCallback(() => {
            l.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        E = s.useCallback(() => {
            x ||
                (p(!0),
                (0, o.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: _.intl.string(_.t.FhgVWl),
                                id: "safety-tools-report-false-positive",
                            });
                    })
                    .catch(() => {
                        p(!1), (0, r.showToast)((0, r.createToast)(_.intl.string(_.t.R0RpRU), r.ToastType.FAILURE));
                    }));
        }, [n, e, x]);
    return (0, i.jsxs)(d.Z, {
        style: S.wrapperStyle,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: _.intl.format(_.t["njJ/Cg"], { learnMoreLink: a.Z.getArticleURL(u.BhN.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: b,
                        fullWidth: !0,
                        text: _.intl.string(_.t.qpWnyM),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: S.reportFalsePositiveText,
                        children: _.intl.format(_.t["2uYViI"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(
                                    r.P3F,
                                    {
                                        className: S.reportFalsePositiveButton,
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
