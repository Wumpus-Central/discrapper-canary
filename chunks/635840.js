e.d(i, { Z: () => N }), e(388685);
var n = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(755721),
    r = e(481060),
    c = e(153867),
    o = e(626135),
    d = e(981631),
    C = e(388032),
    _ = e(166555);
let u = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => C.intl.string(C.t["+RZgNT"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => C.intl.string(C.t.kgPXgo),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => C.intl.string(C.t.vujsUF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => C.intl.string(C.t.AYAOLC),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => C.intl.string(C.t.wZLu3d),
    },
];
function N(t) {
    let { application: i, subscriptionId: e, onClose: N } = t,
        [I, S] = a.useState(!1),
        [A, E] = a.useState(null),
        [O, x] = a.useState(""),
        T = a.useCallback(() => {
            null != A &&
                (o.default.track(d.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: A,
                    application_id: i.id,
                    reason: O,
                    subscription_id: e,
                }),
                N());
        }, [i.id, e, A, N, O]);
    return (
        a.useEffect(() => {
            c.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: I });
        }, [I]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(s.xBx, {
                    title: C.intl.string(C.t.zPxMdX),
                    subtitle: C.intl.string(C.t.QJGdBw),
                }),
                (0, n.jsxs)(s.fef, {
                    children: [
                        (0, n.jsx)("div", {
                            className: _.answerChoicesContainer,
                            children: (0, n.jsx)(r.FXm, {
                                value: A,
                                options: u.map((t) => {
                                    let { nameGetter: i, value: e } = t;
                                    return {
                                        name: i(),
                                        value: e,
                                    };
                                }),
                                onChange: (t) => E(t),
                            }),
                        }),
                        "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === A &&
                            (0, n.jsx)("div", {
                                className: _.otherField,
                                children: (0, n.jsx)(r.oil, {
                                    autoFocus: !0,
                                    placeholder: C.intl.string(C.t.s6tM8f),
                                    value: O,
                                    onChange: x,
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(r.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsxs)("div", {
                        className: _.footer,
                        children: [
                            (0, n.jsx)(l.VL, {
                                checked: I,
                                onChange: (t) => S(t),
                                className: _.__invalid_checkbox,
                                label: C.intl.string(C.t["3vPFQk"]),
                                labelType: "secondary",
                            }),
                            (0, n.jsx)(r.zxk, {
                                variant: "primary",
                                text: C.intl.string(C.t.geKm7u),
                                onClick: T,
                                disabled: null == A,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
