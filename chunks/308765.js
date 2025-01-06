var i = r(132454);
let a = {
    AppAnalyticsManager: {
        inlineRequire: () => r(98302).Z,
        hasStoreChangeListeners: !0
    },
    AudioSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE'],
        inlineRequire: () => r(345953).Z
    },
    BlockedDomainManager: {
        inlineRequire: () => r(399907).Z,
        loadAfterConnectionOpen: !0
    },
    CallIdleManager: {
        actions: ['VOICE_STATE_UPDATES', 'EMBEDDED_ACTIVITY_CLOSE', 'CONNECTION_CLOSED'],
        inlineRequire: () => r(288444).Z
    },
    ChangelogManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(688798).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ChannelCallManager: {
        inlineRequire: () => r(258833).Z,
        hasStoreChangeListeners: !0
    },
    ChannelSafetyWarningsManager: {
        actions: ['CHANNEL_SELECT', 'CHANNEL_UPDATES'],
        inlineRequire: () => r(397776).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    CommonTriggerPointManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'CALL_CREATE', 'USER_SETTINGS_MODAL_OPEN'],
        inlineRequire: () => r(957899).Z
    },
    CommunicationDisabledManager: {
        inlineRequire: () => r(202107).Z,
        loadAfterConnectionOpen: !0
    },
    ContentProtectionManager: {
        inlineRequire: () => r(725140).Z,
        loadRightBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0
    },
    CustomStatusManager: {
        actions: ['USER_SETTINGS_PROTO_UPDATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => r(215739).Z,
        loadAfterConnectionOpen: !0
    },
    DeadchatPromptManager: {
        actions: ['POST_CONNECTION_OPEN', 'IDLE'],
        inlineRequire: () => r(146661).Z,
        loadAfterConnectionOpen: !0
    },
    TopEmojisDataManager: {
        actions: ['EMOJI_INTERACTION_INITIATED'],
        inlineRequire: () => r(496207).Z
    },
    EntityVersionsManager: {
        actions: ['GUILD_CREATE', 'DELETED_ENTITY_IDS'],
        inlineRequire: () => r(992713).Z,
        loadRightBeforeConnectionOpen: !0
    },
    ExplicitMediaManager: {
        actions: ['CHANNEL_SELECT', 'LOAD_MESSAGES_SUCCESS', 'MESSAGE_CREATE', 'MESSAGE_UPDATE', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'LOAD_FORUM_POSTS', 'LOAD_ARCHIVED_THREADS_SUCCESS', 'LOAD_THREADS_SUCCESS', 'LOGOUT', 'LOAD_PINNED_MESSAGES_SUCCESS', 'USER_SETTINGS_PROTO_UPDATE', 'CHANNEL_RTC_UPDATE_CHAT_OPEN'],
        inlineRequire: () => r(948561).ZP,
        neverLoadBeforeConnectionOpen: !0
    },
    FeedbackManager: {
        actions: ['VOICE_CHANNEL_SHOW_FEEDBACK', 'STREAM_CLOSE', 'EMBEDDED_ACTIVITY_CLOSE', 'VIDEO_BACKGROUND_SHOW_FEEDBACK', 'IN_APP_REPORTS_SHOW_FEEDBACK', 'USER_DM_MUTE_SHOW_FEEDBACK', 'BLOCK_USER_SHOW_FEEDBACK'],
        inlineRequire: () => r(169223).Z
    },
    ForumGuidelinesManager: {
        inlineRequire: () => r(945141).Z,
        loadAfterConnectionOpen: !0
    },
    ForumManager: {
        actions: ['CHANNEL_PRELOAD'],
        inlineRequire: () => r(716896).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForumImagePreloadManager: {
        actions: ['CHANNEL_PRELOAD'],
        inlineRequire: () => r(222044).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForumPostAnalyticsManager: {
        actions: ['CHANNEL_SELECT', 'THREAD_CREATE'],
        inlineRequire: () => r(474387).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    FrecencyUserSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'APP_STATE_UPDATE'],
        inlineRequire: () => r(888875).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildOnboardingHomeManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT', 'MESSAGE_CREATE', 'THREAD_CREATE', 'GUILD_MEMBER_UPDATE', 'GUILD_DELETE'],
        inlineRequire: () => r(218315).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    HolidayEventsManager: {
        actions: ['NOTIFICATIONS_SET_DISABLED_SOUNDS'],
        inlineRequire: () => r(951755).Z,
        hasStoreChangeListeners: !0
    },
    SignUpManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT'],
        inlineRequire: () => r(207269).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildOnboardingManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT', 'GUILD_DELETE'],
        inlineRequire: () => r(495649).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GameConsoleManager: {
        actions: ['WAIT_FOR_REMOTE_SESSION', 'POST_CONNECTION_OPEN', 'SESSIONS_REPLACE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'VOICE_STATE_UPDATES', 'CONSOLE_COMMAND_UPDATE', 'PASSIVE_UPDATE_V2', 'REMOTE_SESSION_DISCONNECT'],
        inlineRequire: () => r(902304).Z
    },
    GuildScheduledEventManager: {
        actions: ['POST_CONNECTION_OPEN', 'GUILD_DELETE', 'GUILD_UNAVAILABLE', 'INVITE_RESOLVE_SUCCESS', 'CHANNEL_SELECT'],
        inlineRequire: () => r(897285).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildVerificationManager: {
        actions: ['INVITE_ACCEPT_SUCCESS'],
        inlineRequire: () => r(950143).Z
    },
    HangStatusManager: {
        actions: ['POST_CONNECTION_OPEN', 'VOICE_CHANNEL_SELECT', 'LOGOUT', 'GUILD_MEMBER_UPDATE'],
        inlineRequire: () => r(669750).Z,
        hasStoreChangeListeners: !0
    },
    InteractionModalManager: {
        actions: ['INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CLOSE', 'RPC_APP_DISCONNECTED'],
        inlineRequire: () => r(189334).Z
    },
    LocalizedPricingPromoManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(519143).Z
    },
    LoginRequiredActionManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(858386).Z
    },
    MemberSafetySearchManager: {
        actions: ['INITIALIZE_MEMBER_SAFETY_STORE', 'GUILD_DELETE', 'MEMBER_SAFETY_SEARCH_STATE_UPDATE', 'MEMBER_SAFETY_PAGINATION_UPDATE', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING', 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH'],
        inlineRequire: () => r(201070).ZP
    },
    MemberSafetyStoreBatchUpdateManager: {
        actions: ['INITIALIZE_MEMBER_SAFETY_STORE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'],
        inlineRequire: () => r(313298).Z
    },
    MessageCodedLinkManager: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_UPDATE', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_AROUND_SUCCESS', 'LOAD_RECENT_MENTIONS_SUCCESS', 'LOAD_PINNED_MESSAGES_SUCCESS', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH'],
        inlineRequire: () => r(891274).Z
    },
    MessageManager: {
        actions: ['APP_STATE_UPDATE', 'OVERLAY_INITIALIZE', 'CHANNEL_SELECT', 'VOICE_CHANNEL_SELECT', 'THREAD_CREATE', 'THREAD_LIST_SYNC', 'CHANNEL_CREATE', 'CHANNEL_PRELOAD', 'GUILD_CREATE', 'MESSAGE_END_EDIT', 'LOAD_MESSAGES_SUCCESS', 'UPLOAD_FAIL', 'CHANNEL_DELETE', 'THREAD_DELETE'],
        inlineRequire: () => r(348245).Z,
        neverLoadBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0,
        loadRightBeforeConnectionOpen: !0
    },
    MultiAccountManager: {
        actions: ['LOGOUT'],
        inlineRequire: () => r(1627).Z,
        loadAfterConnectionOpen: !0
    },
    OverlayUsageStatsManager: {
        actions: __OVERLAY__ ? ['MESSAGE_ACKED', 'MESSAGE_CREATE'] : ['OVERLAY_FOCUSED', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_WIDGET_CHANGED', 'OVERLAY_MESSAGE_EVENT_ACTION', 'RUNNING_GAMES_CHANGE', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'MESSAGE_ACKED', 'MESSAGE_CREATE', 'WINDOW_FOCUS', 'RTC_CONNECTION_STATE', 'AUDIO_TOGGLE_SELF_MUTE', 'OVERLAY_SUCCESSFULLY_SHOWN', 'OVERLAY_UPDATE_OVERLAY_METHOD'],
        inlineRequire: () => r(645644).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ParticipantFocusManager: {
        inlineRequire: () => r(14516).Z,
        hasStoreChangeListeners: !0
    },
    PomeloManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(736401).Z
    },
    PremiumGiftingIntentManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT'],
        inlineRequire: () => r(666086).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    PromotionsManager: {
        actions: ['POST_CONNECTION_OPEN', 'EXPERIMENTS_FETCH_SUCCESS'],
        inlineRequire: () => r(349540).Z
    },
    RelationshipManager: {
        actions: ['RELATIONSHIP_ADD', 'FRIEND_REQUEST_ACCEPTED'],
        inlineRequire: () => r(859099).Z
    },
    RTCLatencyTestManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(70655).Z
    },
    SavedMessagesManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(580506).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    MessageRemindersNotificationManager: {
        actions: ['SAVED_MESSAGES_UPDATE', 'SAVED_MESSAGE_CREATE', 'SAVED_MESSAGE_DELETE'],
        inlineRequire: () => r(457572).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    SearchManager: {
        actions: ['USER_SETTINGS_PROTO_UPDATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => r(433538).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    SelectedChannelManager: {
        actions: ['GUILD_CREATE', 'CHANNEL_CREATE', 'LOGOUT'],
        inlineRequire: () => r(149770).Z
    },
    SelfPresenceStoreManager: {
        inlineRequire: () => r(613402).Z,
        hasStoreChangeListeners: !0
    },
    StageChannelRequestToSpeakMessageManager: {
        actions: ['VOICE_STATE_UPDATES'],
        inlineRequire: () => r(834332).Z
    },
    StageMusicManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'LOGOUT', 'STAGE_MUSIC_MUTE', 'STAGE_MUSIC_PLAY', 'VOICE_STATE_UPDATES', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_SELF_DEAF'],
        inlineRequire: () => r(485287).ZP
    },
    SubscriptionRemindersManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(177082).Z
    },
    ThreadManager: {
        actions: ['CHANNEL_DELETE', 'MESSAGE_CREATE'],
        inlineRequire: () => r(359915).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    UrgentSystemDMManagerBase: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_CREATE', 'CHANNEL_SELECT'],
        inlineRequire: () => r(559523).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    UserGuildSettingsManager: {
        actions: ['CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CATEGORY_COLLAPSE_ALL', 'CATEGORY_EXPAND_ALL', 'POST_CONNECTION_OPEN', 'USER_GUILD_SETTINGS_FULL_UPDATE'],
        inlineRequire: () => r(149071).Z
    },
    UserSearchManager: {
        actions: ['LOGOUT', 'POST_CONNECTION_OPEN', 'CONNECTION_OPEN_SUPPLEMENTAL', 'OVERLAY_INITIALIZE', 'CURRENT_USER_UPDATE', 'GUILD_CREATE', 'GUILD_MEMBERS_CHUNK_BATCH', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'RELATIONSHIP_ADD', 'RELATIONSHIP_UPDATE', 'RELATIONSHIP_REMOVE', 'CHANNEL_CREATE', 'CHANNEL_UPDATES', 'CHANNEL_RECIPIENT_ADD', 'PASSIVE_UPDATE_V2'],
        inlineRequire: () => r(279779).Z
    },
    UserSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'OVERLAY_INITIALIZE', 'USER_SETTINGS_PROTO_UPDATE'],
        inlineRequire: () => r(151742).Z
    },
    VoiceChannelSettingsManager: {
        actions: ['CHANNEL_UPDATES', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => r(583523).Z
    },
    VoiceChannelNotificationsManager: {
        actions: ['VOICE_CHANNEL_SELECT'],
        inlineRequire: () => r(538215).Z
    },
    VoicePermissionManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => r(39846).Z
    },
    VoiceProcessingErrorManager: {
        actions: ['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR'],
        inlineRequire: () => r(681694).Z
    },
    GPUWorkaroundManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(703767).Z
    },
    HighFiveManager: {
        actions: ['VOICE_CHANNEL_EFFECT_SEND', 'HIGH_FIVE_COMPLETE'],
        inlineRequire: () => r(294270).Z
    },
    NativeCrashManager: {
        actions: ['RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'MEDIA_SESSION_JOINED'],
        inlineRequire: () => r(902558).Z
    },
    GuestManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(978684).Z
    },
    ClipsManager: {
        actions: ['RTC_CONNECTION_FLAGS', 'RTC_CONNECTION_USER_CREATE', 'RTC_CONNECTION_STATE', 'POST_CONNECTION_OPEN', 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE', 'CLIPS_SETTINGS_UPDATE', 'CLIPS_INIT_FAILURE', 'STREAM_START', 'RUNNING_GAME_TOGGLE_DETECTION', 'RUNNING_GAMES_CHANGE', 'CLIPS_RESTART', 'RTC_CONNECTION_VIDEO', 'MEDIA_ENGINE_SET_HARDWARE_ENCODING'],
        inlineRequire: () => r(220122).Z
    },
    CustomCallSoundsManager: {
        actions: ['RTC_CONNECTION_STATE', 'SOUNDBOARD_MUTE_JOIN_SOUND', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => r(783295).Z
    },
    NotificationMigrationManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(392888).Z
    },
    UnreadSettingsManager: {
        actions: ['GUILD_CREATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => r(109610).Z
    },
    AnnouncementViewTrackingManager: {
        actions: ['CHANNEL_SELECT'],
        inlineRequire: () => r(529726).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DetectableGamesManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(114957).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    MidjourneyOnboardingManager: {
        actions: ['CHANNEL_CREATE'],
        inlineRequire: () => r(175255).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    QuestManager: {
        actions: ['QUESTS_SEND_HEARTBEAT_SUCCESS', 'QUESTS_SEND_HEARTBEAT_FAILURE', 'QUESTS_ENROLL_SUCCESS', 'RUNNING_GAMES_CHANGE', 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS', 'STREAM_START', 'STREAM_CREATE', 'STREAM_CLOSE', 'PASSIVE_UPDATE_V2', 'VOICE_STATE_UPDATES', 'EMBEDDED_ACTIVITY_UPDATE_V2', 'QUESTS_PREVIEW_UPDATE_SUCCESS'],
        inlineRequire: () => r(901751).ZP,
        neverLoadBeforeConnectionOpen: !0
    },
    QuestFetchManager: {
        actions: ['QUESTS_FETCH_CURRENT_QUESTS_BEGIN', 'POST_CONNECTION_OPEN', 'RUNNING_GAMES_CHANGE', 'USER_SETTINGS_PROTO_UPDATE', 'LOGOUT'],
        inlineRequire: () => r(877519).Z
    },
    VoiceChannelGameActivityManager: {
        actions: ['RUNNING_GAMES_CHANGE', 'VOICE_CHANNEL_SELECT'],
        inlineRequire: () => r(981668).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    InappropriateConversationsManager: {
        actions: ['VIBING_WUMPUS_PLAY_MUSIC', 'VIBING_WUMPUS_STOP_MUSIC', 'VIBING_WUMPUS_PAUSE_MUSIC'],
        inlineRequire: () => r(752290).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ContentInventoryManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'IDLE', 'WINDOW_FOCUS', 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN', 'CONTENT_INVENTORY_MANUAL_REFRESH', 'CONTENT_INVENTORY_INBOX_STALE', 'SPOTIFY_NEW_TRACK', 'GAME_PROFILE_OPEN', 'OVERLAY_READY'],
        inlineRequire: () => r(345765).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildLeaderboardManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'IDLE', 'WINDOW_FOCUS', 'CHANNEL_SELECT'],
        inlineRequire: () => r(434382).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    RunningGameDetectionManager: {
        actions: ['RUNNING_GAME_DELETE_ENTRY', 'RUNNING_GAME_TOGGLE_DETECTION'],
        inlineRequire: () => r(611184).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    RunningGameHeartbeatManager: {
        actions: ['RUNNING_GAMES_CHANGE', 'LOGOUT', 'CONNECTION_CLOSED', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => r(696287).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DmSettingsUpsellManager: {
        actions: ['DM_SETTINGS_UPSELL_SHOW'],
        inlineRequire: () => r(401416).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    TenureRewardManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS', 'ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE', 'LOGOUT'],
        inlineRequire: () => r(944880).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForwardGuildBreadcrumbManager: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_UPDATE', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_AROUND_SUCCESS', 'LOAD_RECENT_MENTIONS_SUCCESS', 'LOAD_PINNED_MESSAGES_SUCCESS', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH'],
        inlineRequire: () => r(35260).Z
    },
    LeagueOfLegendsLifecycleManager: {
        actions: ['RUNNING_GAMES_CHANGE'],
        inlineRequire: () => r(614571).Z,
        neverLoadBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0
    },
    SharedSpacesWarningManager: {
        actions: ['CHANNEL_SELECT', 'APP_STATE_UPDATE'],
        inlineRequire: () => r(414509).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DispatcherSchedulerManager: {
        actions: ['POST_CONNECTION_OPEN', 'EXPERIMENTS_FETCH_SUCCESS', 'CACHE_LOADED', 'LOGIN_SUCCESS', 'EXPERIMENT_OVERRIDE_BUCKET'],
        inlineRequire: () => r(902629).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GlobalDiscoveryServersFeaturedSearchManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => r(275131).Z,
        neverLoadBeforeConnectionOpen: !0
    }
};
(0, i.j)(a);
