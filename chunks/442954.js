n.d(t, { Z: () => j }), n(642613), n(388685);
var a = n(951288),
    r = n(647438),
    i = n(990547),
    l = n(46973),
    s = n(481060),
    o = n(480916),
    c = n(138464),
    d = n(585483),
    u = n(246992),
    m = n(981631),
    p = n(723359),
    h = n(388032),
    x = n(711322),
    f = n(451429);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = {
    CollectiblesExpiryModal: async () => {
        let { default: e } = await n.e("77370").then(n.bind(n, 83950));
        return (t) => (0, a.jsx)(e, b({}, t));
    },
    EmailEnterModal: async () => {
        let { default: e } = await n.e("20670").then(n.bind(n, 993018));
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    headerText: h.intl.string(h.t.ZLRYGR),
                    confirmButtonText: h.intl.string(h.t.PDTjLC),
                    confirmButtonVariant: "primary",
                }),
            );
    },
    EmailPincodeModal: async () => {
        let { default: e } = await n.e("56499").then(n.bind(n, 433570));
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    headerText: h.intl.string(h.t.H3Q7U1),
                    onFormSubmit: () => {},
                    onResend: () => {},
                    onSuccess: () => {},
                    confirmButtonText: h.intl.string(h.t["13ofGh"]),
                    impression: { impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                }),
            );
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await n.e("22447").then(n.bind(n, 686768));
        return (t) => (0, a.jsx)(e, g(b({}, t), { entryPoint: o.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL }));
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([n.e("1716"), n.e("8430")]).then(n.bind(n, 701509));
        return (t) => (0, a.jsx)(e, g(b({}, t), { source: p.L0.NSFW_SERVER }));
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await n.e("80478").then(n.bind(n, 920644));
        return (t) => (0, a.jsx)(e, b({}, t));
    },
    NewUserAgeGate: async () => {
        let { default: e } = await n.e("76323").then(n.bind(n, 298237));
        return (t) => (0, a.jsx)(e, b({}, t));
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await n.e("75435").then(n.bind(n, 751744));
        return (t) => (0, a.jsx)(e, g(b({}, t), { classificationId: "123" }));
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await n.e("28382").then(n.bind(n, 537623));
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    guildId: "123",
                    messageId: null,
                }),
            );
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await n.e("40390").then(n.bind(n, 251871));
        return (t) => (0, a.jsx)(e, g(b({}, t), { guildId: "123" }));
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 145454));
        return (t) =>
            (0, a.jsx)(
                e,
                b(
                    {
                        error: null,
                        working: !1,
                        validPhone: !1,
                    },
                    t,
                ),
            );
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await n.e("66063").then(n.bind(n, 344516));
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    mediaEngineContext: l.Yn.DEFAULT,
                    title: "Voice Settings",
                }),
            );
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(n.bind(n, 198168));
        return (t) =>
            (0, a.jsx)(
                s.Ioy,
                g(b({}, t), {
                    title: "Dynamic Graphics Demo",
                    subtitle: "This modal demonstrates the dynamic graphics system",
                    graphic: {
                        type: "dynamic",
                        component: e.DEMO,
                        aspectRatio: "6/4",
                        props: { text: "Dynamic Content Loaded!" },
                    },
                    actions: [
                        {
                            variant: "primary",
                            text: "Close",
                            onClick: t.onClose,
                        },
                    ],
                    children: (0, a.jsx)("div", {
                        children:
                            "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                    }),
                }),
            );
    },
};
function j() {
    let e = r.useMemo(
            () =>
                Object.keys(v)
                    .map((e) => ({
                        label: e,
                        value: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, n] = r.useState(e[0].value);
    return (0, a.jsx)(s.zJl, {
        className: f.panel,
        children: (0, a.jsxs)("div", {
            className: x.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: x.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: "heading-md/semibold",
                            children: "Open a Modal",
                        }),
                        (0, a.jsxs)("div", {
                            className: x.inputRow,
                            children: [
                                (0, a.jsx)(s.PhF, {
                                    className: x.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => n(e),
                                    popoutLayerContext: u.O$,
                                }),
                                (0, a.jsx)(s.zxk, {
                                    variant: "primary",
                                    text: "Open",
                                    onClick: () => (0, s.ZDy)(v[t]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: x.section,
                    children: [
                        (0, a.jsx)(s.X6q, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, a.jsx)("div", {
                            className: x.inputRow,
                            children: (0, a.jsx)(s.zxk, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, c.H)(!0), d.S.dispatch(m.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
