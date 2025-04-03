n.d(t, { Z: () => g }), n(47120), n(230036), n(978209);
var r = n(956067),
    i = n(586444);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let c = () => {};
n.g.__timingFunction = () => performance.now();
let u = null == n.g.__getTotalRequireTime ? () => 0 : () => n.g.__getTotalRequireTime();
function d(e, t) {
    if (0 === t || null == t) return null;
    let n = t - e;
    return n < 0 || n > 1000000 ? null : n;
}
class f {
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
        0 === this.start_ && this.recordStart_(), r.Z.mark(this.emoji, 'Start '.concat(this.name)), c();
    }
    recordStart_() {
        (this.start_ = Date.now()), (this.startNumImports = i.dp()), (this.startImportTime = u());
    }
    recordEnd() {
        0 === this.end_ && 0 !== this.start_ ? (this.recordEnd_(), r.Z.mark(this.emoji, 'Finish '.concat(this.name), this.end_ - this.start_)) : r.Z.mark(this.emoji, 'Finish '.concat(this.name)), c();
    }
    recordEnd_() {
        (this.end_ = Date.now()), (this.endNumImports = i.dp()), (this.endImportTime = u());
    }
    set(e, t) {
        0 === this.start_ && ((this.start_ = e), (this.end_ = e + t), (this.endNumImports = i.dp()), (this.endImportTime = u())), r.Z.mark(this.emoji, this.name, t), c();
    }
    serializeStart(e) {
        return d(e, this.start_);
    }
    serializeEnd(e) {
        return d(e, this.end_);
    }
    measure(e) {
        if (this.start_ > 0) return r.Z.time(this.emoji, this.name, e);
        this.recordStart_();
        let t = r.Z.time(this.emoji, this.name, e);
        return this.recordEnd_(), c(), t;
    }
    async measureAsync(e) {
        if (this.start_ > 0) return r.Z.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let t = await r.Z.timeAsync(this.emoji, this.name, e);
        return this.recordEnd_(), c(), t;
    }
    async measureAsyncWithoutNesting(e) {
        if (this.start_ > 0) return r.Z.timeAsync(this.emoji, this.name, e);
        this.recordStart_();
        let t = Date.now();
        r.Z.mark(this.emoji, 'Start '.concat(this.name));
        let n = await e();
        return r.Z.mark(this.emoji, 'Finish '.concat(this.name), Date.now() - t), this.recordEnd_(), c(), n;
    }
    constructor(e, t) {
        o(this, 'emoji', void 0), o(this, 'name', void 0), o(this, 'start_', void 0), o(this, 'startNumImports', void 0), o(this, 'startImportTime', void 0), o(this, 'end_', void 0), o(this, 'endNumImports', void 0), o(this, 'endImportTime', void 0), (this.emoji = e), (this.name = t), (this.start_ = 0), (this.startNumImports = 0), (this.startImportTime = 0), (this.end_ = 0), (this.endNumImports = 0), (this.endImportTime = 0);
    }
}
class _ {
    get time() {
        return this.time_;
    }
    record() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        0 === this.time_ ? ((this.time_ = e), (this.numImports = i.dp()), (this.importTime = u()), r.Z.mark(this.emoji, this.name)) : this.onlyOnce || r.Z.mark(this.emoji, this.name), c();
    }
    hasData() {
        return this.time_ > 0;
    }
    serialize(e) {
        return d(e, this.time_);
    }
    constructor(e, t, n = !1) {
        o(this, 'emoji', void 0), o(this, 'name', void 0), o(this, 'onlyOnce', void 0), o(this, 'time_', void 0), o(this, 'numImports', void 0), o(this, 'importTime', void 0), (this.emoji = e), (this.name = t), (this.onlyOnce = n), (this.time_ = 0), (this.numImports = null), (this.importTime = 0);
    }
}
class p {
    get time() {
        return this.time_;
    }
    record() {
        0 === this.time_ && (this.time_ = u());
    }
    constructor() {
        o(this, 'time_', 0);
    }
}
class h {
    constructor() {
        o(this, 'loadIndex', new f('\u2757', 'Load index.tsx')),
            o(this, 'loadFastConnectNativeModule', new f('\uD83D\uDCBE', 'Load fast_connect native module')),
            o(this, 'beginFastConnect', new f('\uD83C\uDF10', 'Fast Connect IDENTIFY')),
            o(this, 'loadImports', new f('\uD83C\uDFC3', 'Load Imports')),
            o(this, 'init', new f('\uD83C\uDFC3', 'Initial Initialization')),
            o(this, 'loadStorage', new f('\uD83D\uDCBE', 'Load Storage')),
            o(this, 'parseStorage', new f('\uD83D\uDCBE', 'Parse Storage')),
            o(this, 'loadMiniCache', new f('\uD83D\uDCBE', 'Load Mini Cache')),
            o(this, 'fetchGuildCache', new f('\uD83D\uDCBE', 'Fetch Guild Cache')),
            o(this, 'fetchGuildChannelsCache', new f('\uD83D\uDCBE', 'Fetch Initial Guild Channels Cache')),
            o(this, 'loadCachedMessages', new f('\uD83D\uDCBE', 'Load Cached Messages')),
            o(this, 'renderApp', new _('\uD83C\uDFA8', 'First React Render')),
            o(this, 'renderAppEffect', new _('\uD83C\uDFA8', 'First React Render useEffect')),
            o(this, 'renderMessages', new _('\uD83C\uDFA8', 'React Render Messages', !0)),
            o(this, 'renderMessagesWithCache', new _('\uD83C\uDFA8', 'React Render Cached Messages', !0)),
            o(this, 'firstRowGenerator', new f('\uD83C\uDFA8', 'RowGenerator.generate()')),
            o(this, 'displayMessagesWithCache', new _('\uD83D\uDDA5️', 'Display Cached Messages')),
            o(this, 'renderLatestMessages', new _('\uD83C\uDFA8', 'React Render Latest Messages')),
            o(this, 'displayLatestMessages', new _('\uD83D\uDDA5️', 'Display Latest Messages')),
            o(this, 'initialGuild', new f('\uD83C\uDF10', 'Initial Guild')),
            o(this, 'loadLazyCache', new f('\uD83D\uDCBE', 'Load Lazy Cache')),
            o(this, 'fetchLazyCache', new f('\uD83D\uDCBE', 'Fetch Lazy Cache')),
            o(this, 'parseLazyCache', new f('\uD83D\uDCBE', 'Parse Lazy Cache')),
            o(this, 'fetchStaleChannels', new f('\uD83D\uDCBE', 'Fetch Stale Channels')),
            o(this, 'deserializeCache', new f('\uD83D\uDCBE', 'Deserialize Cache')),
            o(this, 'dispatchLazyCache', new f('\uD83D\uDCBE', 'Dispatch Lazy Cache')),
            o(this, 'parseReady', new f('\uD83C\uDF10', 'Parse READY')),
            o(this, 'ready', new f('\uD83C\uDF10', 'READY')),
            o(this, 'hydrateReady', new f('\uD83C\uDF10', 'Hydrate READY')),
            o(this, 'dispatchReady', new f('\uD83C\uDF10', 'Dispatch READY')),
            o(this, 'parseReadySupplemental', new f('\uD83C\uDF10', 'Parse READY Supplemental')),
            o(this, 'readySupplemental', new f('\uD83C\uDF10', 'READY Supplemental')),
            o(this, 'hydrateReadySupplemental', new f('\uD83C\uDF10', 'Hydrate READY Supplemental')),
            o(this, 'dispatchReadySupplemental', new f('\uD83C\uDF10', 'Dispatch READY Supplemental')),
            o(this, 'fetchMessages', new f('\uD83C\uDF10', 'Fetch messages')),
            o(this, 'dispatchMessages', new f('\uD83C\uDF10', 'Dispatch messages')),
            o(this, 'imports', {
                polyfillsEnd: new p(),
                sentryEnd: new p(),
                appStateChangeStart: new p(),
                appStateChangeEnd: new p(),
                loadMiniCacheStart: new p(),
                loadStorageStart: new p(),
                loadStorageEnd: new p()
            });
    }
}
class m extends h {
    setTTICallback(e) {
        c = () => {
            !0 === e() && (c = () => !1);
        };
    }
    setCacheInfo(e) {
        this.cacheInfo = e;
    }
    setInterstitial(e) {
        (this.interstitial = e), c();
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
        'active' === e && (null == this.firstAppActiveTime && (this.firstAppActiveTime = Date.now()), (this.wasEverActive = !0)), null == this.readyProperties.num_guilds && (this.didBackgroundApp = this.didBackgroundApp || 'active' !== e);
    }
    recordRender(e, t) {
        this.renderMessages.record(), (t || e > 0) && this.renderMessagesWithCache.record(), t && this.renderLatestMessages.record();
    }
    recordMessageRender(e, t, r, i) {
        let { default: o } = n(709054);
        if (!this.renderLatestMessages.hasData())
            if ((this.renderMessages.record(), t.length > 0 && this.renderMessagesWithCache.record(), r)) {
                if ((this.renderLatestMessages.record(), null == this.cachedChannelId)) {
                    this.messageCacheMissingReason = 'no-cache';
                    return;
                }
                if (this.cachedChannelId !== e) {
                    this.messageCacheMissingReason = 'channel-changed';
                    return;
                }
                if (null == this.cachedMessageIds || 0 === this.cachedMessageIds.length) {
                    this.messageCacheMissingReason = 'no-cache';
                    return;
                }
                if (0 === t.length) {
                    this.messageCacheMissingReason = 'channel-empty';
                    return;
                }
                if (e === this.cachedChannelId) {
                    var a;
                    let n = this.cachedMessageIds.sort(o.compare).reverse()[0],
                        r = t.sort(o.compare).reverse()[0];
                    this.messageCacheAgeSeconds = Math.floor((o.extractTimestamp(r) - o.extractTimestamp(n)) / 1000);
                    let s = t.filter((e) => {
                        var t;
                        return null == (t = this.cachedMessageIds) ? void 0 : t.includes(e);
                    }).length;
                    (this.messageCacheCount = null != (a = this.cachedChannelCounts.get(e)) ? a : null), (this.messageCacheHavingCount = s), (this.messageCacheMissingCount = t.length - s), (this.messageRenderFullCount = t.length), (this.messageRenderCachedCount = this.cachedMessageIds.length), (this.messageRenderHasMoreAfter = i);
                }
            } else (null == this.cachedChannelId || e === this.cachedChannelId) && ((this.cachedChannelId = e), (this.cachedMessageIds = t), t.length > 0 && (this.messageCacheMissingReason = null));
    }
    getStartTime(e) {
        return this.extraProperties.headless_task_ran && null != this.firstAppActiveTime ? this.firstAppActiveTime : null == e || e <= 0 ? this.loadIndex.start : e;
    }
    processNativeLogs(e, t) {
        let n = this.getStartTime(t);
        for (let t of e)
            switch (t.label) {
                case 'Finish MainApplication.initialize()':
                    this.extraProperties.time_main_application_initialize_end = d(n, t.timestamp);
                    break;
                case 'GET_REACT_INSTANCE_MANAGER_START':
                    this.extraProperties.time_get_react_instance_manager_start = d(n, t.timestamp);
                    break;
                case 'GET_REACT_INSTANCE_MANAGER_END':
                    this.extraProperties.time_get_react_instance_manager_end = d(n, t.timestamp);
                    break;
                case 'PROCESS_PACKAGES_START':
                    this.extraProperties.time_process_packages_start = d(n, t.timestamp);
                    break;
                case 'PROCESS_PACKAGES_END':
                    this.extraProperties.time_process_packages_end = d(n, t.timestamp);
                    break;
                case 'CREATE_CATALYST_INSTANCE_START':
                    this.extraProperties.time_create_catalyst_instance_start = d(n, t.timestamp);
                    break;
                case 'CREATE_CATALYST_INSTANCE_END':
                    this.extraProperties.time_create_catalyst_instance_end = d(n, t.timestamp);
                    break;
                case 'CREATE_UI_MANAGER_MODULE_START':
                    this.extraProperties.time_create_ui_manager_module_start = d(n, t.timestamp);
                    break;
                case 'CREATE_UI_MANAGER_MODULE_END':
                    this.extraProperties.time_create_ui_manager_module_end = d(n, t.timestamp);
                    break;
                case 'REACT_BRIDGE_LOADING_START':
                    this.extraProperties.time_react_bridge_loading_start = d(n, t.timestamp);
                    break;
                case 'REACT_BRIDGE_LOADING_END':
                    this.extraProperties.time_react_bridge_loading_end = d(n, t.timestamp);
                    break;
                case 'CacheStorage Init Start':
                    this.extraProperties.time_init_native_storage_start = d(n, t.timestamp);
                    break;
                case 'CacheStorage Init End':
                    this.extraProperties.time_init_native_storage_end = d(n, t.timestamp);
                    break;
                case 'ChatModule.updateRows() Start':
                    if (null != this.extraProperties.time_first_native_message_render_start) continue;
                    this.extraProperties.time_first_native_message_render_start = d(n, t.timestamp);
                    break;
                case 'ChatModule.updateRows() Finish':
                    if (null != this.extraProperties.time_first_native_message_render_end) continue;
                    this.extraProperties.time_first_native_message_render_end = d(n, t.timestamp);
            }
    }
    serializeTTITracker(e) {
        var t, i, o, s, c, u;
        let d = this.getStartTime(e),
            f = n(392711)(r.Z.logGroups['0'].logs)
                .filter((e) => e.log.startsWith('Require '))
                .map((e) => {
                    var t;
                    return null != (t = e.delta) ? t : 0;
                })
                .sum();
        return l(a({}, this.extraProperties), {
            time_load_index_start: this.loadIndex.serializeStart(d),
            time_load_index_end: this.loadIndex.serializeEnd(d),
            time_begin_fast_connect_start: this.beginFastConnect.serializeStart(d),
            time_begin_fast_connect_end: this.beginFastConnect.serializeEnd(d),
            time_load_imports_start: this.loadImports.serializeStart(d),
            time_load_imports_end: this.loadImports.serializeEnd(d),
            time_init_start: this.init.serializeStart(d),
            time_init_end: this.init.serializeEnd(d),
            time_load_storage_start: this.loadStorage.serializeStart(d),
            time_load_storage_end: this.loadStorage.serializeEnd(d),
            time_parse_storage_start: this.parseStorage.serializeStart(d),
            time_parse_storage_end: this.parseStorage.serializeEnd(d),
            time_load_mini_cache_start: this.loadMiniCache.serializeStart(d),
            time_load_mini_cache_end: this.loadMiniCache.serializeEnd(d),
            time_fetch_initial_guild_start: this.fetchGuildCache.serializeStart(d),
            time_fetch_initial_guild_end: this.fetchGuildCache.serializeEnd(d),
            time_load_cached_messages_start: this.loadCachedMessages.serializeStart(d),
            time_load_cached_messages_end: this.loadCachedMessages.serializeEnd(d),
            time_render_app_start: this.renderApp.serialize(d),
            time_render_app_effect_start: this.renderAppEffect.serialize(d),
            time_render_messages_end: this.renderMessages.serialize(d),
            time_render_messages_with_cache_end: this.renderMessagesWithCache.serialize(d),
            time_render_latest_messages_end: this.renderLatestMessages.serialize(d),
            time_display_messages_with_cache_end: this.displayMessagesWithCache.serialize(d),
            time_display_latest_messages_end: this.displayLatestMessages.serialize(d),
            time_first_row_generator_start: this.firstRowGenerator.serializeStart(d),
            time_first_row_generator_end: this.firstRowGenerator.serializeEnd(d),
            time_initial_guild_start: this.initialGuild.serializeStart(d),
            time_initial_guild_end: this.initialGuild.serializeEnd(d),
            time_load_lazy_cache_start: this.loadLazyCache.serializeStart(d),
            time_load_lazy_cache_end: this.loadLazyCache.serializeEnd(d),
            time_fetch_lazy_cache_start: this.fetchLazyCache.serializeStart(d),
            time_fetch_lazy_cache_end: this.fetchLazyCache.serializeEnd(d),
            time_parse_lazy_cache_start: this.parseLazyCache.serializeStart(d),
            time_parse_lazy_cache_end: this.parseLazyCache.serializeEnd(d),
            time_fetch_stale_channels_start: this.fetchStaleChannels.serializeStart(d),
            time_fetch_stale_channels_end: this.fetchStaleChannels.serializeEnd(d),
            time_deserialize_cache_start: this.deserializeCache.serializeStart(d),
            time_deserialize_cache_end: this.deserializeCache.serializeEnd(d),
            time_dispatch_lazy_cache_start: this.dispatchLazyCache.serializeStart(d),
            time_dispatch_lazy_cache_end: this.dispatchLazyCache.serializeEnd(d),
            time_parse_ready_start: this.parseReady.serializeStart(d),
            time_parse_ready_end: this.parseReady.serializeEnd(d),
            time_ready_start: this.ready.serializeStart(d),
            time_ready_end: this.ready.serializeEnd(d),
            time_hydrate_ready_start: this.hydrateReady.serializeStart(d),
            time_hydrate_ready_end: this.hydrateReady.serializeEnd(d),
            time_dispatch_ready_start: this.dispatchReady.serializeStart(d),
            time_dispatch_ready_end: this.dispatchReady.serializeEnd(d),
            time_parse_ready_supplemental_start: this.parseReadySupplemental.serializeStart(d),
            time_parse_ready_supplemental_end: this.parseReadySupplemental.serializeEnd(d),
            time_ready_supplemental_start: this.readySupplemental.serializeStart(d),
            time_ready_supplemental_end: this.readySupplemental.serializeEnd(d),
            time_hydrate_ready_supplemental_start: this.hydrateReadySupplemental.serializeStart(d),
            time_hydrate_ready_supplemental_end: this.hydrateReadySupplemental.serializeEnd(d),
            time_dispatch_ready_supplemental_start: this.dispatchReadySupplemental.serializeStart(d),
            time_dispatch_ready_supplemental_end: this.dispatchReadySupplemental.serializeEnd(d),
            time_fetch_messages_start: this.fetchMessages.serializeStart(d),
            time_fetch_messages_end: this.fetchMessages.serializeEnd(d),
            time_dispatch_messages_start: this.dispatchMessages.serializeStart(d),
            time_dispatch_messages_end: this.dispatchMessages.serializeEnd(d),
            time_load_fast_connect_native_module_start: this.loadFastConnectNativeModule.serializeStart(d),
            time_load_fast_connect_native_module_end: this.loadFastConnectNativeModule.serializeEnd(d),
            identify_total_server_duration_ms: this.readyProperties.identify_total_server_duration_ms,
            identify_api_duration_ms: this.readyProperties.identify_api_duration_ms,
            identify_guilds_duration_ms: this.readyProperties.identify_guilds_duration_ms,
            ready_compressed_byte_size: this.readyProperties.compressed_byte_size,
            ready_uncompressed_byte_size: this.readyProperties.uncompressed_byte_size,
            identify_compressed_byte_size: this.readyProperties.identify_compressed_byte_size,
            identify_uncompressed_byte_size: this.readyProperties.identify_uncompressed_byte_size,
            ready_compression_algorithm: this.readyProperties.compression_algorithm,
            ready_packing_algorithm: this.readyProperties.packing_algorithm,
            ready_unpack_duration_ms: this.readyProperties.unpack_duration_ms,
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
            duration_major_js_imports: this.loadImports.end - this.loadIndex.start + f,
            cache_num_guilds: null == (t = this.cacheInfo) ? void 0 : t.guilds,
            cache_num_private_channels: null == (i = this.cacheInfo) ? void 0 : i.privateChannels,
            cache_num_basic_channels: null == (o = this.cacheInfo) ? void 0 : o.basicChannels,
            cache_num_basic_channels_stale: null == (s = this.cacheInfo) ? void 0 : s.basicChannelsStale,
            cache_num_full_channels: null == (c = this.cacheInfo) ? void 0 : c.fullChannels,
            cache_num_full_channel_guilds: null == (u = this.cacheInfo) ? void 0 : u.fullChannelGuilds,
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
            duration_imports_at_load_storage_end: Math.ceil(this.imports.loadStorageEnd.time)
        });
    }
    constructor(...e) {
        super(...e), o(this, 'readyProperties', {}), o(this, 'didBackgroundApp', !1), o(this, 'wasEverActive', !1), o(this, 'wasAuthenticated', !1), o(this, 'interstitial', null), o(this, 'cachedChannelCounts', new Map()), o(this, 'cachedChannelId', null), o(this, 'cachedMessageIds', null), o(this, 'messageCacheMissingReason', 'never-loaded'), o(this, 'messageCacheAgeSeconds', null), o(this, 'messageCacheCount', null), o(this, 'messageCacheHavingCount', null), o(this, 'messageCacheMissingCount', null), o(this, 'messageRenderFullCount', null), o(this, 'messageRenderCachedCount', null), o(this, 'messageRenderHasMoreAfter', null), o(this, 'firstAppActiveTime', null), o(this, 'cacheInfo', null), o(this, 'extraProperties', {});
    }
}
let g = new m();
