n.d(t, { Z: () => g }), n(642613), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(990547),
    i = n(481060),
    s = n(480916),
    o = n(138464),
    c = n(585483),
    d = n(246992),
    u = n(981631),
    m = n(723359),
    x = n(388032),
    h = n(596533),
    p = n(866403);
function f(e) {
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
function v(e, t) {
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
let b = {
    CollectiblesExpiryModal: async () => {
        let { default: e } = await n.e("77370").then(n.bind(n, 83950));
        return (t) => (0, a.jsx)(e, f({}, t));
    },
    EmailEnterModal: async () => {
        let { default: e } = await n.e("93288").then(n.bind(n, 396410));
        return (t) =>
            (0, a.jsx)(
                e,
                v(f({}, t), {
                    headerText: x.intl.string(x.t.ZLRYGR),
                    confirmButtonText: x.intl.string(x.t.PDTjLC),
                    confirmButtonVariant: "primary",
                }),
            );
    },
    EmailPincodeModal: async () => {
        let { default: e } = await n.e("94566").then(n.bind(n, 965072));
        return (t) =>
            (0, a.jsx)(
                e,
                v(f({}, t), {
                    headerText: x.intl.string(x.t.H3Q7U1),
                    onFormSubmit: () => {},
                    onResend: () => {},
                    onSuccess: () => {},
                    confirmButtonText: x.intl.string(x.t["13ofGh"]),
                    impression: { impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                }),
            );
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await n.e("22447").then(n.bind(n, 686768));
        return (t) => (0, a.jsx)(e, v(f({}, t), { entryPoint: s.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL }));
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([n.e("1716"), n.e("48590")]).then(n.bind(n, 746882));
        return (t) => (0, a.jsx)(e, v(f({}, t), { source: m.L0.NSFW_SERVER }));
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await n.e("80478").then(n.bind(n, 920644));
        return (t) => (0, a.jsx)(e, f({}, t));
    },
    NewUserAgeGate: async () => {
        let { default: e } = await n.e("76323").then(n.bind(n, 298237));
        return (t) => (0, a.jsx)(e, f({}, t));
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await n.e("75435").then(n.bind(n, 751744));
        return (t) => (0, a.jsx)(e, v(f({}, t), { classificationId: "123" }));
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await n.e("28382").then(n.bind(n, 537623));
        return (t) =>
            (0, a.jsx)(
                e,
                v(f({}, t), {
                    guildId: "123",
                    messageId: null,
                }),
            );
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await n.e("40390").then(n.bind(n, 251871));
        return (t) => (0, a.jsx)(e, v(f({}, t), { guildId: "123" }));
    },
};
function g() {
    let e = r.useMemo(
            () =>
                Object.keys(b)
                    .map((e) => ({
                        label: e,
                        value: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, n] = r.useState(e[0].value);
    return (0, a.jsx)(i.zJl, {
        className: p.panel,
        children: (0, a.jsxs)("div", {
            className: h.panelInner,
            children: [
                (0, a.jsxs)("section", {
                    className: h.section,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Open a Modal",
                        }),
                        (0, a.jsxs)("div", {
                            className: h.inputRow,
                            children: [
                                (0, a.jsx)(i.PhF, {
                                    className: h.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => n(e),
                                    popoutLayerContext: d.O$,
                                }),
                                (0, a.jsx)(i.zxk, {
                                    variant: "primary",
                                    text: "Open",
                                    onClick: () => (0, i.ZDy)(b[t]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("section", {
                    className: h.section,
                    children: [
                        (0, a.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, a.jsx)("div", {
                            className: h.inputRow,
                            children: (0, a.jsx)(i.zxk, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, o.H)(!0), c.S.dispatch(u.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
