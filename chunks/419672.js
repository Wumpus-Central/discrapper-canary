n.d(e, { Z: () => x }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(230711),
    o = n(63063),
    a = n(378298),
    c = n(584656),
    d = n(993750),
    u = n(981631),
    T = n(526761),
    _ = n(388032),
    S = n(11104);
let x = function (t) {
    let { onClose: e, channelId: n } = t,
        [x, b] = s.useState(!1),
        p = s.useCallback(() => {
            r.Z.open(u.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: T.FY.DM_SAFETY_ALERTS_V2 }), e();
        }, [e]),
        A = s.useCallback(() => {
            x ||
                (b(!0),
                (0, a.Uj)(n)
                    .then(() => {
                        e(),
                            (0, c.t)({
                                text: _.intl.string(_.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        b(!1), (0, l.showToast)((0, l.createToast)(_.intl.string(_.t.R0RpRU), l.ToastType.FAILURE));
                    }));
        }, [n, e, x]);
    return (0, i.jsxs)(d.Z, {
        style: S.wrapperStyle,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: _.intl.format(_.t['njJ/Cg'], { learnMoreLink: o.Z.getArticleURL(u.BhN.SAFETY_ALERTS) })
            }),
            (0, i.jsx)(l.zxk, {
                className: S.settingsButton,
                onClick: p,
                fullWidth: !0,
                children: _.intl.string(_.t.qpWnyM)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: S.reportFalsePositiveText,
                    children: _.intl.format(_.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, i.jsx)(
                                l.zxk,
                                {
                                    className: S.reportFalsePositiveButton,
                                    size: l.zxk.Sizes.NONE,
                                    color: l.zxk.Colors.LINK,
                                    look: l.zxk.Looks.LINK,
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
