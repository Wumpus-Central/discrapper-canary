"use strict";
n.d(t, { A: () => h });
var i = n(61090);
let r = new Set();
function s() {
    return r.size;
}
let a = () => {};
n.g.__timingFunction = () => performance.now();
let o = null == n.g.__getTotalRequireTime ? () => 0 : () => n.g.__getTotalRequireTime();
function l(e, t) {
    if (0 === t || null == t) return null;
    let n = t - e;
    return n < 0 || n > 1e6 ? null : n;
}
class u {
    emoji;
    name;
    start_ = 0;
    startNumImports = 0;
    startImportTime = 0;
    end_ = 0;
    endNumImports = 0;
    endImportTime = 0;
    constructor(e, t) {
        (this.emoji = e), (this.name = t);
    }
    get start() {
        return this.start_;
    }
    get end() {
        return this.end_;
    }
    hasStart() {
        return this.start_ > 0;
    }
    hasData() {
        return this.end_ > 0;
    }
    recordStart() {
        0 === this.start_ && this.recordStart_(), i.A.mark(this.emoji, `Start ${this.name}`), a();
    }
    recordStart_() {
        (this.start_ = Date.now()), (this.startNumImports = s()), (this.startImportTime = o());
    }
    recordEnd() {
        0 === this.end_ && 0 !== this.start_
            ? (this.recordEnd_(), i.A.mark(this.emoji, `Finish ${this.name}`, this.end_ - this.start_))
            : i.A.mark(this.emoji, `Finish ${this.name}`),
            a();
    }
    recordEnd_() {
        (this.end_ = Date.now()), (this.endNumImports = s()), (this.endImportTime = o());
    }
    set(e, t) {
        0 === this.start_ &&
            ((this.start_ = e), (this.end_ = e + t), (this.endNumImports = s()), (this.endImportTime = o())),
            i.A.mark(this.emoji, this.name, t),
            a();
    }
    serializeStart(e) {
        return l(e, this.start_);
    }
    serializeEnd(e) {
        return l(e, this.end_);
    }
    measure(e) {
        if (this.start_ > 0) return i.A.time(this.emoji, this.name, e);
        this.recordStart_();
        let t = i.A.time(this.emoji, this.name, e);
        return this.recordEnd_(), a(), t;
    }
    async measureAsync(e) {
        if (this.start_ > 0) return i.A.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let t = await i.A.timeAsync(this.emoji, this.name, e);
        return this.recordEnd_(), a(), t;
    }
    async measureAsyncWithoutNesting(e) {
        if (this.start_ > 0) return i.A.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let t = Date.now();
        i.A.mark(this.emoji, `Start ${this.name}`);
        let n = await e();
        return i.A.mark(this.emoji, `Finish ${this.name}`, Date.now() - t), this.recordEnd_(), a(), n;
    }
}
class c {
    emoji;
    name;
    onlyOnce;
    alwaysRecord;
    time_ = 0;
    numImports = null;
    importTime = 0;
    constructor(e, t, n = !1, i = !1) {
        (this.emoji = e), (this.name = t), (this.onlyOnce = n), (this.alwaysRecord = i);
    }
    get time() {
        return this.time_;
    }
    record() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        if (0 === this.time_) this.recordState_(e);
        else if (!this.onlyOnce) {
            if (this.alwaysRecord) {
                this.recordState_(e), a();
                return;
            }
            i.A.mark(this.emoji, this.name);
        }
        a();
    }
    recordState_(e) {
        (this.time_ = e), (this.numImports = s()), (this.importTime = o()), i.A.mark(this.emoji, this.name);
    }
    hasData() {
        return this.time_ > 0;
    }
    serialize(e) {
        return l(e, this.time_);
    }
}
class d {
    time_ = 0;
    get time() {
        return this.time_;
    }
    record() {
        0 === this.time_ && (this.time_ = o());
    }
}
class _ {
    loadIndex = new u("\u2757", "Load index.tsx");
    loadFastConnectNativeModule = new u("\uD83D\uDCBE", "Load fast_connect native module");
    beginFastConnect = new u("\uD83C\uDF10", "Fast Connect IDENTIFY");
    loadImports = new u("\uD83C\uDFC3", "Load Imports");
    init = new u("\uD83C\uDFC3", "Initial Initialization");
    loadStorage = new u("\uD83D\uDCBE", "Load Storage");
    parseStorage = new u("\uD83D\uDCBE", "Parse Storage");
    loadMiniCache = new u("\uD83D\uDCBE", "Load Mini Cache");
    fetchGuildCache = new u("\uD83D\uDCBE", "Fetch Guild Cache");
    fetchGuildChannelsCache = new u("\uD83D\uDCBE", "Fetch Initial Guild Channels Cache");
    loadCachedMessages = new u("\uD83D\uDCBE", "Load Cached Messages");
    renderApp = new c("\uD83C\uDFA8", "First React Render");
    renderAppEffect = new c("\uD83C\uDFA8", "First React Render useEffect");
    firstContentfulPaint = new c("\uD83C\uDFA8", "First Contentful Paint", !1, !0);
    renderMessages = new c("\uD83C\uDFA8", "React Render Messages", !0);
    renderMessagesWithCache = new c("\uD83C\uDFA8", "React Render Cached Messages", !0);
    firstRowGenerator = new u("\uD83C\uDFA8", "RowGenerator.generate()");
    displayMessagesWithCache = new c("\uD83D\uDDA5\uFE0F", "Display Cached Messages", !1, !0);
    firstRenderAfterReadyPayload = new c("\uD83C\uDFA8", "First Render after Ready Payload", !0);
    renderLatestMessages = new c("\uD83C\uDFA8", "React Render Latest Messages");
    displayLatestMessages = new c("\uD83D\uDDA5\uFE0F", "Display Latest Messages");
    initialGuild = new u("\uD83C\uDF10", "Initial Guild");
    loadLazyCache = new u("\uD83D\uDCBE", "Load Lazy Cache");
    fetchLazyCache = new u("\uD83D\uDCBE", "Fetch Lazy Cache");
    parseLazyCache = new u("\uD83D\uDCBE", "Parse Lazy Cache");
    fetchStaleChannels = new u("\uD83D\uDCBE", "Fetch Stale Channels");
    deserializeCache = new u("\uD83D\uDCBE", "Deserialize Cache");
    dispatchLazyCache = new u("\uD83D\uDCBE", "Dispatch Lazy Cache");
    parseReady = new u("\uD83C\uDF10", "Parse READY");
    ready = new u("\uD83C\uDF10", "READY");
    hydrateReady = new u("\uD83C\uDF10", "Hydrate READY");
    dispatchReady = new u("\uD83C\uDF10", "Dispatch READY");
    parseReadySupplemental = new u("\uD83C\uDF10", "Parse READY Supplemental");
    readySupplemental = new u("\uD83C\uDF10", "READY Supplemental");
    hydrateReadySupplemental = new u("\uD83C\uDF10", "Hydrate READY Supplemental");
    dispatchReadySupplemental = new u("\uD83C\uDF10", "Dispatch READY Supplemental");
    fetchMessages = new u("\uD83C\uDF10", "Fetch messages");
    dispatchMessages = new u("\uD83C\uDF10", "Dispatch messages");
    imports = {
        polyfillsEnd: new d(),
        sentryEnd: new d(),
        appStateChangeStart: new d(),
        appStateChangeEnd: new d(),
        loadMiniCacheStart: new d(),
        loadStorageStart: new d(),
        loadStorageEnd: new d(),
    };
}
class f extends _ {
    readyProperties = {};
    didBackgroundApp = !1;
    wasEverActive = !1;
    wasAuthenticated = !1;
    interstitial = null;
    cachedChannelCounts = new Map();
    cachedChannelId = null;
    cachedMessageIds = null;
    messageCacheMissingReason = "never-loaded";
    messageCacheAgeSeconds = null;
    messageCacheCount = null;
    messageCacheHavingCount = null;
    messageCacheMissingCount = null;
    messageRenderFullCount = null;
    messageRenderCachedCount = null;
    messageRenderHasMoreAfter = null;
    firstAppActiveTime = null;
    initialPage = null;
    initialGuildId = null;
    earlyCacheInfo = null;
    lazyCacheInfo = null;
    extraProperties = {};
    setTTICallback(e) {
        a = () => {
            !0 === e() && (a = () => !1);
        };
    }
    setInitialPage(e) {
        this.initialPage = e;
    }
    setInitialGuildId(e) {
        this.initialGuildId = e;
    }
    setEarlyCacheInfo(e) {
        this.earlyCacheInfo = e;
    }
    setLazyCacheInfo(e) {
        this.lazyCacheInfo = e;
    }
    setInterstitial(e) {
        (this.interstitial = e), a();
    }
    addLocalMessages(e, t) {
        for (this.cachedChannelCounts.set(e, t); this.cachedChannelCounts.size > 100; ) {
            let e = this.cachedChannelCounts.keys();
            this.cachedChannelCounts.delete(e.next().value);
        }
    }
    attachReadyPayloadProperties(e) {
        this.readyProperties = e;
    }
    appStateChanged(e) {
        "active" === e &&
            (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), (this.wasEverActive = !0)),
            null == this.readyProperties.num_guilds &&
                (this.didBackgroundApp = this.didBackgroundApp || "active" !== e);
    }
    recordRender(e, t) {
        this.renderMessages.record(),
            (t || e > 0) && this.renderMessagesWithCache.record(),
            t && this.renderLatestMessages.record();
    }
    recordMessageRender(e, t, i, r) {
        let { default: s } = n(935208);
        if (!this.renderLatestMessages.hasData())
            if ((this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), i)) {
                if ((this.renderLatestMessages.record(), null == this.cachedChannelId)) {
                    this.messageCacheMissingReason = "no-cache";
                    return;
                }
                if (this.cachedChannelId !== e) {
                    this.messageCacheMissingReason = "channel-changed";
                    return;
                }
                if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                    this.messageCacheMissingReason = "no-cache";
                    return;
                }
                if (0 === t.length) {
                    this.messageCacheMissingReason = "channel-empty";
                    return;
                }
                if (e === this.cachedChannelId) {
                    let n = this.cachedMessageIds.sort(s.compare).reverse()[0],
                        i = t.sort(s.compare).reverse()[0];
                    this.messageCacheAgeSeconds = Math.floor((s.extractTimestamp(i) - s.extractTimestamp(n)) / 1e3);
                    let a = t.filter((e) => this.cachedMessageIds?.includes(e)).length;
                    (this.messageCacheCount = this.cachedChannelCounts.get(e) ?? null),
                        (this.messageCacheHavingCount = a),
                        (this.messageCacheMissingCount = t.length - a),
                        (this.messageRenderFullCount = t.length),
                        (this.messageRenderCachedCount = this.cachedMessageIds.length),
                        (this.messageRenderHasMoreAfter = r);
                }
            } else
                (null == this.cachedChannelId || e === this.cachedChannelId) &&
                    ((this.cachedChannelId = e),
                    (this.cachedMessageIds = t),
                    t.length > 0 && (this.messageCacheMissingReason = null));
    }
    getStartTime(e) {
        return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime
            ? this.firstAppActiveTime
            : null == e || e <= 0
              ? this.loadIndex.start
              : e;
    }
    processNativeLogs(e, t) {
        let n = this.getStartTime(t);
        for (let t of e)
            switch (t.label) {
                case "Finish MainApplication.initialize()":
                    this.extraProperties.time_main_application_initialize_end = l(n, t.timestamp);
                    break;
                case "GET_REACT_INSTANCE_MANAGER_START":
                    this.extraProperties.time_get_react_instance_manager_start = l(n, t.timestamp);
                    break;
                case "GET_REACT_INSTANCE_MANAGER_END":
                    this.extraProperties.time_get_react_instance_manager_end = l(n, t.timestamp);
                    break;
                case "PROCESS_PACKAGES_START":
                    this.extraProperties.time_process_packages_start = l(n, t.timestamp);
                    break;
                case "PROCESS_PACKAGES_END":
                    this.extraProperties.time_process_packages_end = l(n, t.timestamp);
                    break;
                case "CREATE_CATALYST_INSTANCE_START":
                    this.extraProperties.time_create_catalyst_instance_start = l(n, t.timestamp);
                    break;
                case "CREATE_CATALYST_INSTANCE_END":
                    this.extraProperties.time_create_catalyst_instance_end = l(n, t.timestamp);
                    break;
                case "CREATE_UI_MANAGER_MODULE_START":
                    this.extraProperties.time_create_ui_manager_module_start = l(n, t.timestamp);
                    break;
                case "CREATE_UI_MANAGER_MODULE_END":
                    this.extraProperties.time_create_ui_manager_module_end = l(n, t.timestamp);
                    break;
                case "REACT_BRIDGE_LOADING_START":
                    this.extraProperties.time_react_bridge_loading_start = l(n, t.timestamp);
                    break;
                case "REACT_BRIDGE_LOADING_END":
                    this.extraProperties.time_react_bridge_loading_end = l(n, t.timestamp);
                    break;
                case "CacheStorage Init Start":
                    this.extraProperties.time_init_native_storage_start = l(n, t.timestamp);
                    break;
                case "CacheStorage Init End":
                    this.extraProperties.time_init_native_storage_end = l(n, t.timestamp);
                    break;
                case "RUN_JS_BUNDLE_START":
                    this.extraProperties.time_before_js_bundle_start = l(n, t.timestamp);
                    break;
                case "ChatModule.updateRows() Start":
                    if (null != this.extraProperties.time_first_native_message_render_start) continue;
                    this.extraProperties.time_first_native_message_render_start = l(n, t.timestamp);
                    break;
                case "ChatModule.updateRows() Finish":
                    if (null != this.extraProperties.time_first_native_message_render_end) continue;
                    this.extraProperties.time_first_native_message_render_end = l(n, t.timestamp);
            }
    }
    serializeAppStartupMetrics() {
        return {
            ready_packing_algorithm: this.readyProperties.packing_algorithm,
            ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
        };
    }
    serializeWebPerfStartupMetrics(e) {
        return {
            ...this.serializeAppStartupMetrics(),
            was_authenticated: this.wasAuthenticated,
            time_first_render_after_ready_end: this.firstRenderAfterReadyPayload.serialize(e),
        };
    }
    serializeTTITracker(e) {
        let t = this.getStartTime(e),
            r = n(735438)(i.A.logGroups["0"].logs)
                .filter((e) => e.log.startsWith("Require "))
                .map((e) => e.delta ?? 0)
                .sum(),
            s = this.serializeAppStartupMetrics();
        return {
            ...this.extraProperties,
            ...s,
            initial_page: this.initialPage,
            guild_id: this.initialGuildId,
            time_load_index_start: this.loadIndex.serializeStart(t),
            time_load_index_end: this.loadIndex.serializeEnd(t),
            time_begin_fast_connect_start: this.beginFastConnect.serializeStart(t),
            time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(t),
            time_load_imports_start: this.loadImports.serializeStart(t),
            time_load_imports_end: this.loadImports.serializeEnd(t),
            time_init_start: this.init.serializeStart(t),
            time_init_end: this.init.serializeEnd(t),
            time_load_storage_start: this.loadStorage.serializeStart(t),
            time_load_storage_end: this.loadStorage.serializeEnd(t),
            time_parse_storage_start: this.parseStorage.serializeStart(t),
            time_parse_storage_end: this.parseStorage.serializeEnd(t),
            time_load_mini_cache_start: this.loadMiniCache.serializeStart(t),
            time_load_mini_cache_end: this.loadMiniCache.serializeEnd(t),
            time_fetch_initial_guild_start: this.fetchGuildCache.serializeStart(t),
            time_fetch_initial_guild_end: this.fetchGuildCache.serializeEnd(t),
            time_load_cached_messages_start: this.loadCachedMessages.serializeStart(t),
            time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(t),
            time_render_app_start: this.renderApp.serialize(t),
            time_render_app_effect_start: this.renderAppEffect.serialize(t),
            time_first_contentful_paint: this.firstContentfulPaint.serialize(t),
            time_render_messages_end: this.renderMessages.serialize(t),
            time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(t),
            time_render_latest_messages_end: this.renderLatestMessages.serialize(t),
            time_display_messages_with_cache_end: this.displayMessagesWithCache.serialize(t),
            time_display_latest_messages_end: this.displayLatestMessages.serialize(t),
            time_first_row_generator_start: this.firstRowGenerator.serializeStart(t),
            time_first_row_generator_end: this.firstRowGenerator.serializeEnd(t),
            time_initial_guild_start: this.initialGuild.serializeStart(t),
            time_initial_guild_end: this.initialGuild.serializeEnd(t),
            time_load_lazy_cache_start: this.loadLazyCache.serializeStart(t),
            time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(t),
            time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(t),
            time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(t),
            time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(t),
            time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(t),
            time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(t),
            time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(t),
            time_deserialize_cache_start: this.deserializeCache.serializeStart(t),
            time_deserialize_cache_end: this.deserializeCache.serializeEnd(t),
            time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(t),
            time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(t),
            time_parse_ready_start: this.parseReady.serializeStart(t),
            time_parse_ready_end: this.parseReady.serializeEnd(t),
            time_ready_start: this.ready.serializeStart(t),
            time_ready_end: this.ready.serializeEnd(t),
            time_hydrate_ready_start: this.hydrateReady.serializeStart(t),
            time_hydrate_ready_end: this.hydrateReady.serializeEnd(t),
            time_dispatch_ready_start: this.dispatchReady.serializeStart(t),
            time_dispatch_ready_end: this.dispatchReady.serializeEnd(t),
            time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(t),
            time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(t),
            time_ready_supplemental_start: this.readySupplemental.serializeStart(t),
            time_ready_supplemental_end: this.readySupplemental.serializeEnd(t),
            time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(t),
            time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(t),
            time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(t),
            time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(t),
            time_fetch_messages_start: this.fetchMessages.serializeStart(t),
            time_fetch_messages_end: this.fetchMessages.serializeEnd(t),
            time_dispatch_messages_start: this.dispatchMessages.serializeStart(t),
            time_dispatch_messages_end: this.dispatchMessages.serializeEnd(t),
            time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(t),
            time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(t),
            identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
            identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
            identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
            ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
            ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
            identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
            identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
            ready_compression_algorithm: this.readyProperties.compression_algorithm,
            is_reconnect: this.readyProperties.is_reconnect,
            is_fast_connect: this.readyProperties.is_fast_connect,
            did_force_clear_guild_hashes: this.readyProperties.did_force_clear_guild_hashes,
            num_guilds: this.readyProperties.num_guilds,
            num_changed_guild_channels: this.readyProperties.num_guild_channels,
            ready_presences_size: this.readyProperties.presences_size,
            ready_users_size: this.readyProperties.users_size,
            ready_read_states_size: this.readyProperties.read_states_size,
            ready_private_channels_size: this.readyProperties.private_channels_size,
            ready_user_guild_settings_size: this.readyProperties.user_guild_settings_size,
            ready_relationships_size: this.readyProperties.relationships_size,
            ready_experiments_size: this.readyProperties.experiments_size,
            ready_user_settings_size: this.readyProperties.user_settings_size,
            ready_remaining_data_size: this.readyProperties.remaining_data_size,
            ready_guild_channels_size: this.readyProperties.guild_channels_size,
            ready_guild_members_size: this.readyProperties.guild_members_size,
            ready_guild_presences_size: this.readyProperties.guild_presences_size,
            ready_guild_roles_size: this.readyProperties.guild_roles_size,
            ready_guild_emojis_size: this.readyProperties.guild_emojis_size,
            ready_guild_remaining_data_size: this.readyProperties.guild_remaining_data_size,
            ready_guild_threads_size: this.readyProperties.guild_threads_size,
            ready_guild_stickers_size: this.readyProperties.guild_stickers_size,
            ready_guild_events_size: this.readyProperties.guild_events_size,
            ready_guild_features_size: this.readyProperties.guild_features_size,
            ready_size_metrics_duration_ms: this.readyProperties.size_metrics_duration_ms,
            had_cache_at_startup: this.readyProperties.had_cache_at_startup,
            used_cache_at_startup: this.readyProperties.used_cache_at_startup,
            was_authenticated: this.wasAuthenticated,
            did_background_app: this.didBackgroundApp,
            interstitial: this.interstitial,
            message_cache_missing_reason: this.messageCacheMissingReason,
            message_cache_age_seconds: this.messageCacheAgeSeconds,
            message_cache_count: this.messageCacheCount,
            message_cache_having_count: this.messageCacheHavingCount,
            message_cache_missing_count: this.messageCacheMissingCount,
            message_render_full_count: this.messageRenderFullCount,
            message_render_cached_count: this.messageRenderCachedCount,
            message_render_has_more_after: this.messageRenderHasMoreAfter,
            duration_major_js_imports: this.loadImports.end - this.loadIndex.start + r,
            cache_num_guilds: Math.max(this.earlyCacheInfo?.guilds ?? 0, this.lazyCacheInfo?.guilds ?? 0),
            cache_num_private_channels: this.lazyCacheInfo?.privateChannels,
            cache_num_basic_channels: this.lazyCacheInfo?.basicChannels,
            cache_num_basic_channels_stale: this.lazyCacheInfo?.basicChannelsStale,
            cache_num_full_channels: this.lazyCacheInfo?.fullChannels,
            cache_num_full_channel_guilds: this.lazyCacheInfo?.fullChannelGuilds,
            num_imports_at_load_index_end: this.loadIndex.endNumImports,
            num_imports_at_init_end: this.init.endNumImports,
            num_imports_at_load_mini_cache_end: this.loadMiniCache.endNumImports,
            num_imports_at_render_app_start: this.renderApp.numImports,
            num_imports_at_render_app_effect_start: this.renderAppEffect.numImports,
            num_imports_at_render_messages_end: this.renderMessages.numImports,
            num_imports_at_render_messages_with_cache_end: this.renderMessagesWithCache.numImports,
            num_imports_at_render_latest_messages_end: this.renderLatestMessages.numImports,
            num_imports_at_load_lazy_cache_start: this.loadLazyCache.startNumImports,
            num_imports_at_load_lazy_cache_end: this.loadLazyCache.endNumImports,
            num_imports_at_ready_start: this.ready.startNumImports,
            num_imports_at_ready_end: this.ready.endNumImports,
            num_imports_at_ready_supplemental_start: this.readySupplemental.startNumImports,
            num_imports_at_ready_supplemental_end: this.readySupplemental.endNumImports,
            duration_imports_at_load_index_start: Math.ceil(this.loadIndex.startImportTime),
            duration_imports_at_load_index_end: Math.ceil(this.loadIndex.endImportTime),
            duration_imports_at_init_end: Math.ceil(this.init.endImportTime),
            duration_imports_at_load_mini_cache_end: Math.ceil(this.loadMiniCache.endImportTime),
            duration_imports_at_render_app_start: Math.ceil(this.renderApp.importTime),
            duration_imports_at_render_app_effect_start: Math.ceil(this.renderAppEffect.importTime),
            duration_imports_at_render_messages_end: Math.ceil(this.renderMessages.importTime),
            duration_imports_at_render_messages_with_cache_end: Math.ceil(this.renderMessagesWithCache.importTime),
            duration_imports_at_render_latest_messages_end: Math.ceil(this.renderLatestMessages.importTime),
            duration_imports_at_load_lazy_cache_start: Math.ceil(this.loadLazyCache.startImportTime),
            duration_imports_at_load_lazy_cache_end: Math.ceil(this.loadLazyCache.endImportTime),
            duration_imports_at_ready_start: Math.ceil(this.ready.startImportTime),
            duration_imports_at_ready_end: Math.ceil(this.ready.endImportTime),
            duration_imports_at_ready_supplemental_start: Math.ceil(this.readySupplemental.startImportTime),
            duration_imports_at_ready_supplemental_end: Math.ceil(this.readySupplemental.endImportTime),
            duration_imports_at_polyfills_end: Math.ceil(this.imports.polyfillsEnd.time),
            duration_imports_at_sentry_end: Math.ceil(this.imports.sentryEnd.time),
            duration_imports_at_fast_connect_start: Math.ceil(this.beginFastConnect.startImportTime),
            duration_imports_at_fast_connect_end: Math.ceil(this.beginFastConnect.endImportTime),
            duration_imports_at_app_state_change_start: Math.ceil(this.imports.appStateChangeStart.time),
            duration_imports_at_app_state_change_end: Math.ceil(this.imports.appStateChangeEnd.time),
            duration_imports_at_load_mini_cache_start: Math.ceil(this.imports.loadMiniCacheStart.time),
            duration_imports_at_load_storage_start: Math.ceil(this.imports.loadStorageStart.time),
            duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time),
        };
    }
}
let h = new f();
