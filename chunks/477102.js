a.d(t, { A: () => N });
var n = a(627968),
    l = a(64700),
    i = a(110259),
    s = a(205693),
    r = a(772707),
    o = a(150934),
    d = a(573613),
    c = a(331322),
    u = a(783878),
    m = a(821609),
    h = a(192308),
    p = a(534514),
    x = a(847599),
    g = a(598653),
    v = a(71393),
    b = a(287809),
    _ = a(166403),
    f = a(203982),
    j = a(652215),
    A = a(204925),
    y = a(985018),
    C = a(214868),
    E = a(505206);
let S = {
    EmailEnterModal: async () => {
        let { default: e } = await a.e("29232").then(a.bind(a, 180275));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                headerText: y.intl.string(y.t.ZLRYGU),
                confirmButtonText: y.intl.string(y.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await a.e("19840").then(a.bind(a, 79779));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                headerText: y.intl.string(y.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: y.intl.string(y.t["13ofGu"]),
                impression: { impressionName: i.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await a.e("18467").then(a.bind(a, 297102));
        return (t) => (0, n.jsx)(e, { ...t, entryPoint: x.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([a.e("10136"), a.e("53333")]).then(a.bind(a, 776971));
        return (t) => (0, n.jsx)(e, { ...t, source: A.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await a.e("80959").then(a.bind(a, 784578));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await Promise.all([a.e("1143"), a.e("20969")]).then(a.bind(a, 284778));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await a.e("93530").then(a.bind(a, 244321));
        return (t) => (0, n.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await a.e("29514").then(a.bind(a, 580812));
        return (t) => (0, n.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await a.e("52343").then(a.bind(a, 725034));
        return (t) => (0, n.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 515258));
        return (t) => (0, n.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await a.e("96531").then(a.bind(a, 880510));
        return (t) => (0, n.jsx)(e, { ...t, mediaEngineContext: s.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(a.bind(a, 116833));
        return (t) =>
            (0, n.jsx)(r.k, {
                ...t,
                title: "Dynamic Graphics Demo",
                subtitle: "This modal demonstrates the dynamic graphics system",
                graphic: {
                    type: "dynamic",
                    component: e.DEMO,
                    aspectRatio: "6/4",
                    props: { text: "Dynamic Content Loaded!" },
                },
                actions: [{ variant: "primary", text: "Close", onClick: t.onClose }],
                children: (0, n.jsx)("div", {
                    children:
                        "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                }),
            });
    },
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await a.e("82318").then(a.bind(a, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(a.bind(a, 810412));
        return (a) => (0, n.jsx)(e, { ...a, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await a.e("80347").then(a.bind(a, 318998)),
            { CancellationContext: t } = await Promise.resolve().then(a.bind(a, 916974)),
            { PremiumTypes: i } = await Promise.resolve().then(a.bind(a, 788868)),
            s = {
                id: "test-subscription-id",
                userId: "test-user-id",
                status: 1,
                currency: "usd",
                currentPeriodStart: new Date(),
                currentPeriodEnd: new Date(Date.now() + 2592e6),
                items: [{ id: "test-item-id", planId: "511651880837840896", quantity: 1 }],
                paymentSourceId: "test-payment-source",
                renewalMutations: null,
                hasActiveTrial: !1,
            },
            r = l.forwardRef((a, r) => {
                let [o, d] = l.useState(null);
                return (0, n.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: i.TIER_2,
                        onClose: a.onClose,
                        transitionState: a.transitionState,
                        premiumSubscription: s,
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
                        setPauseDuration: d,
                    },
                    children: (0, n.jsx)(e, {}),
                });
            });
        return (r.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, n.jsx)(r, { ...e });
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([a.e("54569"), a.e("33342")]).then(a.bind(a, 251632)),
            { NewMemberActionTypes: t } = await Promise.resolve().then(a.bind(a, 374084)),
            l = {
                channelId: "123456789",
                title: "Welcome to the server!",
                description: "Say hello in the welcome channel",
                actionType: t.CHAT,
                emoji: null,
                icon: null,
            };
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                guildId: "123456789",
                action: l,
                onSave: (e, t, a) => {
                    console.log("NewMemberActionModal onSave:", { action: e, iconData: t, shouldSaveIcon: a });
                },
                onDelete: () => {
                    console.log("NewMemberActionModal onDelete");
                },
            });
    },
    PlayStationModal: async () => {
        let { default: e } = await a.e("71282").then(a.bind(a, 315337)),
            t = await Promise.resolve().then(a.bind(a, 643501)),
            { createChannelRecord: l } = await Promise.resolve().then(a.bind(a, 95701)),
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
            s = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            r = (a) => {
                let l = t.default.getDevicesForPlatform,
                    r = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === j.fg2.PLAYSTATION ? s : l.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== j.fg2.PLAYSTATION && r.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === j.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = a.onClose;
                return (
                    (a.onClose = async () => {
                        (t.default.getDevicesForPlatform = l),
                            (t.default.getFetchingDevices = r),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, n.jsx)(e, { ...a, channel: i, platform: j.fg2.PLAYSTATION })
                );
            };
        return (r.displayName = "PlayStationModalWrapper"), r;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await a.e("27495").then(a.bind(a, 651930));
        return (t) => (0, n.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([a.e("74327"), a.e("36316")]).then(a.bind(a, 355690));
        return (t) => (0, n.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await a.e("47326").then(a.bind(a, 950989));
        return (t) => (0, n.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await a.e("47326").then(a.bind(a, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (a) => (0, n.jsx)(e, { ...a, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                title: "Confirm Action",
                subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                confirmText: "Confirm",
                onConfirm: () => console.log("ConfirmModal: Confirmed"),
                onCancel: () => console.log("ConfirmModal: Cancelled"),
            });
    },
    AlertModal: async () => {
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                title: "Alert",
                body: "This is an alert message with a single action.",
                confirmText: "OK",
                onConfirm: () => console.log("AlertModal: Confirmed"),
            });
    },
    AlertModalWithCancel: async () => {
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                title: "Confirm Action",
                body: "Are you sure you want to proceed with this action?",
                confirmText: "Yes",
                cancelText: "No",
                onConfirm: () => console.log("AlertModalWithCancel: Confirmed"),
                onCancel: () => console.log("AlertModalWithCancel: Cancelled"),
            });
    },
    AlertModalWithSecondary: async () => {
        let { default: e } = await a.e("10919").then(a.bind(a, 556506));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                title: "Settings Change",
                body: "This will change your account settings.",
                confirmText: "Apply",
                cancelText: "Cancel",
                secondaryConfirmText: "Don't show this again",
                onConfirm: () => console.log("AlertModalWithSecondary: Confirmed"),
                onCancel: () => console.log("AlertModalWithSecondary: Cancelled"),
                onConfirmSecondary: () => console.log("AlertModalWithSecondary: Secondary action confirmed"),
            });
    },
    GuildDisableCommunicationModal: async () => {
        let {
                Button: e,
                Text: t,
                Heading: l,
                Checkbox: i,
                ButtonGroup: s,
            } = await a.e("77260").then(a.bind(a, 397927)),
            { DisableCommunicationDuration: r, getFriendlyDurationString: o } = await Promise.resolve().then(
                a.bind(a, 200700),
            ),
            d = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            c = "TestUser";
        function u(a) {
            let [u, m] = d.useState(r.DURATION_60_SEC),
                [h, p] = d.useState(""),
                [x, g] = d.useState(!1),
                [v, b] = d.useState(!1),
                _ = [
                    { value: r.DURATION_60_SEC, label: o(r.DURATION_60_SEC) },
                    { value: r.DURATION_5_MIN, label: o(r.DURATION_5_MIN) },
                    { value: r.DURATION_10_MIN, label: o(r.DURATION_10_MIN) },
                    { value: r.DURATION_1_HOUR, label: o(r.DURATION_1_HOUR) },
                    { value: r.DURATION_1_DAY, label: o(r.DURATION_1_DAY) },
                    { value: r.DURATION_1_WEEK, label: o(r.DURATION_1_WEEK) },
                ],
                f = d.useCallback(async () => {
                    g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: v,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        a.onClose();
                }, [u, h, v, a]);
            return (0, n.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, n.jsxs)(l, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", c, "#", "0001"],
                    }),
                    (0, n.jsx)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: "This will temporarily disable the user's ability to communicate in this server.",
                    }),
                    (0, n.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, n.jsx)(l, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
                            (0, n.jsx)(s, {
                                children: _.map((t) =>
                                    (0, n.jsx)(
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
                    (0, n.jsxs)("div", {
                        className: "mb-4",
                        children: [
                            (0, n.jsx)(l, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, n.jsx)("textarea", {
                                value: h,
                                onChange: (e) => p(e.target.value),
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
                    (0, n.jsx)("div", {
                        className: "mb-4",
                        children: (0, n.jsx)(i, { checked: v, onChange: b, label: "Resolve associated mod report" }),
                    }),
                    (0, n.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, n.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, n.jsx)(e, { variant: "primary", text: "Timeout User", onClick: f, disabled: x }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, n.jsx)(u, { ...e });
    },
    GuildPowerupDeactivateModal: async () => {
        let { Button: e, Text: t, Heading: l, Checkbox: i } = await a.e("77260").then(a.bind(a, 397927)),
            s = await Promise.resolve().then(a.t.bind(a, 64700, 19)),
            r = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(a) {
            let [u, m] = s.useState(!1),
                [h, p] = s.useState(!1),
                x = s.useCallback(async () => {
                    p(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: r,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        p(!1),
                        a.onClose();
                }, [a]);
            return (0, n.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, n.jsxs)(l, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", r] }),
                    (0, n.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            r,
                            " from your server and disable all associated features.",
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-base-lower)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-subtle)",
                        },
                        children: [
                            (0, n.jsx)(l, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, n.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, n.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", o, " emoji slots"],
                                    }),
                                    (0, n.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", d, " sticker slots"],
                                    }),
                                    (0, n.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", c, " sound slots"],
                                    }),
                                    (0, n.jsx)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: "• Custom server banner",
                                    }),
                                ],
                            }),
                        ],
                    }),
                    (0, n.jsxs)("div", {
                        className: "mb-4",
                        style: {
                            backgroundColor: "var(--background-danger)",
                            padding: "16px",
                            borderRadius: "8px",
                            border: "1px solid var(--border-feedback-critical)",
                        },
                        children: [
                            (0, n.jsxs)(t, {
                                variant: "eyebrow",
                                color: "text-feedback-critical",
                                className: "mb-2",
                                children: [
                                    (0, n.jsx)("span", { role: "img", "aria-label": "Warning", children: "⚠️" }),
                                    " ",
                                    "Warning",
                                ],
                            }),
                            (0, n.jsx)(t, {
                                variant: "text-sm/medium",
                                color: "text-feedback-critical",
                                children:
                                    "Deactivating this powerup will immediately remove all Level 3 features from your server. Members will lose access to custom emojis, stickers, and other premium features. This action cannot be undone.",
                            }),
                        ],
                    }),
                    (0, n.jsx)("div", {
                        className: "mb-4",
                        children: (0, n.jsx)(i, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, n.jsx)(e, { variant: "secondary", text: "Cancel", onClick: a.onClose }),
                            (0, n.jsx)(e, {
                                variant: "critical-primary",
                                text: "Deactivate Level",
                                onClick: x,
                                disabled: !u,
                                loading: h,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, n.jsx)(u, { ...e });
    },
    DataHarvestModal: async () => {
        let { default: e } = await a.e("81153").then(a.bind(a, 890904));
        return (t) =>
            (0, n.jsx)(e, {
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
        let { default: e } = await Promise.all([a.e("20115"), a.e("70941")]).then(a.bind(a, 939006));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                onClose: async () => {
                    console.log("EnableCommunityModal: Closed"), await t.onClose();
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await a.e("54857").then(a.bind(a, 147696))).default;
        return (t) => (0, n.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await a.e("10534").then(a.bind(a, 308229));
        return (t) => (0, n.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await a.e("10534").then(a.bind(a, 308229));
        return (t) => (0, n.jsx)(e, { ...t, videoEnabled: !0, onEnable: () => console.log("Camera enabled") });
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 390897));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
            });
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: l, ...i } = a;
            return (0, n.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await l();
                },
                startingScreen: t.SELECT_FRIENDS,
                ...i,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(a.bind(a, 303682));
        return (a) => {
            let { onClose: l, ...i } = a;
            return (0, n.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await l();
                },
                startingScreen: t.REMINDER,
                ...i,
            });
        };
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await a.e("59839").then(a.bind(a, 889186));
        return (t) => (0, n.jsx)(e, { ...t, parentId: null });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([a.e("96758"), a.e("50178")]).then(a.bind(a, 190930));
        return (t) =>
            (0, n.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await a.e("19106").then(a.bind(a, 279673));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                onSubmit: () => {
                    console.log("CallUserConfirmationModal: Call confirmed"), t.onClose();
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await a.e("24848").then(a.bind(a, 354643));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await a.e("4075").then(a.bind(a, 59430));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await a.e("4823").then(a.bind(a, 158954)),
            { Text: t, Heading: l } = await a.e("77260").then(a.bind(a, 397927)),
            i = await Promise.resolve().then(a.t.bind(a, 64700, 19));
        function s(a) {
            let [s, r] = i.useState(!1),
                [d, c] = i.useState(!1);
            return (0, n.jsx)(e, {
                ...a,
                title: "Consent CheckBox Examples",
                confirmText: "Close",
                cancelText: "",
                onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), a.onClose()),
                onCancel: () => {},
                children: (0, n.jsxs)("div", {
                    style: { padding: "20px", display: "flex", flexDirection: "column", gap: "20px" },
                    children: [
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(l, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, n.jsx)(o.S, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: s,
                                    onChange: (e) => r(e),
                                    labelType: "secondary",
                                }),
                                (0, n.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", s ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, n.jsxs)("div", {
                            children: [
                                (0, n.jsx)(l, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, n.jsx)(o.S, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: d,
                                    onChange: (e) => c(e),
                                    labelType: "secondary",
                                }),
                                (0, n.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Promo consent status: ", d ? "Opted in" : "Not opted in"],
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        return (s.displayName = "ConsentCheckBoxModalContent"), (e) => (0, n.jsx)(s, { ...e });
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await a.e("46313").then(a.bind(a, 336496));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await a.e("70232").then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
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
        return (t) => (0, n.jsx)(e, { ...t, guild: l });
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await a.e("70232").then(a.bind(a, 313003)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(a.bind(a, 860689)),
            { GuildFeatures: l } = await Promise.resolve().then(a.bind(a, 652215)),
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
        return (t) => (0, n.jsx)(e, { ...t, guild: i });
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await a.e("90410").then(a.bind(a, 126033));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                guildId: "123456789",
                initialTierEmojiIds: new Set(["emoji1"]),
                onSubmit: (e) => {
                    console.log("EmojiAddModal: Selected emojis:", Array.from(e));
                },
                transitionToManageEmoji: () => {
                    console.log("EmojiAddModal: Transition to manage emoji clicked");
                },
                onClose: () => (console.log("EmojiAddModal: Modal closed"), t.onClose()),
            });
    },
    StreamFullModal: async () => {
        let { default: e } = await a.e("25894").then(a.bind(a, 166789));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = b.default.getUser("12345"),
            t = b.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await a.e("31385").then(a.bind(a, 58144));
        return (a) => (0, n.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = b.default.getUser("12345"),
            t = b.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await a.e("84811").then(a.bind(a, 389094));
        return (a) => (0, n.jsx)(l, { ...a, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = b.default.getUser("12345"),
            t = b.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await a.e("17219").then(a.bind(a, 187278));
        return (a) => (0, n.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = b.default.getUser("12345"),
            t = b.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: l } = await a.e("43139").then(a.bind(a, 179950));
        return (a) => (0, n.jsx)(l, { ...a, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([a.e("66535"), a.e("72875")]).then(a.bind(a, 320742));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await a.e("73987").then(a.bind(a, 773486)),
            t = _.A.getPremiumGroupSubscription();
        return null == t ? () => null : (a) => (0, n.jsx)(e, { ...a, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await a.e("60072").then(a.bind(a, 159707));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                premiumGroupSubscriptionId: "1234567890",
                premiumGroupInviteId: "1234567890",
                isExistingSub: !1,
                premiumGroupPrimaryName: "Test User",
            });
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await a.e("74575").then(a.bind(a, 218642));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await a.e("48817").then(a.bind(a, 424584));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(a.bind(a, 662758));
        return (t) =>
            (0, n.jsx)(e, {
                ...t,
                title: "Confirm Password",
                actionText: "Submit",
                handleSubmit: async (e) => {
                    console.log("PasswordConfirm: Password submitted:", e),
                        await new Promise((e) => setTimeout(e, 1e3));
                },
            });
    },
    BlockedDomainModal: async () => {
        let { default: e } = await a.e("18469").then(a.bind(a, 534340));
        return (t) => (0, n.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await a.e("40303").then(a.bind(a, 228855)),
            t = Object.keys(v.A.getGuilds())[0];
        return (a) => (0, n.jsx)(e, { ...a, guildId: t });
    },
    LinkNotDiscordModal: async () => {
        let { default: e } = await a.e("98597").then(a.bind(a, 696452));
        return (t) => (0, n.jsx)(e, { ...t, url: "https://external-website.com/some-page" });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await a.e("88077").then(a.bind(a, 187964));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await a.e("22220").then(a.bind(a, 639719));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await a.e("71905").then(a.bind(a, 868952)),
            t = Object.values(v.A.getGuilds())[0];
        return null == t ? () => null : (a) => (0, n.jsx)(e, { ...a, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await a.e("73152").then(a.bind(a, 516259));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([a.e("64161"), a.e("83155"), a.e("4366")]).then(a.bind(a, 563038));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await a.e("24833").then(a.bind(a, 526710));
        return (t) => (0, n.jsx)(e, { ...t });
    },
    NewUserOnboarding: async () => {
        let { default: e } = await Promise.all([a.e("86746"), a.e("97050"), a.e("86996")]).then(a.bind(a, 955382));
        return (t) => (0, n.jsx)(e, { ...t });
    },
};
function N() {
    let e = l.useMemo(
            () =>
                Object.keys(S)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, a] = l.useState(null);
    return (0, n.jsx)(d.Ip, {
        className: E.nd,
        children: (0, n.jsxs)("div", {
            className: C.l$,
            children: [
                (0, n.jsx)("section", {
                    className: C.uW,
                    children: (0, n.jsxs)(c.B, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, n.jsx)(u.Z, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: a,
                                selectionMode: "single",
                            }),
                            (0, n.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, h.openModalLazy)(S[t]),
                            }),
                        ],
                    }),
                }),
                (0, n.jsxs)("section", {
                    className: C.uW,
                    children: [
                        (0, n.jsx)(p.D, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, n.jsx)("div", {
                            className: C.bd,
                            children: (0, n.jsx)(m.$, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, g.o)(!0), f._.dispatch(j.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
