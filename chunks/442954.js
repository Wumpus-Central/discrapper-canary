n.d(t, { Z: () => j }), n(388685), n(642613);
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
    x = n(596533),
    f = n(866403);
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
        let { default: e } = await Promise.all([n.e("1716"), n.e("48590")]).then(n.bind(n, 746882));
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
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await n.e("20114").then(n.bind(n, 536920)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(n.bind(n, 444295));
        return (n) =>
            (0, a.jsx)(
                e,
                g(b({}, n), {
                    clientSettingType: t.LEGACY_GAME,
                    gameId: "123456789",
                }),
            );
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await n.e("14963").then(n.bind(n, 398775)),
            { CancellationContext: t } = await Promise.resolve().then(n.bind(n, 594135)),
            { PremiumTypes: i } = await Promise.resolve().then(n.bind(n, 474936)),
            l = {
                id: "test-subscription-id",
                userId: "test-user-id",
                status: 1,
                currency: "usd",
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 2592000000),
                items: [
                    {
                        id: "test-item-id",
                        planId: "511651880837840896",
                        quantity: 1,
                    },
                ],
                paymentSourceId: "test-payment-source",
                renewalMutations: null,
                hasActiveTrial: !1,
            },
            s = r.forwardRef((n, s) => {
                let [o, c] = r.useState(null);
                return (0, a.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: i.TIER_2,
                        onClose: n.onClose,
                        transitionState: n.transitionState,
                        premiumSubscription: l,
                        analyticsLocations: [],
                        analyticsLocation: void 0,
                        confettiCanvas: null,
                        churnUserDiscountOffer: null,
                        isFetchingChurnDiscountOffer: !1,
                        fullPrice: "$9.99",
                        discountedPrice: void 0,
                        planId: "511651880837840896",
                        paymentsBlocked: !1,
                        renewalInvoice: null,
                        renewalInvoiceDetails: null,
                        handleCancellation: async () => {},
                        applyOffer: async () => {},
                        pauseDuration: o,
                        setPauseDuration: c,
                    },
                    children: (0, a.jsx)(e, {}),
                });
            });
        return (s.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, a.jsx)(s, b({}, e));
    },
    OverlaySettingsModal: async () => {
        let { default: e } = await n.e("55288").then(n.bind(n, 669083));
        return (t) => (0, a.jsx)(e, { onClose: t.onClose });
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([n.e("7590"), n.e("27703")]).then(n.bind(n, 380716)),
            { NewMemberActionTypes: t } = await Promise.resolve().then(n.bind(n, 734893)),
            r = {
                channelId: "123456789",
                title: "Welcome to the server!",
                description: "Say hello in the welcome channel",
                actionType: t.CHAT,
                emoji: null,
                icon: null,
            };
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    guildId: "123456789",
                    action: r,
                    onSave: (e, t, n) => {
                        console.log("NewMemberActionModal onSave:", {
                            action: e,
                            iconData: t,
                            shouldSaveIcon: n,
                        });
                    },
                    onDelete: () => {
                        console.log("NewMemberActionModal onDelete");
                    },
                }),
            );
    },
    PlayStationModal: async () => {
        let { default: e } = await n.e("638").then(n.bind(n, 543974)),
            t = await Promise.resolve().then(n.bind(n, 258609)),
            { createChannelRecord: r } = await Promise.resolve().then(n.bind(n, 131704)),
            i = r({
                id: "123456789",
                name: "test-voice-channel",
                type: 2,
                guild_id: "987654321",
                position: 0,
                permissionOverwrites: {},
                parent_id: void 0,
                nsfw: !1,
                topic: void 0,
                lastMessageId: void 0,
                bitrate: 64000,
                userLimit: 0,
                rateLimitPerUser: 0,
                icon: null,
                ownerId: null,
                application_id: null,
                lastPinTimestamp: null,
                rtcRegion: null,
                videoQualityMode: null,
                messageCount: 0,
                memberCount: 0,
                threadMetadata: void 0,
                member: void 0,
                defaultAutoArchiveDuration: void 0,
                flags: 0,
                totalMessageSent: 0,
                availableTags: [],
                appliedTags: [],
                defaultReactionEmoji: null,
                defaultThreadRateLimitPerUser: 0,
                defaultSortOrder: null,
                defaultForumLayout: 0,
            }),
            l = {
                "device-1": {
                    id: "device-1",
                    name: "PS5 - Living Room",
                    platform: "playstation",
                },
                "device-2": {
                    id: "device-2",
                    name: "PS5 - Bedroom",
                    platform: "playstation",
                },
                "device-3": {
                    id: "device-3",
                    name: "PS4 - Office",
                    platform: "playstation",
                },
            },
            s = (n) => {
                let r = t.default.getDevicesForPlatform,
                    s = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    c = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === m.ABu.PLAYSTATION ? l : r.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== m.ABu.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === m.ABu.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let d = n.onClose;
                return (
                    (n.onClose = async () => {
                        (t.default.getDevicesForPlatform = r),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = c),
                            await d();
                    }),
                    (0, a.jsx)(
                        e,
                        g(b({}, n), {
                            channel: i,
                            platform: m.ABu.PLAYSTATION,
                        }),
                    )
                );
            };
        return (s.displayName = "PlayStationModalWrapper"), s;
    },
    GameProfileFeedbackModal: async () => {
        let { default: e } = await n.e("46923").then(n.bind(n, 55396));
        return (t) =>
            (0, a.jsx)(
                e,
                g(b({}, t), {
                    applicationId: "123456789",
                    viewId: "dev-tools-test",
                    showOutdatedInfoOption: !0,
                }),
            );
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([n.e("65652"), n.e("25038")]).then(n.bind(n, 208265));
        return (t) => (0, a.jsx)(e, g(b({}, t), { classificationId: "123456789" }));
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
