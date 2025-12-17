n.d(t, { Z: () => C }), n(388685), n(642613);
var a = n(54381),
    r = n(473749),
    l = n(990547),
    i = n(46973),
    s = n(481060),
    o = n(480916),
    c = n(138464),
    d = n(430824),
    u = n(594174),
    m = n(78839),
    p = n(585483),
    h = n(981631),
    f = n(723359),
    x = n(388032),
    b = n(68428),
    g = n(663618);
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
    CollectiblesExpiryModal: async () => {
        let { default: e } = await n.e("77370").then(n.bind(n, 83950));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    EmailEnterModal: async () => {
        let { default: e } = await n.e("20670").then(n.bind(n, 993018));
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
        let { default: e } = await n.e("56499").then(n.bind(n, 433570));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    headerText: x.intl.string(x.t.H3Q7U8),
                    onFormSubmit: () => {},
                    onResend: () => {},
                    onSuccess: () => {},
                    confirmButtonText: x.intl.string(x.t["13ofGu"]),
                    impression: { impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
                }),
            );
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await n.e("22447").then(n.bind(n, 686768));
        return (t) => (0, a.jsx)(e, j(v({}, t), { entryPoint: o.cU.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL }));
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([n.e("1716"), n.e("79689")]).then(n.bind(n, 746882));
        return (t) => (0, a.jsx)(e, j(v({}, t), { source: f.L0.NSFW_SERVER }));
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await n.e("80478").then(n.bind(n, 920644));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    NewUserAgeGate: async () => {
        let { default: e } = await n.e("76323").then(n.bind(n, 298237));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await n.e("75435").then(n.bind(n, 751744));
        return (t) => (0, a.jsx)(e, j(v({}, t), { classificationId: "123" }));
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await n.e("28382").then(n.bind(n, 537623));
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
        let { default: e } = await n.e("20156").then(n.bind(n, 251871));
        return (t) => (0, a.jsx)(e, j(v({}, t), { guildId: "123" }));
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 145454));
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
        let { default: e } = await n.e("51749").then(n.bind(n, 800740));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    mediaEngineContext: i.Yn.DEFAULT,
                    subtitle: "Devtools subtitle",
                }),
            );
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(n.bind(n, 198168));
        return (t) =>
            (0, a.jsx)(
                s.Ioy,
                j(v({}, t), {
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
                j(v({}, n), {
                    clientSettingType: t.LEGACY_GAME,
                    gameId: "123456789",
                }),
            );
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await n.e("14963").then(n.bind(n, 398775)),
            { CancellationContext: t } = await Promise.resolve().then(n.bind(n, 594135)),
            { PremiumTypes: l } = await Promise.resolve().then(n.bind(n, 474936)),
            i = {
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
                        premiumType: l.TIER_2,
                        onClose: n.onClose,
                        transitionState: n.transitionState,
                        premiumSubscription: i,
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
        let { default: e } = await Promise.all([n.e("7590"), n.e("80187")]).then(n.bind(n, 380716)),
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
                j(v({}, t), {
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
            l = r({
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
            i = {
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
                (t.default.getDevicesForPlatform = (e) => (e === h.ABu.PLAYSTATION ? i : r.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== h.ABu.PLAYSTATION && s.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === h.ABu.PLAYSTATION ? "device-1" : o.call(t.default, e)),
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
                        j(v({}, n), {
                            channel: l,
                            platform: h.ABu.PLAYSTATION,
                        }),
                    )
                );
            };
        return (s.displayName = "PlayStationModalWrapper"), s;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await Promise.all([n.e("82077"), n.e("66724")]).then(n.bind(n, 953848));
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
        let { default: e } = await Promise.all([n.e("65652"), n.e("3243")]).then(n.bind(n, 208265));
        return (t) => (0, a.jsx)(e, j(v({}, t), { classificationId: "123456789" }));
    },
    CreateTagModal: async () => {
        let { default: e } = await n.e("21971").then(n.bind(n, 201049));
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
        let { default: e } = await n.e("21971").then(n.bind(n, 201049)),
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
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 793030));
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
        let { default: e } = await n.e("84112").then(n.bind(n, 273352));
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
        let { default: e } = await n.e("84112").then(n.bind(n, 273352));
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
        let { default: e } = await n.e("84112").then(n.bind(n, 273352));
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
    GoLiveConfirmModal: async () => {
        let { default: e } = await Promise.all([n.e("38697"), n.e("4093"), n.e("8218")]).then(n.bind(n, 504580)),
            {
                ApplicationStreamPresets: t,
                ApplicationStreamResolutions: r,
                ApplicationStreamFPS: l,
            } = await Promise.resolve().then(n.bind(n, 37113)),
            i = {
                id: "screen:0:0",
                name: "Entire Screen",
                thumbnail:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==",
                url: "screen:0:0",
            };
        return (n) =>
            (0, a.jsx)(
                e,
                j(v({}, n), {
                    selectedSource: i,
                    selectedPreset: t.PRESET_VIDEO,
                    selectedResolution: r.RESOLUTION_1080,
                    selectedFPS: l.FPS_60,
                    sound: !0,
                    previewDisabled: !1,
                    selectedChannelId: "987654321",
                    sourceChanged: !1,
                    selectGuild: !1,
                    selectSource: !1,
                    selectedGuildId: "123456789",
                    targetGuildPremiumTier: 2,
                    onChangeSelectedChannelId: (e) => console.log("Channel changed:", e),
                    onChangeSelectedFPS: (e) => console.log("FPS changed:", e),
                    onChangeSelectedPreset: (e) => console.log("Preset changed:", e),
                    onChangeSelectedResolution: (e) => console.log("Resolution changed:", e),
                    onChangeSelectedSource: (e, t) => console.log("Source changed:", e, t),
                    onChangeSource: () => console.log("Change source clicked"),
                    onChangeAudioDevice: (e) => console.log("Audio device changed:", e),
                    onChangeGuild: () => console.log("Change guild clicked"),
                    onChangeSound: (e) => console.log("Sound changed:", e),
                    onChangePreviewDisabled: (e) => console.log("Preview disabled changed:", e),
                    onClose: () => console.log("Go Live Confirm modal closed"),
                }),
            );
    },
    GuildDisableCommunicationModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: r,
                Checkbox: l,
                ButtonGroup: i,
            } = await Promise.resolve().then(n.bind(n, 481060)),
            { DisableCommunicationDuration: s, getFriendlyDurationString: o } = await Promise.resolve().then(
                n.bind(n, 590433),
            ),
            c = await Promise.resolve().then(n.t.bind(n, 473749, 19)),
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
                        await new Promise((e) => setTimeout(e, 1000)),
                        x(!1),
                        n.onClose();
                }, [u, p, b, n]);
            return (0, a.jsxs)("div", {
                style: {
                    padding: "20px",
                    maxWidth: "500px",
                },
                children: [
                    (0, a.jsxs)(r, {
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
                            (0, a.jsx)(r, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Duration",
                            }),
                            (0, a.jsx)(i, {
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
                            (0, a.jsx)(r, {
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
                        children: (0, a.jsx)(l, {
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
        let { Button: e, Text: t, Heading: r, Checkbox: l } = await Promise.resolve().then(n.bind(n, 481060)),
            i = await Promise.resolve().then(n.t.bind(n, 473749, 19)),
            s = "Level 3 Server Boost",
            o = 200,
            c = 60,
            d = 8;
        function u(n) {
            let [u, m] = i.useState(!1),
                [p, h] = i.useState(!1),
                f = i.useCallback(async () => {
                    h(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: s,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2000)),
                        h(!1),
                        n.onClose();
                }, [n]);
            return (0, a.jsxs)("div", {
                style: {
                    padding: "20px",
                    maxWidth: "500px",
                },
                children: [
                    (0, a.jsxs)(r, {
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
                            (0, a.jsx)(r, {
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
                                        children: ["\u2022 ", o, " emoji slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", c, " sticker slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["\u2022 ", d, " sound slots"],
                                    }),
                                    (0, a.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "\u2022 Custom server banner",
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
                            border: "1px solid var(--status-danger)",
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
                                        children: "\u26A0️",
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
                        children: (0, a.jsx)(l, {
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
        let { default: e } = await n.e("25120").then(n.bind(n, 926281));
        return (t) =>
            (0, a.jsx)(e, {
                modalProps: t,
                onConfirm: (e) => {
                    console.log("DataHarvestModal: Requesting data export for:", e),
                        setTimeout(() => {
                            console.log("DataHarvestModal: Data export request submitted successfully");
                        }, 1000);
                },
            });
    },
    EnableCommunityModal: async () => {
        let { default: e } = await Promise.all([n.e("57486"), n.e("39464")]).then(n.bind(n, 87026));
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
        let e = (await Promise.all([n.e("38697"), n.e("82140")]).then(n.bind(n, 89216))).default;
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
        let { default: e } = await n.e("91018").then(n.bind(n, 601572));
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
        let { default: e } = await n.e("91018").then(n.bind(n, 601572));
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
        let { default: e } = await n.e("52282").then(n.bind(n, 5101));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
                }),
            );
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 656139));
        return (n) =>
            (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await n.onClose();
                },
                startingScreen: t.SELECT_FRIENDS,
            });
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 656139));
        return (n) =>
            (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await n.onClose();
                },
                startingScreen: t.REMINDER,
            });
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await n.e("95257").then(n.bind(n, 610617));
        return (t) => (0, a.jsx)(e, j(v({}, t), { parentId: null }));
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([n.e("49049"), n.e("4530"), n.e("15696")]).then(n.bind(n, 899201));
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
        let { default: e } = await n.e("27157").then(n.bind(n, 736454));
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
        let { default: e } = await n.e("82560").then(n.bind(n, 391312));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), { onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()) }),
            );
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await n.e("9354").then(n.bind(n, 461533));
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
        let { default: e } = await n.e("63490").then(n.bind(n, 853268)),
            { VoidConfirmModal: t } = await Promise.resolve().then(n.bind(n, 288022)),
            { Text: r, Heading: l, Anchor: i } = await Promise.resolve().then(n.bind(n, 481060)),
            s = await Promise.resolve().then(n.t.bind(n, 473749, 19));
        function o(n) {
            let [o, c] = s.useState(!1),
                [d, u] = s.useState(!1);
            return (0, a.jsx)(
                t,
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
                                        style: { marginBottom: "12px" },
                                        children: "Terms of Service Consent",
                                    }),
                                    (0, a.jsx)(e, {
                                        value: o,
                                        onChange: c,
                                        subText: (0, a.jsxs)("span", {
                                            children: [
                                                "I agree to Discord's",
                                                " ",
                                                (0, a.jsx)(i, {
                                                    href: "https://discord.com/terms",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Terms of Service",
                                                }),
                                                " ",
                                                "and",
                                                " ",
                                                (0, a.jsx)(i, {
                                                    href: "https://discord.com/privacy",
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    children: "Privacy Policy",
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, a.jsxs)(r, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        style: { marginTop: "8px" },
                                        children: ["Consent status: ", o ? "Agreed" : "Not agreed"],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l, {
                                        variant: "heading-md/semibold",
                                        style: { marginBottom: "12px" },
                                        children: "Promotional Email Consent",
                                    }),
                                    (0, a.jsx)(e, {
                                        value: d,
                                        onChange: u,
                                        subText:
                                            "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                        muted: !0,
                                    }),
                                    (0, a.jsxs)(r, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        style: { marginTop: "8px" },
                                        children: ["Promo consent status: ", d ? "Opted in" : "Not opted in"],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsx)(l, {
                                        variant: "heading-md/semibold",
                                        style: { marginBottom: "12px" },
                                        children: "Custom Styled Consent",
                                    }),
                                    (0, a.jsx)(e, {
                                        value: !1,
                                        onChange: () => {},
                                        subText:
                                            "This is a custom styled consent checkbox with different styling options.",
                                        marginTopStyle: "margin-top-16",
                                        subtextClassName: "custom-consent-text",
                                    }),
                                ],
                            }),
                        ],
                    }),
                }),
            );
        }
        return (o.displayName = "ConsentCheckBoxModalContent"), (e) => (0, a.jsx)(o, v({}, e));
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await n.e("53324").then(n.bind(n, 821312));
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
        let { default: e } = await n.e("72458").then(n.bind(n, 694278)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 411198)),
            r = t({
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
                maxMembers: 500000,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, a.jsx)(e, j(v({}, t), { guild: r }));
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await n.e("72458").then(n.bind(n, 694278)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 411198)),
            { GuildFeatures: r } = await Promise.resolve().then(n.bind(n, 981631)),
            l = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [r.COMMUNITY],
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
                maxMembers: 500000,
                nsfwLevel: 0,
                ownerConfiguredContentLevel: null,
                hubType: null,
                latestOnboardingQuestionId: null,
                profile: null,
                premiumFeatures: null,
                moderatorReporting: null,
            });
        return (t) => (0, a.jsx)(e, j(v({}, t), { guild: l }));
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await n.e("21112").then(n.bind(n, 301160));
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
        let { default: e } = await n.e("63757").then(n.bind(n, 309690));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: r } = await n.e("59716").then(n.bind(n, 275370));
        return (n) =>
            (0, a.jsx)(
                r,
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
        let { default: r } = await n.e("958").then(n.bind(n, 4526));
        return (n) =>
            (0, a.jsx)(
                r,
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
        let { default: r } = await n.e("69015").then(n.bind(n, 247265));
        return (n) =>
            (0, a.jsx)(
                r,
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
        let { default: r } = await n.e("50872").then(n.bind(n, 442673));
        return (n) =>
            (0, a.jsx)(
                r,
                j(v({}, n), {
                    currentUser: e,
                    otherUser: t,
                }),
            );
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([n.e("8753"), n.e("90688")]).then(n.bind(n, 978305));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await n.e("86948").then(n.bind(n, 153241)),
            t = m.Z.getPremiumGroupSubscription();
        return null == t ? () => null : (n) => (0, a.jsx)(e, j(v({}, n), { subscription: t }));
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await n.e("26450").then(n.bind(n, 382927));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    premiumGroupSubscriptionId: "1234567890",
                    isExistingSub: !1,
                    premiumGroupPrimaryName: "Test User",
                }),
            );
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await n.e("98137").then(n.bind(n, 397013));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    SafetyUserSentimentFeedbackModal: async () => {
        let { default: e } = await Promise.all([n.e("26860"), n.e("52432")]).then(n.bind(n, 349994));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    CaptchaTestModal: async () => {
        let { default: e } = await n.e("61323").then(n.bind(n, 333636));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 355497));
        return (t) =>
            (0, a.jsx)(
                e,
                j(v({}, t), {
                    title: "Confirm Password",
                    actionText: "Submit",
                    handleSubmit: async (e) => {
                        console.log("PasswordConfirm: Password submitted:", e),
                            await new Promise((e) => setTimeout(e, 1000));
                    },
                }),
            );
    },
    BlockedDomainModal: async () => {
        let { default: e } = await n.e("2435").then(n.bind(n, 821606));
        return (t) => (0, a.jsx)(e, j(v({}, t), { url: "https://example-phishing-site.com/malicious-page" }));
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await n.e("35489").then(n.bind(n, 582712)),
            t = Object.keys(d.Z.getGuilds())[0];
        return (n) => (0, a.jsx)(e, j(v({}, n), { guildId: t }));
    },
    LinkNotDiscordModal: async () => {
        let { default: e } = await n.e("74194").then(n.bind(n, 269817));
        return (t) => (0, a.jsx)(e, j(v({}, t), { url: "https://external-website.com/some-page" }));
    },
    UrgentMessageModal: async () => {
        let { default: e } = await n.e("37971").then(n.bind(n, 848548));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    UserAgreementsModal: async () => {
        let { default: e } = await n.e("50536").then(n.bind(n, 133876));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await n.e("59298").then(n.bind(n, 193845)),
            t = Object.values(d.Z.getGuilds())[0];
        return null == t ? () => null : (n) => (0, a.jsx)(e, j(v({}, n), { guild: t }));
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([n.e("74969"), n.e("27284")]).then(n.bind(n, 153932));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([n.e("13873"), n.e("86872"), n.e("92977")]).then(n.bind(n, 472365));
        return (t) => (0, a.jsx)(e, v({}, t));
    },
};
function C() {
    let e = r.useMemo(
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
        [t, n] = r.useState(null);
    return (0, a.jsx)(s.zJl, {
        className: g.panel,
        children: (0, a.jsxs)("div", {
            className: b.panelInner,
            children: [
                (0, a.jsx)("section", {
                    className: b.section,
                    children: (0, a.jsxs)(s.Kqy, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(s.VcW, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                selectionMode: "single",
                                onSelectionChange: (e) => n(e),
                            }),
                            (0, a.jsx)(s.Button, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, s.ZDy)(y[t]),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("section", {
                    className: b.section,
                    children: [
                        (0, a.jsx)(s.Heading, {
                            variant: "heading-md/semibold",
                            children: "Wow moment",
                        }),
                        (0, a.jsx)("div", {
                            className: b.inputRow,
                            children: (0, a.jsx)(s.Button, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, c.H)(!0), p.S.dispatch(h.CkL.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
