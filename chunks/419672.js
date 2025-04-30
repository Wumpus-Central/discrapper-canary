n.d(e, { Z: () => b }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(481060),
    l = n(230711),
    o = n(63063),
    a = n(378298),
    c = n(584656),
    u = n(993750),
    d = n(981631),
    T = n(526761),
    S = n(388032),
    _ = n(621164);
let b = function (t) {
    let { onClose: e, channelId: n } = t,
        [b, x] = r.useState(!1),
        p = r.useCallback(() => {
            l.Z.open(d.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        O = r.useCallback(() => {
            b ||
                (x(!0),
                (0, a.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: S.intl.string(S.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        x(!1), (0, s.showToast)((0, s.createToast)(S.intl.string(S.t.R0RpRU), s.ToastType.FAILURE));
                    }));
        }, [n, e, b]);
    return (0, i.jsxs)(u.Z, {
        style: _.wrapperStyle,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: S.intl.format(S.t['njJ/Cg'], { learnMoreLink: o.Z.getArticleURL(d.BhN.SAFETY_ALERTS) })
            }),
            (0, i.jsx)(s.zxk, {
                className: _.settingsButton,
                onClick: p,
                fullWidth: !0,
                children: S.intl.string(S.t.qpWnyM)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(s.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: _.reportFalsePositiveText,
                    children: S.intl.format(S.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, i.jsx)(
                                s.zxk,
                                {
                                    className: _.reportFalsePositiveButton,
                                    size: s.zxk.Sizes.NONE,
                                    color: s.zxk.Colors.LINK,
                                    look: s.zxk.Looks.LINK,
                                    disabled: b,
                                    onClick: O,
                                    children: t
                                },
                                e
                            )
                    })
                })
            })
        ]
    });
};
