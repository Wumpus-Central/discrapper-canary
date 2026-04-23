n.d(t, { A: () => m }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162);
var i = n(311907),
    r = n(554146),
    a = n(873298),
    l = n(406935),
    s = n(506774),
    o = n(168186),
    d = n(450510),
    u = n(734057),
    c = n(460288),
    A = n(761821),
    h = n(652215),
    _ = n(573879);
function E(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, c.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, c.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function p(e, t, n) {
    return !!d.HP.hasHiddenHotspot(t) && E(e, n);
}
let m = [
    {
        version: 2,
        run(e) {
            if (null != e.inbox) return !1;
            let t = !1,
                n = a.Q0.create();
            (e.inbox = n), s.w.get("seenInboxTutorial", !1) && ((n.viewedTutorial = !0), (t = !0));
            let i = s.w.get("recentsButtonTab2");
            null != i && ((n.currentTab = "Recent Mentions" === i ? a.Y2.MENTIONS : a.Y2.UNREADS), (t = !0));
            let r = s.w.get("unread-messages-collapsed-channels") ?? {};
            for (let n in r) {
                if (!r[n]) continue;
                let i = u.A.getChannel(n);
                null != i &&
                    ((t = !0),
                    (0, A.gc)(e, i.guild_id ?? "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return t;
        },
        cleanup() {
            s.w.remove("seenInboxTutorial"),
                s.w.remove("recentsButtonTab2"),
                s.w.remove("unread-messages-collapsed-channels");
        },
    },
    {
        version: 3,
        run(e) {
            let { state: t } = i.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: s.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = a.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = l.hU.create()),
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
                (!0 === s.w.get("HAS_SEEN_HUB_UPSELL") ||
                    d.HP.hasHiddenHotspot(d._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = E(e, r.M.HUB_WAITLIST_UPSELL)),
                t
            );
        },
        cleanup() {
            s.w.remove("HAS_SEEN_HUB_UPSELL");
        },
    },
    {
        version: 5,
        run(e) {
            let t = !1;
            (e.textAndImages = e.textAndImages ?? a.oJ.create()),
                (e.notifications = e.notifications ?? a.TY.create()),
                (e.privacy = e.privacy ?? a.E.create()),
                (e.voiceAndVideo = e.voiceAndVideo ?? a.GY.create()),
                (e.gameLibrary = e.gameLibrary ?? a.F1.create()),
                (e.debug = e.debug ?? a.X9.create());
            let n = s.w.get("UserSettingsStore") ?? {};
            return (
                "boolean" == typeof n.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = l._t.create({ value: n.useRichChatTextBox })), (t = !0)),
                "string" == typeof n.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = l.hU.create({ value: n.renderSpoilers })), (t = !0)),
                "boolean" == typeof n.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = l._t.create({ value: n.useThreadSidebar })), (t = !0)),
                "boolean" == typeof n.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = l._t.create({ value: n.showInAppNotifications })),
                    (t = !0)),
                n.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = n.emojiPickerCollapsedSections), (t = !0)),
                n.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = n.stickerPickerCollapsedSections), (t = !0)),
                "boolean" == typeof n.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = l._t.create({ value: n.viewImageDescriptions })),
                    (t = !0)),
                "boolean" == typeof n.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = l._t.create({ value: n.showCommandSuggestions })),
                    (t = !0)),
                "boolean" == typeof n.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = l._t.create({ value: n.alwaysPreviewVideo })), (t = !0)),
                "boolean" == typeof n.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = l._t.create({ value: n.notifyFriendsOnGoLive })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = l._t.create({ value: n.installShortcutDesktop })),
                    (t = !0)),
                "boolean" == typeof n.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = l._t.create({ value: n.installShortcutStartMenu })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = l._t.create({
                        value: n.allowActivityPartyPrivacyFriends,
                    })),
                    (t = !0)),
                "boolean" == typeof n.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = l._t.create({
                        value: n.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (t = !0)),
                "boolean" == typeof n.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = l._t.create({ value: n.rtcPanelShowVoiceStates })), (t = !0)),
                t
            );
        },
        cleanup() {},
    },
    { version: 7, run: (e) => p(e, d._2.APPLICATION_COMMAND_TOOLTIP, r.M.APPLICATION_COMMAND_TOOLTIP), cleanup() {} },
    {
        version: 8,
        run: (e) => p(e, d._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, r.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            d.HP.hasHiddenHotspot(d._2.MULTI_ACCOUNT_TOOLTIP) && s.w.set(_.JE, "true"),
            p(e, d._2.MULTI_ACCOUNT_TOOLTIP, r.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            let t = p(e, d._2.HUB_LINK_CHANNEL_NOTICE, r.M.CHANNEL_NOTICE_HUBLINK),
                n = s.w.get("channelNotices") ?? {};
            return (
                !1 === n[h.n5X.INVITE] && E(e, r.M.CHANNEL_NOTICE_INVITE) && (t = !0),
                !1 === n[h.n5X.QUICKSWITCHER] && E(e, r.M.CHANNEL_NOTICE_QUICKSWITCHER) && (t = !0),
                !1 === n[h.n5X.GUILD_BOOSTING] && E(e, r.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (t = !0),
                t
            );
        },
        cleanup() {
            s.w.remove("channelNotices");
        },
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return (
                p(e, d._2.GUILD_EVENT_UPSELL, r.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                p(e, d._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, r.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
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
                s.w.get("hideNag") && E(e, r.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                s.w.get("hideConnectSpotify") && E(e, r.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                s.w.get("hideConnectPlayStation") && E(e, r.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
                t
            );
        },
        cleanup() {
            s.w.remove("hideNag"), s.w.remove("hideConnectSpotify"), s.w.remove("hideConnectPlayStation");
        },
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return (
                s.w.get("hidePremiumPromo") && E(e, r.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                s.w.get("hidePremiumTier2TrialEnding") &&
                    E(e, r.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                s.w.get("hidePremiumReactivateNotice") && E(e, r.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            s.w.remove("hidePremiumPromo"),
                s.w.remove("hidePremiumTier2TrialEnding"),
                s.w.remove("hidePremiumReactivateNotice");
        },
    },
    { version: 14, run: (e) => p(e, d._2.ACTIVITY_BEB_TUTORIAL, r.M.ACTIVITIES_TUTORIAL_COACH_MARK), cleanup() {} },
    { version: 15, run: (e) => p(e, d._2.NOW_PLAYING_CONSENT_CARD, r.M.NOW_PLAYING_CONSENT_CARD), cleanup() {} },
    {
        version: 16,
        run(e) {
            let t = s.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = a.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = l.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = i.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = a.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = l._t.create({ value: n })), !0)
            );
        },
        cleanup() {
            s.w.remove("ExpressionSuggestionsPersistedStore");
        },
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return (
                p(e, d._2.GUILD_DELETE_FEEDBACK, r.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                p(e, d._2.GUILD_LEAVE_FEEDBACK, r.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
                t
            );
        },
        cleanup() {},
    },
    {
        version: 19,
        run(e) {
            let t = !1;
            return s.w.get("forumHelperCardStorageKey") && (t = E(e, r.M.FORUM_CHANNEL_HELPER_CARD)), t;
        },
        cleanup() {
            s.w.remove("forumHelperCardStorageKey");
        },
    },
    {
        version: 20,
        run(e) {
            let t = s.w.get("lastChangeLogId");
            if (null == t) return !1;
            if (!(0, o.hT)(t)) return s.w.remove("lastChangeLogId"), !1;
            if (null == e.userContent) e.userContent = a.YW.create();
            else if (
                null != e.userContent &&
                null != e.userContent.lastReceivedChangelogId &&
                "0" !== e.userContent.lastReceivedChangelogId
            )
                return s.w.remove("lastChangeLogId"), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            s.w.remove("lastChangeLogId");
        },
    },
    {
        version: 21,
        run: (e) => e.appearance?.uiDensity === a.NS.COMPACT && ((e.appearance.uiDensity = a.NS.DEFAULT), !0),
        cleanup() {},
    },
];
