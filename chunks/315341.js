n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var i = n(442837),
    r = n(704215),
    l = n(524437),
    a = n(381499),
    s = n(433517),
    o = n(581364),
    c = n(536442),
    d = n(592125),
    u = n(915486),
    h = n(48481),
    m = n(981631),
    p = n(71509);
function g(e, t) {
    let n = !1;
    return (
        null == e.userContent &&
            (e.userContent = {
                dismissedContents: new Uint8Array(),
                lastReceivedChangelogId: '0',
                recurringDismissibleContentStates: {}
            }),
        null == e.userContent.dismissedContents && (e.userContent.dismissedContents = new Uint8Array()),
        !(0, u.jl)(e.userContent.dismissedContents, t) && ((e.userContent.dismissedContents = (0, u.GV)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function f(e, t, n) {
    return !!c.qc.hasHiddenHotspot(t) && g(e, n);
}
let _ = [
    {
        version: 2,
        run(e) {
            var t, n, i;
            let r;
            if ((((i = r || (r = {})).Mentions = 'Recent Mentions'), (i.Unreads = 'Inbox'), null != e.inbox)) return !1;
            let a = !1,
                o = l.f9.create();
            (e.inbox = o), s.K.get('seenInboxTutorial', !1) && ((o.viewedTutorial = !0), (a = !0));
            let c = s.K.get('recentsButtonTab2');
            null != c && ((o.currentTab = 'Recent Mentions' === c ? l.X.MENTIONS : l.X.UNREADS), (a = !0));
            let u = null !== (t = s.K.get('unread-messages-collapsed-channels')) && void 0 !== t ? t : {};
            for (let t in u) {
                if (!u[t]) continue;
                let i = d.Z.getChannel(t);
                null != i &&
                    ((a = !0),
                    (0, h.i7)(e, null !== (n = i.guild_id) && void 0 !== n ? n : '0', i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return a;
        },
        cleanup() {
            s.K.remove('seenInboxTutorial'), s.K.remove('recentsButtonTab2'), s.K.remove('unread-messages-collapsed-channels');
        }
    },
    {
        version: 3,
        run(e) {
            let { state: t } = i.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({ diversitySurrogate: s.K.get('EmojiDiversitySurrogate') || '' })]);
            if (null == t) return !1;
            let n = !1;
            return null != t.diversitySurrogate && '' !== t.diversitySurrogate && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.diversitySurrogate && (e.textAndImages.diversitySurrogate = a.Gm.create()), (e.textAndImages.diversitySurrogate.value = t.diversitySurrogate), (n = !0)), n;
        },
        cleanup() {}
    },
    {
        version: 4,
        run(e) {
            let t = !1;
            return (!0 === s.K.get('HAS_SEEN_HUB_UPSELL') || c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = g(e, r.z.HUB_WAITLIST_UPSELL)), t;
        },
        cleanup() {
            s.K.remove('HAS_SEEN_HUB_UPSELL');
        }
    },
    {
        version: 5,
        run(e) {
            var t, n, i, r, o, c, d;
            let u = !1;
            (e.textAndImages = null !== (t = e.textAndImages) && void 0 !== t ? t : l.Me.create()), (e.notifications = null !== (n = e.notifications) && void 0 !== n ? n : l.sf.create()), (e.privacy = null !== (i = e.privacy) && void 0 !== i ? i : l.bE.create()), (e.voiceAndVideo = null !== (r = e.voiceAndVideo) && void 0 !== r ? r : l.v_.create()), (e.gameLibrary = null !== (o = e.gameLibrary) && void 0 !== o ? o : l.Fm.create()), (e.debug = null !== (c = e.debug) && void 0 !== c ? c : l.tA.create());
            let h = null !== (d = s.K.get('UserSettingsStore')) && void 0 !== d ? d : {};
            return 'boolean' == typeof h.useRichChatTextBox && ((e.textAndImages.useRichChatInput = a.D5.create({ value: h.useRichChatTextBox })), (u = !0)), 'string' == typeof h.renderSpoilers && ((e.textAndImages.renderSpoilers = a.Gm.create({ value: h.renderSpoilers })), (u = !0)), 'boolean' == typeof h.useThreadSidebar && ((e.textAndImages.useThreadSidebar = a.D5.create({ value: h.useThreadSidebar })), (u = !0)), 'boolean' == typeof h.showInAppNotifications && ((e.notifications.showInAppNotifications = a.D5.create({ value: h.showInAppNotifications })), (u = !0)), h.emojiPickerCollapsedSections instanceof Array && ((e.textAndImages.emojiPickerCollapsedSections = h.emojiPickerCollapsedSections), (u = !0)), h.stickerPickerCollapsedSections instanceof Array && ((e.textAndImages.stickerPickerCollapsedSections = h.stickerPickerCollapsedSections), (u = !0)), 'boolean' == typeof h.viewImageDescriptions && ((e.textAndImages.viewImageDescriptions = a.D5.create({ value: h.viewImageDescriptions })), (u = !0)), 'boolean' == typeof h.showCommandSuggestions && ((e.textAndImages.showCommandSuggestions = a.D5.create({ value: h.showCommandSuggestions })), (u = !0)), 'boolean' == typeof h.alwaysPreviewVideo && ((e.voiceAndVideo.alwaysPreviewVideo = a.D5.create({ value: h.alwaysPreviewVideo })), (u = !0)), 'boolean' == typeof h.notifyFriendsOnGoLive && ((e.notifications.notifyFriendsOnGoLive = a.D5.create({ value: h.notifyFriendsOnGoLive })), (u = !0)), 'boolean' == typeof h.installShortcutDesktop && ((e.gameLibrary.installShortcutDesktop = a.D5.create({ value: h.installShortcutDesktop })), (u = !0)), 'boolean' == typeof h.installShortcutStartMenu && ((e.gameLibrary.installShortcutStartMenu = a.D5.create({ value: h.installShortcutStartMenu })), (u = !0)), 'boolean' == typeof h.allowActivityPartyPrivacyFriends && ((e.privacy.allowActivityPartyPrivacyFriends = a.D5.create({ value: h.allowActivityPartyPrivacyFriends })), (u = !0)), 'boolean' == typeof h.allowActivityPartyPrivacyVoiceChannel && ((e.privacy.allowActivityPartyPrivacyVoiceChannel = a.D5.create({ value: h.allowActivityPartyPrivacyVoiceChannel })), (u = !0)), 'boolean' == typeof h.rtcPanelShowVoiceStates && ((e.debug.rtcPanelShowVoiceStates = a.D5.create({ value: h.rtcPanelShowVoiceStates })), (u = !0)), u;
        },
        cleanup() {}
    },
    {
        version: 7,
        run: (e) => f(e, c.v6.APPLICATION_COMMAND_TOOLTIP, r.z.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {}
    },
    {
        version: 8,
        run: (e) => f(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, r.z.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {}
    },
    {
        version: 9,
        run: (e) => (c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && s.K.set(p.Ip, 'true'), f(e, c.v6.MULTI_ACCOUNT_TOOLTIP, r.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
        cleanup() {}
    },
    {
        version: 10,
        run(e) {
            var t;
            let n = f(e, c.v6.HUB_LINK_CHANNEL_NOTICE, r.z.CHANNEL_NOTICE_HUBLINK),
                i = null !== (t = s.K.get('channelNotices')) && void 0 !== t ? t : {};
            return !1 === i[m.vID.INVITE] && g(e, r.z.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === i[m.vID.QUICKSWITCHER] && g(e, r.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === i[m.vID.GUILD_BOOSTING] && g(e, r.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n;
        },
        cleanup() {
            s.K.remove('channelNotices');
        }
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return f(e, c.v6.GUILD_EVENT_UPSELL, r.z.GUILD_HEADER_EVENT_UPSELL) && (t = !0), f(e, c.v6.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, r.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), f(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, r.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t;
        },
        cleanup() {}
    },
    {
        version: 12,
        run(e) {
            let t = !1;
            return s.K.get('hideNag') && g(e, r.z.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), s.K.get('hideConnectSpotify') && g(e, r.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), s.K.get('hideConnectPlayStation') && g(e, r.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), s.K.get('hideMFASMSNotice') && g(e, r.z.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t;
        },
        cleanup() {
            s.K.remove('hideNag'), s.K.remove('hideConnectSpotify'), s.K.remove('hideConnectPlayStation'), s.K.remove('hideMFASMSNotice');
        }
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return s.K.get('hidePremiumPromo') && g(e, r.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), s.K.get('hidePremiumTier2TrialEnding') && g(e, r.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), s.K.get('hidePremiumReactivateNotice') && g(e, r.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), f(e, c.v6.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, r.z.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t;
        },
        cleanup() {
            s.K.remove('hidePremiumPromo'), s.K.remove('hidePremiumTier2TrialEnding'), s.K.remove('hidePremiumReactivateNotice');
        }
    },
    {
        version: 14,
        run: (e) => f(e, c.v6.ACTIVITY_BEB_TUTORIAL, r.z.ACTIVITIES_TUTORIAL_COACH_MARK),
        cleanup() {}
    },
    {
        version: 15,
        run: (e) => f(e, c.v6.NOW_PLAYING_CONSENT_CARD, r.z.NOW_PLAYING_CONSENT_CARD),
        cleanup() {}
    },
    {
        version: 16,
        run(e) {
            let t = s.K.get('PromotionsPersistedStore');
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return null != n && (null == e.userContent && (e.userContent = l.az.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && ((e.userContent.lastDismissedOutboundPromotionStartDate = a.Gm.create({ value: n })), !0);
        },
        cleanup() {}
    },
    {
        version: 17,
        run(e) {
            let { state: t } = i.ZP.PersistedStore.migrateAndReadStoreState('ExpressionSuggestionsPersistedStore', null);
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return null != n && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.expressionSuggestionsEnabled) && ((e.textAndImages.expressionSuggestionsEnabled = a.D5.create({ value: n })), !0);
        },
        cleanup() {
            s.K.remove('ExpressionSuggestionsPersistedStore');
        }
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return f(e, c.v6.GUILD_DELETE_FEEDBACK, r.z.GUILD_DELETE_FEEDBACK) && (t = !0), f(e, c.v6.GUILD_LEAVE_FEEDBACK, r.z.GUILD_LEAVE_FEEDBACK) && (t = !0), t;
        },
        cleanup() {}
    },
    {
        version: 19,
        run(e) {
            var t;
            let n = !1;
            return null !== (t = s.K.get('forumHelperCardStorageKey')) && void 0 !== t && t && (n = g(e, r.z.FORUM_CHANNEL_HELPER_CARD)), n;
        },
        cleanup() {
            s.K.remove('forumHelperCardStorageKey');
        }
    },
    {
        version: 20,
        run(e) {
            let t = s.K.get('lastChangeLogId');
            if (null == t) return !1;
            if (!(0, o.BH)(t)) return s.K.remove('lastChangeLogId'), !1;
            if (null == e.userContent) e.userContent = l.az.create();
            else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && '0' !== e.userContent.lastReceivedChangelogId) return s.K.remove('lastChangeLogId'), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            s.K.remove('lastChangeLogId');
        }
    }
];
t.Z = _;
