n.d(e, { Z: () => d }), n(388685);
var i = n(951288),
    a = n(647438),
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
        [I, A] = a.useState(!1),
        [N, O] = a.useState(null),
        [E, S] = a.useState(""),
        P = a.useCallback(() => {
            null != N &&
                (o.default.track(c.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: N,
                    application_id: e.id,
                    reason: E,
                    subscription_id: n,
                }),
                d());
        }, [e.id, n, N, d, E]);
    return (
        a.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: I });
        }, [I]),
        (0, i.jsxs)(l.Modal, {
            title: u.intl.string(u.t.zPxMdX),
            subtitle: u.intl.string(u.t.QJGdBw),
            actions: [
                {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7u),
                    onClick: P,
                    disabled: null == N,
                },
            ],
            onClose: d,
            transitionState: p,
            children: [
                (0, i.jsx)("div", {
                    className: C.answerChoicesContainer,
                    children: (0, i.jsx)(r.FXm, {
                        value: N,
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
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === N &&
                    (0, i.jsx)("div", {
                        className: C.otherField,
                        children: (0, i.jsx)(r.oil, {
                            autoFocus: !0,
                            placeholder: u.intl.string(u.t.s6tM8f),
                            value: E,
                            onChange: S,
                        }),
                    }),
                (0, i.jsx)(r.Checkbox, {
                    checked: I,
                    onChange: (t) => A(t),
                    label: u.intl.string(u.t["3vPFQk"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
