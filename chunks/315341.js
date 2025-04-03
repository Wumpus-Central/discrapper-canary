n.d(t, { Z: () => b }), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(610885), n(126298);
var r = n(442837),
    i = n(704215),
    l = n(524437),
    a = n(381499),
    o = n(433517),
    s = n(581364),
    c = n(536442),
    u = n(592125),
    d = n(915486),
    p = n(48481),
    h = n(981631),
    f = n(71509);
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
        (0, d.jl)(e.userContent.dismissedContents, t) || ((e.userContent.dismissedContents = (0, d.GV)(e.userContent.dismissedContents, t)), (n = !0)),
        n
    );
}
function m(e, t, n) {
    return !!c.qc.hasHiddenHotspot(t) && g(e, n);
}
let b = [
    {
        version: 2,
        run(e) {
            var t, n;
            if (null != e.inbox) return !1;
            let r = !1,
                i = l.f9.create();
            (e.inbox = i), o.K.get('seenInboxTutorial', !1) && ((i.viewedTutorial = !0), (r = !0));
            let a = o.K.get('recentsButtonTab2');
            null != a && ((i.currentTab = 'Recent Mentions' === a ? l.X.MENTIONS : l.X.UNREADS), (r = !0));
            let s = null != (t = o.K.get('unread-messages-collapsed-channels')) ? t : {};
            for (let t in s) {
                if (!s[t]) continue;
                let i = u.Z.getChannel(t);
                null != i &&
                    ((r = !0),
                    (0, p.i7)(e, null != (n = i.guild_id) ? n : '0', i.id, (e) => {
                        e.collapsedInInbox = !0;
                    }));
            }
            return r;
        },
        cleanup() {
            o.K.remove('seenInboxTutorial'), o.K.remove('recentsButtonTab2'), o.K.remove('unread-messages-collapsed-channels');
        }
    },
    {
        version: 3,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('EmojiStore', [() => ({ diversitySurrogate: o.K.get('EmojiDiversitySurrogate') || '' })]);
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
            return (!0 === o.K.get('HAS_SEEN_HUB_UPSELL') || c.qc.hasHiddenHotspot(c.v6.HUB_SECOND_EMAIL_CONNECTION_UPSELL)) && (t = g(e, i.z.HUB_WAITLIST_UPSELL)), t;
        },
        cleanup() {
            o.K.remove('HAS_SEEN_HUB_UPSELL');
        }
    },
    {
        version: 5,
        run(e) {
            var t, n, r, i, s, c, u;
            let d = !1;
            (e.textAndImages = null != (t = e.textAndImages) ? t : l.Me.create()), (e.notifications = null != (n = e.notifications) ? n : l.sf.create()), (e.privacy = null != (r = e.privacy) ? r : l.bE.create()), (e.voiceAndVideo = null != (i = e.voiceAndVideo) ? i : l.v_.create()), (e.gameLibrary = null != (s = e.gameLibrary) ? s : l.Fm.create()), (e.debug = null != (c = e.debug) ? c : l.tA.create());
            let p = null != (u = o.K.get('UserSettingsStore')) ? u : {};
            return 'boolean' == typeof p.useRichChatTextBox && ((e.textAndImages.useRichChatInput = a.D5.create({ value: p.useRichChatTextBox })), (d = !0)), 'string' == typeof p.renderSpoilers && ((e.textAndImages.renderSpoilers = a.Gm.create({ value: p.renderSpoilers })), (d = !0)), 'boolean' == typeof p.useThreadSidebar && ((e.textAndImages.useThreadSidebar = a.D5.create({ value: p.useThreadSidebar })), (d = !0)), 'boolean' == typeof p.showInAppNotifications && ((e.notifications.showInAppNotifications = a.D5.create({ value: p.showInAppNotifications })), (d = !0)), p.emojiPickerCollapsedSections instanceof Array && ((e.textAndImages.emojiPickerCollapsedSections = p.emojiPickerCollapsedSections), (d = !0)), p.stickerPickerCollapsedSections instanceof Array && ((e.textAndImages.stickerPickerCollapsedSections = p.stickerPickerCollapsedSections), (d = !0)), 'boolean' == typeof p.viewImageDescriptions && ((e.textAndImages.viewImageDescriptions = a.D5.create({ value: p.viewImageDescriptions })), (d = !0)), 'boolean' == typeof p.showCommandSuggestions && ((e.textAndImages.showCommandSuggestions = a.D5.create({ value: p.showCommandSuggestions })), (d = !0)), 'boolean' == typeof p.alwaysPreviewVideo && ((e.voiceAndVideo.alwaysPreviewVideo = a.D5.create({ value: p.alwaysPreviewVideo })), (d = !0)), 'boolean' == typeof p.notifyFriendsOnGoLive && ((e.notifications.notifyFriendsOnGoLive = a.D5.create({ value: p.notifyFriendsOnGoLive })), (d = !0)), 'boolean' == typeof p.installShortcutDesktop && ((e.gameLibrary.installShortcutDesktop = a.D5.create({ value: p.installShortcutDesktop })), (d = !0)), 'boolean' == typeof p.installShortcutStartMenu && ((e.gameLibrary.installShortcutStartMenu = a.D5.create({ value: p.installShortcutStartMenu })), (d = !0)), 'boolean' == typeof p.allowActivityPartyPrivacyFriends && ((e.privacy.allowActivityPartyPrivacyFriends = a.D5.create({ value: p.allowActivityPartyPrivacyFriends })), (d = !0)), 'boolean' == typeof p.allowActivityPartyPrivacyVoiceChannel && ((e.privacy.allowActivityPartyPrivacyVoiceChannel = a.D5.create({ value: p.allowActivityPartyPrivacyVoiceChannel })), (d = !0)), 'boolean' == typeof p.rtcPanelShowVoiceStates && ((e.debug.rtcPanelShowVoiceStates = a.D5.create({ value: p.rtcPanelShowVoiceStates })), (d = !0)), d;
        },
        cleanup() {}
    },
    {
        version: 7,
        run: (e) => m(e, c.v6.APPLICATION_COMMAND_TOOLTIP, i.z.APPLICATION_COMMAND_TOOLTIP),
        cleanup() {}
    },
    {
        version: 8,
        run: (e) => m(e, c.v6.CHANNEL_BANNER_MEMBER_LIST_NOTICE, i.z.CHANNELINFO_CHANNELBANNER_NOTICE),
        cleanup() {}
    },
    {
        version: 9,
        run: (e) => (c.qc.hasHiddenHotspot(c.v6.MULTI_ACCOUNT_TOOLTIP) && o.K.set(f.Ip, 'true'), m(e, c.v6.MULTI_ACCOUNT_TOOLTIP, i.z.ACCOUNT_MULTIACCOUNT_TOOLTIP)),
        cleanup() {}
    },
    {
        version: 10,
        run(e) {
            var t;
            let n = m(e, c.v6.HUB_LINK_CHANNEL_NOTICE, i.z.CHANNEL_NOTICE_HUBLINK),
                r = null != (t = o.K.get('channelNotices')) ? t : {};
            return !1 === r[h.vID.INVITE] && g(e, i.z.CHANNEL_NOTICE_INVITE) && (n = !0), !1 === r[h.vID.QUICKSWITCHER] && g(e, i.z.CHANNEL_NOTICE_QUICKSWITCHER) && (n = !0), !1 === r[h.vID.GUILD_BOOSTING] && g(e, i.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION) && (n = !0), n;
        },
        cleanup() {
            o.K.remove('channelNotices');
        }
    },
    {
        version: 11,
        run(e) {
            let t = !1;
            return m(e, c.v6.GUILD_EVENT_UPSELL, i.z.GUILD_HEADER_EVENT_UPSELL) && (t = !0), m(e, c.v6.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_PREMIUM_GUILD_PROGRESS) && (t = !0), m(e, c.v6.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_ANIMATED_GUILD_BANNER) && (t = !0), t;
        },
        cleanup() {}
    },
    {
        version: 12,
        run(e) {
            let t = !1;
            return o.K.get('hideNag') && g(e, i.z.NAGBAR_NOTICE_DOWNLOAD) && (t = !0), o.K.get('hideConnectSpotify') && g(e, i.z.NAGBAR_NOTICE_CONNECT_SPOTIFY) && (t = !0), o.K.get('hideConnectPlayStation') && g(e, i.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION) && (t = !0), o.K.get('hideMFASMSNotice') && g(e, i.z.NAGBAR_NOTICE_MFA_SMS_BACKUP) && (t = !0), t;
        },
        cleanup() {
            o.K.remove('hideNag'), o.K.remove('hideConnectSpotify'), o.K.remove('hideConnectPlayStation'), o.K.remove('hideMFASMSNotice');
        }
    },
    {
        version: 13,
        run(e) {
            let t = !1;
            return o.K.get('hidePremiumPromo') && g(e, i.z.NAGBAR_NOTICE_PREMIUM_PROMO) && (t = !0), o.K.get('hidePremiumTier2TrialEnding') && g(e, i.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING) && (t = !0), o.K.get('hidePremiumReactivateNotice') && g(e, i.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE) && (t = !0), m(e, c.v6.INVITE_SPLASH_GUILD_HEADER_TOOLTIP, i.z.GUILD_HEADER_INVITE_SPLASH) && (t = !0), t;
        },
        cleanup() {
            o.K.remove('hidePremiumPromo'), o.K.remove('hidePremiumTier2TrialEnding'), o.K.remove('hidePremiumReactivateNotice');
        }
    },
    {
        version: 14,
        run: (e) => m(e, c.v6.ACTIVITY_BEB_TUTORIAL, i.z.ACTIVITIES_TUTORIAL_COACH_MARK),
        cleanup() {}
    },
    {
        version: 15,
        run: (e) => m(e, c.v6.NOW_PLAYING_CONSENT_CARD, i.z.NOW_PLAYING_CONSENT_CARD),
        cleanup() {}
    },
    {
        version: 16,
        run(e) {
            let t = o.K.get('PromotionsPersistedStore');
            if (null == t) return !1;
            let n = t._state.lastDismissedOutboundPromotionStartDate;
            return null != n && (null == e.userContent && (e.userContent = l.az.create()), null == e.userContent.lastDismissedOutboundPromotionStartDate) && ((e.userContent.lastDismissedOutboundPromotionStartDate = a.Gm.create({ value: n })), !0);
        },
        cleanup() {}
    },
    {
        version: 17,
        run(e) {
            let { state: t } = r.ZP.PersistedStore.migrateAndReadStoreState('ExpressionSuggestionsPersistedStore', null);
            if (null == t) return !1;
            let n = t.expressionSuggestionsEnabled;
            return null != n && (null == e.textAndImages && (e.textAndImages = l.Me.create()), null == e.textAndImages.expressionSuggestionsEnabled) && ((e.textAndImages.expressionSuggestionsEnabled = a.D5.create({ value: n })), !0);
        },
        cleanup() {
            o.K.remove('ExpressionSuggestionsPersistedStore');
        }
    },
    {
        version: 18,
        run(e) {
            let t = !1;
            return m(e, c.v6.GUILD_DELETE_FEEDBACK, i.z.GUILD_DELETE_FEEDBACK) && (t = !0), m(e, c.v6.GUILD_LEAVE_FEEDBACK, i.z.GUILD_LEAVE_FEEDBACK) && (t = !0), t;
        },
        cleanup() {}
    },
    {
        version: 19,
        run(e) {
            var t;
            let n = !1;
            return null != (t = o.K.get('forumHelperCardStorageKey')) && t && (n = g(e, i.z.FORUM_CHANNEL_HELPER_CARD)), n;
        },
        cleanup() {
            o.K.remove('forumHelperCardStorageKey');
        }
    },
    {
        version: 20,
        run(e) {
            let t = o.K.get('lastChangeLogId');
            if (null == t) return !1;
            if (!(0, s.BH)(t)) return o.K.remove('lastChangeLogId'), !1;
            if (null == e.userContent) e.userContent = l.az.create();
            else if (null != e.userContent && null != e.userContent.lastReceivedChangelogId && '0' !== e.userContent.lastReceivedChangelogId) return o.K.remove('lastChangeLogId'), !1;
            return (e.userContent.lastReceivedChangelogId = t), !0;
        },
        cleanup() {
            o.K.remove('lastChangeLogId');
        }
    },
    {
        version: 21,
        run(e) {
            var t;
            return (null == (t = e.appearance) ? void 0 : t.uiDensity) === l.Pi.COMPACT && ((e.appearance.uiDensity = l.Pi.DEFAULT), !0);
        },
        cleanup() {}
    }
];
