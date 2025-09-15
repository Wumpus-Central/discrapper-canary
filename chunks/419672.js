n.d(e, { Z: () => p }), n(388685);
var i = n(951288),
    s = n(647438),
    r = n(481060),
    l = n(313789),
    a = n(518596),
    o = n(63063),
    c = n(378298),
    d = n(584656),
    T = n(993750),
    u = n(981631),
    _ = n(526761),
    S = n(388032),
    x = n(328355);
let p = function (t) {
    let { onClose: e, channelId: n } = t,
        [p, b] = s.useState(!1),
        E = s.useCallback(() => {
            (0, a.openUserSettings)(l.n.CONTENT_AND_SOCIAL_PANEL, {
                section: u.oAB.CONTENT_AND_SOCIAL,
                scrollPosition: _.FY.DM_SAFETY_ALERTS_V2,
            }),
                e();
        }, [e]),
        A = s.useCallback(() => {
            p ||
                (b(!0),
                (0, c.Uj)(n)
                    .then(() => {
                        e(),
                            (0, d.t)({
                                text: S.intl.string(S.t.FhgVWl),
                                id: "safety-tools-report-false-positive",
                            });
                    })
                    .catch(() => {
                        b(!1), (0, r.showToast)((0, r.createToast)(S.intl.string(S.t.R0RpRU), r.ToastType.FAILURE));
                    }));
        }, [n, e, p]);
    return (0, i.jsxs)(T.Z, {
        style: x.wrapperStyle,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: S.intl.format(S.t["njJ/Cg"], { learnMoreLink: o.Z.getArticleURL(u.BhN.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.zxk, {
                        onClick: E,
                        fullWidth: !0,
                        text: S.intl.string(S.t.qpWnyM),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: x.reportFalsePositiveText,
                        children: S.intl.format(S.t["2uYViI"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(
                                    r.P3F,
                                    {
                                        className: x.reportFalsePositiveButton,
                                        tag: "span",
                                        onClick: A,
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
