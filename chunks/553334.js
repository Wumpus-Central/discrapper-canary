n.d(e, { Z: () => d }), n(388685);
var a = n(951288),
    i = n(647438),
    l = n(793030),
    r = n(481060),
    s = n(153867),
    o = n(626135),
    c = n(981631),
    u = n(388032),
    C = n(330427);
let _ = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => u.intl.string(u.t["+RZgNT"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => u.intl.string(u.t.kgPXgo),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => u.intl.string(u.t.vujsUF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => u.intl.string(u.t.AYAOLC),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => u.intl.string(u.t.wZLu3d),
    },
];
function d(t) {
    let { application: e, subscriptionId: n, onClose: d, transitionState: p } = t,
        [I, N] = i.useState(!1),
        [A, O] = i.useState(null),
        [E, S] = i.useState(""),
        P = i.useCallback(() => {
            null != A &&
                (o.default.track(c.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: A,
                    application_id: e.id,
                    reason: E,
                    subscription_id: n,
                }),
                d());
        }, [e.id, n, A, d, E]);
    return (
        i.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: I });
        }, [I]),
        (0, a.jsxs)(l.Modal, {
            title: u.intl.string(u.t.zPxMdX),
            subtitle: u.intl.string(u.t.QJGdBw),
            actions: [
                {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7u),
                    onClick: P,
                    disabled: null == A,
                },
            ],
            onClose: d,
            transitionState: p,
            children: [
                (0, a.jsx)("div", {
                    className: C.answerChoicesContainer,
                    children: (0, a.jsx)(r.FXm, {
                        value: A,
                        options: _.map((t) => {
                            let { nameGetter: e, value: n } = t;
                            return {
                                name: e(),
                                value: n,
                            };
                        }),
                        onChange: (t) => O(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === A &&
                    (0, a.jsx)("div", {
                        className: C.otherField,
                        children: (0, a.jsx)(r.oil, {
                            autoFocus: !0,
                            placeholder: u.intl.string(u.t.s6tM8f),
                            value: E,
                            onChange: S,
                        }),
                    }),
                (0, a.jsx)(r.Checkbox, {
                    checked: I,
                    onChange: (t) => N(t),
                    label: u.intl.string(u.t["3vPFQk"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
