n.d(t, { A: () => b });
var a = n(627968),
    i = n(64700),
    s = n(110259),
    l = n(205693),
    r = n(397927),
    o = n(847599),
    d = n(598653),
    c = n(71393),
    u = n(287809),
    m = n(166403),
    h = n(203982),
    x = n(652215),
    p = n(204925),
    g = n(985018),
    f = n(786020),
    v = n(310086);
let _ = {
    EmailEnterModal: async () => {
        let { default: e } = await n.e("29232").then(n.bind(n, 180275));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                headerText: g.intl.string(g.t.ZLRYGU),
                confirmButtonText: g.intl.string(g.t.PDTjLN),
                confirmButtonVariant: "primary",
            });
    },
    EmailPincodeModal: async () => {
        let { default: e } = await n.e("19840").then(n.bind(n, 79779));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                headerText: g.intl.string(g.t.H3Q7U8),
                onFormSubmit: () => {},
                onResend: () => {},
                onSuccess: () => {},
                confirmButtonText: g.intl.string(g.t["13ofGu"]),
                impression: { impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE },
            });
    },
    AgeVerificationRetryModal: async () => {
        let { default: e } = await n.e("18467").then(n.bind(n, 297102));
        return (t) => (0, a.jsx)(e, { ...t, entryPoint: o.q1.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL });
    },
    ExistingUserAgeGatePrompt: async () => {
        let { default: e } = await Promise.all([n.e("10136"), n.e("57965")]).then(n.bind(n, 776971));
        return (t) => (0, a.jsx)(e, { ...t, source: p.w_.NSFW_SERVER });
    },
    ExistingUserAgeGateUnderage: async () => {
        let { default: e } = await n.e("80959").then(n.bind(n, 784578));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    NewUserAgeGate: async () => {
        let { default: e } = await n.e("1143").then(n.bind(n, 284778));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    AutomatedUnderageAppealModal: async () => {
        let { default: e } = await n.e("93530").then(n.bind(n, 244321));
        return (t) => (0, a.jsx)(e, { ...t, classificationId: "123" });
    },
    AutomodRaidResolveModal: async () => {
        let { default: e } = await n.e("7133").then(n.bind(n, 580812));
        return (t) => (0, a.jsx)(e, { ...t, guildId: "123", messageId: null });
    },
    AutomodUserProfileQuarantineAlert: async () => {
        let { default: e } = await n.e("52343").then(n.bind(n, 725034));
        return (t) => (0, a.jsx)(e, { ...t, guildId: "123" });
    },
    PhoneVerificationModal: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 515258));
        return (t) => (0, a.jsx)(e, { error: null, working: !1, validPhone: !1, ...t });
    },
    VoiceSettingsModal: async () => {
        let { default: e } = await n.e("96531").then(n.bind(n, 880510));
        return (t) => (0, a.jsx)(e, { ...t, mediaEngineContext: l.x.DEFAULT, subtitle: "Devtools subtitle" });
    },
    DynamicGraphicDemo: async () => {
        let { DynamicGraphicComponent: e } = await Promise.resolve().then(n.bind(n, 116833));
        return (t) =>
            (0, a.jsx)(r.kpP, {
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
                children: (0, a.jsx)("div", {
                    children:
                        "This modal showcases the new dynamic graphics system where components can be loaded dynamically based on enum values, providing type safety while maintaining runtime flexibility.",
                }),
            });
    },
    OverlayDisabledSurveyModal: async () => {
        let { default: e } = await n.e("82318").then(n.bind(n, 387101)),
            { OverlayToggledClientSettingType: t } = await Promise.resolve().then(n.bind(n, 810412));
        return (n) => (0, a.jsx)(e, { ...n, clientSettingType: t.LEGACY_GAME, gameId: "123456789" });
    },
    PremiumSubscriptionPauseModal: async () => {
        let { PremiumSubscriptionPauseModalSelect: e } = await n.e("80347").then(n.bind(n, 318998)),
            { CancellationContext: t } = await Promise.resolve().then(n.bind(n, 916974)),
            { PremiumTypes: s } = await Promise.resolve().then(n.bind(n, 788868)),
            l = {
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
            r = i.forwardRef((n, r) => {
                let [o, d] = i.useState(null);
                return (0, a.jsx)(t.Provider, {
                    value: {
                        setStep: () => {},
                        premiumType: s.TIER_2,
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
                        setPauseDuration: d,
                    },
                    children: (0, a.jsx)(e, {}),
                });
            });
        return (r.displayName = "PremiumSubscriptionPauseModalWrapper"), (e) => (0, a.jsx)(r, { ...e });
    },
    NewMemberActionModal: async () => {
        let { default: e } = await Promise.all([n.e("54569"), n.e("6162")]).then(n.bind(n, 251632)),
            { NewMemberActionTypes: t } = await Promise.resolve().then(n.bind(n, 374084)),
            i = {
                channelId: "123456789",
                title: "Welcome to the server!",
                description: "Say hello in the welcome channel",
                actionType: t.CHAT,
                emoji: null,
                icon: null,
            };
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                guildId: "123456789",
                action: i,
                onSave: (e, t, n) => {
                    console.log("NewMemberActionModal onSave:", { action: e, iconData: t, shouldSaveIcon: n });
                },
                onDelete: () => {
                    console.log("NewMemberActionModal onDelete");
                },
            });
    },
    PlayStationModal: async () => {
        let { default: e } = await n.e("71282").then(n.bind(n, 315337)),
            t = await Promise.resolve().then(n.bind(n, 643501)),
            { createChannelRecord: i } = await Promise.resolve().then(n.bind(n, 95701)),
            s = i({
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
            l = {
                "device-1": { id: "device-1", name: "PS5 - Living Room", platform: "playstation" },
                "device-2": { id: "device-2", name: "PS5 - Bedroom", platform: "playstation" },
                "device-3": { id: "device-3", name: "PS4 - Office", platform: "playstation" },
            },
            r = (n) => {
                let i = t.default.getDevicesForPlatform,
                    r = t.default.getFetchingDevices,
                    o = t.default.getLastSelectedDeviceByPlatform,
                    d = t.default.getAwaitingRemoteSessionInfo;
                (t.default.getDevicesForPlatform = (e) => (e === x.fg2.PLAYSTATION ? l : i.call(t.default, e))),
                    (t.default.getFetchingDevices = (e) => e !== x.fg2.PLAYSTATION && r.call(t.default, e)),
                    (t.default.getLastSelectedDeviceByPlatform = (e) =>
                        e === x.fg2.PLAYSTATION ? "device-1" : o.call(t.default, e)),
                    (t.default.getAwaitingRemoteSessionInfo = () => null);
                let c = n.onClose;
                return (
                    (n.onClose = async () => {
                        (t.default.getDevicesForPlatform = i),
                            (t.default.getFetchingDevices = r),
                            (t.default.getLastSelectedDeviceByPlatform = o),
                            (t.default.getAwaitingRemoteSessionInfo = d),
                            await c();
                    }),
                    (0, a.jsx)(e, { ...n, channel: s, platform: x.fg2.PLAYSTATION })
                );
            };
        return (r.displayName = "PlayStationModalWrapper"), r;
    },
    GameDetectionReportModal: async () => {
        let { default: e } = await n.e("49876").then(n.bind(n, 651930));
        return (t) => (0, a.jsx)(e, { ...t, detectedActivity: { application_id: "123456789", name: "Test Game" } });
    },
    AppealIngestionModal: async () => {
        let { default: e } = await Promise.all([n.e("74327"), n.e("89648")]).then(n.bind(n, 355690));
        return (t) => (0, a.jsx)(e, { ...t, classificationId: "123456789" });
    },
    CreateTagModal: async () => {
        let { default: e } = await n.e("47326").then(n.bind(n, 950989));
        return (t) => (0, a.jsx)(e, { ...t, channelId: "123456789", guildId: "987654321" });
    },
    CreateTagModalEdit: async () => {
        let { default: e } = await n.e("47326").then(n.bind(n, 950989)),
            t = { id: "tag-123", name: "Bug Report", emojiId: "123456789", emojiName: "\uD83D\uDC1B", moderated: !0 };
        return (n) => (0, a.jsx)(e, { ...n, channelId: "123456789", guildId: "987654321", tag: t });
    },
    ConfirmModal: async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                title: "Confirm Action",
                subtitle: "Are you sure you want to perform this action? This action cannot be undone.",
                confirmText: "Confirm",
                onConfirm: () => console.log("ConfirmModal: Confirmed"),
                onCancel: () => console.log("ConfirmModal: Cancelled"),
            });
    },
    AlertModal: async () => {
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                title: "Alert",
                body: "This is an alert message with a single action.",
                confirmText: "OK",
                onConfirm: () => console.log("AlertModal: Confirmed"),
            });
    },
    AlertModalWithCancel: async () => {
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(e, {
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
        let { default: e } = await n.e("10919").then(n.bind(n, 556506));
        return (t) =>
            (0, a.jsx)(e, {
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
                Heading: i,
                Checkbox: s,
                ButtonGroup: l,
            } = await Promise.resolve().then(n.bind(n, 397927)),
            { DisableCommunicationDuration: r, getFriendlyDurationString: o } = await Promise.resolve().then(
                n.bind(n, 200700),
            ),
            d = await Promise.resolve().then(n.t.bind(n, 64700, 19)),
            c = "TestUser";
        function u(n) {
            let [u, m] = d.useState(r.DURATION_60_SEC),
                [h, x] = d.useState(""),
                [p, g] = d.useState(!1),
                [f, v] = d.useState(!1),
                _ = [
                    { value: r.DURATION_60_SEC, label: o(r.DURATION_60_SEC) },
                    { value: r.DURATION_5_MIN, label: o(r.DURATION_5_MIN) },
                    { value: r.DURATION_10_MIN, label: o(r.DURATION_10_MIN) },
                    { value: r.DURATION_1_HOUR, label: o(r.DURATION_1_HOUR) },
                    { value: r.DURATION_1_DAY, label: o(r.DURATION_1_DAY) },
                    { value: r.DURATION_1_WEEK, label: o(r.DURATION_1_WEEK) },
                ],
                b = d.useCallback(async () => {
                    g(!0),
                        console.log("GuildDisableCommunicationModal: Timing out user", {
                            user: c,
                            duration: o(u),
                            reason: null != h ? h : "No reason provided",
                            resolveFlag: f,
                        }),
                        await new Promise((e) => setTimeout(e, 1e3)),
                        g(!1),
                        n.onClose();
                }, [u, h, f, n]);
            return (0, a.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, a.jsxs)(i, {
                        variant: "heading-lg/semibold",
                        className: "mb-2",
                        children: ["Disable Communication for ", c, "#", "0001"],
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
                            (0, a.jsx)(i, { variant: "heading-sm/semibold", className: "mb-2", children: "Duration" }),
                            (0, a.jsx)(l, {
                                children: _.map((t) =>
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
                            (0, a.jsx)(i, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Reason (Optional)",
                            }),
                            (0, a.jsx)("textarea", {
                                value: h,
                                onChange: (e) => x(e.target.value),
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
                        children: (0, a.jsx)(s, { checked: f, onChange: v, label: "Resolve associated mod report" }),
                    }),
                    (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, a.jsx)(e, { variant: "secondary", text: "Cancel", onClick: n.onClose }),
                            (0, a.jsx)(e, { variant: "primary", text: "Timeout User", onClick: b, disabled: p }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, a.jsx)(u, { ...e });
    },
    GuildPowerupDeactivateModal: async () => {
        let { Button: e, Text: t, Heading: i, Checkbox: s } = await Promise.resolve().then(n.bind(n, 397927)),
            l = await Promise.resolve().then(n.t.bind(n, 64700, 19)),
            r = "Level 3 Server Boost",
            o = 200,
            d = 60,
            c = 8;
        function u(n) {
            let [u, m] = l.useState(!1),
                [h, x] = l.useState(!1),
                p = l.useCallback(async () => {
                    x(!0),
                        console.log("GuildPowerupDeactivateModal: Deactivating powerup", {
                            powerup: r,
                            guildId: "123456789",
                        }),
                        await new Promise((e) => setTimeout(e, 2e3)),
                        x(!1),
                        n.onClose();
                }, [n]);
            return (0, a.jsxs)("div", {
                style: { padding: "20px", maxWidth: "500px" },
                children: [
                    (0, a.jsxs)(i, { variant: "heading-lg/semibold", className: "mb-2", children: ["Deactivate ", r] }),
                    (0, a.jsxs)(t, {
                        variant: "text-sm/normal",
                        className: "mb-4",
                        color: "text-subtle",
                        children: [
                            "This will remove the ",
                            r,
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
                            (0, a.jsx)(i, {
                                variant: "heading-sm/semibold",
                                className: "mb-2",
                                children: "Current Features",
                            }),
                            (0, a.jsxs)("div", {
                                style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" },
                                children: [
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", o, " emoji slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", d, " sticker slots"],
                                    }),
                                    (0, a.jsxs)(t, {
                                        variant: "text-sm/normal",
                                        color: "text-subtle",
                                        children: ["• ", c, " sound slots"],
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
                                    (0, a.jsx)("span", { role: "img", "aria-label": "Warning", children: "⚠️" }),
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
                        children: (0, a.jsx)(s, {
                            checked: u,
                            onChange: m,
                            label: "I understand that deactivating this powerup will remove all Level 3 features from my server",
                            labelType: "secondary",
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        style: { display: "flex", gap: "8px", justifyContent: "flex-end" },
                        children: [
                            (0, a.jsx)(e, { variant: "secondary", text: "Cancel", onClick: n.onClose }),
                            (0, a.jsx)(e, {
                                variant: "critical-primary",
                                text: "Deactivate Level",
                                onClick: p,
                                disabled: !u,
                                loading: h,
                            }),
                        ],
                    }),
                ],
            });
        }
        return (e) => (0, a.jsx)(u, { ...e });
    },
    DataHarvestModal: async () => {
        let { default: e } = await n.e("81153").then(n.bind(n, 890904));
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
        let { default: e } = await Promise.all([n.e("20115"), n.e("43453")]).then(n.bind(n, 939006));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                onClose: async () => {
                    console.log("EnableCommunityModal: Closed"), await t.onClose();
                },
            });
    },
    DeprivateModal: async () => {
        let e = (await n.e("54857").then(n.bind(n, 147696))).default;
        return (t) => (0, a.jsx)(e, { ...t, guildId: "123456789012345678", startingChannelId: "987654321098765432" });
    },
    CameraPreviewModal: async () => {
        let { default: e } = await n.e("10534").then(n.bind(n, 308229));
        return (t) => (0, a.jsx)(e, { ...t, videoEnabled: !1, onEnable: () => console.log("Camera enabled") });
    },
    CameraPreviewModalWithVideo: async () => {
        let { default: e } = await n.e("10534").then(n.bind(n, 308229));
        return (t) => (0, a.jsx)(e, { ...t, videoEnabled: !0, onEnable: () => console.log("Camera enabled") });
    },
    ModeratorReportResolveConfirmModal: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 390897));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                handleResolveFlag: () => console.log("ModeratorReportResolveConfirmModal: Flag resolved"),
            });
    },
    SelectFriendsModal: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 303682));
        return (n) => {
            let { onClose: i, ...s } = n;
            return (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModal: Closed"), await i();
                },
                startingScreen: t.SELECT_FRIENDS,
                ...s,
            });
        };
    },
    SelectFriendsModalReminder: async () => {
        let { default: e, SelectFriendsModalScreens: t } = await Promise.resolve().then(n.bind(n, 303682));
        return (n) => {
            let { onClose: i, ...s } = n;
            return (0, a.jsx)(e, {
                onClose: async () => {
                    console.log("SelectFriendsModalReminder: Closed"), await i();
                },
                startingScreen: t.REMINDER,
                ...s,
            });
        };
    },
    AddFavoriteChannelModal: async () => {
        let { default: e } = await n.e("59839").then(n.bind(n, 889186));
        return (t) => (0, a.jsx)(e, { ...t, parentId: null });
    },
    ActivityShareMomentModal: async () => {
        let { default: e } = await Promise.all([n.e("28136"), n.e("21743"), n.e("85606")]).then(n.bind(n, 190930));
        return (t) =>
            (0, a.jsx)(e, { ...t, applicationId: "123456789", mediaUrl: "https://picsum.photos/400/300.jpg" });
    },
    CallUserConfirmationModal: async () => {
        let { default: e } = await n.e("19106").then(n.bind(n, 279673));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                onSubmit: () => {
                    console.log("CallUserConfirmationModal: Call confirmed"), t.onClose();
                },
            });
    },
    OptInReorderAttemptModal: async () => {
        let { default: e } = await n.e("24848").then(n.bind(n, 354643));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                onClose: () => (console.log("OptInReorderAttemptModal: Modal closed"), t.onClose()),
            });
    },
    GuildAntiRaidReportModal: async () => {
        let { default: e } = await n.e("4075").then(n.bind(n, 59430));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildAntiRaidReportModal: Modal closed"), t.onClose()),
            });
    },
    ConsentCheckBoxModal: async () => {
        let { ConfirmModal: e } = await Promise.resolve().then(n.bind(n, 158954)),
            { Text: t, Heading: i } = await Promise.resolve().then(n.bind(n, 397927)),
            s = await Promise.resolve().then(n.t.bind(n, 64700, 19));
        function l(n) {
            let [l, o] = s.useState(!1),
                [d, c] = s.useState(!1);
            return (0, a.jsx)(e, {
                ...n,
                title: "Consent CheckBox Examples",
                confirmText: "Close",
                cancelText: "",
                onConfirm: () => (console.log("ConsentCheckBoxModal: Modal closed"), n.onClose()),
                onCancel: () => {},
                children: (0, a.jsxs)("div", {
                    style: { padding: "20px", display: "flex", flexDirection: "column", gap: "20px" },
                    children: [
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(i, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Terms of Service Consent",
                                }),
                                (0, a.jsx)(r.Checkbox, {
                                    label: "I agree to Discord's Terms of Service and Privacy Policy",
                                    checked: l,
                                    onChange: (e) => o(e),
                                    labelType: "secondary",
                                }),
                                (0, a.jsxs)(t, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    style: { marginTop: "8px" },
                                    children: ["Consent status: ", l ? "Agreed" : "Not agreed"],
                                }),
                            ],
                        }),
                        (0, a.jsxs)("div", {
                            children: [
                                (0, a.jsx)(i, {
                                    variant: "heading-md/semibold",
                                    style: { marginBottom: "12px" },
                                    children: "Promotional Email Consent",
                                }),
                                (0, a.jsx)(r.Checkbox, {
                                    label: "I would like to receive promotional emails from Discord about new features, events, and other updates.",
                                    checked: d,
                                    onChange: (e) => c(e),
                                    labelType: "secondary",
                                }),
                                (0, a.jsxs)(t, {
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
        return (l.displayName = "ConsentCheckBoxModalContent"), (e) => (0, a.jsx)(l, { ...e });
    },
    GuildRaidLockdownFeedbackModal: async () => {
        let { default: e } = await n.e("46313").then(n.bind(n, 336496));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                guildId: "123456789",
                onClose: () => (console.log("GuildRaidLockdownFeedbackModal: Modal closed"), t.onClose()),
            });
    },
    GuildVerificationLevelModal: async () => {
        let { default: e } = await n.e("70232").then(n.bind(n, 535384)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 860689)),
            i = t({
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
        return (t) => (0, a.jsx)(e, { ...t, guild: i });
    },
    GuildVerificationLevelModalCommunity: async () => {
        let { default: e } = await n.e("70232").then(n.bind(n, 535384)),
            { dangerouslyConstructGuildRecordFromUntypedObject: t } = await Promise.resolve().then(n.bind(n, 860689)),
            { GuildFeatures: i } = await Promise.resolve().then(n.bind(n, 652215)),
            s = t({
                id: "123456789",
                name: "Test Community Server",
                description: "A test community server for development",
                ownerId: "987654321",
                icon: null,
                splash: null,
                banner: null,
                homeHeader: null,
                features: [i.COMMUNITY],
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
        return (t) => (0, a.jsx)(e, { ...t, guild: s });
    },
    EmojiAddModal: async () => {
        let { EmojiAddModal: e } = await n.e("90410").then(n.bind(n, 126033));
        return (t) =>
            (0, a.jsx)(e, {
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
        let { default: e } = await n.e("25894").then(n.bind(n, 166789));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    FamilyCenterAcceptLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: i } = await n.e("31385").then(n.bind(n, 58144));
        return (n) => (0, a.jsx)(i, { ...n, currentUser: t, otherUser: e });
    },
    FamilyCenterDeclineLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: i } = await n.e("84811").then(n.bind(n, 389094));
        return (n) => (0, a.jsx)(i, { ...n, currentUser: t, otherUser: e });
    },
    FamilyCenterCancelLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: i } = await n.e("17219").then(n.bind(n, 187278));
        return (n) => (0, a.jsx)(i, { ...n, currentUser: e, otherUser: t });
    },
    FamilyCenterDisconnectLinkModal: async () => {
        let e = u.default.getUser("12345"),
            t = u.default.getUser("67890");
        if (void 0 === e || void 0 === t) return () => null;
        let { default: i } = await n.e("43139").then(n.bind(n, 179950));
        return (n) => (0, a.jsx)(i, { ...n, currentUser: e, otherUser: t });
    },
    FamilyCenterQRCodeModal: async () => {
        let { default: e } = await Promise.all([n.e("77406"), n.e("72875")]).then(n.bind(n, 320742));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    PremiumGroupFriendsSelectorModal: async () => {
        let { default: e } = await n.e("73987").then(n.bind(n, 773486)),
            t = m.A.getPremiumGroupSubscription();
        return null == t ? () => null : (n) => (0, a.jsx)(e, { ...n, subscription: t });
    },
    PremiumGroupAcceptInviteModal: async () => {
        let { default: e } = await n.e("60072").then(n.bind(n, 159707));
        return (t) =>
            (0, a.jsx)(e, {
                ...t,
                premiumGroupSubscriptionId: "1234567890",
                premiumGroupInviteId: "1234567890",
                isExistingSub: !1,
                premiumGroupPrimaryName: "Test User",
            });
    },
    QuarantineModeInfoModal: async () => {
        let { default: e } = await n.e("74575").then(n.bind(n, 218642));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    CaptchaTestModal: async () => {
        let { default: e } = await n.e("48817").then(n.bind(n, 424584));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    PasswordConfirm: async () => {
        let { default: e } = await Promise.resolve().then(n.bind(n, 662758));
        return (t) =>
            (0, a.jsx)(e, {
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
        let { default: e } = await n.e("18469").then(n.bind(n, 534340));
        return (t) => (0, a.jsx)(e, { ...t, url: "https://example-phishing-site.com/malicious-page" });
    },
    DmSettingsUpsellModal: async () => {
        let { default: e } = await n.e("62684").then(n.bind(n, 228855)),
            t = Object.keys(c.A.getGuilds())[0];
        return (n) => (0, a.jsx)(e, { ...n, guildId: t });
    },
    LinkNotDiscordModal: async () => {
        let { default: e } = await n.e("98597").then(n.bind(n, 696452));
        return (t) => (0, a.jsx)(e, { ...t, url: "https://external-website.com/some-page" });
    },
    UrgentMessageModal: async () => {
        let { default: e } = await n.e("88077").then(n.bind(n, 187964));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    UserAgreementsModal: async () => {
        let { default: e } = await n.e("22220").then(n.bind(n, 639719));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    DisableRiskyPermsModal: async () => {
        let { default: e } = await n.e("71905").then(n.bind(n, 868952)),
            t = Object.values(c.A.getGuilds())[0];
        return null == t ? () => null : (n) => (0, a.jsx)(e, { ...n, guild: t });
    },
    OtherFriendRequestsModal: async () => {
        let { default: e } = await Promise.all([n.e("71853"), n.e("60036")]).then(n.bind(n, 516259));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    AcceptInviteModal: async () => {
        let { default: e } = await Promise.all([n.e("64161"), n.e("83155"), n.e("89354")]).then(n.bind(n, 563038));
        return (t) => (0, a.jsx)(e, { ...t });
    },
    PremiumGroupSubscribeModal: async () => {
        let { default: e } = await n.e("91976").then(n.bind(n, 526710));
        return (t) => (0, a.jsx)(e, { ...t });
    },
};
function b() {
    let e = i.useMemo(
            () =>
                Object.keys(_)
                    .map((e) => ({ label: e, value: e, id: e }))
                    .sort((e, t) => e.label.localeCompare(t.label)),
            [],
        ),
        [t, n] = i.useState(null);
    return (0, a.jsx)(r.IpV, {
        className: v.nd,
        children: (0, a.jsxs)("div", {
            className: f.l$,
            children: [
                (0, a.jsx)("section", {
                    className: f.uW,
                    children: (0, a.jsxs)(r.BJc, {
                        direction: "horizontal",
                        gap: 8,
                        align: "end",
                        children: [
                            (0, a.jsx)(r.ZiE, {
                                label: "Open a Modal",
                                placeholder: "Select a modal",
                                options: e,
                                value: t,
                                onSelectionChange: n,
                                selectionMode: "single",
                            }),
                            (0, a.jsx)(r.Button, {
                                variant: "primary",
                                text: "Open",
                                disabled: null == t,
                                onClick: () => null != t && (0, r.mMO)(_[t]),
                            }),
                        ],
                    }),
                }),
                (0, a.jsxs)("section", {
                    className: f.uW,
                    children: [
                        (0, a.jsx)(r.Heading, { variant: "heading-md/semibold", children: "Wow moment" }),
                        (0, a.jsx)("div", {
                            className: f.bd,
                            children: (0, a.jsx)(r.Button, {
                                variant: "primary",
                                text: "Open",
                                onClick: () => {
                                    (0, d.o)(!0), h._.dispatch(x.jej.PREMIUM_SUBSCRIPTION_CREATED);
                                },
                            }),
                        }),
                    ],
                }),
            ],
        }),
    });
}
