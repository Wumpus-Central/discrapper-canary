(n.d(e, { Z: () => x }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(755721),
    l = n(481060),
    o = n(230711),
    a = n(63063),
    c = n(378298),
    u = n(584656),
    d = n(993750),
    T = n(981631),
    S = n(526761),
    _ = n(388032),
    b = n(621164);
let x = function (t) {
    let { onClose: e, channelId: n } = t,
        [x, p] = r.useState(!1),
        O = r.useCallback(() => {
            (o.Z.open(T.oAB.CONTENT_AND_SOCIAL, null, { scrollPosition: S.FY.DM_SAFETY_ALERTS_V2 }), e());
        }, [e]),
        h = r.useCallback(() => {
            x ||
                (p(!0),
                (0, c.Uj)(n)
                    .then(() => {
                        (e(),
                            (0, u.t)({
                                text: _.intl.string(_.t.FhgVWl),
                                id: 'safety-tools-report-false-positive'
                            }));
                    })
                    .catch(() => {
                        (p(!1), (0, l.showToast)((0, l.createToast)(_.intl.string(_.t.R0RpRU), l.ToastType.FAILURE)));
                    }));
        }, [n, e, x]);
    return (0, i.jsxs)(d.Z, {
        style: b.wrapperStyle,
        children: [
            (0, i.jsx)(l.Text, {
                variant: 'text-md/normal',
                color: 'header-secondary',
                children: _.intl.format(_.t['njJ/Cg'], { learnMoreLink: a.Z.getArticleURL(T.BhN.SAFETY_ALERTS) })
            }),
            (0, i.jsx)(s.zx, {
                className: b.settingsButton,
                onClick: O,
                fullWidth: !0,
                children: _.intl.string(_.t.qpWnyM)
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: b.reportFalsePositiveText,
                    children: _.intl.format(_.t['2uYViI'], {
                        reportFalsePositiveHook: (t, e) =>
                            (0, i.jsx)(
                                s.zx,
                                {
                                    className: b.reportFalsePositiveButton,
                                    size: s.zx.Sizes.NONE,
                                    color: s.zx.Colors.LINK,
                                    look: s.zx.Looks.LINK,
                                    disabled: x,
                                    onClick: h,
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
