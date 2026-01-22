n.d(e, { A: () => A }), n(896048);
var i = n(627968),
    a = n(64700),
    l = n(158954),
    s = n(397927),
    r = n(817281),
    c = n(954571),
    o = n(652215),
    u = n(985018),
    _ = n(359511);
let C = [
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
function A(t) {
    let { application: e, subscriptionId: n, onClose: A, transitionState: d } = t,
        [N, O] = a.useState(!1),
        [I, p] = a.useState(null),
        [S, E] = a.useState(""),
        b = a.useCallback(() => {
            null != I &&
                (c.default.track(o.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: I,
                    application_id: e.id,
                    reason: S,
                    subscription_id: n,
                }),
                A());
        }, [e.id, n, I, A, S]);
    return (
        a.useEffect(() => {
            r.Ay.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: N });
        }, [N]),
        (0, i.jsxs)(l.Modal, {
            title: u.intl.string(u.t.zPxMdQ),
            subtitle: u.intl.string(u.t["QJGdB+"]),
            actions: [
                {
                    variant: "primary",
                    text: u.intl.string(u.t.geKm7t),
                    onClick: b,
                    disabled: null == I,
                },
            ],
            onClose: A,
            transitionState: d,
            children: [
                (0, i.jsx)("div", {
                    className: _.U7,
                    children: (0, i.jsx)(s.z6M, {
                        value: I,
                        options: C.map((t) => {
                            let { nameGetter: e, value: n } = t;
                            return {
                                name: e(),
                                value: n,
                            };
                        }),
                        onChange: (t) => p(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === I &&
                    (0, i.jsx)("div", {
                        className: _.Xo,
                        children: (0, i.jsx)(s.ksK, {
                            autoFocus: !0,
                            placeholder: u.intl.string(u.t.s6tM8c),
                            value: S,
                            onChange: E,
                        }),
                    }),
                (0, i.jsx)(s.Checkbox, {
                    checked: N,
                    onChange: (t) => O(t),
                    label: u.intl.string(u.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
