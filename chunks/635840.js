e.d(i, { Z: () => I }), e(388685);
var n = e(951288),
    s = e(647438),
    a = e(103866),
    l = e(37148),
    r = e(755721),
    c = e(481060),
    d = e(153867),
    o = e(626135),
    C = e(981631),
    _ = e(388032),
    u = e(167739);
let N = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => _.intl.string(_.t["+RZgNT"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => _.intl.string(_.t.kgPXgo),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => _.intl.string(_.t.vujsUF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => _.intl.string(_.t.AYAOLC),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => _.intl.string(_.t.wZLu3d),
    },
];
function I(t) {
    let { application: i, subscriptionId: e, onClose: I } = t,
        [S, E] = s.useState(!1),
        [x, A] = s.useState(null),
        [O, T] = s.useState(""),
        h = s.useCallback(() => {
            null != x &&
                (o.default.track(C.rMx.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: x,
                    application_id: i.id,
                    reason: O,
                    subscription_id: e,
                }),
                I());
        }, [i.id, e, x, I, O]);
    return (
        s.useEffect(() => {
            d.ZP.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: S });
        }, [S]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.x, {
                    title: _.intl.string(_.t.zPxMdX),
                    subtitle: _.intl.string(_.t.QJGdBw),
                }),
                (0, n.jsxs)(a.f, {
                    children: [
                        (0, n.jsx)("div", {
                            className: u.answerChoicesContainer,
                            children: (0, n.jsx)(c.FXm, {
                                value: x,
                                options: N.map((t) => {
                                    let { nameGetter: i, value: e } = t;
                                    return {
                                        name: i(),
                                        value: e,
                                    };
                                }),
                                onChange: (t) => A(t.value),
                                withTransparentBackground: !0,
                            }),
                        }),
                        "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === x &&
                            (0, n.jsx)("div", {
                                className: u.otherField,
                                children: (0, n.jsx)(c.oil, {
                                    autoFocus: !0,
                                    placeholder: _.intl.string(_.t.s6tM8f),
                                    value: O,
                                    onChange: T,
                                }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.mzw, {
                    children: (0, n.jsxs)("div", {
                        className: u.footer,
                        children: [
                            (0, n.jsx)(r.$q, {
                                type: r.M0.INVERTED,
                                value: S,
                                onChange: (t, i) => E(i),
                                size: 20,
                                className: u.__invalid_checkbox,
                                children: (0, n.jsx)(c.Text, {
                                    variant: "text-sm/medium",
                                    children: _.intl.string(_.t["3vPFQk"]),
                                }),
                            }),
                            (0, n.jsx)(c.zxk, {
                                variant: "primary",
                                text: _.intl.string(_.t.geKm7u),
                                onClick: h,
                                disabled: null == x,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
}
