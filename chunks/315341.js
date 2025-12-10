n.d(t, { Z: () => _ }),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733);
var r = n(442837),
    i = n(704215),
    l = n(524437),
    a = n(381499),
    s = n(433517),
    o = n(581364),
    c = n(536442),
    u = n(592125),
    d = n(915486),
    p = n(48481),
    f = n(981631),
    g = n(71509);
function h(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, d.jl)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, d.GV)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function m(e, t, n) {
    return !!c.qc.hasHiddenHotspot(t) && h(e, n);
}
let _ = [
    {
        version: 2,
        run(e) {
            var t, n;
            if (null != e.inbox) return !1;
            let r = !1,
                i = l.f9.create();
            (e.inbox = i), s.K.get("seenInboxTutorial", !1) && ((i.viewedTutorial = !0), (r = !0));
            let a = s.K.get("recentsButtonTab2");
            null != a && ((i.currentTab = "Recent Mentions" === a ? l.X.MENTIONS : l.X.UNREADS), (r = !0));
            let o = null != (t = s.K.get("unread-messages-collapsed-channels")) ? t : {};
            for (let t in o) {
                if (!o[t]) continue;
                let i = u.Z.getChannel(t);
                null != i &&
                    ((r = !0),
                    (0, p.i7)(e, null != (n = i.guild_id) ? n : "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return r;
        },
        cleanup() {
            s.K.remove("seenInboxTutorial"),
                s.K.remove("recentsButtonTab2"),
                s.K.remove("unread-messages-collapsed-channels");
        },
    },
    {
        version: 3,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: s.K.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = l.Me.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.Gm.create()),
                    (e.textAndImages.diversitySurrogate.value = t.diversitySurrogate),
                    (n = !0)),
                n
            );
        },
        cleanup() {},
    },
    {
        version: 4,
        run(e) {
            let t = !1;
            return (
                (!0 === s.K.get("HAS_SEEN_HUB_UPSELL") ||
                    c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = h(e, i.z.HUB_WAITLIST_UPSELL)),
                t
            );
        },
        cleanup() {
            s.K.remove("HAS_SEEN_HUB_UPSELL");
        },
    },
    {
        version: 5,
        run(e) {
            var t, n, r, i, o, c, u;
            let d = !1;
            (e.textAndImages = null != (t = e.textAndImages) ? t : l.Me.create()),
                (e.notifications = null != (n = e.notifications) ? n : l.sf.create()),
                (e.privacy = null != (r = e.privacy) ? r : l.bE.create()),
                (e.voiceAndVideo = null != (i = e.voiceAndVideo) ? i : l.v_.create()),
                (e.gameLibrary = null != (o = e.gameLibrary) ? o : l.Fm.create()),
                (e.debug = null != (c = e.debug) ? c : l.tA.create());
            let p = null != (u = s.K.get("UserSettingsStore")) ? u : {};
            return (
                "boolean" == typeof p.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = a.D5.create({ value: p.useRichChatTextBox })), (d = !0)),
                "string" == typeof p.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = a.Gm.create({ value: p.renderSpoilers })), (d = !0)),
                "boolean" == typeof p.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = a.D5.create({ value: p.useThreadSidebar })), (d = !0)),
                "boolean" == typeof p.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = a.D5.create({ value: p.showInAppNotifications })),
                    (d = !0)),
                p.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = p.emojiPickerCollapsedSections), (d = !0)),
                p.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = p.stickerPickerCollapsedSections), (d = !0)),
                "boolean" == typeof p.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = a.D5.create({ value: p.viewImageDescriptions })),
                    (d = !0)),
                "boolean" == typeof p.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = a.D5.create({ value: p.showCommandSuggestions })),
                    (d = !0)),
                "boolean" == typeof p.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = a.D5.create({ value: p.alwaysPreviewVideo })), (d = !0)),
                "boolean" == typeof p.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = a.D5.create({ value: p.notifyFriendsOnGoLive })),
                    (d = !0)),
                "boolean" == typeof p.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = a.D5.create({ value: p.installShortcutDesktop })),
                    (d = !0)),
                "boolean" == typeof p.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = a.D5.create({ value: p.installShortcutStartMenu })),
                    (d = !0)),
                "boolean" == typeof p.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = a.D5.create({
                        value: p.allowActivityPartyPrivacyFriends,
                    })),
                    (d = !0)),
                "boolean" == typeof p.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = a.D5.create({
                        value: p.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (d = !0)),
                "boolean" == typeof p.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = a.D5.create({ value: p.rtcPanelShowVoiceStates })), (d = !0)),
                d
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => m(e, c.v6.APPLICATION_COMMAND_TOOLTIP, i.z.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => m(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.z.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && s.K.set(g.Ip, "true"),
            m(e, c.v6.MULTI_ACCOUNT_TOOLTIP, i.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            var t;
            let n = m(e, c.v6.HUB_LINK_CHANNEL_NOTICE, i.z.CHANNEL_NOTICE_HUBLINK),
                r = null != (t = s.K.get("channelNotices")) ? t : {};
            return (
                !1 === r[f.vID.INVITE] && h(e, i.z.CHANNEL_NOTICE_INVITE) && (n = !0),
                !1 === r[f.vID.QUICKSWITCHER] && h(e, i.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0),
                !1 === r[f.vID.GUILD_BOOSTING] && h(e, i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0),
                n
            );
        },
        cleanup() {
            s.K.remove("channelNotices");
        },
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return (
                m(e, c.v6.GUILD_EVENT_UPSELL, i.z.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                m(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
                    (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 12,
        run(e) {
            let t = !1;
            return (
                s.K.get("hideNag") && h(e, i.z.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                s.K.get("hideConnectSpotify") && h(e, i.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                s.K.get("hideConnectPlayStation") && h(e, i.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
                t
            );
        },
        cleanup() {
            s.K.remove("hideNag"), s.K.remove("hideConnectSpotify"), s.K.remove("hideConnectPlayStation");
        },
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return (
                s.K.get("hidePremiumPromo") && h(e, i.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                s.K.get("hidePremiumTier2TrialEnding") &&
                    h(e, i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                s.K.get("hidePremiumReactivateNotice") && h(e, i.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            s.K.remove("hidePremiumPromo"),
                s.K.remove("hidePremiumTier2TrialEnding"),
                s.K.remove("hidePremiumReactivateNotice");
        },
    },
    {
        version: 14,
        run: (e) => m(e, c.v6.ACTIVITY_BEB_TUTORIAL, i.z.ACTIVITIES_TUTORIAL_COACH_MARK),
        cleanup() {},
    },
    {
        version: 15,
        run: (e) => m(e, c.v6.NOW_PLAYING_CONSENT_CARD, i.z.NOW_PLAYING_CONSENT_CARD),
        cleanup() {},
    },
    {
        version: 16,
        run(e) {
            let t = s.K.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = l.az.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = a.Gm.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = l.Me.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = a.D5.create({ value: n })), !0)
            );
        },
        cleanup() {
            s.K.remove("ExpressionSuggestionsPersistedStore");
        },
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return (
                m(e, c.v6.GUILD_DELETE_FEEDBACK, i.z.GUILD_DELETE_FEEDBACK) && (t = !0),
                m(e, c.v6.GUILD_LEAVE_FEEDBACK, i.z.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            var t;
            let n = !1;
            return (
                null != (t = s.K.get("forumHelperCardStorageKey")) && t && (n = h(e, i.z.FORUM_CHANNEL_HELPER_CARD)), n
            );
        },
        cleanup() {
            s.K.remove("forumHelperCardStorageKey");
        },
    },
    {
        version: 20,
        run(e) {
            let t = s.K.get("lastChangeLogId");
            if (null == t) return !1;
            if (!(0, o.BH)(t)) return s.K.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = l.az.create();
            else if (
                null != e.userContent &&
                null != e.userContent.lastReceivedChangelogId &&
                "0" !== e.userContent.lastReceivedChangelogId
            )
                return s.K.remove("lastChangeLogId"), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            s.K.remove("lastChangeLogId");
        },
    },
    {
        version: 21,
        run(e) {
            var t;
            return (
                (null == (t = e.appearance) ? void 0 : t.uiDensity) === l.Pi.COMPACT &&
                ((e.appearance.uiDensity = l.Pi.DEFAULT), !0)
            );
        },
        cleanup() {},
    },
];
