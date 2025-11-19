n.d(e, { Z: () => E }), n(388685);
var i = n(54381),
    s = n(473749),
    r = n(481060),
    l = n(313789),
    a = n(518596),
    o = n(63063),
    c = n(378298),
    d = n(584656),
    T = n(993750),
    u = n(981631),
    S = n(526761),
    x = n(388032),
    _ = n(328355);
let E = function (t) {
    let { onClose: e, channelId: n } = t,
        [E, g] = s.useState(!1),
        A = s.useCallback(() => {
            (0, a.openUserSettings)(l.n.CONTENT_AND_SOCIAL_PANEL, {
                section: u.oAB.CONTENT_AND_SOCIAL,
                scrollPosition: S.FY.DM_SAFETY_ALERTS_V2,
            }),
                e();
        }, [e]),
        O = s.useCallback(() => {
            E ||
                (g(!0),
                (0, c.Uj)(n)
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
        }, [n, e, E]);
    return (0, i.jsxs)(T.Z, {
        style: _.wrapperStyle,
        children: [
            (0, i.jsx)(r.Text, {
                variant: "text-md/normal",
                color: "header-secondary",
                children: x.intl.format(x.t["njJ/Cg"], { learnMoreLink: o.Z.getArticleURL(u.BhN.SAFETY_ALERTS) }),
            }),
            (0, i.jsxs)("div", {
                children: [
                    (0, i.jsx)(r.Button, {
                        onClick: A,
                        fullWidth: !0,
                        text: x.intl.string(x.t.qpWnyC),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: _.reportFalsePositiveText,
                        children: x.intl.format(x.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, i.jsx)(
                                    r.P3F,
                                    {
                                        className: _.reportFalsePositiveButton,
                                        tag: "span",
                                        onClick: O,
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
