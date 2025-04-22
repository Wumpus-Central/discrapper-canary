var r = n(132454);
let i = {
    AppAnalyticsManager: {
        inlineRequire: () => n(98302).Z,
        hasStoreChangeListeners: !0
    },
    AudioSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE'],
        inlineRequire: () => n(345953).Z
    },
    AutoUpdateManager: {
        actions: ['POST_CONNECTION_OPEN', 'AUTO_UPDATER_QUIT_AND_INSTALL'],
        inlineRequire: () => n(802104).Z
    },
    AgeVerificationManager: {
        actions: ['MESSAGE_CREATE'],
        inlineRequire: () => n(225415).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    BlockedDomainManager: {
        inlineRequire: () => n(399907).Z,
        loadAfterConnectionOpen: !0
    },
    CallIdleManager: {
        actions: ['VOICE_STATE_UPDATES', 'EMBEDDED_ACTIVITY_CLOSE', 'CONNECTION_CLOSED'],
        inlineRequire: () => n(288444).Z
    },
    ChangelogManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(688798).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ChannelCallManager: {
        actions: ['GUILD_LOCAL_RING_START', 'GUILD_RING_STOP'],
        inlineRequire: () => n(258833).Z,
        hasStoreChangeListeners: !0
    },
    ChannelSafetyWarningsManager: {
        actions: ['CHANNEL_SELECT', 'CHANNEL_UPDATES'],
        inlineRequire: () => n(397776).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    CommonTriggerPointManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'CALL_CREATE', 'USER_SETTINGS_MODAL_OPEN'],
        inlineRequire: () => n(957899).Z
    },
    CommunicationDisabledManager: {
        inlineRequire: () => n(202107).Z,
        loadAfterConnectionOpen: !0
    },
    ContentProtectionManager: {
        inlineRequire: () => n(725140).Z,
        loadRightBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0
    },
    CustomStatusManager: {
        actions: ['USER_SETTINGS_PROTO_UPDATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => n(215739).Z,
        loadAfterConnectionOpen: !0
    },
    DeadchatPromptManager: {
        actions: ['POST_CONNECTION_OPEN', 'IDLE'],
        inlineRequire: () => n(146661).Z,
        loadAfterConnectionOpen: !0
    },
    TopEmojisDataManager: {
        actions: ['EMOJI_INTERACTION_INITIATED'],
        inlineRequire: () => n(496207).Z
    },
    EntityVersionsManager: {
        actions: ['GUILD_CREATE', 'DELETED_ENTITY_IDS'],
        inlineRequire: () => n(992713).Z,
        loadRightBeforeConnectionOpen: !0
    },
    ExplicitMediaManager: {
        actions: ['CHANNEL_SELECT', 'LOAD_MESSAGES_SUCCESS', 'MESSAGE_CREATE', 'MESSAGE_UPDATE', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH', 'LOAD_FORUM_POSTS', 'LOAD_ARCHIVED_THREADS_SUCCESS', 'LOAD_THREADS_SUCCESS', 'LOGOUT', 'LOAD_PINNED_MESSAGES_SUCCESS', 'USER_SETTINGS_PROTO_UPDATE', 'CHANNEL_RTC_UPDATE_CHAT_OPEN', 'SIDEBAR_VIEW_CHANNEL'],
        inlineRequire: () => n(948561).ZP,
        neverLoadBeforeConnectionOpen: !0
    },
    FeedbackManager: {
        actions: ['VOICE_CHANNEL_SHOW_FEEDBACK', 'STREAM_CLOSE', 'EMBEDDED_ACTIVITY_CLOSE', 'VIDEO_BACKGROUND_SHOW_FEEDBACK', 'IN_APP_REPORTS_SHOW_FEEDBACK', 'USER_DM_MUTE_SHOW_FEEDBACK', 'BLOCK_USER_SHOW_FEEDBACK'],
        inlineRequire: () => n(169223).Z
    },
    ForumGuidelinesManager: {
        inlineRequire: () => n(945141).Z,
        loadAfterConnectionOpen: !0
    },
    ForumManager: {
        actions: ['CHANNEL_PRELOAD'],
        inlineRequire: () => n(716896).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForumImagePreloadManager: {
        actions: ['CHANNEL_PRELOAD'],
        inlineRequire: () => n(222044).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForumPostAnalyticsManager: {
        actions: ['CHANNEL_SELECT', 'THREAD_CREATE'],
        inlineRequire: () => n(474387).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    FrecencyUserSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_RESUMED', 'CONNECTION_CLOSED', 'APP_STATE_UPDATE'],
        inlineRequire: () => n(888875).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildOnboardingHomeManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT', 'MESSAGE_CREATE', 'THREAD_CREATE', 'GUILD_MEMBER_UPDATE', 'GUILD_DELETE'],
        inlineRequire: () => n(218315).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    HolidayEventsManager: {
        actions: ['NOTIFICATIONS_SET_DISABLED_SOUNDS'],
        inlineRequire: () => n(951755).Z,
        hasStoreChangeListeners: !0
    },
    SignUpManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT'],
        inlineRequire: () => n(207269).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildOnboardingManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT', 'GUILD_DELETE'],
        inlineRequire: () => n(495649).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GameConsoleManager: {
        actions: ['WAIT_FOR_REMOTE_SESSION', 'POST_CONNECTION_OPEN', 'SESSIONS_REPLACE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'VOICE_STATE_UPDATES', 'CONSOLE_COMMAND_UPDATE', 'PASSIVE_UPDATE_V2', 'REMOTE_SESSION_DISCONNECT'],
        inlineRequire: () => n(902304).Z
    },
    GuildScheduledEventManager: {
        actions: ['POST_CONNECTION_OPEN', 'GUILD_DELETE', 'GUILD_UNAVAILABLE', 'INVITE_RESOLVE_SUCCESS', 'CHANNEL_SELECT'],
        inlineRequire: () => n(897285).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildVerificationManager: {
        actions: ['INVITE_ACCEPT_SUCCESS'],
        inlineRequire: () => n(950143).Z
    },
    InteractionModalManager: {
        actions: ['INTERACTION_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CREATE', 'INTERACTION_IFRAME_MODAL_CLOSE', 'RPC_APP_DISCONNECTED'],
        inlineRequire: () => n(189334).Z
    },
    LoginRequiredActionManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(858386).Z
    },
    MemberSafetySearchManager: {
        actions: ['INITIALIZE_MEMBER_SAFETY_STORE', 'GUILD_DELETE', 'MEMBER_SAFETY_SEARCH_STATE_UPDATE', 'MEMBER_SAFETY_PAGINATION_UPDATE', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING', 'MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH'],
        inlineRequire: () => n(201070).ZP
    },
    MemberSafetyStoreBatchUpdateManager: {
        actions: ['INITIALIZE_MEMBER_SAFETY_STORE', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'GUILD_MEMBER_REMOVE', 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS'],
        inlineRequire: () => n(313298).Z
    },
    MessageCodedLinkManager: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_UPDATE', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_AROUND_SUCCESS', 'LOAD_RECENT_MENTIONS_SUCCESS', 'LOAD_PINNED_MESSAGES_SUCCESS', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH'],
        inlineRequire: () => n(891274).Z
    },
    MessageManager: {
        actions: ['APP_STATE_UPDATE', 'OVERLAY_INITIALIZE', 'CHANNEL_SELECT', 'VOICE_CHANNEL_SELECT', 'THREAD_CREATE', 'THREAD_LIST_SYNC', 'CHANNEL_CREATE', 'CHANNEL_PRELOAD', 'GUILD_CREATE', 'MESSAGE_END_EDIT', 'LOAD_MESSAGES_SUCCESS', 'UPLOAD_FAIL', 'CHANNEL_DELETE', 'THREAD_DELETE', 'CHANNEL_RTC_JUMP_TO_VOICE_CHANNEL_MESSAGE'],
        inlineRequire: () => n(348245).Z,
        neverLoadBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0,
        loadRightBeforeConnectionOpen: !0
    },
    MessageSessionMetadataManager: {
        actions: ['MESSAGE_UPDATE', 'MESSAGE_CREATE'],
        inlineRequire: () => n(789110).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    MultiAccountManager: {
        actions: ['LOGOUT'],
        inlineRequire: () => n(1627).Z,
        loadAfterConnectionOpen: !0
    },
    OverlayContentProtectionManager: {
        actions: ['STREAM_START', 'STREAM_STOP'],
        inlineRequire: () => n(503522).Z
    },
    OverlayLockSideEffectManager: {
        actions: ['OVERLAY_SET_INPUT_LOCKED'],
        inlineRequire: () => n(967031).Z
    },
    OverlayUsageStatsManager: {
        actions: __OVERLAY__ ? ['MESSAGE_ACKED', 'MESSAGE_CREATE'] : ['OVERLAY_FOCUSED', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_WIDGET_CHANGED', 'OVERLAY_MESSAGE_EVENT_ACTION', 'RUNNING_GAMES_CHANGE', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'MESSAGE_ACKED', 'MESSAGE_CREATE', 'WINDOW_FOCUS', 'RTC_CONNECTION_STATE', 'AUDIO_TOGGLE_SELF_MUTE', 'OVERLAY_SUCCESSFULLY_SHOWN', 'OVERLAY_UPDATE_OVERLAY_METHOD'],
        inlineRequire: () => n(645644).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ParticipantFocusManager: {
        inlineRequire: () => n(14516).Z,
        hasStoreChangeListeners: !0
    },
    PomeloManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(736401).Z
    },
    PremiumGiftingIntentManager: {
        actions: ['POST_CONNECTION_OPEN', 'CHANNEL_SELECT'],
        inlineRequire: () => n(666086).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    PromotionsManager: {
        actions: ['POST_CONNECTION_OPEN', 'EXPERIMENTS_FETCH_SUCCESS'],
        inlineRequire: () => n(349540).Z
    },
    RelationshipManager: {
        actions: ['RELATIONSHIP_ADD', 'FRIEND_REQUEST_ACCEPTED'],
        inlineRequire: () => n(859099).Z
    },
    RTCLatencyTestManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(70655).Z
    },
    SavedMessagesManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(580506).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    MessageRemindersNotificationManager: {
        actions: ['SAVED_MESSAGES_UPDATE', 'SAVED_MESSAGE_CREATE', 'SAVED_MESSAGE_DELETE'],
        inlineRequire: () => n(457572).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    SearchManager: {
        actions: ['USER_SETTINGS_PROTO_UPDATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => n(433538).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    SelectedChannelManager: {
        actions: ['GUILD_CREATE', 'CHANNEL_CREATE', 'LOGOUT'],
        inlineRequire: () => n(149770).Z
    },
    SelfPresenceStoreManager: {
        inlineRequire: () => n(613402).Z,
        hasStoreChangeListeners: !0
    },
    StageChannelRequestToSpeakMessageManager: {
        actions: ['VOICE_STATE_UPDATES'],
        inlineRequire: () => n(834332).Z
    },
    StageMusicManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'LOGOUT', 'STAGE_MUSIC_MUTE', 'STAGE_MUSIC_PLAY', 'VOICE_STATE_UPDATES', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_SELF_DEAF'],
        inlineRequire: () => n(485287).ZP
    },
    SubscriptionManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(892264).Z
    },
    VoiceFiltersCatalogManager: {
        actions: ['POST_CONNECTION_OPEN', 'VOICE_FILTER_CATALOG_FETCH_SUCCESS', 'VOICE_FILTER_DEV_TOOLS_SET_UPDATE_TIME'],
        inlineRequire: () => n(886196).Z
    },
    ThreadManager: {
        actions: ['CHANNEL_DELETE', 'MESSAGE_CREATE', 'GUILD_DELETE'],
        inlineRequire: () => n(359915).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    UrgentSystemDMManagerBase: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_CREATE', 'CHANNEL_SELECT'],
        inlineRequire: () => n(559523).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    UserGuildSettingsManager: {
        actions: ['CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CATEGORY_COLLAPSE_ALL', 'CATEGORY_EXPAND_ALL', 'POST_CONNECTION_OPEN', 'USER_GUILD_SETTINGS_FULL_UPDATE'],
        inlineRequire: () => n(149071).Z
    },
    UserSearchManager: {
        actions: ['LOGOUT', 'POST_CONNECTION_OPEN', 'CONNECTION_OPEN_SUPPLEMENTAL', 'OVERLAY_INITIALIZE', 'CURRENT_USER_UPDATE', 'GUILD_CREATE', 'GUILD_MEMBERS_CHUNK_BATCH', 'GUILD_MEMBER_ADD', 'GUILD_MEMBER_UPDATE', 'RELATIONSHIP_ADD', 'RELATIONSHIP_UPDATE', 'RELATIONSHIP_REMOVE', 'CHANNEL_CREATE', 'CHANNEL_UPDATES', 'CHANNEL_RECIPIENT_ADD', 'PASSIVE_UPDATE_V2'],
        inlineRequire: () => n(279779).Z
    },
    UserSettingsManager: {
        actions: ['POST_CONNECTION_OPEN', 'OVERLAY_INITIALIZE', 'USER_SETTINGS_PROTO_UPDATE'],
        inlineRequire: () => n(151742).Z
    },
    VoiceChannelSettingsManager: {
        actions: ['CHANNEL_UPDATES', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => n(583523).Z
    },
    VoiceChannelNotificationsManager: {
        actions: ['VOICE_CHANNEL_SELECT'],
        inlineRequire: () => n(538215).Z
    },
    VoiceFilterLoopbackManager: {
        actions: ['RTC_CONNECTION_STATE', 'VOICE_FILTER_LOOPBACK_TOGGLE', 'VOICE_FILTER_APPLIED', 'AUDIO_TOGGLE_SELF_MUTE', 'AUDIO_SET_TEMPORARY_SELF_MUTE', 'AUDIO_SET_SELF_MUTE'],
        inlineRequire: () => n(986057).Z,
        hasStoreChangeListeners: !0
    },
    VoiceFilterManager: {
        actions: ['VOICE_FILTER_REQUEST_SWITCH', 'VOICE_FILTER_DOWNLOAD_FAILED', 'VOICE_FILTER_DOWNLOAD_CANCELED', 'VOICE_FILTER_FILE_READY', 'VOICE_FILTER_LOAD_MODULE', 'VOICE_FILTER_APPLIED', 'VOICE_FILTER_APPLY_FAILED'],
        inlineRequire: () => n(230385).Z
    },
    VoicePermissionManager: {
        actions: ['VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => n(39846).Z
    },
    VoiceProcessingErrorManager: {
        actions: ['MEDIA_ENGINE_NOISE_CANCELLATION_ERROR'],
        inlineRequire: () => n(681694).Z
    },
    GPUWorkaroundManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(703767).Z
    },
    HighFiveManager: {
        actions: ['VOICE_CHANNEL_EFFECT_SEND', 'HIGH_FIVE_COMPLETE'],
        inlineRequire: () => n(294270).Z
    },
    NativeCrashManager: {
        actions: ['RTC_CONNECTION_STATE', 'RTC_CONNECTION_VIDEO', 'MEDIA_SESSION_JOINED'],
        inlineRequire: () => n(902558).Z
    },
    GuestManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(978684).Z
    },
    ClipsManager: {
        actions: ['RTC_CONNECTION_FLAGS', 'RTC_CONNECTION_USER_CREATE', 'RTC_CONNECTION_STATE', 'POST_CONNECTION_OPEN', 'CLIPS_ALLOW_VOICE_RECORDING_UPDATE', 'CLIPS_SETTINGS_UPDATE', 'CLIPS_INIT_FAILURE', 'STREAM_START', 'RUNNING_GAME_TOGGLE_DETECTION', 'RUNNING_GAMES_CHANGE', 'CLIPS_RESTART', 'RTC_CONNECTION_VIDEO', 'MEDIA_ENGINE_SET_HARDWARE_ENCODING'],
        inlineRequire: () => n(220122).Z
    },
    CustomCallSoundsManager: {
        actions: ['RTC_CONNECTION_STATE', 'SOUNDBOARD_MUTE_JOIN_SOUND', 'VOICE_STATE_UPDATES'],
        inlineRequire: () => n(783295).Z
    },
    NotificationMigrationManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(392888).Z
    },
    UnreadSettingsManager: {
        actions: ['GUILD_CREATE', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => n(109610).Z
    },
    AnnouncementViewTrackingManager: {
        actions: ['CHANNEL_SELECT'],
        inlineRequire: () => n(529726).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DetectableGamesManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(114957).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    MidjourneyOnboardingManager: {
        actions: ['CHANNEL_CREATE'],
        inlineRequire: () => n(175255).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    QuestProgressManager: {
        actions: ['QUESTS_SEND_HEARTBEAT_SUCCESS', 'QUESTS_SEND_HEARTBEAT_FAILURE', 'QUESTS_ENROLL_SUCCESS', 'RUNNING_GAMES_CHANGE', 'QUESTS_FETCH_CURRENT_QUESTS_SUCCESS', 'STREAM_START', 'STREAM_CREATE', 'STREAM_CLOSE', 'PASSIVE_UPDATE_V2', 'VOICE_STATE_UPDATES', 'EMBEDDED_ACTIVITY_UPDATE_V2', 'QUESTS_PREVIEW_UPDATE_SUCCESS'],
        inlineRequire: () => n(427081).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    QuestFetchManager: {
        actions: ['QUESTS_FETCH_CURRENT_QUESTS_BEGIN', 'POST_CONNECTION_OPEN', 'RUNNING_GAMES_CHANGE', 'USER_SETTINGS_PROTO_UPDATE', 'LOGOUT'],
        inlineRequire: () => n(877519).Z
    },
    VoiceChannelGameActivityManager: {
        actions: ['RUNNING_GAMES_CHANGE', 'VOICE_CHANNEL_SELECT'],
        inlineRequire: () => n(981668).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    InappropriateConversationsManager: {
        actions: ['VIBING_WUMPUS_PLAY_MUSIC', 'VIBING_WUMPUS_STOP_MUSIC', 'VIBING_WUMPUS_PAUSE_MUSIC'],
        inlineRequire: () => n(752290).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ContentInventoryManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'IDLE', 'WINDOW_FOCUS', 'CONTENT_INVENTORY_TOGGLE_FEED_HIDDEN', 'CONTENT_INVENTORY_MANUAL_REFRESH', 'CONTENT_INVENTORY_INBOX_STALE', 'SPOTIFY_NEW_TRACK', 'GAME_PROFILE_OPEN', 'OVERLAY_READY'],
        inlineRequire: () => n(345765).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildLeaderboardManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'IDLE', 'WINDOW_FOCUS', 'CHANNEL_SELECT'],
        inlineRequire: () => n(434382).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    RunningGameDetectionManager: {
        actions: ['RUNNING_GAME_DELETE_ENTRY', 'RUNNING_GAME_TOGGLE_DETECTION'],
        inlineRequire: () => n(611184).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    RunningGameHeartbeatManager: {
        actions: ['RUNNING_GAMES_CHANGE', 'LOGOUT', 'CONNECTION_CLOSED', 'POST_CONNECTION_OPEN'],
        inlineRequire: () => n(696287).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DmSettingsUpsellManager: {
        actions: ['DM_SETTINGS_UPSELL_SHOW'],
        inlineRequire: () => n(401416).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    TenureRewardManager: {
        actions: ['POST_CONNECTION_OPEN', 'CONNECTION_CLOSED', 'ENTITLEMENT_FETCH_APPLICATION_SUCCESS', 'ENTITLEMENT_CREATE', 'ENTITLEMENT_UPDATE', 'ENTITLEMENT_DELETE', 'LOGOUT'],
        inlineRequire: () => n(944880).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ForwardGuildBreadcrumbManager: {
        actions: ['POST_CONNECTION_OPEN', 'MESSAGE_UPDATE', 'LOAD_MESSAGES_SUCCESS', 'LOAD_MESSAGES_AROUND_SUCCESS', 'LOAD_RECENT_MENTIONS_SUCCESS', 'LOAD_PINNED_MESSAGES_SUCCESS', 'SEARCH_FINISH', 'MOD_VIEW_SEARCH_FINISH'],
        inlineRequire: () => n(35260).Z
    },
    LeagueOfLegendsLifecycleManager: {
        actions: ['RUNNING_GAMES_CHANGE'],
        inlineRequire: () => n(614571).Z,
        neverLoadBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0
    },
    SharedSpacesWarningManager: {
        actions: ['CHANNEL_SELECT', 'APP_STATE_UPDATE'],
        inlineRequire: () => n(414509).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    DispatcherSchedulerManager: {
        actions: ['POST_CONNECTION_OPEN', 'EXPERIMENTS_FETCH_SUCCESS', 'CACHE_LOADED', 'LOGIN_SUCCESS', 'EXPERIMENT_OVERRIDE_BUCKET'],
        inlineRequire: () => n(902629).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GlobalDiscoveryServersFeaturedSearchManager: {
        actions: ['POST_CONNECTION_OPEN'],
        inlineRequire: () => n(275131).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    GuildPowerupsManager: {
        actions: ['GUILD_POWERUP_ENTITLEMENTS_CREATE', 'GUILD_POWERUP_ENTITLEMENTS_DELETE'],
        inlineRequire: () => n(909123).Z,
        neverLoadBeforeConnectionOpen: !0,
        hasStoreChangeListeners: !0
    },
    AVErrorManager: {
        actions: ['MEDIA_ENGINE_SET_AUDIO_ENABLED', 'AUDIO_INPUT_DETECTED', 'AUDIO_SET_DISPLAY_SILENCE_WARNING', 'CERTIFIED_DEVICES_SET', 'AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_OUTPUT_DEVICE', 'MEDIA_ENGINE_DEVICES', 'RTC_CONNECTION_STATE', 'VOICE_STATE_UPDATES', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'MEDIA_ENGINE_SOUNDSHARE_FAILED', 'MEDIA_ENGINE_NOISE_CANCELLATION_ERROR', 'MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR', 'MEDIA_ENGINE_VIDEO_STATE_CHANGED', 'NATIVE_SCREEN_SHARE_PICKER_UPDATE', 'NATIVE_SCREEN_SHARE_PICKER_ERROR', 'MEDIA_SESSION_JOINED', 'RTC_CONNECTION_UPDATE_ID', 'RTC_CONNECTION_USER_CREATE', 'REPORT_AV_ERROR', 'VIDEO_STREAM_READY_TIMEOUT', 'CLEAR_VIDEO_STREAM_READY_TIMEOUT', 'RTC_CONNECTION_VIDEO'],
        inlineRequire: () => n(550643).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ChatWallpaperPickerManager: {
        actions: ['CHANNEL_SELECT'],
        inlineRequire: () => n(153799).Z,
        neverLoadBeforeConnectionOpen: !0
    },
    ApplicationStreamingManager: {
        actions: ['STREAM_WATCH', 'STREAM_START', 'STREAM_CREATE', 'STREAM_UPDATE', 'STREAM_DELETE', 'STREAM_CLOSE', 'CALL_UPDATE', 'CHANNEL_UPDATES', 'VOICE_CHANNEL_SELECT', 'VOICE_STATE_UPDATES', 'MEDIA_ENGINE_VIDEO_STATE_CHANGED'],
        inlineRequire: () => n(981283).Z,
        neverLoadBeforeConnectionOpen: !0
    }
};
(0, r.j)(i);
