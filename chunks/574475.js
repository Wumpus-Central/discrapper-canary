a.d(e, { A: () => N });
var i = a(627968),
    n = a(64700),
    l = a(189213),
    s = a(954197),
    r = a(292666),
    c = a(150934),
    o = a(817281),
    _ = a(954571),
    C = a(652215),
    A = a(985018),
    u = a(644494);
let d = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => A.intl.string(A.t["+RZgNV"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => A.intl.string(A.t.kgPXgv),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => A.intl.string(A.t.vujsUK),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => A.intl.string(A.t.AYAOLF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => A.intl.string(A.t.wZLu3Y),
    },
];
function N(t) {
    let { application: e, subscriptionId: a, onClose: N, transitionState: I } = t,
        [p, S] = n.useState(!1),
        [E, O] = n.useState(null),
        [m, T] = n.useState(""),
        P = n.useCallback(() => {
            null != E &&
                (_.default.track(C.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: E,
                    application_id: e.id,
                    reason: m,
                    subscription_id: a,
                }),
                N());
        }, [e.id, a, E, N, m]);
    return (
        n.useEffect(() => {
            o.Ay.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: p });
        }, [p]),
        (0, i.jsxs)(l.Modal, {
            title: A.intl.string(A.t.zPxMdQ),
            subtitle: A.intl.string(A.t["QJGdB+"]),
            actions: [{ variant: "primary", text: A.intl.string(A.t.geKm7t), onClick: P, disabled: null == E }],
            onClose: N,
            transitionState: I,
            children: [
                (0, i.jsx)("div", {
                    className: u.U7,
                    children: (0, i.jsx)(s.z, {
                        value: E,
                        options: d.map((t) => {
                            let { nameGetter: e, value: a } = t;
                            return { name: e(), value: a };
                        }),
                        onChange: (t) => O(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === E &&
                    (0, i.jsx)("div", {
                        className: u.Xo,
                        children: (0, i.jsx)(r.k, {
                            autoFocus: !0,
                            placeholder: A.intl.string(A.t.s6tM8c),
                            value: m,
                            onChange: T,
                        }),
                    }),
                (0, i.jsx)(c.S, {
                    checked: p,
                    onChange: (t) => S(t),
                    label: A.intl.string(A.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
