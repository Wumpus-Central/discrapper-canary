a.d(t, { Z: () => j }), a(642613), a(388685);
var n = a(951288),
    r = a(647438),
    l = a(990547),
    i = a(481060),
    s = a(480916),
    o = a(138464),
    c = a(585483),
    d = a(246992),
    u = a(981631),
    m = a(723359),
    x = a(388032),
    h = a(711322),
    p = a(451429);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
let f = {
    CollectiblesExpiryModal: async () => {
        let { default: e } = await a.e("77370").then(a.bind(a, 83950));
        return (t) => (0, n.jsx)(e, v({}, t));
    },
    EmailEnterModal: async () => {
        let { default: e } = await a.e("93288").then(a.bind(a, 396410));
        return (t) =>
            (0, n.jsx)(
                e,
                b(v({}, t), {
                    headerText: x.intl.string(x.t.ZLRYGR),
                    confirmButtonText: x.intl.string(x.t.PDTjLC),
                    confirmButtonVariant: "primary",
                }),
            );
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("94566").then(a.bind(a, 965072));
        return (t) =>
            (0, n.jsx)(
                e,
                b(v({}, t), {
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
        let { default: e } = await a.e("22447").then(a.bind(a, 686768));
        return (t) => (0, n.jsx)(e, b(v({}, t), { entryPoint: s.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL }));
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("71172"), a.e("1337"), a.e("26328")]).then(a.bind(a, 746882));
        return (t) => (0, n.jsx)(e, b(v({}, t), { source: m.L0.NSFW_SERVER }));
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await a.e("75435").then(a.bind(a, 751744));
        return (t) => (0, n.jsx)(e, b(v({}, t), { classificationId: "123" }));
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await a.e("28382").then(a.bind(a, 537623));
        return (t) =>
            (0, n.jsx)(
                e,
                b(v({}, t), {
                    guildId: "123",
                    messageId: null,
                }),
            );
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("40390").then(a.bind(a, 251871));
        return (t) => (0, n.jsx)(e, b(v({}, t), { guildId: "123" }));
    },
};
function j() {
    let e = r.useMemo(
            () =>
                Object.keys(f)
                    .map((e) => ({
                        label: e,
                        value: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = r.useState(e[0].value);
    return (0, n.jsx)(i.zJl, {
        className: p.panel,
        children: (0, n.jsxs)("div", {
            className: h.panelInner,
            children: [
                (0, n.jsxs)("section", {
                    className: h.section,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Open a Modal",
                        }),
                        (0, n.jsxs)("div", {
                            className: h.inputRow,
                            children: [
                                (0, n.jsx)(i.PhF, {
                                    className: h.input,
                                    options: e,
                                    isSelected: (e) => t === e,
                                    serialize: (e) => e,
                                    select: (e) => a(e),
                                    popoutLayerContext: d.O$,
                                }),
                                (0, n.jsx)(i.zxk, {
                                    variant: "primary",
                                    text: "Open",
                                    onClick: () => (0, i.ZDy)(f[t]),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("section", {
                    className: h.section,
                    children: [
                        (0, n.jsx)(i.X6q, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, n.jsx)("div", {
                            className: h.inputRow,
                            children: (0, n.jsx)(i.zxk, {
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
