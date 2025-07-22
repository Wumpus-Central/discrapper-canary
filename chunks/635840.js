(i.d(t, { Z: () => u }), i(388685));
var n = i(255367),
    a = i(73800),
    s = i(755721),
    l = i(481060),
    r = i(153867),
    o = i(626135),
    d = i(981631),
    c = i(388032),
    _ = i(266354);
let C = [
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH',
        nameGetter: () => c.intl.string(c.t['+RZgNT'])
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE',
        nameGetter: () => c.intl.string(c.t.kgPXgo)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH',
        nameGetter: () => c.intl.string(c.t.vujsUF)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE',
        nameGetter: () => c.intl.string(c.t.AYAOLC)
    },
    {
        value: 'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER',
        nameGetter: () => c.intl.string(c.t.wZLu3d)
    }
];
function u(e) {
    let { application: t, subscriptionId: i, onClose: u } = e,
        [N, m] = a.useState(!1),
        [x, I] = a.useState(null),
        [S, h] = a.useState(''),
        T = a.useCallback(() => {
            null != x &&
                (o.default.track(d.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: x,
                    application_id: t.id,
                    reason: S,
                    subscription_id: i
                }),
                u());
        }, [t.id, i, x, u, S]);
    return (
        a.useEffect(() => {
            r.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: N });
        }, [N]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(l.xBx, {
                    className: _.headerContainer,
                    separator: !1,
                    children: [
                        (0, n.jsxs)('div', {
                            className: _.titleContainer,
                            children: [
                                (0, n.jsx)(l.Text, {
                                    className: _.headerTitle,
                                    variant: 'text-lg/semibold',
                                    children: c.intl.string(c.t.zPxMdX)
                                }),
                                (0, n.jsx)(l.olH, {
                                    className: _.modalCloseButton,
                                    onClick: u
                                })
                            ]
                        }),
                        (0, n.jsx)(l.LZC, { size: 8 }),
                        (0, n.jsx)(l.Text, {
                            className: _.headerSubtitle,
                            variant: 'text-md/medium',
                            children: c.intl.string(c.t.QJGdBw)
                        })
                    ]
                }),
                (0, n.jsxs)(l.hzk, {
                    children: [
                        (0, n.jsx)('div', {
                            className: _.answerChoicesContainer,
                            children: (0, n.jsx)(l.FXm, {
                                value: x,
                                options: C.map((e) => {
                                    let { nameGetter: t, value: i } = e;
                                    return {
                                        name: t(),
                                        value: i
                                    };
                                }),
                                onChange: (e) => I(e.value),
                                withTransparentBackground: !0
                            })
                        }),
                        'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER' === x &&
                            (0, n.jsx)(s.Is, {
                                autoFocus: !0,
                                className: _.otherField,
                                placeholder: c.intl.string(c.t.s6tM8f),
                                value: S,
                                onChange: h
                            })
                    ]
                }),
                (0, n.jsxs)(l.mzw, {
                    className: _.footer,
                    children: [
                        (0, n.jsx)(l.zxk, {
                            variant: 'primary',
                            text: c.intl.string(c.t.geKm7u),
                            onClick: T,
                            disabled: null == x
                        }),
                        (0, n.jsx)(l.XZJ, {
                            type: l.XZJ.Types.INVERTED,
                            value: N,
                            onChange: (e, t) => m(t),
                            size: 20,
                            className: _.__invalid_checkbox,
                            children: (0, n.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                children: c.intl.string(c.t['3vPFQk'])
                            })
                        })
                    ]
                })
            ]
        })
    );
}
