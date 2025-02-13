i.d(t, { Z: () => C }), i(47120);
var n = i(200651),
    a = i(192379),
    s = i(481060),
    l = i(153867),
    r = i(626135),
    o = i(981631),
    d = i(388032),
    c = i(305189);
let _ = [
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH',
        nameGetter: () => d.intl.string(d.t['+RZgNT'])
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE',
        nameGetter: () => d.intl.string(d.t.kgPXgo)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH',
        nameGetter: () => d.intl.string(d.t.vujsUF)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE',
        nameGetter: () => d.intl.string(d.t.AYAOLC)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER',
        nameGetter: () => d.intl.string(d.t.wZLu3d)
    }
];
function C(e) {
    let { application: t, subscriptionId: i, onClose: C } = e,
        [u, N] = a.useState(!1),
        [x, m] = a.useState(null),
        [h, I] = a.useState(''),
        S = a.useCallback(() => {
            null != x &&
                (r.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: x,
                    application_id: t.id,
                    reason: h,
                    subscription_id: i
                }),
                C());
        }, [t.id, i, x, C, h]);
    return (
        a.useEffect(() => {
            l.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: u });
        }, [u]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(s.xBx, {
                    className: c.headerContainer,
                    separator: !1,
                    children: [
                        (0, n.jsxs)('div', {
                            className: c.titleContainer,
                            children: [
                                (0, n.jsx)(s.Text, {
                                    className: c.headerTitle,
                                    variant: 'text-lg/semibold',
                                    children: d.intl.string(d.t.zPxMdX)
                                }),
                                (0, n.jsx)(s.olH, {
                                    className: c.modalCloseButton,
                                    onClick: C
                                })
                            ]
                        }),
                        (0, n.jsx)(s.LZC, { size: 8 }),
                        (0, n.jsx)(s.Text, {
                            className: c.headerSubtitle,
                            variant: 'text-md/medium',
                            children: d.intl.string(d.t.QJGdBw)
                        })
                    ]
                }),
                (0, n.jsxs)(s.hzk, {
                    children: [
                        (0, n.jsx)('div', {
                            className: c.answerChoicesContainer,
                            children: (0, n.jsx)(s.FXm, {
                                value: x,
                                options: _.map((e) => {
                                    let { nameGetter: t, value: i } = e;
                                    return {
                                        name: t(),
                                        value: i
                                    };
                                }),
                                onChange: (e) => m(e.value),
                                withTransparentBackground: !0
                            })
                        }),
                        'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER' === x &&
                            (0, n.jsx)(s.oil, {
                                autoFocus: !0,
                                className: c.otherField,
                                placeholder: d.intl.string(d.t.s6tM8f),
                                value: h,
                                onChange: I
                            })
                    ]
                }),
                (0, n.jsxs)(s.mzw, {
                    className: c.footer,
                    children: [
                        (0, n.jsx)(s.zxk, {
                            onClick: S,
                            color: s.zxk.Colors.BRAND,
                            disabled: null == x,
                            children: d.intl.string(d.t.geKm7u)
                        }),
                        (0, n.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            value: u,
                            onChange: (e, t) => N(t),
                            size: 20,
                            className: c.__invalid_checkbox,
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                children: d.intl.string(d.t['3vPFQk'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
