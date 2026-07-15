"use strict";
n.d(t, { Ay: () => K, UB: () => j, kw: () => B, _0: () => k }), n(321073);
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
        (i.APP_GET_OPEN_ON_START = "DISCORD_APP_GET_OPEN_ON_START"),
        (i.CLIPBOARD_COPY = "DISCORD_CLIPBOARD_COPY"),
        (i.CLIPBOARD_CUT = "DISCORD_CLIPBOARD_CUT"),
        (i.CLIPBOARD_PASTE = "DISCORD_CLIPBOARD_PASTE"),
        (i.LOAD_CLIP = "DISCORD_LOAD_CLIP"),
        (i.LOAD_CLIPS_DIRECTORY = "DISCORD_LOAD_CLIPS_DIRECTORY"),
        (i.DELETE_CLIP = "DISCORD_DELETE_CLIP"),
        (i.MOVE_CLIP = "DISCORD_MOVE_CLIP"),
        (i.UPDATE_CLIP_METADATA = "DISCORD_UPDATE_CLIP_METADATA"),
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
        (i.SPELLCHECK_SET_LEARNED_WORDS = "DISCORD_SPELLCHECK_SET_LEARNED_WORDS"),
        (i.SYSTEM_TRAY_SET_ICON = "DISCORD_SYSTEM_TRAY_SET_ICON"),
        (i.SYSTEM_TRAY_SET_APPLICATIONS = "DISCORD_SYSTEM_TRAY_SET_APPLICATIONS"),
        (i.THUMBAR_BUTTONS_UPDATE = "DISCORD_THUMBAR_BUTTONS_UPDATE"),
        (i.THUMBAR_BUTTONS_CLICKED = "DISCORD_THUMBAR_BUTTONS_CLICKED"),
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
    I = n(723702),
    f = n(998218),
    p = n(652215),
    T = n(264572).Buffer;
let m = window.DiscordNative,
    g = new Set(["jpg", "jpeg", "jfif", "png"]),
    S = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    N = null,
    C = null,
    R = null,
    O = {},
    L = !1,
    D = {};
null != m &&
    ((N = m.app
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (R = m.app.getModuleVersions()),
    (C = m.app.getBuildNumber()));
let y = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    v = !1,
    b = null,
    M = "lastImageSaveDirectory",
    P = /[<>:"/\\|?*@]/g,
    U = /(\.[a-zA-Z0-9]+):[^.]*$/,
    w = /(\.[a-zA-Z0-9]+)%3A.+$/,
    G = /[^a-zA-Z0-9]/g,
    x = /\.[^.]*$/;
var k = (((r = {}).SAVED = "saved"), (r.CANCELED = "canceled"), (r.ERRORED = "errored"), r);
function F(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(U, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(P, "_");
    } catch {
        return e
            .replace(w, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(P, "_");
    }
}
async function V(e) {
    let t = await fetch(new Request(e, { method: "GET", mode: "cors" }));
    l()(200 === t.status, "Data fetch unsuccessful");
    let n = await t.arrayBuffer();
    return l()(null != n, "Data is null"), n;
}
var B =
    (((a = {})[(a.Camera = 0)] = "Camera"),
    (a[(a.Microphone = 1)] = "Microphone"),
    (a[(a.Photo = 2)] = "Photo"),
    (a[(a.InputMonitoring = 3)] = "InputMonitoring"),
    (a[(a.ScreenRecording = 4)] = "ScreenRecording"),
    a);
function H(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : O;
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
function j(e, t) {
    if (null != t && t.startsWith("image/")) {
        let e = t.split("/")[1]?.toLowerCase();
        if ("jpeg" === e) return "jpg";
        if (null != e) return e;
    }
    let n = f.A.toURLSafe(e);
    if (null == n) return;
    let i = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != i && i.length <= 5 ? i : void 0;
}
function W(e) {
    if ((0, I.isDesktop)())
        try {
            Y.sendIPC(e);
        } catch (e) {}
}
let Y = {
        requireModule(e) {
            if (L && D.hasOwnProperty(e) && null != D[e]) return D[e];
            let t = m.nativeModules.requireModule(e);
            return L && (D[e] = t), t;
        },
        ensureModule: (e) =>
            I.isPlatformEmbedded
                ? __OVERLAY__ && y.has(e)
                    ? Promise.resolve()
                    : m.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return m.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => m.crashReporter.getMetadata(),
        getSetting: async (e, t) => await m.settings.get(e, t),
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
                m.powerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== E.w.get(o.qx) &&
                    this.supportsFeature(p.BYE.USER_DATA_CACHE) &&
                    m.userDataCache.cacheUserData(E.w.stringify());
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
            I.isPlatformEmbedded && this.getDiscordUtils().inputWatchAll(e);
        },
        setFocused(e) {
            this.getDiscordUtils().inputSetFocused(e);
        },
        setObservedGamesCallback(e, t, n, i) {
            try {
                O = {};
                let a = 0,
                    s = this.getDiscordUtils(),
                    l = e.map((e) => {
                        let t = ++a;
                        return null != e.id && (O[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = O;
                function r(e) {
                    return n(e.map((e) => H(e, o)));
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
                    t.map((e) => H(e)),
                    n.map((e) => H(e)),
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
                e(t.map((e) => H(e)));
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
                v ||
                    (0, _.si)((t, n, i) => {
                        e.consoleLog(n, `[${t}] ${i}`);
                    }),
                (v = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!v)
                try {
                    this.getVoiceEngine();
                } catch (e) {}
            return this.requireModule("discord_utils");
        },
        isSystemDarkMode() {
            return !!(0, I.isWindows)() && (this.getDiscordUtils().isSystemDarkMode?.() ?? !0);
        },
        getDiscordIsElevated() {
            return (0, I.isWindows)() && null != this.getDiscordUtils().getDiscordIsElevated
                ? (null === b && (b = this.getDiscordUtils().getDiscordIsElevated()), b)
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
            if ("darwin" === (0, I.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "\u2022") : e > 0 && (t = `${e}`), m.app.dock.setBadge(t);
            } else
                "win32" === (0, I.getPlatformName)()
                    ? this.sendIPC(c.APP_BADGE_SET, e)
                    : "linux" === (0, I.getPlatformName)() && m.app.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            I.isPlatformEmbedded && this.sendIPC(c.SYSTEM_TRAY_SET_ICON, e);
        },
        setThumbarButtons(e) {
            I.isPlatformEmbedded && m.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (I.isPlatformEmbedded) {
                let t = m.app;
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
            I.isPlatformEmbedded && this.sendIPC(c.SYSTEM_TRAY_SET_APPLICATIONS, e);
        },
        get architecture() {
            return I.isPlatformEmbedded ? m.process.arch : "";
        },
        get releaseChannel() {
            if (!I.isPlatformEmbedded) return "";
            return m.app.getReleaseChannel();
        },
        get version() {
            return N;
        },
        get buildNumber() {
            return C;
        },
        get moduleVersions() {
            return R;
        },
        get parsedOSRelease() {
            if (!I.isPlatformEmbedded) return [];
            return m.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            I.isPlatformEmbedded && m.clipboard.copy(e);
        },
        async copyImage(e, t) {
            l()(I.isPlatformEmbedded, "Copy image method called outside native app"),
                l()("function" == typeof m.clipboard.copyImage, "Copy image not supported");
            let n = await V(e),
                i = j(e, t),
                r = null != i && g.has(i) ? `image.${i}` : e;
            m.clipboard.copyImage(T.from(n), r);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            m.clipboard.copyImage(T.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !I.isPlatformEmbedded) return !1;
            let n = j(e, t);
            return null == n || S.has(n);
        },
        async saveImage(e, t, n) {
            let i, r;
            l()(I.isPlatformEmbedded, "Save image method called outside native app");
            let a = f.A.toURLSafe(e);
            if (null == a) return "errored";
            let s = a.pathname.split("/").pop() ?? "unknown";
            s = F(s);
            let o = a.searchParams.get("format");
            if (null != o) {
                let e = o.replace(G, "").toLowerCase();
                if (e.length > 0) {
                    let t = s.replace(x, "");
                    s = `${t}.${e}`;
                }
            } else if (!s.includes(".")) {
                let i = j(e, t) ?? n ?? "png";
                s = `${s}.${i}`;
            }
            let d = await V(e),
                c = T.from(d),
                u = E.w.get(M);
            if (("string" != typeof u && (u = void 0), "function" == typeof m.fileManager.saveWithDialog2)) {
                if (null == (i = await m.fileManager.saveWithDialog2(c, s, u ?? void 0))) return "errored";
                if (i.canceledByUser) return "canceled";
                r = i.directory;
            } else
                try {
                    r = await m.fileManager.saveWithDialog(c, s, u ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == r || "" === r ? "errored" : (E.w.set(M, r), "saved");
        },
        async saveFile(e, t) {
            l()(I.isPlatformEmbedded, "Save file method called outside native app");
            let n = f.A.toURLSafe(e);
            if (null == n) return null;
            let i = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (i = F(i));
            let r = await V(e),
                a = T.from(r),
                s = await m.fileManager.saveWithDialog(a, i, void 0);
            return null == s ? null : s;
        },
        async downloadMLModelFile(e, t, n) {
            l()(I.isPlatformEmbedded, "Download ML model file method called outside native app");
            let i = f.A.toURLSafe(e);
            return (
                l()(i, "Could not download ML model, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            m.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof m.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await m.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await m.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadClipsFile(e, t, n) {
            l()(I.isPlatformEmbedded, "Download clips file method called outside native app");
            let i = f.A.toURLSafe(e);
            return (
                l()(i, "Could not download clips file, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadClipsFile(e, t, n)
            );
        },
        canCheckClipsFilesExist: () => "function" == typeof m.fileManager.checkClipsFilesExist,
        checkClipsFilesExist: async (e) => await m.fileManager.checkClipsFilesExist(e),
        cleanupUnusedClipsFiles: async (e) => await m.fileManager.cleanupUnusedClipsFiles(e),
        getClipsDataDirSync: () => m.fileManager.getClipsDataDirSync(),
        getClipsSentryDirSync() {
            if (null != m.fileManager.getClipsSentryDirSync) return m.fileManager.getClipsSentryDirSync();
        },
        async downloadOpenH264(e, t, n, i) {
            l()(I.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let r = f.A.toURLSafe(e);
            return (
                l()(r, "Could not download OpenH264, fileSrc was not a valid path"),
                await m.fileManager.maybeDownloadOpenH264(e, t, n, i)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await m.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (I.isPlatformEmbedded) return m.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!I.isPlatformEmbedded || "function" != typeof m.clipboard.copyImage) return !1;
            if (null != e) {
                let t = j(e, void 0);
                if (null != t && !g.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            I.isPlatformEmbedded && m.clipboard.cut();
        },
        paste() {
            I.isPlatformEmbedded && m.clipboard.paste();
        },
        readClipboard: () => (I.isPlatformEmbedded ? m.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!I.isPlatformEmbedded && (m.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            m.ipc.on(e, t);
        },
        onIPC(e, t) {
            m.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return m.ipc.invoke(e, ...n);
        },
        invokeIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return m.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            m.ipc.send(e, ...n);
        },
        sendIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            m.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!I.isPlatformEmbedded) return !0;
            try {
                return m?.ipc != null && "function" == typeof m.ipc.send;
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
            m.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await m.nativeModules.ensureModule("discord_webauthn"), await m.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await m.nativeModules.ensureModule("discord_webauthn"), await m.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            m.window.minimize(e);
        },
        restore(e) {
            m.window.restore(e);
        },
        maximize(e) {
            m.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, I.isWindows)() && this.minimize(null), m.window.focus(t, e);
        },
        blur() {
            I.isPlatformEmbedded && null != m.window.blur ? m.window.blur() : window.blur();
        },
        fullscreen(e) {
            m.window.fullscreen(e);
        },
        close(e) {
            m.window.close(e);
        },
        clearNavigationHistory() {
            W(c.NAVIGATION_HISTORY_CLEAR);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof m.window.setAlwaysOnTop && m.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof m.window.isAlwaysOnTop && (t = await m.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof m?.window?.showInactive && m.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            m?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (I.isPlatformEmbedded && "darwin" === (0, I.getPlatformName)())
                try {
                    this.sendIPC(c.WINDOW_SET_TRAFFIC_LIGHT_POSITION, e);
                } catch (e) {}
        },
        purgeMemory() {
            I.isPlatformEmbedded && m.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            m.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            m.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            I.isPlatformEmbedded && m.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => m.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !I.isPlatformEmbedded || (!__OVERLAY__ && m.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            m.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setOpenH264Enabled(e) {
            m?.settings?.set?.("openH264Enabled", e);
        },
        setChromiumSwitches(e) {
            m.gpuSettings.setChromiumSwitches(e);
        },
        getOpenOnStart: async () => (await m.app.getOpenOnStart?.()) ?? (await m.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, I.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!I.isPlatformEmbedded && (m.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != m.window.setBackgroundThrottling
                ? m.window.setBackgroundThrottling(e)
                : m.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof m.window.setFocusable && m.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            m.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            m.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => m.app.getPreferredSystemLanguages?.(),
        getPidFromDesktopSource(e) {
            if (!(0, I.isDesktop)() || null == this.getDiscordUtils().getPidFromWindowHandle) return null;
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
            if (!(0, I.isWindows)() || null == this.getDiscordUtils().getWindowHandleFromPid || null == e) return null;
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
        showOpenDialog: (e) => m.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            I.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != m.processUtils.flushStorageData
                          ? m.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            I.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != m.processUtils.flushCookies
                          ? m.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            I.isPlatformEmbedded &&
                m?.processUtils?.setCrashInformation != null &&
                m.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            I.isPlatformEmbedded && null != m.powerSaveBlocker ? m.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            I.isPlatformEmbedded && null != m.powerSaveBlocker && m.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            I.isPlatformEmbedded && null != m.powerSaveBlocker && m.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            I.isPlatformEmbedded && m.app.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let i = `${(0, u.TP)()}${e}`;
            if (!I.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == m.http) return Promise.reject(Error("HTTP module not available"));
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
                null != m.http &&
                    m.http.makeChunkedRequest(
                        i,
                        E,
                        { method: r, chunkInterval: l, contentType: o, token: s },
                        (n, i) => (null != n ? t(n) : i.status >= 400 ? t(Error(i.body)) : void e(i)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, I.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = m.app.getReleaseChannel(),
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
            let n = [...(N ?? [0, 0, 0])];
            n.push(this.moduleVersions?.[e] ?? 0);
            let i = t[this.releaseChannel] ?? t.stable;
            for (let [e, t] of n.entries())
                if (t > i[e]) break;
                else if (t < i[e]) return !1;
            return !0;
        },
        fetchRiotGamesLiveClientData(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return I.isPlatformEmbedded
                ? null == m.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : m.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, I.isDesktop)() && (performance.mark("app_viewed"), this.sendIPC(c.APP_VIEWED));
        },
        appFirstRenderAfterReadyPayload(e) {
            (0, I.isDesktop)() &&
                (performance.mark("app_first_render_after_ready_payload"),
                this.sendIPC(c.APP_FIRST_RENDER_AFTER_READY_PAYLOAD, e));
        },
        appLoaded() {
            W(c.APP_LOADED);
        },
        indexLoadedAsync() {
            W(c.APP_ASYNC_INDEX_TSX_LOADED);
        },
        setUseRequireModuleCache(e) {
            L = e;
        },
        async GetSystemGpuStats(e) {
            if (!I.isPlatformEmbedded) return [];
            await this.ensureModule("discord_media");
            let t = this.requireModule("discord_media");
            return t?.getGpuStats == null ? [] : t.getGpuStats(e).catch(() => []);
        },
    },
    K = Y;
