i.d(e, { A: () => u });
var a = i(627968),
    n = i(64700),
    s = i(158954),
    l = i(397927),
    r = i(817281),
    c = i(954571),
    _ = i(652215),
    o = i(985018),
    C = i(359511);
let A = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => o.intl.string(o.t["+RZgNV"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => o.intl.string(o.t.kgPXgv),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => o.intl.string(o.t.vujsUK),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => o.intl.string(o.t.AYAOLF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => o.intl.string(o.t.wZLu3Y),
    },
];
function u(t) {
    let { application: e, subscriptionId: i, onClose: u, transitionState: I } = t,
        [N, d] = n.useState(!1),
        [S, p] = n.useState(null),
        [E, O] = n.useState(""),
        T = n.useCallback(() => {
            null != S &&
                (c.default.track(_.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: S,
                    application_id: e.id,
                    reason: E,
                    subscription_id: i,
                }),
                u());
        }, [e.id, i, S, u, E]);
    return (
        n.useEffect(() => {
            r.Ay.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: N });
        }, [N]),
        (0, a.jsxs)(s.Modal, {
            title: o.intl.string(o.t.zPxMdQ),
            subtitle: o.intl.string(o.t["QJGdB+"]),
            actions: [{ variant: "primary", text: o.intl.string(o.t.geKm7t), onClick: T, disabled: null == S }],
            onClose: u,
            transitionState: I,
            children: [
                (0, a.jsx)("div", {
                    className: C.U7,
                    children: (0, a.jsx)(l.z6M, {
                        value: S,
                        options: A.map((t) => {
                            let { nameGetter: e, value: i } = t;
                            return { name: e(), value: i };
                        }),
                        onChange: (t) => p(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === S &&
                    (0, a.jsx)("div", {
                        className: C.Xo,
                        children: (0, a.jsx)(l.ksK, {
                            autoFocus: !0,
                            placeholder: o.intl.string(o.t.s6tM8c),
                            value: E,
                            onChange: O,
                        }),
                    }),
                (0, a.jsx)(l.Checkbox, {
                    checked: N,
                    onChange: (t) => d(t),
                    label: o.intl.string(o.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
