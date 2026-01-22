n.d(t, {
    A: () => _,
}),
    n(896048),
    n(638769);
var a = n(627968),
    l = n(64700),
    i = n(110259),
    r = n(205693),
    s = n(397927),
    o = n(847599),
    c = n(598653),
    d = n(71393),
    u = n(287809),
    m = n(166403),
    p = n(203982),
    h = n(652215),
    f = n(204925),
    x = n(985018),
    b = n(815907),
    g = n(661251);

function v(e) {
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

function j(e, t) {
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
let y = {
    EmailEnterModal: async () => {
        let { default: e } = await n.e("29232").then(n.bind(n, 180275));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    headerText: x.intl.string(x.t.ZLRYGU),
                    confirmButtonText: x.intl.string(x.t.PDTjLN),
                    confirmButtonVariant: "primary",
                }),
            );
    },
    EmailPincodeModal: async () => {
        let { default: e } = await n.e("19840").then(n.bind(n, 79779));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    headerText: x.intl.string(x.t.H3Q7U8),
                    onFormSubmit: () => {},
                    onResend: () => {},
                    onSuccess: () => {},
                    confirmButtonText: x.intl.string(x.t["13ofGu"]),
                    impression: {
                        impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE,
                    },
                }),
            );
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await n.e("18467").then(n.bind(n, 297102));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    entryPoint: o.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL,
                }),
            );
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([n.e("10136"), n.e("63090")]).then(n.bind(n, 776971));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    source: f.w_.NSFW_SERVER,
                }),
            );
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await n.e("80959").then(n.bind(n, 784578));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    NewUserAgeGate: async () => {
        let { default: e } = await n.e("1143").then(n.bind(n, 284778));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await n.e("93530").then(n.bind(n, 244321));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    classificationId: "123",
                }),
            );
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await n.e("7133").then(n.bind(n, 580812));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123",
                    messageId: null,
                }),
            );
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await n.e("52343").then(n.bind(n, 725034));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123",
                }),
            );
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 515258));
        return (t) =>
            (0, a.jsx)(
                e,
                v(
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
        let { default: e } = await n.e("96531").then(n.bind(n, 880510));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    mediaEngineContext: r.x.DEFAULT,
                    subtitle: "Devtools subtitle",
                }),
            );
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(n.bind(n, 116833));
        return (t) =>
            (0, a.jsx)(
                s.kpP,
                j(v({}, t), {
                    title: "Dynamic Graphics Demo",
                    subtitle: "This modal demonstrates the dynamic graphics system",
                    graphic: {
                        type: "dynamic",
                        component: e.DEMO,
                        aspectRatio: "6/4",
                        props: {
                            text: "Dynamic Content Loaded!",
                        },
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
        let { default: e } = await n.e("82318").then(n.bind(n, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(n.bind(n, 810412));
        return (n) =>
            (0, a.jsx)(
                e,
                j(v({}, n), {
                    clientSettingType: t.LEGACY_GAME,
                    gameId: "123456789",
                }),
            );
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await n.e("80347").then(n.bind(n, 318998)),
            { CancellationContext: t } = await Promise.resolve().then(n.bind(n, 916974)),
            { PremiumTypes: i } = await Promise.resolve().then(n.bind(n, 788868)),
            r = {
                id: "test-subscription-id",
                userId: "test-user-id",
                status: 1,
                currency: "usd",
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 2592e6),
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
            s = l.forwardRef((n, s) => {
                let [o, c] = l.useState(null);
                return (0, a.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: i.TIER_2,
                        onClose: n.onClose,
                        transitionState: n.transitionState,
                        premiumSubscription: r,
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
        return (s.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, a.jsx)(s, v({}, e));
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([n.e("54569"), n.e("24900")]).then(n.bind(n, 251632)),
            { NewMemberActionTypes: t } = await Promise.resolve().then(n.bind(n, 374084)),
            l = {
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
                j(v({}, t), {
                    guildId: "123456789",
                    action: l,
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
        let { default: e } = await n.e("71282").then(n.bind(n, 315337)),
            t = await Promise.resolve().then(n.bind(n, 643501)),
            { createChannelRecord: l } = await Promise.resolve().then(n.bind(n, 95701)),
            i = l({
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
                bitrate: 64e3,
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
            r = {
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
                let l = t.default.getDevicesForPlatform,
                    s = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    c = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === h.fg2.PLAYSTATION ? r : l.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== h.fg2.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === h.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let d = n.onClose;
                return (
                    (n.onClose = async () => {
                        (t.default.getDevicesForPlatform = l),
                            (t.default.getFetchingDevices = s),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = c),
                            await d();
                    }),
                    (0, a.jsx)(
                        e,
                        j(v({}, n), {
                            channel: i,
                            platform: h.fg2.PLAYSTATION,
                        }),
                    )
                );
            };
        return (s.displayName = "PlayStationModalWrapper"), s;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([n.e("27495"), n.e("81865")]).then(n.bind(n, 651930));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    detectedActivity: {
                        application_id: "123456789",
                        name: "Test Game",
                    },
                }),
            );
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([n.e("74327"), n.e("99484")]).then(n.bind(n, 355690));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    classificationId: "123456789",
                }),
            );
    },
    CreateTagModal: async () => {
        let { default: e } = await n.e("47326").then(n.bind(n, 950989));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    channelId: "123456789",
                    guildId: "987654321",
                }),
            );
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await n.e("47326").then(n.bind(n, 950989)),
            t = {
                id: "tag-123",
                name: "Bug Report",
                emojiId: "123456789",
                emojiName: "\uD83D\uDC1B",
                moderated: !0,
            };
        return (n) =>
            (0, a.jsx)(
                e,
                j(v({}, n), {
                    channelId: "123456789",
                    guildId: "987654321",
                    tag: t,
                }),
            );
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Confirm Action",
                    subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                    confirmText: "Confirm",
                    onConfirm: () => console.log("ConfirmModal: Confirmed"),
                    onCancel: () => console.log("ConfirmModal: Cancelled"),
                }),
            );
    },
    AlertModal: async () => {
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Alert",
                    body: "This is an alert message with a single action.",
                    confirmText: "OK",
                    onConfirm: () => console.log("AlertModal: Confirmed"),
                }),
            );
    },
    AlertModalWithCancel: async () => {
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Confirm Action",
                    body: "Are you sure you want to proceed with this action?",
                    confirmText: "Yes",
                    cancelText: "No",
                    onConfirm: () => console.log("AlertModalWithCancel: Confirmed"),
                    onCancel: () => console.log("AlertModalWithCancel: Cancelled"),
                }),
            );
    },
    AlertModalWithSecondary: async () => {
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Settings Change",
                    body: "This will change your account settings.",
                    confirmText: "Apply",
                    cancelText: "Cancel",
                    secondaryConfirmText: "Don't show this again",
                    onConfirm: () => console.log("AlertModalWithSecondary: Confirmed"),
                    onCancel: () => console.log("AlertModalWithSecondary: Cancelled"),
                    onConfirmSecondary: () => console.log("AlertModalWithSecondary: Secondary action confirmed"),
                }),
            );
    },
    GuildDisableCommunicationModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: l,
                Checkbox: i,
                ButtonGroup: r,
            } = await Promise.resolve().then(n.bind(n, 397927)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                n.bind(n, 200700),
            ),
            c = await Promise.resolve().then(n.t.bind(n, 64700, 19)),
            d = "TestUser";

        function u(n) {
            let [u, m] = c.useState(s.DURATION_60_SEC),
                [p, h] = c.useState(""),
                [f, x] = c.useState(!1),
                [b, g] = c.useState(!1),
                v = [
                    {
                        value: s.DURATION_60_SEC,
                        label: o(s.DURATION_60_SEC),
                    },
                    {
                        value: s.DURATION_5_MIN,
                        label: o(s.DURATION_5_MIN),
                    },
                    {
                        value: s.DURATION_10_MIN,
                        label: o(s.DURATION_10_MIN),
                    },
                    {
                        value: s.DURATION_1_HOUR,
                        label: o(s.DURATION_1_HOUR),
                    },
                    {
                        value: s.DURATION_1_DAY,
                        label: o(s.DURATION_1_DAY),
                    },
                    {
                        value: s.DURATION_1_WEEK,
                        label: o(s.DURATION_1_WEEK),
                    },
                ],
                j = c.useCallback(async () => {
                    x(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: d,
                            duration: o(u),
                            reason: null != p ? p : "No reason provided",
                            resolveFlag: b,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        x(!1),
                        n.onClose();
                }, [u, p, b, n]);
            return (0, a.jsxs)("div", {
                style: {
                    padding: "20px",
                    maxWidth: "500px",
                },
                children: [
                    (0, a.jsxs)(l, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", d, "#", "0001"],
                    }),
                    (0, a.jsx)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, a.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, a.jsx)(l, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Duration",
                            }),
                            (0, a.jsx)(r, {
                                children: v.map((t) =>
                                    (0, a.jsx)(
                                        e,
                                        {
                                            variant: u === t.value ? "primary" : "secondary",
                                            size: "sm",
                                            text: t.label,
                                            onClick: () => m(t.value),
                                        },
                                        t.value,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, a.jsx)(l, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, a.jsx)("textarea", {
                                value: p,
                                onChange: (e) => h(e.target.value),
                                placeholder: "Enter reason for timeout...",
                                style: {
                                    width: "100%",
                                    minHeight: "80px",
                                    padding: "8px",
                                    border: "1px solid var(--border-subtle)",
                                    borderRadius: "4px",
                                    backgroundColor: "var(--background-base-low)",
                                    color: "var(--text-strong)",
                                    resize: "vertical",
                                },
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: "mb-4",
                        children: (0, a.jsx)(i, {
                            checked: b,
                            onChange: g,
                            label: "Resolve associated mod report",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            justifyContent: "flex-end",
                        },
                        children: [
                            (0, a.jsx)(e, {
                                variant: "secondary",
                                text: "Cancel",
                                onClick: n.onClose,
                            }),
                            (0, a.jsx)(e, {
                                variant: "primary",
                                text: "Timeout User",
                                onClick: j,
                                disabled: f,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, a.jsx)(u, v({}, e));
    },
    GuildPowerupDeactivateModal: async () => {
        let { Button: e, Text: t, Heading: l, Checkbox: i } = await Promise.resolve().then(n.bind(n, 397927)),
            r = await Promise.resolve().then(n.t.bind(n, 64700, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            c = 60,
            d = 8;

        function u(n) {
            let [u, m] = r.useState(!1),
                [p, h] = r.useState(!1),
                f = r.useCallback(async () => {
                    h(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        h(!1),
                        n.onClose();
                }, [n]);
            return (0, a.jsxs)("div", {
                style: {
                    padding: "20px",
                    maxWidth: "500px",
                },
                children: [
                    (0, a.jsxs)(l, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Deactivate ", s],
                    }),
                    (0, a.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            s,
                            " from your server and disable all associated features.",
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-base-lower)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                        },
                        children: [
                            (0, a.jsx)(l, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, a.jsxs)("div", {
                                style: {
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "8px",
                                },
                                children: [
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", o, " emoji slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", c, " sticker slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", d, " sound slots"],
                                    }),
                                    (0, a.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "• Custom server banner",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, a.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-danger)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-feedback-critical)",
                        },
                        children: [
                            (0, a.jsxs)(t, {
                                variant: "eyebrow",
                                color: "text-feedback-critical",
                                className: "mb-2",
                                children: [
                                    (0, a.jsx)("span", {
                                        role: "img",
                                        "aria-label": "Warning",
                                        children: "⚠️",
                                    }),
                                    " ",
                                    "Warning",
                                ],
                            }),
                            (0, a.jsx)(t, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children:
                                    "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone.",
                            }),
                        ],
                    }),
                    (0, a.jsx)("div", {
                        className: "mb-4",
                        children: (0, a.jsx)(i, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        style: {
                            display: "flex",
                            gap: "8px",
                            justifyContent: "flex-end",
                        },
                        children: [
                            (0, a.jsx)(e, {
                                variant: "secondary",
                                text: "Cancel",
                                onClick: n.onClose,
                            }),
                            (0, a.jsx)(e, {
                                variant: "critical-primary",
                                text: "Deactivate Level",
                                onClick: f,
                                disabled: !u,
                                loading: p,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, a.jsx)(u, v({}, e));
    },
    DataHarvestModal: async () => {
        let { default: e } = await n.e("98171").then(n.bind(n, 481398));
        return (t) =>
            (0, a.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1e3);
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([n.e("20115"), n.e("2118")]).then(n.bind(n, 939006));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    onClose: async () => {
                        console.log("EnableCommunityModal: Closed"), await t.onClose();
                    },
                }),
            );
    },
    DeprivateModal: async () => {
        let e = (await Promise.all([n.e("8018"), n.e("77238")]).then(n.bind(n, 147696))).default;
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123456789012345678",
                    startingChannelId: "987654321098765432",
                }),
            );
    },
    CameraPreviewModal: async () => {
        let { default: e } = await n.e("10534").then(n.bind(n, 308229));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    videoEnabled: !1,
                    onEnable: () => console.log("Camera enabled"),
                }),
            );
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await n.e("10534").then(n.bind(n, 308229));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    videoEnabled: !0,
                    onEnable: () => console.log("Camera enabled"),
                }),
            );
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await n.e("92682").then(n.bind(n, 390897));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
                }),
            );
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 303682));
        return (n) =>
            (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await n.onClose();
                },
                startingScreen: t.SELECT_FRIENDS,
            });
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 303682));
        return (n) =>
            (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await n.onClose();
                },
                startingScreen: t.REMINDER,
            });
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await n.e("59839").then(n.bind(n, 889186));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    parentId: null,
                }),
            );
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([n.e("28136"), n.e("21743"), n.e("58697")]).then(n.bind(n, 190930));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    applicationId: "123456789",
                    mediaUrl: "https://picsum.photos/400/300.jpg",
                }),
            );
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await n.e("19106").then(n.bind(n, 279673));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    onSubmit: () => {
                        console.log("CallUserConfirmationModal: Call confirmed"), t.onClose();
                    },
                }),
            );
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await n.e("24848").then(n.bind(n, 354643));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
                }),
            );
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await n.e("4075").then(n.bind(n, 59430));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123456789",
                    onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
                }),
            );
    },
    ConsentCheckBoxModal: async () => {
        let { VoidConfirmModal: e } = await Promise.resolve().then(n.bind(n, 640238)),
            { Text: t, Heading: l } = await Promise.resolve().then(n.bind(n, 397927)),
            i = await Promise.resolve().then(n.t.bind(n, 64700, 19));

        function r(n) {
            let [r, o] = i.useState(!1),
                [c, d] = i.useState(!1);
            return (0, a.jsx)(
                e,
                j(v({}, n), {
                    header: "Consent CheckBox Examples",
                    confirmText: "Close",
                    cancelText: "",
                    onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), n.onClose()),
                    onCancel: () => {},
                    children: (0, a.jsxs)("div", {
                        style: {
                            padding: "20px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        },
                        children: [
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l, {
                                        variant: "heading-md/semibold",
                                        style: {
                                            marginBottom: "12px",
                                        },
                                        children: "Terms of Service Consent",
                                    }),
                                    (0, a.jsx)(s.Checkbox, {
                                        label: "I agree to Discord's Terms of Service and Privacy Policy",
                                        checked: r,
                                        onChange: (e) => o(e),
                                        labelType: "secondary",
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        style: {
                                            marginTop: "8px",
                                        },
                                        children: ["Consent status: ", r ? "Agreed" : "Not agreed"],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l, {
                                        variant: "heading-md/semibold",
                                        style: {
                                            marginBottom: "12px",
                                        },
                                        children: "Promotional Email Consent",
                                    }),
                                    (0, a.jsx)(s.Checkbox, {
                                        label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                        checked: c,
                                        onChange: (e) => d(e),
                                        labelType: "secondary",
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        style: {
                                            marginTop: "8px",
                                        },
                                        children: ["Promo consent status: ", c ? "Opted in" : "Not opted in"],
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            );
        }
        return (r.displayName = "ConsentCheckBoxModalContent"), (e) => (0, a.jsx)(r, v({}, e));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await n.e("46313").then(n.bind(n, 336496));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123456789",
                    onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
                }),
            );
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await n.e("70232").then(n.bind(n, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 860689)),
            l = t({
                id: "123456789",
                name: "Test Server",
                description: "A test server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 2,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guild: l,
                }),
            );
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await n.e("70232").then(n.bind(n, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 860689)),
            { GuildFeatures: l } = await Promise.resolve().then(n.bind(n, 652215)),
            i = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [l.COMMUNITY],
                preferredLocale: "en-US",
                afkChannelId: null,
                afkTimeout: 300,
                systemChannelId: null,
                verificationLevel: 3,
                joinedAt: new Date(),
                defaultMessageNotifications: 0,
                mfaLevel: 0,
                application_id: null,
                explicitContentFilter: 0,
                vanityURLCode: null,
                premiumTier: 0,
                premiumSubscriberCount: 0,
                premiumProgressBarEnabled: !1,
                systemChannelFlags: 0,
                discoverySplash: null,
                rulesChannelId: null,
                safetyAlertsChannelId: null,
                publicUpdatesChannelId: null,
                maxStageVideoChannelUsers: 10,
                maxVideoChannelUsers: 25,
                maxMembers: 5e5,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guild: i,
                }),
            );
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await n.e("90410").then(n.bind(n, 126033));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    guildId: "123456789",
                    initialTierEmojiIds: new Set(["emoji1"]),
                    onSubmit: (e) => {
                        console.log("EmojiAddModal: Selected emojis:", Array.from(e));
                    },
                    transitionToManageEmoji: () => {
                        console.log("EmojiAddModal: Transition to manage emoji clicked");
                    },
                    onClose: () => (console.log("EmojiAddModal: Modal closed"), t.onClose()),
                }),
            );
    },
    StreamFullModal: async () => {
        let { default: e } = await n.e("25894").then(n.bind(n, 389170));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await n.e("31385").then(n.bind(n, 58144));
        return (n) =>
            (0, a.jsx)(
                l,
                j(v({}, n), {
                    currentUser: t,
                    otherUser: e,
                }),
            );
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await n.e("84811").then(n.bind(n, 389094));
        return (n) =>
            (0, a.jsx)(
                l,
                j(v({}, n), {
                    currentUser: t,
                    otherUser: e,
                }),
            );
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await n.e("17219").then(n.bind(n, 187278));
        return (n) =>
            (0, a.jsx)(
                l,
                j(v({}, n), {
                    currentUser: e,
                    otherUser: t,
                }),
            );
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await n.e("43139").then(n.bind(n, 179950));
        return (n) =>
            (0, a.jsx)(
                l,
                j(v({}, n), {
                    currentUser: e,
                    otherUser: t,
                }),
            );
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([n.e("14882"), n.e("72875")]).then(n.bind(n, 320742));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await n.e("73987").then(n.bind(n, 773486)),
            t = m.A.getPremiumGroupSubscription();
        return null == t
            ? () => null
            : (n) =>
                  (0, a.jsx)(
                      e,
                      j(v({}, n), {
                          subscription: t,
                      }),
                  );
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await n.e("60072").then(n.bind(n, 159707));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    premiumGroupSubscriptionId: "1234567890",
                    premiumGroupInviteId: "1234567890",
                    isExistingSub: !1,
                    premiumGroupPrimaryName: "Test User",
                }),
            );
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await n.e("74575").then(n.bind(n, 218642));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    SafetyUserSentimentFeedbackModal: async () => {
        let { default: e } = await Promise.all([n.e("16833"), n.e("95095")]).then(n.bind(n, 156189));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    CaptchaTestModal: async () => {
        let { default: e } = await n.e("48817").then(n.bind(n, 424584));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Confirm Password",
                    actionText: "Submit",
                    handleSubmit: async (e) => {
                        console.log("PasswordConfirm: Password submitted:", e),
                            await new Promise((e) => setTimeout(e, 1e3));
                    },
                }),
            );
    },
    BlockedDomainModal: async () => {
        let { default: e } = await n.e("40850").then(n.bind(n, 534340));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    url: "https://example-phishing-site.com/malicious-page",
                }),
            );
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await n.e("62684").then(n.bind(n, 228855)),
            t = Object.keys(d.A.getGuilds())[0];
        return (n) =>
            (0, a.jsx)(
                e,
                j(v({}, n), {
                    guildId: t,
                }),
            );
    },
    LinkNotDiscordModal: async () => {
        let { default: e } = await n.e("20978").then(n.bind(n, 696452));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    url: "https://external-website.com/some-page",
                }),
            );
    },
    UrgentMessageModal: async () => {
        let { default: e } = await n.e("88077").then(n.bind(n, 187964));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    UserAgreementsModal: async () => {
        let { default: e } = await n.e("22220").then(n.bind(n, 639719));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await n.e("71905").then(n.bind(n, 868952)),
            t = Object.values(d.A.getGuilds())[0];
        return null == t
            ? () => null
            : (n) =>
                  (0, a.jsx)(
                      e,
                      j(v({}, n), {
                          guild: t,
                      }),
                  );
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([n.e("71853"), n.e("75052")]).then(n.bind(n, 516259));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([n.e("79023"), n.e("83155"), n.e("52367")]).then(n.bind(n, 563038));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await n.e("69595").then(n.bind(n, 526710));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
};

function _() {
    let e = l.useMemo(
            () =>
                Object.keys(y)
                    .map((e) => ({
                        label: e,
                        value: e,
                        id: e,
                    }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, n] = l.useState(null);
    return (0, a.jsx)(s.IpV, {
        className: g.nd,
        children: (0, a.jsxs)("div", {
            className: b.l$,
            children: [
                (0, a.jsx)("section", {
                    className: b.uW,
                    children: (0, a.jsxs)(s.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(s.ZiE, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, a.jsx)(s.Button, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, s.mMO)(y[t]),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("section", {
                    className: b.uW,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, a.jsx)("div", {
                            className: b.bd,
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, c.o)(!0), p._.dispatch(h.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
