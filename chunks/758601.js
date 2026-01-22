n.d(e, { A: () => E }), n(896048);
var s = n(627968),
    i = n(64700),
    l = n(397927),
    r = n(780964),
    a = n(358776),
    o = n(840065),
    c = n(975571),
    T = n(544231),
    d = n(110168),
    S = n(403403),
    u = n(652215),
    A = n(355097),
    _ = n(985018),
    x = n(24745);
let E = function (t) {
    let { onClose: e, channelId: n } = t,
        [E, O] = i.useState(!1),
        m = i.useCallback(() => {
            let t = (0, a.WJ)("SafetyToolsAboutSafetyAlerts");
            (0, o.openUserSettings)(
                t ? r.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING : r.X.CONTENT_AND_SOCIAL_PANEL,
                {
                    section: u.nc_.CONTENT_AND_SOCIAL,
                    scrollPosition: t ? void 0 : A.d1.DM_SAFETY_ALERTS_V2,
                },
            ),
                e();
        }, [e]),
        g = i.useCallback(() => {
            E ||
                (O(!0),
                (0, T.XR)(n)
                    .then(() => {
                        e(),
                            (0, d.r)({
                                text: _.intl.string(_.t.FhgVWi),
                                id: "safety-tools-report-false-positive",
                            });
                    })
                    .catch(() => {
                        O(!1), (0, l.showToast)((0, l.createToast)(_.intl.string(_.t.R0RpRX), l.ToastType.FAILURE));
                    }));
        }, [n, e, E]);
    return (0, s.jsxs)(S.A, {
        style: x.T1,
        children: [
            (0, s.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: _.intl.format(_.t["njJ/Cg"], { learnMoreLink: c.A.getArticleURL(u.MVz.SAFETY_ALERTS) }),
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(l.Button, {
                        onClick: m,
                        fullWidth: !0,
                        text: _.intl.string(_.t.qpWnyC),
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: x._B,
                        children: _.intl.format(_.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, s.jsx)(
                                    l.DUT,
                                    {
                                        className: x.l_,
                                        tag: "span",
                                        onClick: g,
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
