n(47120);
var i = n(200651),
    s = n(192379),
    o = n(481060),
    l = n(230711),
    r = n(63063),
    a = n(378298),
    c = n(584656),
    d = n(993750),
    u = n(981631),
    T = n(526761),
    S = n(388032),
    _ = n(683913);
e.Z = function (t) {
    let { onClose: e, channelId: n } = t,
        [x, b] = s.useState(!1),
        p = s.useCallback(() => {
            l.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        A = s.useCallback(() => {
            !x &&
                (b(!0),
                (0, a.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: S.intl.string(S.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        b(!1), (0, o.showToast)((0, o.createToast)(S.intl.string(S.t.R0RpRU), o.ToastType.FAILURE));
                    }));
        }, [n, e, x]);
    return (0, i.jsxs)(d.Z, {
        style: _.wrapperStyle,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: S.intl.format(S.t['njJ/Cg'], { learnMoreLink: r.Z.getArticleURL(u.BhN.SAFETY_ALERTS) })
            }),
            (0, i.jsx)(o.Button, {
                className: _.settingsButton,
                onClick: p,
                fullWidth: !0,
                children: S.intl.string(S.t.qpWnyM)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: _.reportFalsePositiveText,
                    children: S.intl.format(S.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, i.jsx)(
                                o.Button,
                                {
                                    className: _.reportFalsePositiveButton,
                                    size: o.Button.Sizes.NONE,
                                    color: o.Button.Colors.LINK,
                                    look: o.Button.Looks.LINK,
                                    disabled: x,
                                    onClick: A,
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
