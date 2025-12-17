n.d(e, { Z: () => _ }), n(388685);
var a = n(54381),
    i = n(473749),
    l = n(793030),
    r = n(481060),
    s = n(153867),
    c = n(626135),
    o = n(981631),
    u = n(388032),
    C = n(656872);
let d = [
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
function _(t) {
    let { application: e, subscriptionId: n, onClose: _, transitionState: p } = t,
        [I, N] = i.useState(!1),
        [O, A] = i.useState(null),
        [E, S] = i.useState(""),
        f = i.useCallback(() => {
            null != O &&
                (c.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: O,
                    application_id: e.id,
                    reason: E,
                    subscription_id: n,
                }),
                _());
        }, [e.id, n, O, _, E]);
    return (
        i.useEffect(() => {
            s.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: I });
        }, [I]),
        (0, a.jsxs)(l.Modal, {
            title: u.intl.string(u.t.zPxMdQ),
            subtitle: u.intl.string(u.t["QJGdB+"]),
            actions: [
                {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7t),
                    onClick: f,
                    disabled: null == O,
                },
            ],
            onClose: _,
            transitionState: p,
            children: [
                (0, a.jsx)("div", {
                    className: C.answerChoicesContainer,
                    children: (0, a.jsx)(r.FXm, {
                        value: O,
                        options: d.map((t) => {
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
                    (0, a.jsx)("div", {
                        className: C.otherField,
                        children: (0, a.jsx)(r.oil, {
                            autoFocus: !0,
                            placeholder: u.intl.string(u.t.s6tM8c),
                            value: E,
                            onChange: S,
                        }),
                    }),
                (0, a.jsx)(r.Checkbox, {
                    checked: I,
                    onChange: (t) => N(t),
                    label: u.intl.string(u.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
