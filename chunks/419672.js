n.d(e, { Z: () => b }), n(47120);
var r = n(200651),
    s = n(192379),
    i = n(481060),
    o = n(230711),
    l = n(63063),
    a = n(378298),
    c = n(584656),
    u = n(993750),
    d = n(981631),
    T = n(526761),
    S = n(388032),
    _ = n(621164);
let b = function (t) {
    let { onClose: e, channelId: n } = t,
        [b, N] = s.useState(!1),
        x = s.useCallback(() => {
            o.Z.open(d.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        p = s.useCallback(() => {
            b ||
                (N(!0),
                (0, a.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: S.NW.string(S.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        N(!1), (0, i.showToast)((0, i.createToast)(S.NW.string(S.t.R0RpRU), i.ToastType.FAILURE));
                    }));
        }, [n, e, b]);
    return (0, r.jsxs)(u.Z, {
        style: _.wrapperStyle,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: S.NW.format(S.t['njJ/Cg'], { learnMoreLink: l.Z.getArticleURL(d.BhN.SAFETY_ALERTS) })
            }),
            (0, r.jsx)(i.zxk, {
                className: _.settingsButton,
                onClick: x,
                fullWidth: !0,
                children: S.NW.string(S.t.qpWnyM)
            }),
            (0, r.jsx)('div', {
                children: (0, r.jsx)(i.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: _.reportFalsePositiveText,
                    children: S.NW.format(S.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, r.jsx)(
                                i.zxk,
                                {
                                    className: _.reportFalsePositiveButton,
                                    size: i.zxk.Sizes.NONE,
                                    color: i.zxk.Colors.LINK,
                                    look: i.zxk.Looks.LINK,
                                    disabled: b,
                                    onClick: p,
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
