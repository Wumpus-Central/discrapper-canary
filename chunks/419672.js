n.d(e, { Z: () => A }), n(388685);
var i = n(54381),
    s = n(473749),
    r = n(481060),
    l = n(313789),
    a = n(526665),
    o = n(518596),
    c = n(63063),
    T = n(378298),
    d = n(584656),
    u = n(993750),
    S = n(981631),
    _ = n(526761),
    x = n(388032),
    E = n(199330);
let A = function (t) {
    let { onClose: e, channelId: n } = t,
        [A, g] = s.useState(!1),
        O = s.useCallback(() => {
            let t = (0, a.Gl)("SafetyToolsAboutSafetyAlerts");
            (0, o.openUserSettings)(
                t ? l.n.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING : l.n.CONTENT_AND_SOCIAL_PANEL,
                {
                    section: S.oAB.CONTENT_AND_SOCIAL,
                    scrollPosition: t ? void 0 : _.FY.DM_SAFETY_ALERTS_V2,
                },
            ),
                e();
        }, [e]),
        N = s.useCallback(() => {
            A ||
                (g(!0),
                (0, T.Uj)(n)
                    .then(() => {
                        e(),
                            (0, d.t)({
                                text: x.intl.string(x.t.FhgVWi),
                                id: "safety-tools-report-false-positive",
                            });
                    })
                    .catch(() => {
                        g(!1), (0, r.showToast)((0, r.createToast)(x.intl.string(x.t.R0RpRX), r.ToastType.FAILURE));
                    }));
        }, [n, e, A]);
    return (0, i.jsxs)(u.Z, {
        style: E.wrapperStyle,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: x.intl.format(x.t["njJ/Cg"], { learnMoreLink: c.Z.getArticleURL(S.BhN.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.Button, {
                        onClick: O,
                        fullWidth: !0,
                        text: x.intl.string(x.t.qpWnyC),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: E.reportFalsePositiveText,
                        children: x.intl.format(x.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(
                                    r.P3F,
                                    {
                                        className: E.reportFalsePositiveButton,
                                        tag: "span",
                                        onClick: N,
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
