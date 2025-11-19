n.d(e, { Z: () => d }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(793030),
    r = n(481060),
    s = n(153867),
    c = n(626135),
    o = n(981631),
    u = n(388032),
    C = n(330427);
let _ = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => u.intl.string(u.t["+RZgNV"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => u.intl.string(u.t.kgPXgv),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => u.intl.string(u.t.vujsUK),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => u.intl.string(u.t.AYAOLF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => u.intl.string(u.t.wZLu3Y),
    },
];
function d(t) {
    let { application: e, subscriptionId: n, onClose: d, transitionState: p } = t,
        [I, N] = a.useState(!1),
        [O, A] = a.useState(null),
        [E, S] = a.useState(""),
        P = a.useCallback(() => {
            null != O &&
                (c.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: O,
                    application_id: e.id,
                    reason: E,
                    subscription_id: n,
                }),
                d());
        }, [e.id, n, O, d, E]);
    return (
        a.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: I });
        }, [I]),
        (0, i.jsxs)(l.Modal, {
            title: u.intl.string(u.t.zPxMdQ),
            subtitle: u.intl.string(u.t["QJGdB+"]),
            actions: [
                {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7t),
                    onClick: P,
                    disabled: null == O,
                },
            ],
            onClose: d,
            transitionState: p,
            children: [
                (0, i.jsx)("div", {
                    className: C.answerChoicesContainer,
                    children: (0, i.jsx)(r.FXm, {
                        value: O,
                        options: _.map((t) => {
                            let { nameGetter: e, value: n } = t;
                            return {
                                name: e(),
                                value: n,
                            };
                        }),
                        onChange: (t) => A(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === O &&
                    (0, i.jsx)("div", {
                        className: C.otherField,
                        children: (0, i.jsx)(r.oil, {
                            autoFocus: !0,
                            placeholder: u.intl.string(u.t.s6tM8c),
                            value: E,
                            onChange: S,
                        }),
                    }),
                (0, i.jsx)(r.Checkbox, {
                    checked: I,
                    onChange: (t) => N(t),
                    label: u.intl.string(u.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
