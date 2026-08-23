"use strict";
n.d(t, { kw: () => W, Ay: () => z, _0: () => V }), n(321073);
var i,
    r,
    a,
    s = n(284009),
    l = n.n(s),
    o = n(279194),
    d = n(141931),
    c =
        (((i = {}).ACCESSIBILITY_GET_ENABLED = "DISCORD_ACCESSIBILITY_GET_ENABLED"),
        (i.APP_ASYNC_INDEX_TSX_LOADED = "DISCORD_APP_ASYNC_INDEX_TSX_LOADED"),
        (i.APP_BADGE_SET = "DISCORD_APP_BADGE_SET"),
        (i.APP_GET_RELEASE_CHANNEL_SYNC = "DISCORD_APP_GET_RELEASE_CHANNEL_SYNC"),
        (i.APP_GET_HOST_VERSION_SYNC = "DISCORD_APP_GET_HOST_VERSION_SYNC"),
        (i.APP_GET_ANALYTICS_EVENTS = "DISCORD_APP_GET_ANALYTICS_EVENTS"),
        (i.APP_GET_BUILD_NUMBER = "DISCORD_APP_GET_BUILD_NUMBER"),
        (i.APP_GET_ARCH = "DISCORD_APP_GET_ARCH"),
        (i.APP_GET_MODULE_VERSIONS = "DISCORD_APP_GET_MODULE_VERSIONS"),
        (i.APP_GET_PATH = "DISCORD_APP_GET_PATH"),
        (i.APP_SET_BADGE_COUNT = "DISCORD_APP_SET_BADGE_COUNT"),
        (i.APP_DOCK_SET_BADGE = "DISCORD_APP_DOCK_SET_BADGE"),
        (i.APP_DOCK_BOUNCE = "DISCORD_APP_DOCK_BOUNCE"),
        (i.APP_DOCK_CANCEL_BOUNCE = "DISCORD_APP_DOCK_CANCEL_BOUNCE"),
        (i.APP_LOADED = "DISCORD_APP_LOADED"),
        (i.APP_PUSH_ANALYTICS = "DISCORD_APP_PUSH_ANALYTICS"),
        (i.APP_RELAUNCH = "DISCORD_APP_RELAUNCH"),
        (i.APP_VIEWED = "DISCORD_APP_VIEWED"),
        (i.APP_FIRST_RENDER_AFTER_READY_PAYLOAD = "DISCORD_APP_FIRST_RENDER_AFTER_READY_PAYLOAD"),
        (i.APP_GET_MAIN_BUNDLE_STATS = "DISCORD_APP_GET_MAIN_BUNDLE_STATS"),
        (i.APP_MAIN_BUNDLE_STATS = "DISCORD_APP_MAIN_BUNDLE_STATS"),
        (i.APP_PAINT_METRICS = "DISCORD_APP_PAINT_METRICS"),
        (i.APP_GET_DEFAULT_DOUBLE_CLICK_ACTION = "DISCORD_APP_GET_DEFAULT_DOUBLE_CLICK_ACTION"),
        (i.APP_PAUSE_FRAME_EVICTOR = "DISCORD_APP_PAUSE_FRAME_EVICTOR"),
        (i.APP_UNPAUSE_FRAME_EVICTOR = "DISCORD_APP_UNPAUSE_FRAME_EVICTOR"),
        (i.APP_GET_PREFERRED_SYSTEM_LANGUAGES = "DISCORD_APP_GET_PREFERRED_SYSTEM_LANGUAGES"),
        (i.APP_GET_SYSTEM_UI_DIRECTION_SYNC = "DISCORD_APP_GET_SYSTEM_UI_DIRECTION_SYNC"),
        (i.APP_GET_OPEN_ON_START = "DISCORD_APP_GET_OPEN_ON_START"),
        (i.CLIPBOARD_COPY = "DISCORD_CLIPBOARD_COPY"),
        (i.CLIPBOARD_CUT = "DISCORD_CLIPBOARD_CUT"),
        (i.CLIPBOARD_PASTE = "DISCORD_CLIPBOARD_PASTE"),
        (i.LOAD_CLIP = "DISCORD_LOAD_CLIP"),
        (i.LOAD_CLIPS_DIRECTORY = "DISCORD_LOAD_CLIPS_DIRECTORY"),
        (i.DELETE_CLIP = "DISCORD_DELETE_CLIP"),
        (i.MOVE_CLIP = "DISCORD_MOVE_CLIP"),
        (i.UPDATE_CLIP_METADATA = "DISCORD_UPDATE_CLIP_METADATA"),
        (i.DEBUG_STASH_CLIP_DECIDER_DATA = "DISCORD_DEBUG_STASH_CLIP_DECIDER_DATA"),
        (i.CHECK_FOR_UPDATES = "DISCORD_CHECK_FOR_UPDATES"),
        (i.DESKTOP_CAPTURER_GET_SOURCES = "DISCORD_DESKTOP_CAPTURER_GET_SOURCES"),
        (i.CONSTANTS_GET = "DISCORD_CONSTANTS_GET"),
        (i.CRASH_REPORTER_UPDATE_METADATA = "DISCORD_CRASH_REPORTER_UPDATE_METADATA"),
        (i.CRASH_REPORTER_NEW_CRASH = "DISCORD_CRASH_REPORTER_NEW_CRASH"),
        (i.FEATURES_GET_BROWSER_FEATURES = "DISCORD_FEATURES_GET_BROWSER_FEATURES"),
        (i.FILE_MANAGER_GET_MODULE_PATH = "DISCORD_FILE_MANAGER_GET_MODULE_PATH"),
        (i.FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC = "DISCORD_FILE_MANAGER_GET_MODULE_DATA_PATH_SYNC"),
        (i.FILE_MANAGER_GET_MODULE_LOG_PATH = "DISCORD_FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC"),
        (i.FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC = "DISCORD_FILE_MANAGER_GET_MODULE_LOG_PATH_SYNC"),
        (i.FILE_MANAGER_GET_ASSET_CACHE_PATH = "DISCORD_FILE_MANAGER_GET_ASSET_CACHE_PATH"),
        (i.FILE_MANAGER_GET_ASSET_CACHE_PATH_SYNC = "DISCORD_FILE_MANAGER_GET_ASSET_CACHE_PATH_SYNC"),
        (i.FILE_MANAGER_SHOW_SAVE_DIALOG = "DISCORD_FILE_MANAGER_SHOW_SAVE_DIALOG"),
        (i.FILE_MANAGER_SHOW_OPEN_DIALOG = "DISCORD_FILE_MANAGER_SHOW_OPEN_DIALOG"),
        (i.FILE_MANAGER_SHOW_ITEM_IN_FOLDER = "DISCORD_FILE_MANAGER_SHOW_ITEM_IN_FOLDER"),
        (i.FILE_MANAGER_CREATE_DIRECTORY_IF_NOT_EXISTS = "DISCORD_FILE_MANAGER_CREATE_DIRECTORY_IF_NOT_EXISTS"),
        (i.GPU_SETTINGS_SET_ENABLE_HWACCEL = "DISCORD_GPU_SETTINGS_SET_ENABLE_HWACCEL"),
        (i.GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC = "DISCORD_GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC"),
        (i.GPU_SETTINGS_SET_CHROMIUM_SWITCHES = "DISCORD_GPU_SETTINGS_SET_CHROMIUM_SWITCHES"),
        (i.HARDWARE_GET_DISPLAY_COUNT = "DISCORD_HARDWARE_GET_DISPLAY_COUNT"),
        (i.INTENTS_SET_ACTIVITY = "DISCORD_INTENTS_SET_ACTIVITY"),
        (i.INTENTS_RESIGN_ACTIVITY = "DISCORD_INTENTS_RESIGN_ACTIVITY"),
        (i.NATIVE_MODULES_GET_PATHS = "DISCORD_NATIVE_MODULES_GET_PATHS"),
        (i.NATIVE_MODULES_INSTALL = "DISCORD_NATIVE_MODULES_INSTALL"),
        (i.NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP = "DISCORD_NATIVE_MODULES_FINISH_UPDATER_BOOTSTRAP"),
        (i.NATIVE_MODULES_GET_HAS_NEW_UPDATER = "DISCORD_NATIVE_MODULES_GET_HAS_NEW_UPDATER"),
        (i.NATIVE_MODULES_GET_MODULE_PATH = "DISCORD_NATIVE_MODULES_GET_MODULE_PATH"),
        (i.NAVIGATION_HISTORY_CLEAR = "DISCORD_NAVIGATION_HISTORY_CLEAR"),
        (i.NOTIFICATION_CLOSE = "DISCORD_NOTIFICATION_CLOSE"),
        (i.NOTIFICATION_SHOW = "DISCORD_NOTIFICATION_SHOW"),
        (i.NOTIFICATIONS_CLEAR = "DISCORD_NOTIFICATIONS_CLEAR"),
        (i.NOTIFICATIONS_GET_AUTHORIZATION = "DISCORD_NOTIFICATIONS_GET_AUTHORIZATION"),
        (i.NOTIFICATIONS_GET_SETTINGS = "DISCORD_NOTIFICATIONS_GET_SETTINGS"),
        (i.NOTIFICATIONS_GET_MODULE_STATUS = "DISCORD_NOTIFICATIONS_GET_MODULE_STATUS"),
        (i.NOTIFICATIONS_SEND_NOTIFICATION = "DISCORD_NOTIFICATIONS_SEND_NOTIFICATION"),
        (i.NOTIFICATIONS_REMOVE_NOTIFICATIONS = "DISCORD_NOTIFICATIONS_REMOVE_NOTIFICATIONS"),
        (i.NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS = "DISCORD_NOTIFICATIONS_REMOVE_ALL_NOTIFICATIONS"),
        (i.NOTIFICATIONS_RECEIVED_RESPONSE = "DISCORD_NOTIFICATIONS_RECEIVED_RESPONSE"),
        (i.NTP_CLOCK_START = "DISCORD_NTP_CLOCK_START"),
        (i.NTP_CLOCK_GET_SYNC_INFO = "DISCORD_NTP_CLOCK_GET_SYNC_INFO"),
        (i.NTP_CLOCK_SYNCED = "DISCORD_NTP_CLOCK_SYNCED"),
        (i.REQUEST_OPEN_EXTERNAL_URL = "DISCORD_REQUEST_OPEN_EXTERNAL_URL"),
        (i.OPEN_EXTERNAL_URL = "DISCORD_OPEN_EXTERNAL_URL"),
        (i.POWER_MONITOR_RESUME = "DISCORD_POWER_MONITOR_RESUME"),
        (i.POWER_MONITOR_SUSPEND = "DISCORD_POWER_MONITOR_SUSPEND"),
        (i.POWER_MONITOR_LOCK_SCREEN = "DISCORD_POWER_MONITOR_LOCK_SCREEN"),
        (i.POWER_MONITOR_UNLOCK_SCREEN = "DISCORD_POWER_MONITOR_UNLOCK_SCREEN"),
        (i.POWER_MONITOR_GET_SYSTEM_IDLE_TIME = "DISCORD_POWER_MONITOR_GET_SYSTEM_IDLE_TIME"),
        (i.POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP = "DISCORD_POWER_SAVE_BLOCKER_BLOCK_DISPLAY_SLEEP"),
        (i.POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP = "DISCORD_POWER_SAVE_BLOCKER_UNBLOCK_DISPLAY_SLEEP"),
        (i.POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP = "DISCORD_POWER_SAVE_BLOCKER_CLEANUP_DISPLAY_SLEEP"),
        (i.PROCESS_UTILS_GET_CPU_USAGE = "DISCORD_PROCESS_UTILS_GET_CPU_USAGE"),
        (i.PROCESS_UTILS_FLUSH_DNS_CACHE = "DISCORD_PROCESS_UTILS_FLUSH_DNS_CACHE"),
        (i.PROCESS_UTILS_FLUSH_COOKIES = "DISCORD_PROCESS_UTILS_FLUSH_COOKIES"),
        (i.PROCESS_UTILS_FLUSH_STORAGE_DATA = "DISCORD_PROCESS_UTILS_FLUSH_STORAGE_DATA"),
        (i.PROCESS_UTILS_GET_MAIN_ARGV_SYNC = "DISCORD_PROCESS_UTILS_GET_MAIN_ARGV_SYNC"),
        (i.PROCESS_UTILS_GET_LAST_CRASH = "DISCORD_PROCESS_UTILS_GET_LAST_CRASH"),
        (i.PROCESS_UTILS_SET_CRASH_REASON = "DISCORD_PROCESS_UTILS_SET_CRASH_REASON"),
        (i.PROCESS_UTILS_SET_CRASH_INFORMATION = "DISCORD_PROCESS_UTILS_SET_CRASH_INFORMATION"),
        (i.PROCESS_UTILS_SET_MEMORY_INFORMATION = "DISCORD_PROCESS_UTILS_SET_MEMORY_INFORMATION"),
        (i.PROCESS_UTILS_GET_SYSTEM_INFO = "DISCORD_PROCESS_UTILS_GET_SYSTEM_INFO"),
        (i.PROCESS_UTILS_GET_GPU_PROCESS_ID = "DISCORD_PROCESS_UTILS_GET_GPU_PROCESS_ID"),
        (i.PROCESS_UTILS_GET_SYSTEM_METRICS = "DISCORD_PROCESS_UTILS_GET_SYSTEM_METRICS"),
        (i.QUIT_AND_INSTALL = "DISCORD_QUIT_AND_INSTALL"),
        (i.SAFE_STORAGE_DECRYPT_STRING = "DISCORD_SAFE_STORAGE_DECRYPT_STRING"),
        (i.SAFE_STORAGE_ENCRYPT_STRING = "DISCORD_SAFE_STORAGE_ENCRYPT_STRING"),
        (i.SAFE_STORAGE_IS_ENCRYPTION_AVAILABLE = "DISCORD_SAFE_STORAGE_IS_ENCRYPTION_AVAILABLE"),
        (i.SEARCH_INDEX_DOMAINS = "DISCORD_SEARCH_INDEX_DOMAINS"),
        (i.SEARCH_CLEAR_INDEX = "DISCORD_SEARCH_CLEAR_INDEX"),
        (i.SEARCH_DELETE_DOMAINS = "DISCORD_SEARCH_DELETE_DOMAINS"),
        (i.SEARCH_DELETE_ITEMS = "DISCORD_SEARCH_DELETE_ITEMS"),
        (i.SETTINGS_GET = "DISCORD_SETTINGS_GET"),
        (i.SETTINGS_SET = "DISCORD_SETTINGS_SET"),
        (i.SETTINGS_GET_SYNC = "DISCORD_SETTINGS_GET_SYNC"),
        (i.SETTINGS_UPDATE_BACKGROUND_COLOR = "DISCORD_SETTINGS_UPDATE_BACKGROUND_COLOR"),
        (i.SPELLCHECK_RESULT = "DISCORD_SPELLCHECK_RESULT"),
        (i.SPELLCHECK_REPLACE_MISSPELLING = "DISCORD_SPELLCHECK_REPLACE_MISSPELLING"),
        (i.SPELLCHECK_GET_AVAILABLE_DICTIONARIES = "DISCORD_SPELLCHECK_GET_AVAILABLE_DICTIONARIES"),
        (i.SPELLCHECK_SET_LOCALE = "DISCORD_SPELLCHECK_SET_LOCALE"),
        (i.SPELLCHECK_SET_LANGUAGES = "DISCORD_SPELLCHECK_SET_LANGUAGES"),
        (i.SPELLCHECK_SET_LEARNED_WORDS = "DISCORD_SPELLCHECK_SET_LEARNED_WORDS"),
        (i.SYSTEM_TRAY_SET_ICON = "DISCORD_SYSTEM_TRAY_SET_ICON"),
        (i.SYSTEM_TRAY_SET_APPLICATIONS = "DISCORD_SYSTEM_TRAY_SET_APPLICATIONS"),
        (i.THUMBAR_BUTTONS_UPDATE = "DISCORD_THUMBAR_BUTTONS_UPDATE"),
        (i.THUMBAR_BUTTONS_CLICKED = "DISCORD_THUMBAR_BUTTONS_CLICKED"),
        (i.TRACING_CAPTURE_PERFORMANCE = "DISCORD_TRACING_CAPTURE_PERFORMANCE"),
        (i.TOGGLE_MINIMIZE_TO_TRAY = "DISCORD_TOGGLE_MINIMIZE_TO_TRAY"),
        (i.TOGGLE_OPEN_ON_STARTUP = "DISCORD_TOGGLE_OPEN_ON_STARTUP"),
        (i.TOGGLE_START_MINIMIZED = "DISCORD_TOGGLE_START_MINIMIZED"),
        (i.UPDATE_OPEN_ON_STARTUP = "DISCORD_UPDATE_OPEN_ON_STARTUP"),
        (i.UNHANDLED_JS_EXCEPTION = "DISCORD_UNHANDLED_JS_EXCEPTION"),
        (i.UPDATER_HISTORY_QUERY_AND_TRUNCATE = "DISCORD_UPDATER_HISTORY_QUERY_AND_TRUNCATE"),
        (i.UPDATED_QUOTES = "DISCORD_UPDATED_QUOTES"),
        (i.USER_DATA_CACHE_DELETE = "DISCORD_USER_DATA_CACHE_DELETE"),
        (i.USER_DATA_CACHE_GET = "DISCORD_USER_DATA_CACHE_GET"),
        (i.USER_DATA_CACHE_SAVE = "DISCORD_USER_DATA_CACHE_SAVE"),
        (i.WINDOW_BLUR = "DISCORD_WINDOW_BLUR"),
        (i.WINDOW_CLOSE = "DISCORD_WINDOW_CLOSE"),
        (i.WINDOW_FOCUS = "DISCORD_WINDOW_FOCUS"),
        (i.WINDOW_MAXIMIZE = "DISCORD_WINDOW_MAXIMIZE"),
        (i.WINDOW_MINIMIZE = "DISCORD_WINDOW_MINIMIZE"),
        (i.WINDOW_SET_MINIMUM_SIZE = "DISCORD_WINDOW_SET_MINIMUM_SIZE"),
        (i.WINDOW_RESTORE = "DISCORD_WINDOW_RESTORE"),
        (i.WEBAUTHN_REGISTER_MAC = "DISCORD_WEBAUTHN_REGISTER_MAC"),
        (i.WEBAUTHN_AUTHENTICATE_MAC = "DISCORD_WEBAUTHN_AUTHENTICATE_MAC"),
        (i.WEBAUTHN_SIGNAL_ALL_ACCEPTED_CREDENTIALS = "DISCORD_WEBAUTHN_SIGNAL_ALL_ACCEPTED_CREDENTIALS"),
        (i.WEBAUTHN_SIGNAL_CURRENT_USER_DETAILS = "DISCORD_WEBAUTHN_SIGNAL_CURRENT_USER_DETAILS"),
        (i.WEBAUTHN_SIGNAL_UNKNOWN_CREDENTIAL = "DISCORD_WEBAUTHN_SIGNAL_UNKNOWN_CREDENTIAL"),
        (i.WINDOW_FLASH_FRAME = "DISCORD_WINDOW_FLASH_FRAME"),
        (i.WINDOW_TOGGLE_FULLSCREEN = "DISCORD_WINDOW_TOGGLE_FULLSCREEN"),
        (i.WINDOW_SET_BACKGROUND_THROTTLING = "DISCORD_WINDOW_SET_BACKGROUND_THROTTLING"),
        (i.WINDOW_SET_PROGRESS_BAR = "DISCORD_WINDOW_SET_PROGRESS_BAR"),
        (i.WINDOW_IS_ALWAYS_ON_TOP = "DISCORD_WINDOW_IS_ALWAYS_ON_TOP"),
        (i.WINDOW_SET_ALWAYS_ON_TOP = "DISCORD_WINDOW_SET_ALWAYS_ON_TOP"),
        (i.WINDOW_OPEN_DOCUMENT_PIP = "DISCORD_WINDOW_OPEN_DOCUMENT_PIP"),
        (i.WINDOW_DEVTOOLS_OPENED = "DISCORD_WINDOW_DEVTOOLS_OPENED"),
        (i.WINDOW_DEVTOOLS_CLOSED = "DISCORD_WINDOW_DEVTOOLS_CLOSED"),
        (i.WINDOW_SET_CONTENT_PROTCTION = "DISCORD_WINDOW_SET_CONTENT_PROTCTION"),
        (i.WINDOW_SET_WINDOW_CONTENT_PROTECTION = "DISCORD_WINDOW_SET_WINDOW_CONTENT_PROTECTION"),
        (i.WINDOW_GET_NATIVE_HANDLE = "DISCORD_WINDOW_GET_NATIVE_HANDLE"),
        (i.WINDOW_GET_MEDIA_SOURCE_ID = "DISCORD_WINDOW_GET_MEDIA_SOURCE_ID"),
        (i.WINDOW_SET_FOCUSABLE = "DISCORD_WINDOW_SET_FOCUSABLE"),
        (i.WINDOW_SHOW_INACTIVE = "DISCORD_WINDOW_SHOW_INACTIVE"),
        (i.WINDOW_SET_TRAFFIC_LIGHT_POSITION = "DISCORD_WINDOW_SET_TRAFFIC_LIGHT_POSITION"),
        (i.WINDOW_SET_FRAME_RATE = "DISCORD_WINDOW_SET_FRAME_RATE"),
        (i.GET_MOUSE_COORDINATES = "DISCORD_GET_MOUSE_COORDINATES"),
        i),
    u = n(636537),
    _ = n(941426),
    E = n(506774),
    A = n(56562),
    h = n(223273),
    I = n(229531),
    f = n(723702),
    p = n(998218),
    T = n(652215),
    m = n(264572).Buffer;
let g = window.DiscordNative,
    S = new Set(["jpg", "jpeg", "jfif", "png"]),
    N = new Set(["webp", "avif"]),
    C = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    R = null,
    O = null,
    L = null,
    y = {},
    D = !1,
    v = {};
null != g &&
    ((R = g.app
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (L = g.app.getModuleVersions()),
    (O = g.app.getBuildNumber()));
let b = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    M = !1,
    P = null,
    U = "lastImageSaveDirectory",
    w = /[<>:"/\\|?*@]/g,
    G = /(\.[a-zA-Z0-9]+):[^.]*$/,
    x = /(\.[a-zA-Z0-9]+)%3A.+$/,
    k = /[^a-zA-Z0-9]/g,
    F = /\.[^.]*$/;
var V = (((r = {}).SAVED = "saved"), (r.CANCELED = "canceled"), (r.ERRORED = "errored"), r);
function B(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(G, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(w, "_");
    } catch {
        return e
            .replace(x, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(w, "_");
    }
}
async function H(e) {
    let t = await fetch(new Request(e, { method: "GET", mode: "cors" }));
    l()(200 === t.status, "Data fetch unsuccessful");
    let n = await t.arrayBuffer();
    return l()(null != n, "Data is null"), n;
}
async function j(e, t) {
    let n = await createImageBitmap(new Blob([e], { type: t }));
    try {
        let e = new OffscreenCanvas(n.width, n.height),
            t = e.getContext("2d");
        l()(null != t, "Failed to acquire 2d context for image transcode"), t.drawImage(n, 0, 0);
        let i = await e.convertToBlob({ type: "image/png" });
        return await i.arrayBuffer();
    } finally {
        n.close();
    }
}
var W =
    (((a = {})[(a.Camera = 0)] = "Camera"),
    (a[(a.Microphone = 1)] = "Microphone"),
    (a[(a.Photo = 2)] = "Photo"),
    (a[(a.InputMonitoring = 3)] = "InputMonitoring"),
    (a[(a.ScreenRecording = 4)] = "ScreenRecording"),
    a);
function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : y;
    return {
        id: t[e.id ?? ""],
        nativeProcessObserverId: parseInt(e.id ?? "", 10),
        name: e.gameName ?? e.name,
        origGameName: e.origGameName,
        processName: e.name ?? "",
        hidden: e.hidden,
        elevated: e.elevated,
        sandboxed: e.sandboxed ?? !1,
        lastFocused: e.lastFocused,
        exePath: e.exePath,
        exeName: e.exeName,
        cmdLine: e.cmdLine,
        distributor: e.distributor,
        sku: e.sku,
        pid: e.pid,
        pidPath: e.pidPath ?? [],
        gameMetadata: e.gameMetadata,
        windowHandle: e.windowHandle ?? null,
        fullscreenType: e.fullscreenType ?? A.aI.UNKNOWN,
        isLauncher: e.isLauncher ?? !1,
        executableFingerprint: e.executableFingerprint,
    };
}
function K(e) {
    if ((0, f.isDesktop)())
        try {
            $.sendIPC(e);
        } catch (e) {}
}
let $ = {
        requireModule(e) {
            if (D && v.hasOwnProperty(e) && null != v[e]) return v[e];
            let t = g.nativeModules.requireModule(e);
            return D && (v[e] = t), t;
        },
        ensureModule: (e) =>
            f.isPlatformEmbedded
                ? __OVERLAY__ && b.has(e)
                    ? Promise.resolve()
                    : g.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return g.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => g.crashReporter.getMetadata(),
        getSetting: async (e, t) => await g.settings.get(e, t),
        beforeUnload() {
            let e;
            try {
                e = this.requireModule("discord_overlay2");
            } catch (e) {}
            e && e.reset && e.reset(),
                e &&
                    e.disconnectAllProcesses &&
                    e.destroyHostProcess &&
                    (e.disconnectAllProcesses(), e.destroyHostProcess()),
                g.powerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== E.w.get(o.qx) &&
                    this.supportsFeature(T.BYE.USER_DATA_CACHE) &&
                    g.userDataCache.cacheUserData(E.w.stringify());
        },
        inputEventRegister(e, t, n, i) {
            this.getDiscordUtils().inputEventRegister(
                parseInt(`${e}`),
                t.map((e) => {
                    let [t, n, i] = e;
                    return "string" == typeof i ? [t, n, i] : [t, n];
                }),
                n,
                i,
            );
        },
        inputEventUnregister(e) {
            this.getDiscordUtils().inputEventUnregister(parseInt(e));
        },
        setOnInputEventCallback(e) {
            f.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t, n, i) {
            try {
                y = {};
                let a = 0,
                    s = this.getDiscordUtils(),
                    l = e.map((e) => {
                        let t = ++a;
                        return null != e.id && (y[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = y;
                function r(e) {
                    return n(e.map((e) => Y(e, o)));
                }
                null != i && null != s.setProcessObserverUserId && s.setProcessObserverUserId(i),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(l, r)
                        : s.setObservedGamesCallback(l, r);
            } catch (e) {}
        },
        setProcessObserverCollectExecutableFingerprint(e) {
            this.getDiscordUtils().setProcessObserverCollectExecutableFingerprint?.(e);
        },
        getExecutableFingerprintForProcess(e) {
            return new Promise((t) => {
                let n = this.getDiscordUtils()?.getExecutableFingerprintForProcess;
                null != n ? n(e, (e) => t(null != e && "" !== e ? e : null)) : t(null);
            });
        },
        setGameDetectionCallback(e) {
            this.getDiscordUtils().setGameDetectionCallback?.((t, n) =>
                e(
                    t.map((e) => Y(e)),
                    n.map((e) => Y(e)),
                ),
            );
        },
        setGameDetectionErrorCallback(e) {
            this.getDiscordUtils().setGameDetectionErrorCallback?.(e);
        },
        setRobloxSubgameDetectionConfig(e, t) {
            this.getDiscordUtils().setRobloxSubgameDetectionConfig?.(e, t);
        },
        checkForRobloxSubgameUpdate() {
            this.getDiscordUtils().checkForRobloxSubgameUpdate?.();
        },
        setCandidateGamesCallback(e) {
            this.getDiscordUtils().setCandidateGamesCallback((t) => {
                e(t.map((e) => Y(e)));
            });
        },
        clearCandidateGamesCallback() {
            this.getDiscordUtils().clearCandidateGamesCallback();
        },
        setGameCandidateOverrides(e) {
            this.getDiscordUtils().setGameCandidateOverrides(e.map((e) => ({ ...e, gameId: e.id, gameName: e.name })));
        },
        setObserverDebugCallback(e, t, n) {
            this.getDiscordUtils().setObserverDebugCallback((t) => e(t), t, n);
        },
        clearObserverDebugCallback() {
            this.getDiscordUtils().setObserverDebugCallback(null, h.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                M ||
                    (0, _.si)((t, n, i) => {
                        e.consoleLog(n, `[${t}] ${i}`);
                    }),
                (M = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!M)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            return !!(0, f.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
        },
        getDiscordIsElevated() {
            return (0, f.isWindows)() && null != this.getDiscordUtils().getDiscordIsElevated
                ? (null === P && (P = this.getDiscordUtils().getDiscordIsElevated()), P)
                : null;
        },
        getGameUtils() {
            return this.requireModule("discord_game_utils");
        },
        getCloudSync() {
            return this.requireModule("discord_cloudsync");
        },
        getDispatch() {
            return this.requireModule("discord_dispatch");
        },
        setBadge(e) {
            if ("darwin" === (0, f.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "\u2022") : e > 0 && (t = `${e}`), g.app.dock.setBadge(t);
            } else
                "win32" === (0, f.getPlatformName)()
                    ? this.sendIPC(c.APP_BADGE_SET, e)
                    : "linux" === (0, f.getPlatformName)() && g.app.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            f.isPlatformEmbedded && this.sendIPC(c.SYSTEM_TRAY_SET_ICON, e);
        },
        setThumbarButtons(e) {
            f.isPlatformEmbedded && g.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (f.isPlatformEmbedded) {
                let t = g.app;
                if (null != t.dock) {
                    let n = t.dock.bounce(e);
                    return async () => {
                        let e = await n;
                        t.dock.cancelBounce(e);
                    };
                }
            }
        },
        setSystemTrayApplications(e) {
            f.isPlatformEmbedded && this.sendIPC(c.SYSTEM_TRAY_SET_APPLICATIONS, e);
        },
        get architecture() {
            return f.isPlatformEmbedded ? g.process.arch : "";
        },
        get releaseChannel() {
            if (!f.isPlatformEmbedded) return "";
            return g.app.getReleaseChannel();
        },
        get version() {
            return R;
        },
        get buildNumber() {
            return O;
        },
        get moduleVersions() {
            return L;
        },
        get parsedOSRelease() {
            if (!f.isPlatformEmbedded) return [];
            return g.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            f.isPlatformEmbedded && g.clipboard.copy(e);
        },
        async copyImage(e, t) {
            l()(f.isPlatformEmbedded, "Copy image method called outside native app"),
                l()("function" == typeof g.clipboard.copyImage, "Copy image not supported");
            let n = await H(e),
                i = (0, I.U)(e, t);
            if (null != i && N.has(i)) {
                (n = await j(n, t ?? `image/${i}`)), g.clipboard.copyImage(m.from(n), "image.png");
                return;
            }
            let r = null != i && S.has(i) ? `image.${i}` : e;
            g.clipboard.copyImage(m.from(n), r);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            g.clipboard.copyImage(m.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !f.isPlatformEmbedded) return !1;
            let n = (0, I.U)(e, t);
            return null == n || C.has(n);
        },
        async saveImage(e, t, n) {
            let i, r;
            l()(f.isPlatformEmbedded, "Save image method called outside native app");
            let a = p.A.toURLSafe(e);
            if (null == a) return "errored";
            let s = a.pathname.split("/").pop() ?? "unknown";
            s = B(s);
            let o = a.searchParams.get("format");
            if (null != o) {
                let e = o.replace(k, "").toLowerCase();
                if (e.length > 0) {
                    let t = s.replace(F, "");
                    s = `${t}.${e}`;
                }
            } else if (!s.includes(".")) {
                let i = (0, I.U)(e, t) ?? n ?? "png";
                s = `${s}.${i}`;
            }
            let d = await H(e),
                c = m.from(d),
                u = E.w.get(U);
            if (("string" != typeof u && (u = void 0), "function" == typeof g.fileManager.saveWithDialog2)) {
                if (null == (i = await g.fileManager.saveWithDialog2(c, s, u ?? void 0))) return "errored";
                if (i.canceledByUser) return "canceled";
                r = i.directory;
            } else
                try {
                    r = await g.fileManager.saveWithDialog(c, s, u ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == r || "" === r ? "errored" : (E.w.set(U, r), "saved");
        },
        async saveFile(e, t) {
            l()(f.isPlatformEmbedded, "Save file method called outside native app");
            let n = p.A.toURLSafe(e);
            if (null == n) return null;
            let i = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (i = B(i));
            let r = await H(e),
                a = m.from(r),
                s = await g.fileManager.saveWithDialog(a, i, void 0);
            return null == s ? null : s;
        },
        async downloadMLModelFile(e, t, n) {
            l()(f.isPlatformEmbedded, "Download ML model file method called outside native app");
            let i = p.A.toURLSafe(e);
            return (
                l()(null != i, "Could not download ML model, fileSrc was not a valid path"),
                await g.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            g.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof g.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await g.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await g.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadClipsFile(e, t, n) {
            l()(f.isPlatformEmbedded, "Download clips file method called outside native app");
            let i = p.A.toURLSafe(e);
            return (
                l()(null != i, "Could not download clips file, fileSrc was not a valid path"),
                await g.fileManager.maybeDownloadClipsFile(e, t, n)
            );
        },
        canCheckClipsFilesExist: () => "function" == typeof g.fileManager.checkClipsFilesExist,
        checkClipsFilesExist: async (e) => await g.fileManager.checkClipsFilesExist(e),
        cleanupUnusedClipsFiles: async (e) => await g.fileManager.cleanupUnusedClipsFiles(e),
        getClipsDataDirSync: () => g.fileManager.getClipsDataDirSync(),
        getClipsSentryDirSync() {
            if (null != g.fileManager.getClipsSentryDirSync) return g.fileManager.getClipsSentryDirSync();
        },
        async downloadOpenH264(e, t, n, i) {
            l()(f.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let r = p.A.toURLSafe(e);
            return (
                l()(null != r, "Could not download OpenH264, fileSrc was not a valid path"),
                await g.fileManager.maybeDownloadOpenH264(e, t, n, i)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await g.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (f.isPlatformEmbedded) return g.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!f.isPlatformEmbedded || "function" != typeof g.clipboard.copyImage) return !1;
            if (null != e) {
                let t = (0, I.U)(e, void 0);
                if (null != t && !S.has(t) && !N.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            f.isPlatformEmbedded && g.clipboard.cut();
        },
        paste() {
            f.isPlatformEmbedded && g.clipboard.paste();
        },
        readClipboard: () => (f.isPlatformEmbedded ? g.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!f.isPlatformEmbedded && (g.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            g.ipc.on(e, t);
        },
        onIPC(e, t) {
            g.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return g.ipc.invoke(e, ...n);
        },
        invokeIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return g.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            g.ipc.send(e, ...n);
        },
        sendIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            g.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!f.isPlatformEmbedded) return !0;
            try {
                return g?.ipc != null && "function" == typeof g.ipc.send;
            } catch {
                return !1;
            }
        },
        async waitForIPCReady() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5e3,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window,
                n = Date.now();
            for (; Date.now() - n < e; ) {
                if (this.isIPCReady()) return !0;
                await new Promise((e) => t.requestAnimationFrame(e));
            }
            return !1;
        },
        flashFrame(e) {
            g.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await g.nativeModules.ensureModule("discord_webauthn"), await g.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await g.nativeModules.ensureModule("discord_webauthn"), await g.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            g.window.minimize(e);
        },
        restore(e) {
            g.window.restore(e);
        },
        maximize(e) {
            g.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, f.isWindows)() && this.minimize(null), g.window.focus(t, e);
        },
        blur() {
            f.isPlatformEmbedded && null != g.window.blur ? g.window.blur() : window.blur();
        },
        fullscreen(e) {
            g.window.fullscreen(e);
        },
        close(e) {
            g.window.close(e);
        },
        clearNavigationHistory() {
            K(c.NAVIGATION_HISTORY_CLEAR);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof g.window.setAlwaysOnTop && g.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof g.window.isAlwaysOnTop && (t = await g.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof g?.window?.showInactive && g.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            g?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (f.isPlatformEmbedded && "darwin" === (0, f.getPlatformName)())
                try {
                    this.sendIPC(c.WINDOW_SET_TRAFFIC_LIGHT_POSITION, e);
                } catch (e) {}
        },
        purgeMemory() {
            f.isPlatformEmbedded && g.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            g.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            g.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            f.isPlatformEmbedded && g.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => g.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !f.isPlatformEmbedded || (!__OVERLAY__ && g.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            g.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setOpenH264Enabled(e) {
            g?.settings?.set?.("openH264Enabled", e);
        },
        setChromiumSwitches(e) {
            g.gpuSettings.setChromiumSwitches(e);
        },
        getOpenOnStart: async () => (await g.app.getOpenOnStart?.()) ?? (await g.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, f.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!f.isPlatformEmbedded && (g.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != g.window.setBackgroundThrottling
                ? g.window.setBackgroundThrottling(e)
                : g.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof g.window.setFocusable && g.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            g.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            g.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => g.app.getPreferredSystemLanguages?.(),
        getSystemUIDirection: () => g.app.getSystemUIDirection?.(),
        getPidFromDesktopSource(e) {
            if (!(0, f.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
            let t = e?.split(":"),
                n = t?.[0];
            if ("window" === n) {
                let e = t?.[1] ?? "",
                    n = this.getDiscordUtils().getPidFromWindowHandle(e);
                return null == n || 0 === n ? null : n;
            }
            return n.startsWith("screen") ? 1 : "prepicked" === n ? 1 : null;
        },
        getDesktopSourceFromPid(e) {
            if (!(0, f.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
            let t = this.getDiscordUtils().getWindowHandleFromPid(e);
            return null == t || 0 === t.length ? null : ["window", t, "0"].join(":");
        },
        generateSessionFromPid(e) {
            return this.getDiscordUtils().generateSessionFromPid(e);
        },
        getAudioPid(e) {
            return null == this.getDiscordUtils().getAudioPid || null == e ? e : this.getDiscordUtils().getAudioPid(e);
        },
        setForegroundProcess(e) {
            let { setForegroundProcess: t } = this.getDiscordUtils();
            try {
                return null != t && t(e);
            } catch (e) {
                return !1;
            }
        },
        getDiscordMemoryUsage() {
            let { getDiscordMemoryUsage: e } = this.getDiscordUtils();
            return null != e ? e() : null;
        },
        getDiscordMemoryUsageElectronRenderer() {
            let { getDiscordMemoryUsageElectronRenderer: e } = this.getDiscordUtils();
            return e?.();
        },
        getDiscordMemoryPrivateUsageElectronRenderer() {
            let { getDiscordMemoryPrivUsageElectronRenderer: e } = this.getDiscordUtils();
            return e?.();
        },
        getDiscordMemoryUsageElectronProcessTypeDetails() {
            let { getDiscordMemoryUsageElectronProcessTypeDetails: e } = this.getDiscordUtils();
            return e?.();
        },
        enablePerfMemoryHooks(e) {
            let { enablePerfMemoryHooks: t } = this.getDiscordUtils();
            return t?.(e);
        },
        disablePerfMemoryHooks() {
            let { disablePerfMemoryHooks: e } = this.getDiscordUtils();
            return e?.();
        },
        getPerfAttributedMemory() {
            let { getPerfAttributedMemory: e } = this.getDiscordUtils();
            return e?.();
        },
        getPerfAttributedMemoryCallstacks(e) {
            let { getPerfAttributedMemoryCallstacks: t } = this.getDiscordUtils();
            return t?.(e);
        },
        getPerfAttributedMemoryStats() {
            let { getPerfAttributedMemoryStats: e } = this.getDiscordUtils();
            return e?.();
        },
        startCPUProfiling(e) {
            let { startCPUProfiling: t } = this.getDiscordUtils();
            return t?.(e);
        },
        async stopCPUProfiling() {
            let { stopCPUProfiling: e } = this.getDiscordUtils(),
                t = await e?.();
            return null == t ? Promise.reject(Error("Failed to stop CPU profiling")) : JSON.parse(t);
        },
        gzipAndBase64Encode(e) {
            let { gzipAndBase64Encode: t } = this.getDiscordUtils();
            return t?.(e) ?? Promise.resolve(null);
        },
        showOpenDialog: (e) => g.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != g.processUtils.flushStorageData
                          ? g.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != g.processUtils.flushCookies
                          ? g.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            f.isPlatformEmbedded &&
                g?.processUtils?.setCrashInformation != null &&
                g.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            f.isPlatformEmbedded && null != g.powerSaveBlocker ? g.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            f.isPlatformEmbedded && null != g.powerSaveBlocker && g.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            f.isPlatformEmbedded && null != g.powerSaveBlocker && g.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            f.isPlatformEmbedded && g.app.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let i = `${(0, u.TP)()}${e}`;
            if (!f.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == g.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: r,
                    maxBps: a,
                    token: s,
                    chunkInterval: l,
                    contentType: o,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                d = t;
            "application/json" === o && (d = JSON.stringify(t));
            let c = (l / 1e3) * a,
                _ = Math.ceil(d.length / c),
                E = Array(_);
            for (let e = 0; e < _; e++) {
                let t = e * c;
                E[e] = d.substring(t, t + c);
            }
            return new Promise((e, t) => {
                null != g.http &&
                    g.http.makeChunkedRequest(
                        i,
                        E,
                        { method: r, chunkInterval: l, contentType: o, token: s },
                        (n, i) => (null != n ? t(n) : i.status >= 400 ? t(Error(i.body)) : void e(i)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, f.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = g.app.getReleaseChannel(),
                i = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...i, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            this.sendIPC(c.SETTINGS_UPDATE_BACKGROUND_COLOR, e);
        },
        initializeExitHook() {
            let { initializeExitHook: e } = this.getDiscordUtils();
            null != e && e();
        },
        initializeWERHandler() {
            let { initializeWERHandler: e } = this.getDiscordUtils();
            null != e && e();
        },
        pollQueueMetrics(e) {
            let { pollQueueMetrics: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        asyncify: (e) =>
            new Promise((t, n) => {
                e(t);
            }),
        IsGameDisplayModeUpdateSupported() {
            let { gameDisplayModeUpdate: e } = this.getDiscordUtils();
            return null != e;
        },
        GameDisplayModeUpdate(e) {
            let { gameDisplayModeUpdate: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GameDisplayModeIsGameSupported(e) {
            let { gameDisplayModeIsSupported: t } = this.getDiscordUtils();
            return null != t && null != e && t(e);
        },
        GetWindowFullscreenTypeByPid(e, t, n) {
            let { getWindowFullscreenTypeByPid: i } = this.getDiscordUtils(),
                r = 0 !== e && null != i && null != t ? i(e, t) : null;
            return -1 === r && (r = null), r ?? n ?? A.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: A.YL.QUNS_UNKNOWN } : n(e, t);
        },
        SetGPUBoostEnabledByPid(e, t) {
            let { setGPUBoostEnabledByPid: n } = this.getDiscordUtils();
            return null != n && n(e, t);
        },
        SetSystemServicePerformanceMonitorEnabled(e, t) {
            let { setSystemServicePerformanceMonitorEnabled: n } = this.getDiscordUtils();
            return null != n && n(e, t);
        },
        GetSystemServicePerformanceMonitorSnapshot(e) {
            let t,
                { getSystemServicePerformanceMonitorSnapshot: n } = this.getDiscordUtils();
            if (null == n) return Promise.reject(new d.Fh());
            let i = new Promise((e, n) => {
                t = setTimeout(() => n(Error("Timed out waiting for performance snapshot")), 1e3);
            });
            return Promise.race([
                new Promise((t, i) => {
                    n(e, (e) => {
                        if ("null" === e) return void i(Error("Performance snapshot not available"));
                        try {
                            t(JSON.parse(e));
                        } catch (e) {
                            i(
                                Error(
                                    `Invalid performance snapshot JSON: ${e instanceof Error ? e.message : String(e)}`,
                                ),
                            );
                        }
                    });
                }),
                i,
            ]).finally(() => clearTimeout(t));
        },
        IsHardwareAcceleratedGPUSchedulingEnabled() {
            let { isHardwareAcceleratedGPUSchedulingEnabled: e } = this.getDiscordUtils();
            return null != e && e();
        },
        AcquireGlobalLock(e) {
            let { acquireGlobalLock: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        SetServiceChannel(e) {
            let { setServiceChannel: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        IsSystemServiceInstalled() {
            let { isSystemServiceInstalled: e } = this.getDiscordUtils();
            if (null != e) return e();
        },
        CanSystemServiceBeInstalled() {
            let { canSystemServiceBeInstalled: e } = this.getDiscordUtils();
            if (null != e) return e();
        },
        InstallSystemService() {
            let { installSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        DoesSystemServiceHaveUpdate() {
            let { doesSystemServiceHaveUpdate: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        UpdateSystemService() {
            let { updateSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        UninstallSystemService() {
            let { uninstallSystemService: e } = this.getDiscordUtils();
            return null != e ? e() : Promise.reject(Error("System service native not available"));
        },
        InputEventServiceSetStatusCallback(e) {
            let { inputEventServiceSetStatusCallback: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        InputEventServiceSetAllowed(e) {
            let { inputEventServiceSetAllowed: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        ToolServiceSetStatusCallback(e) {
            let { toolServiceSetStatusCallback: t } = this.getDiscordUtils();
            null != t && t(e);
        },
        ToolServiceSetAllowed(e) {
            let { toolServiceSetAllowed: t } = this.getDiscordUtils();
            if (null != t) return t(e);
        },
        isModuleVersionAtLeast(e, t) {
            let n = [...(R ?? [0, 0, 0])];
            n.push(this.moduleVersions?.[e] ?? 0);
            let i = t[this.releaseChannel] ?? t.stable;
            for (let [e, t] of n.entries())
                if (t > i[e]) break;
                else if (t < i[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return f.isPlatformEmbedded
                ? null == g.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : g.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        readCs2GsiToken: (e) =>
            (0, f.isWindows)() ? (g.cs2Gsi?.readCs2GsiToken(e) ?? Promise.resolve(null)) : Promise.resolve(null),
        writeCs2GsiConfig: (e, t, n) =>
            (0, f.isWindows)() ? (g.cs2Gsi?.writeCs2GsiConfig(e, t, n) ?? Promise.resolve(!1)) : Promise.resolve(!1),
        deleteCs2GsiConfig: (e) =>
            (0, f.isWindows)() ? (g.cs2Gsi?.deleteCs2GsiConfig(e) ?? Promise.resolve(!1)) : Promise.resolve(!1),
        debugLogCs2GsiPayload: (e) =>
            (0, f.isWindows)() ? (g.cs2Gsi?.debugLogCs2GsiPayload(e) ?? Promise.resolve()) : Promise.resolve(),
        appViewed() {
            (0, f.isDesktop)() && (performance.mark("app_viewed"), this.sendIPC(c.APP_VIEWED));
        },
        appFirstRenderAfterReadyPayload(e) {
            (0, f.isDesktop)() &&
                (performance.mark("app_first_render_after_ready_payload"),
                this.sendIPC(c.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, e));
        },
        appLoaded() {
            K(c.APP_LOADED);
        },
        indexLoadedAsync() {
            K(c.APP_ASYNC_INDEX_TSX_LOADED);
        },
        setUseRequireModuleCache(e) {
            D = e;
        },
        async GetSystemGpuStats(e) {
            if (!f.isPlatformEmbedded) return [];
            await this.ensureModule("discord_media");
            let t = this.requireModule("discord_media");
            return t?.getGpuStats == null ? [] : t.getGpuStats(e).catch(() => []);
        },
    },
    z = $;
