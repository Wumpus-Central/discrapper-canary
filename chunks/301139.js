a.d(e, { default: () => f });
var i = a(627968),
    n = a(64700),
    l = a(772707),
    s = a(683071),
    r = a(192308),
    c = a(116833),
    o = a(793574),
    _ = a(688810),
    C = a(323082),
    A = a(964404),
    u = a(954571),
    N = a(163437),
    d = a(4126),
    I = a(189213),
    p = a(144228),
    S = a(292666),
    E = a(150934),
    O = a(817281),
    m = a(652215),
    T = a(985018),
    P = a(644494);
let L = [
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_USING_ENOUGH",
        nameGetter: () => T.intl.string(T.t["+RZgNV"]),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_TOO_EXPENSIVE",
        nameGetter: () => T.intl.string(T.t.kgPXgv),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_WORTH",
        nameGetter: () => T.intl.string(T.t.vujsUK),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_NOT_SURE_HOW_TO_USE",
        nameGetter: () => T.intl.string(T.t.AYAOLF),
    },
    {
        value: "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER",
        nameGetter: () => T.intl.string(T.t.wZLu3Y),
    },
];
function g(t) {
    let { application: e, subscriptionId: a, onClose: l, transitionState: s } = t,
        [r, c] = n.useState(!1),
        [o, _] = n.useState(null),
        [C, A] = n.useState(""),
        N = n.useCallback(() => {
            null != o &&
                (u.default.track(m.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: o,
                    application_id: e.id,
                    reason: C,
                    subscription_id: a,
                }),
                l());
        }, [e.id, a, o, l, C]);
    return (
        n.useEffect(() => {
            O.Ay.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: r });
        }, [r]),
        (0, i.jsxs)(I.Modal, {
            title: T.intl.string(T.t.zPxMdQ),
            subtitle: T.intl.string(T.t["QJGdB+"]),
            actions: [{ variant: "primary", text: T.intl.string(T.t.geKm7t), onClick: N, disabled: null == o }],
            onClose: l,
            transitionState: s,
            children: [
                (0, i.jsx)("div", {
                    className: P.U7,
                    children: (0, i.jsx)(p.z, {
                        value: o,
                        options: L.map((t) => {
                            let { nameGetter: e, value: a } = t;
                            return { name: e(), value: a };
                        }),
                        onChange: (t) => _(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === o &&
                    (0, i.jsx)("div", {
                        className: P.Xo,
                        children: (0, i.jsx)(S.k, {
                            autoFocus: !0,
                            placeholder: T.intl.string(T.t.s6tM8c),
                            value: C,
                            onChange: A,
                        }),
                    }),
                (0, i.jsx)(E.S, {
                    checked: r,
                    onChange: (t) => c(t),
                    label: T.intl.string(T.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
var R = a(416072);
function f(t) {
    let { transitionState: e, application: a, storeListing: I, subscription: p, guild: S, onClose: E } = t,
        { analyticsLocations: O } = (0, _.Ay)(o.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: P,
            error: L,
            submitting: f,
        } = ((t) => {
            let [e, a] = n.useState(!1),
                [i, l] = n.useState(null);
            return {
                cancelSubscription: async (e) => {
                    try {
                        return a(!0), await C.M2(e, t), !0;
                    } catch (t) {
                        l(t);
                    } finally {
                        a(!1);
                    }
                },
                error: i,
                submitting: e,
            };
        })(O),
        U = async () => {
            if (await P(p.id)) {
                try {
                    await C.hP();
                } catch {}
                A.Ay.disableApplicationSubscriptionCancellationSurvey
                    ? E()
                    : (0, r.openModalLazy)(
                          async () => (await E(), (t) => (0, i.jsx)(g, { application: a, subscriptionId: p.id, ...t })),
                      );
            }
        };
    n.useEffect(() => {
        u.default.track(m.HAw.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let h = (0, N.bg)(I.skuFlags);
    return (0, i.jsx)(l.k, {
        actions: [{ loading: f, onClick: U, text: T.intl.string(T.t.KSqyfW), variant: "critical-primary" }],
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: { application: a, className: R.Sb },
        },
        title: T.intl.string(T.t.CeCHk1),
        subtitle: h
            ? T.intl.format(T.t.fZP9QD, { applicationName: a.name, timestamp: p.currentPeriodEnd.getTime() })
            : S?.name !== void 0
              ? T.intl.format(T.t["3LeWBF"], {
                    guild: S.name,
                    applicationName: a.name,
                    timestamp: p.currentPeriodEnd.getTime(),
                })
              : T.intl.format(T.t["8vum6M"], { applicationName: a.name, timestamp: p.currentPeriodEnd.getTime() }),
        transitionState: e,
        onClose: E,
        children: (0, i.jsxs)("div", {
            className: R.oV,
            children: [
                null != L ? (0, i.jsx)(s.w, { type: "critical", children: L.message }) : null,
                (0, i.jsx)(d.iH, { applicationId: a.id, storeListingBenefits: I.benefits, className: R.iq }),
            ],
        }),
    });
}
