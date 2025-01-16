n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
    l = n(481060),
    s = n(153867),
    o = n(626135),
    r = n(981631),
    c = n(388032),
    d = n(412492);
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
    let { application: t, subscriptionId: n, onClose: u } = e,
        [_, N] = a.useState(!1),
        [S, h] = a.useState(null),
        [I, m] = a.useState(''),
        E = a.useCallback(() => {
            null != S &&
                (o.default.track(r.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: S,
                    application_id: t.id,
                    reason: I,
                    subscription_id: n
                }),
                u());
        }, [t.id, n, S, u, I]);
    return (
        a.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: _ });
        }, [_]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsxs)(l.ModalHeader, {
                    className: d.headerContainer,
                    separator: !1,
                    children: [
                        (0, i.jsxs)('div', {
                            className: d.titleContainer,
                            children: [
                                (0, i.jsx)(l.Text, {
                                    className: d.headerTitle,
                                    variant: 'text-lg/semibold',
                                    children: c.intl.string(c.t.zPxMdX)
                                }),
                                (0, i.jsx)(l.ModalCloseButton, {
                                    className: d.modalCloseButton,
                                    onClick: u
                                })
                            ]
                        }),
                        (0, i.jsx)(l.Spacer, { size: 8 }),
                        (0, i.jsx)(l.Text, {
                            className: d.headerSubtitle,
                            variant: 'text-md/medium',
                            children: c.intl.string(c.t.QJGdBw)
                        })
                    ]
                }),
                (0, i.jsxs)(l.ModalContent, {
                    children: [
                        (0, i.jsx)('div', {
                            className: d.answerChoicesContainer,
                            children: (0, i.jsx)(l.RadioGroup, {
                                value: S,
                                options: C.map((e) => {
                                    let { nameGetter: t, value: n } = e;
                                    return {
                                        name: t(),
                                        value: n
                                    };
                                }),
                                onChange: (e) => h(e.value),
                                withTransparentBackground: !0
                            })
                        }),
                        'APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER' === S &&
                            (0, i.jsx)(l.TextInput, {
                                autoFocus: !0,
                                className: d.otherField,
                                placeholder: c.intl.string(c.t.s6tM8f),
                                value: I,
                                onChange: m
                            })
                    ]
                }),
                (0, i.jsxs)(l.ModalFooter, {
                    className: d.footer,
                    children: [
                        (0, i.jsx)(l.Button, {
                            onClick: E,
                            color: l.Button.Colors.BRAND,
                            disabled: null == S,
                            children: c.intl.string(c.t.geKm7u)
                        }),
                        (0, i.jsx)(l.Checkbox, {
                            type: l.Checkbox.Types.INVERTED,
                            value: _,
                            onChange: (e, t) => N(t),
                            size: 20,
                            className: d.__invalid_checkbox,
                            children: (0, i.jsx)(l.Text, {
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
