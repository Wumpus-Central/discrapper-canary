e.d(i, { Z: () => N }), e(388685);
var n = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(755721),
    r = e(481060),
    c = e(153867),
    d = e(626135),
    o = e(981631),
    C = e(388032),
    _ = e(167739);
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
        [x, E] = a.useState(null),
        [A, O] = a.useState(""),
        T = a.useCallback(() => {
            null != x &&
                (d.default.track(o.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: x,
                    application_id: i.id,
                    reason: A,
                    subscription_id: e,
                }),
                N());
        }, [i.id, e, x, N, A]);
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
                            children: (0, n.jsx)(l.Gu, {
                                value: x,
                                options: u.map((t) => {
                                    let { nameGetter: i, value: e } = t;
                                    return {
                                        name: i(),
                                        value: e,
                                    };
                                }),
                                onChange: (t) => E(t.value),
                                withTransparentBackground: !0,
                            }),
                        }),
                        "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x &&
                            (0, n.jsx)("div", {
                                className: _.otherField,
                                children: (0, n.jsx)(r.oil, {
                                    autoFocus: !0,
                                    placeholder: C.intl.string(C.t.s6tM8f),
                                    value: A,
                                    onChange: O,
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(r.mzw, {
                    "data-migration-pending": !0,
                    children: (0, n.jsxs)("div", {
                        className: _.footer,
                        children: [
                            (0, n.jsx)(l.$q, {
                                type: l.M0.INVERTED,
                                value: I,
                                onChange: (t, i) => S(i),
                                size: 20,
                                className: _.__invalid_checkbox,
                                children: (0, n.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    children: C.intl.string(C.t["3vPFQk"]),
                                }),
                            }),
                            (0, n.jsx)(r.zxk, {
                                variant: "primary",
                                text: C.intl.string(C.t.geKm7u),
                                onClick: T,
                                disabled: null == x,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
