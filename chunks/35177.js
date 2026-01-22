n.d(t, { A: () => m }),
    n(927092),
    n(212978),
    n(201528),
    n(393431),
    n(752391),
    n(532706),
    n(42231),
    n(232424),
    n(757074),
    n(949626),
    n(767709),
    n(65162);
var r = n(311907),
    i = n(554146),
    l = n(873298),
    a = n(406935),
    s = n(506774),
    o = n(168186),
    c = n(450510),
    u = n(734057),
    d = n(460288),
    p = n(761821),
    f = n(652215),
    h = n(573879);
function A(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: "0",
                recurringDismissibleContentStates: {},
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        (0, d.c0)(e.userContent.dismissedContents, t) ||
            ((e.userContent.dismissedContents = (0, d.Vf)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function g(e, t, n) {
    return !!c.HP.hasHiddenHotspot(t) && A(e, n);
}
let m = [
    {
        version: 2,
        run(e) {
            var t, n;
            if (null != e.inbox) return !1;
            let r = !1,
                i = l.Q0.create();
            (e.inbox = i), s.w.get("seenInboxTutorial", !1) && ((i.viewedTutorial = !0), (r = !0));
            let a = s.w.get("recentsButtonTab2");
            null != a && ((i.currentTab = "Recent Mentions" === a ? l.Y2.MENTIONS : l.Y2.UNREADS), (r = !0));
            let o = null != (t = s.w.get("unread-messages-collapsed-channels")) ? t : {};
            for (let t in o) {
                if (!o[t]) continue;
                let i = u.A.getChannel(t);
                null != i &&
                    ((r = !0),
                    (0, p.gc)(e, null != (n = i.guild_id) ? n : "0", i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return r;
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
            let { state: t } = r.Ay.PersistedStore.migrateAndReadStoreState("EmojiStore", [
                () => ({ diversitySurrogate: s.w.get("EmojiDiversitySurrogate") || "" }),
            ]);
            if (null == t) return !1;
            let n = !1;
            return (
                null != t.diversitySurrogate &&
                    "" !== t.diversitySurrogate &&
                    (null == e.textAndImages && (e.textAndImages = l.oJ.create()),
                    null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.hU.create()),
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
                    c.HP.hasHiddenHotspot(c._2.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) &&
                    (t = A(e, i.M.HUB_WAITLIST_UPSELL)),
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
            var t, n, r, i, o, c, u;
            let d = !1;
            (e.textAndImages = null != (t = e.textAndImages) ? t : l.oJ.create()),
                (e.notifications = null != (n = e.notifications) ? n : l.TY.create()),
                (e.privacy = null != (r = e.privacy) ? r : l.E.create()),
                (e.voiceAndVideo = null != (i = e.voiceAndVideo) ? i : l.GY.create()),
                (e.gameLibrary = null != (o = e.gameLibrary) ? o : l.F1.create()),
                (e.debug = null != (c = e.debug) ? c : l.X9.create());
            let p = null != (u = s.w.get("UserSettingsStore")) ? u : {};
            return (
                "boolean" == typeof p.useRichChatTextBox &&
                    ((e.textAndImages.useRichChatInput = a._t.create({ value: p.useRichChatTextBox })), (d = !0)),
                "string" == typeof p.renderSpoilers &&
                    ((e.textAndImages.renderSpoilers = a.hU.create({ value: p.renderSpoilers })), (d = !0)),
                "boolean" == typeof p.useThreadSidebar &&
                    ((e.textAndImages.useThreadSidebar = a._t.create({ value: p.useThreadSidebar })), (d = !0)),
                "boolean" == typeof p.showInAppNotifications &&
                    ((e.notifications.showInAppNotifications = a._t.create({ value: p.showInAppNotifications })),
                    (d = !0)),
                p.emojiPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.emojiPickerCollapsedSections = p.emojiPickerCollapsedSections), (d = !0)),
                p.stickerPickerCollapsedSections instanceof Array &&
                    ((e.textAndImages.stickerPickerCollapsedSections = p.stickerPickerCollapsedSections), (d = !0)),
                "boolean" == typeof p.viewImageDescriptions &&
                    ((e.textAndImages.viewImageDescriptions = a._t.create({ value: p.viewImageDescriptions })),
                    (d = !0)),
                "boolean" == typeof p.showCommandSuggestions &&
                    ((e.textAndImages.showCommandSuggestions = a._t.create({ value: p.showCommandSuggestions })),
                    (d = !0)),
                "boolean" == typeof p.alwaysPreviewVideo &&
                    ((e.voiceAndVideo.alwaysPreviewVideo = a._t.create({ value: p.alwaysPreviewVideo })), (d = !0)),
                "boolean" == typeof p.notifyFriendsOnGoLive &&
                    ((e.notifications.notifyFriendsOnGoLive = a._t.create({ value: p.notifyFriendsOnGoLive })),
                    (d = !0)),
                "boolean" == typeof p.installShortcutDesktop &&
                    ((e.gameLibrary.installShortcutDesktop = a._t.create({ value: p.installShortcutDesktop })),
                    (d = !0)),
                "boolean" == typeof p.installShortcutStartMenu &&
                    ((e.gameLibrary.installShortcutStartMenu = a._t.create({ value: p.installShortcutStartMenu })),
                    (d = !0)),
                "boolean" == typeof p.allowActivityPartyPrivacyFriends &&
                    ((e.privacy.allowActivityPartyPrivacyFriends = a._t.create({
                        value: p.allowActivityPartyPrivacyFriends,
                    })),
                    (d = !0)),
                "boolean" == typeof p.allowActivityPartyPrivacyVoiceChannel &&
                    ((e.privacy.allowActivityPartyPrivacyVoiceChannel = a._t.create({
                        value: p.allowActivityPartyPrivacyVoiceChannel,
                    })),
                    (d = !0)),
                "boolean" == typeof p.rtcPanelShowVoiceStates &&
                    ((e.debug.rtcPanelShowVoiceStates = a._t.create({ value: p.rtcPanelShowVoiceStates })), (d = !0)),
                d
            );
        },
        cleanup() {},
    },
    {
        version: 7,
        run: (e) => g(e, c._2.APPLICATION_COMMAND_TOOLTIP, i.M.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {},
    },
    {
        version: 8,
        run: (e) => g(e, c._2.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.M.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {},
    },
    {
        version: 9,
        run: (e) => (
            c.HP.hasHiddenHotspot(c._2.MULTI_ACCOUNT_TOOLTIP) && s.w.set(h.JE, "true"),
            g(e, c._2.MULTI_ACCOUNT_TOOLTIP, i.M.ACCOUNT_MULTIACCOUNT_TOOLTIP)
        ),
        cleanup() {},
    },
    {
        version: 10,
        run(e) {
            var t;
            let n = g(e, c._2.HUB_LINK_CHANNEL_NOTICE, i.M.CHANNEL_NOTICE_HUBLINK),
                r = null != (t = s.w.get("channelNotices")) ? t : {};
            return (
                !1 === r[f.n5X.INVITE] && A(e, i.M.CHANNEL_NOTICE_INVITE) && (n = !0),
                !1 === r[f.n5X.QUICKSWITCHER] && A(e, i.M.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0),
                !1 === r[f.n5X.GUILD_BOOSTING] && A(e, i.M.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0),
                n
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
                g(e, c._2.GUILD_EVENT_UPSELL, i.M.GUILD_HEADER_EVENT_UPSELL) && (t = !0),
                g(e, c._2.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.M.GUILD_HEADER_ANIMATED_GUILD_BANNER) &&
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
                s.w.get("hideNag") && A(e, i.M.NAGBAR_NOTICE_DOWNLOAD) && (t = !0),
                s.w.get("hideConnectSpotify") && A(e, i.M.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0),
                s.w.get("hideConnectPlayStation") && A(e, i.M.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0),
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
                s.w.get("hidePremiumPromo") && A(e, i.M.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0),
                s.w.get("hidePremiumTier2TrialEnding") &&
                    A(e, i.M.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) &&
                    (t = !0),
                s.w.get("hidePremiumReactivateNotice") && A(e, i.M.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0),
                t
            );
        },
        cleanup() {
            s.w.remove("hidePremiumPromo"),
                s.w.remove("hidePremiumTier2TrialEnding"),
                s.w.remove("hidePremiumReactivateNotice");
        },
    },
    {
        version: 14,
        run: (e) => g(e, c._2.ACTIVITY_BEB_TUTORIAL, i.M.ACTIVITIES_TUTORIAL_COACH_MARK),
        cleanup() {},
    },
    {
        version: 15,
        run: (e) => g(e, c._2.NOW_PLAYING_CONSENT_CARD, i.M.NOW_PLAYING_CONSENT_CARD),
        cleanup() {},
    },
    {
        version: 16,
        run(e) {
            let t = s.w.get("PromotionsPersistedStore");
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return (
                null != n &&
                (null == e.userContent && (e.userContent = l.YW.create()),
                null == e.userContent.lastDismissedOutboundPromotionStartDate) &&
                ((e.userContent.lastDismissedOutboundPromotionStartDate = a.hU.create({ value: n })), !0)
            );
        },
        cleanup() {},
    },
    {
        version: 17,
        run(e) {
            let { state: t } = r.Ay.PersistedStore.migrateAndReadStoreState(
                "ExpressionSuggestionsPersistedStore",
                null,
            );
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return (
                null != n &&
                (null == e.textAndImages && (e.textAndImages = l.oJ.create()),
                null == e.textAndImages.expressionSuggestionsEnabled) &&
                ((e.textAndImages.expressionSuggestionsEnabled = a._t.create({ value: n })), !0)
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
                g(e, c._2.GUILD_DELETE_FEEDBACK, i.M.GUILD_DELETE_FEEDBACK) && (t = !0),
                g(e, c._2.GUILD_LEAVE_FEEDBACK, i.M.GUILD_LEAVE_FEEDBACK) && (t = !0),
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
                null != (t = s.w.get("forumHelperCardStorageKey")) && t && (n = A(e, i.M.FORUM_CHANNEL_HELPER_CARD)), n
            );
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
            if (null == e.userContent) e.userContent = l.YW.create();
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
        run(e) {
            var t;
            return (
                (null == (t = e.appearance) ? void 0 : t.uiDensity) === l.NS.COMPACT &&
                ((e.appearance.uiDensity = l.NS.DEFAULT), !0)
            );
        },
        cleanup() {},
    },
];
