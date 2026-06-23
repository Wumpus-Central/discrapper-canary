i.d(e, { default: () => U });
var n = i(627968),
    a = i(64700),
    l = i(772707),
    s = i(683071),
    r = i(192308),
    c = i(116833),
    o = i(793574),
    C = i(688810),
    _ = i(753390),
    u = i(742023),
    A = i(174459),
    N = i(163437),
    I = i(4126),
    d = i(189213),
    S = i(773812),
    p = i(292666),
    E = i(150934),
    O = i(817281),
    m = i(652215),
    T = i(375708),
    P = i(644494);
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
    let { application: e, subscriptionId: i, onClose: l, transitionState: s } = t,
        [r, c] = a.useState(!1),
        [o, C] = a.useState(null),
        [_, u] = a.useState(""),
        N = a.useCallback(() => {
            null != o &&
                (A.default.track(m.HAw.PREMIUM_APP_CANCELLATION_SURVEY_SUBMITTED, {
                    answer: o,
                    application_id: e.id,
                    reason: _,
                    subscription_id: i,
                }),
                l());
        }, [e.id, i, o, l, _]);
    return (
        a.useEffect(() => {
            O.Ay.updatedUnsyncedSettings({ disableApplicationSubscriptionCancellationSurvey: r });
        }, [r]),
        (0, n.jsxs)(d.Modal, {
            title: T.intl.string(T.t.zPxMdQ),
            subtitle: T.intl.string(T.t["QJGdB+"]),
            actions: [{ variant: "primary", text: T.intl.string(T.t.geKm7t), onClick: N, disabled: null == o }],
            onClose: l,
            transitionState: s,
            children: [
                (0, n.jsx)("div", {
                    className: P.U7,
                    children: (0, n.jsx)(S.z, {
                        value: o,
                        options: L.map((t) => {
                            let { nameGetter: e, value: i } = t;
                            return { name: e(), value: i };
                        }),
                        onChange: (t) => C(t),
                    }),
                }),
                "APPLICATION_SUBSCRIPTION_CANCELLATION_SURVEY_ANSWER_CHOICE_OTHER" === o &&
                    (0, n.jsx)("div", {
                        className: P.Xo,
                        children: (0, n.jsx)(p.k, {
                            autoFocus: !0,
                            placeholder: T.intl.string(T.t.s6tM8c),
                            value: _,
                            onChange: u,
                        }),
                    }),
                (0, n.jsx)(E.S, {
                    checked: r,
                    onChange: (t) => c(t),
                    label: T.intl.string(T.t["3vPFQi"]),
                    labelType: "secondary",
                }),
            ],
        })
    );
}
var R = i(416072);
function U(t) {
    let { transitionState: e, application: i, storeListing: d, subscription: S, guild: p, onClose: E } = t,
        { analyticsLocations: O } = (0, C.Ay)(o.A.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL),
        {
            cancelSubscription: P,
            error: L,
            submitting: U,
        } = (function (t) {
            let [e, i] = a.useState(!1),
                [n, l] = a.useState(null);
            return {
                cancelSubscription: async function (e) {
                    try {
                        return i(!0), await _.M2(e, t), !0;
                    } catch (t) {
                        l(t);
                    } finally {
                        i(!1);
                    }
                },
                error: n,
                submitting: e,
            };
        })(O);
    async function y() {
        if (await P(S.id)) {
            try {
                await _.hP();
            } catch {}
            u.Ay.disableApplicationSubscriptionCancellationSurvey
                ? E()
                : (0, r.openModalLazy)(
                      async () => (await E(), (t) => (0, n.jsx)(g, { application: i, subscriptionId: S.id, ...t })),
                  );
        }
    }
    a.useEffect(() => {
        A.default.track(m.HAw.CANCELLATION_FLOW_STARTED, { location_stack: O });
    }, [O]);
    let f = (0, N.bg)(d.skuFlags);
    return (0, n.jsx)(l.k, {
        actions: [{ loading: U, onClick: y, text: T.intl.string(T.t.KSqyfW), variant: "critical-primary" }],
        graphic: {
            type: "dynamic",
            component: c.DynamicGraphicComponent.APPLICATION_IMAGE_HEADER,
            aspectRatio: "16/9",
            props: { application: i, className: R.Sb },
        },
        title: T.intl.string(T.t.CeCHk1),
        subtitle: f
            ? T.intl.format(T.t.fZP9QD, { applicationName: i.name, timestamp: S.currentPeriodEnd.getTime() })
            : p?.name !== void 0
              ? T.intl.format(T.t["3LeWBF"], {
                    guild: p.name,
                    applicationName: i.name,
                    timestamp: S.currentPeriodEnd.getTime(),
                })
              : T.intl.format(T.t["8vum6M"], { applicationName: i.name, timestamp: S.currentPeriodEnd.getTime() }),
        transitionState: e,
        onClose: E,
        children: (0, n.jsxs)("div", {
            className: R.oV,
            children: [
                null != L ? (0, n.jsx)(s.w, { type: "critical", children: L.message }) : null,
                (0, n.jsx)(I.iH, { applicationId: i.id, storeListingBenefits: d.benefits, className: R.iq }),
            ],
        }),
    });
}
