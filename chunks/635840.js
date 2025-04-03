i.d(t, { Z: () => C }), i(47120);
var a = i(200651),
    n = i(192379),
    s = i(481060),
    l = i(153867),
    r = i(626135),
    o = i(981631),
    d = i(388032),
    c = i(266354);
let _ = [
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH',
        nameGetter: () => d.NW.string(d.t['+RZgNT'])
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE',
        nameGetter: () => d.NW.string(d.t.kgPXgo)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH',
        nameGetter: () => d.NW.string(d.t.vujsUF)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE',
        nameGetter: () => d.NW.string(d.t.AYAOLC)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER',
        nameGetter: () => d.NW.string(d.t.wZLu3d)
    }
];
function C(e) {
    let { application: t, subscriptionId: i, onClose: C } = e,
        [N, u] = n.useState(!1),
        [x, m] = n.useState(null),
        [h, I] = n.useState(''),
        S = n.useCallback(() => {
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
        n.useEffect(() => {
            l.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: N });
        }, [N]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsxs)(s.xBx, {
                    className: c.headerContainer,
                    separator: !1,
                    children: [
                        (0, a.jsxs)('div', {
                            className: c.titleContainer,
                            children: [
                                (0, a.jsx)(s.Text, {
                                    className: c.headerTitle,
                                    variant: 'text-lg/semibold',
                                    children: d.NW.string(d.t.zPxMdX)
                                }),
                                (0, a.jsx)(s.olH, {
                                    className: c.modalCloseButton,
                                    onClick: C
                                })
                            ]
                        }),
                        (0, a.jsx)(s.LZC, { size: 8 }),
                        (0, a.jsx)(s.Text, {
                            className: c.headerSubtitle,
                            variant: 'text-md/medium',
                            children: d.NW.string(d.t.QJGdBw)
                        })
                    ]
                }),
                (0, a.jsxs)(s.hzk, {
                    children: [
                        (0, a.jsx)('div', {
                            className: c.answerChoicesContainer,
                            children: (0, a.jsx)(s.FXm, {
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
                            (0, a.jsx)(s.oil, {
                                autoFocus: !0,
                                className: c.otherField,
                                placeholder: d.NW.string(d.t.s6tM8f),
                                value: h,
                                onChange: I
                            })
                    ]
                }),
                (0, a.jsxs)(s.mzw, {
                    className: c.footer,
                    children: [
                        (0, a.jsx)(s.zxk, {
                            onClick: S,
                            color: s.zxk.Colors.BRAND,
                            disabled: null == x,
                            children: d.NW.string(d.t.geKm7u)
                        }),
                        (0, a.jsx)(s.XZJ, {
                            type: s.XZJ.Types.INVERTED,
                            value: N,
                            onChange: (e, t) => u(t),
                            size: 20,
                            className: c.__invalid_checkbox,
                            children: (0, a.jsx)(s.Text, {
                                variant: 'text-sm/medium',
                                children: d.NW.string(d.t['3vPFQk'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
