n.d(e, { A: () => _ });
var s = n(627968),
    i = n(64700),
    l = n(397927),
    r = n(780964),
    a = n(840065),
    T = n(975571),
    o = n(544231),
    c = n(110168),
    d = n(403403),
    S = n(652215),
    u = n(985018),
    A = n(657607);
let _ = function (t) {
    let { onClose: e, channelId: n } = t,
        [_, x] = i.useState(!1),
        E = i.useCallback(() => {
            (0, a.openUserSettings)(r.X.CONTENT_AND_SOCIAL_DM_SAFETY_ALERTS_SETTING, {
                section: S.nc_.CONTENT_AND_SOCIAL,
            }),
                e();
        }, [e]),
        m = i.useCallback(() => {
            _ ||
                (x(!0),
                (0, o.XR)(n)
                    .then(() => {
                        e(), (0, c.r)({ text: u.intl.string(u.t.FhgVWi), id: "safety-tools-report-false-positive" });
                    })
                    .catch(() => {
                        x(!1), (0, l.showToast)((0, l.createToast)(u.intl.string(u.t.R0RpRX), l.ToastType.FAILURE));
                    }));
        }, [n, e, _]);
    return (0, s.jsxs)(d.A, {
        style: A.T1,
        children: [
            (0, s.jsx)(l.Text, {
                variant: "text-md/normal",
                color: "text-default",
                children: u.intl.format(u.t["njJ/Cg"], { learnMoreLink: T.A.getArticleURL(S.MVz.SAFETY_ALERTS) }),
            }),
            (0, s.jsxs)("div", {
                children: [
                    (0, s.jsx)(l.Button, { onClick: E, fullWidth: !0, text: u.intl.string(u.t.qpWnyC) }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        className: A._B,
                        children: u.intl.format(u.t["2uYViD"], {
                            reportFalsePositiveHook: (t, e) =>
                                (0, s.jsx)(l.DUT, { className: A.l_, tag: "span", onClick: m, children: t }, e),
                        }),
                    }),
                ],
            }),
        ],
    });
};
