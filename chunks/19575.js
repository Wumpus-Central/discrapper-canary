"use strict";
n.d(t, { Ay: () => K, UB: () => j, kw: () => B, _0: () => G }), n(321073);
var i,
    r,
    s,
    a = n(284009),
    o = n.n(a),
    l = n(279194),
    d = n(141931),
    _ =
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
        (i.GPU_SETTINGS_SET_ENABLE_HWACCEL = "DISCORD_GPU_SETTINGS_SET_ENABLE_HWACCEL"),
        (i.GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC = "DISCORD_GPU_SETTINGS_GET_ENABLE_HWACCEL_SYNC"),
        (i.GPU_SETTINGS_SET_CHROMIUM_SWITCHES = "DISCORD_GPU_SETTINGS_SET_CHROMIUM_SWITCHES"),
        (i.GPU_SETTINGS_SET_SETTING = "DISCORD_GPU_SETTINGS_SET_SETTING"),
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
    c = n(118356),
    E = n(506774),
    h = n(56562),
    m = n(223273),
    f = n(723702),
    g = n(998218),
    p = n(652215),
    A = n(264572).Buffer;
let I = window.DiscordNative,
    T = new Set(["jpg", "jpeg", "jfif", "png"]),
    S = new Set(["jpg", "jpeg", "jfif", "png", "webp", "gif", "tiff", "bmp", "avif"]),
    N = null,
    C = null,
    R = null,
    O = {},
    y = !1,
    v = {};
null != I &&
    ((N = I.app
        .getVersion()
        .split(".")
        .map((e) => parseInt(e))),
    (R = I.app.getModuleVersions()),
    (C = I.app.getBuildNumber()));
let D = new Set([
        "discord_erlpack",
        "discord_game_utils",
        "discord_rpc",
        "discord_spellcheck",
        "discord_utils",
        "discord_voice",
    ]),
    L = !1,
    b = null,
    w = "lastImageSaveDirectory",
    P = /[<>:"/\\|?*@]/g,
    k = /(\.[a-zA-Z0-9]+):[^.]*$/,
    M = /(\.[a-zA-Z0-9]+)%3A.+$/,
    U = /[^a-zA-Z0-9]/g,
    x = /\.[^.]*$/;
var G = (((r = {}).SAVED = "saved"), (r.CANCELED = "canceled"), (r.ERRORED = "errored"), r);
function V(e) {
    try {
        let t = decodeURIComponent(e);
        return (t = (t = t.replace(k, "$1")).replace(/(.+)@([a-zA-Z0-9]+)$/, "$1.$2")).replace(P, "_");
    } catch {
        return e
            .replace(M, "$1")
            .replace(/(.+)%40([a-zA-Z0-9]+)$/, "$1.$2")
            .replace(P, "_");
    }
}
async function F(e) {
    let t = await fetch(new Request(e, { method: "GET", mode: "cors" }));
    o()(200 === t.status, "Data fetch unsuccessful");
    let n = await t.arrayBuffer();
    return o()(null != n, "Data is null"), n;
}
var B =
    (((s = {})[(s.Camera = 0)] = "Camera"),
    (s[(s.Microphone = 1)] = "Microphone"),
    (s[(s.Photo = 2)] = "Photo"),
    (s[(s.InputMonitoring = 3)] = "InputMonitoring"),
    (s[(s.ScreenRecording = 4)] = "ScreenRecording"),
    s);
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
        fullscreenType: e.fullscreenType ?? h.aI.UNKNOWN,
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
    let n = g.A.toURLSafe(e);
    if (null == n) return;
    let i = n.pathname?.split(".")?.pop()?.toLowerCase();
    return null != i && i.length <= 5 ? i : void 0;
}
function W(e) {
    if ((0, f.isDesktop)())
        try {
            Y.sendIPC(e);
        } catch (e) {}
}
let Y = {
        requireModule(e) {
            if (y && v.hasOwnProperty(e) && null != v[e]) return v[e];
            let t = I.nativeModules.requireModule(e);
            return y && (v[e] = t), t;
        },
        ensureModule: (e) =>
            f.isPlatformEmbedded
                ? __OVERLAY__ && D.has(e)
                    ? Promise.resolve()
                    : I.nativeModules.ensureModule(e)
                : Promise.reject(Error("not embedded")),
        get canBootstrapNewUpdater() {
            return I.nativeModules.canBootstrapNewUpdater || !1;
        },
        getCrashReporterMetadata: () => I.crashReporter.getMetadata(),
        getSetting: async (e, t) => await I.settings.get(e, t),
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
                I.powerMonitor.removeAllListeners(),
                window.location.origin === window.GLOBAL_ENV.MIGRATION_SOURCE_ORIGIN &&
                    !0 !== E.w.get(l.qx) &&
                    this.supportsFeature(p.BYE.USER_DATA_CACHE) &&
                    I.userDataCache.cacheUserData(E.w.stringify());
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
                O = {};
                let r = 0,
                    s = this.getDiscordUtils(),
                    a = e.map((e) => {
                        let t = ++r;
                        return null != e.id && (O[t] = e.id), { ...e, cmdline: e.cmdLine, id: t };
                    }),
                    o = O,
                    l = (e) => n(e.map((e) => H(e, o)));
                null != i && null != s.setProcessObserverUserId && s.setProcessObserverUserId(i),
                    t && null != s.setObservedGamesCallback2
                        ? s.setObservedGamesCallback2(a, l)
                        : s.setObservedGamesCallback(a, l);
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
            this.getDiscordUtils().setObserverDebugCallback(null, m.Lb.NONE, 0);
        },
        shouldDisplayNotifications() {
            return this.getDiscordUtils().shouldDisplayNotifications();
        },
        getVoiceEngine() {
            if (__OVERLAY__) throw Error("cannot require discord_voice in overlay");
            let e = this.requireModule("discord_voice");
            return (
                L ||
                    (0, c.si)((t, n, i) => {
                        e.consoleLog(n, `[${t}] ${i}`);
                    }),
                (L = !0),
                e
            );
        },
        getDiscordUtils() {
            if (!L)
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
            if ("darwin" === (0, f.getPlatformName)()) {
                let t = "";
                -1 === e ? (t = "•") : e > 0 && (t = `${e}`), I.app.dock.setBadge(t);
            } else
                "win32" === (0, f.getPlatformName)()
                    ? this.sendIPC(_.APP_BADGE_SET, e)
                    : "linux" === (0, f.getPlatformName)() && I.app.setBadgeCount(e >= 0 ? e : 0);
        },
        setSystemTrayIcon(e) {
            f.isPlatformEmbedded && this.sendIPC(_.SYSTEM_TRAY_SET_ICON, e);
        },
        setThumbarButtons(e) {
            f.isPlatformEmbedded && I.thumbar?.setThumbarButtons?.(e, this.isSystemDarkMode());
        },
        bounceDock(e) {
            if (f.isPlatformEmbedded) {
                let t = I.app;
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
            f.isPlatformEmbedded && this.sendIPC(_.SYSTEM_TRAY_SET_APPLICATIONS, e);
        },
        get architecture() {
            return f.isPlatformEmbedded ? I.process.arch : "";
        },
        get releaseChannel() {
            if (!f.isPlatformEmbedded) return "";
            return I.app.getReleaseChannel();
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
            if (!f.isPlatformEmbedded) return [];
            return I.os.release.split(".").map((e) => parseInt(e, 10));
        },
        copy(e) {
            f.isPlatformEmbedded && I.clipboard.copy(e);
        },
        async copyImage(e, t) {
            o()(f.isPlatformEmbedded, "Copy image method called outside native app"),
                o()("function" == typeof I.clipboard.copyImage, "Copy image not supported");
            let n = await F(e),
                i = j(e, t),
                r = null != i && T.has(i) ? `image.${i}` : e;
            I.clipboard.copyImage(A.from(n), r);
        },
        async copyImageBlob(e, t) {
            let n = await e.arrayBuffer();
            I.clipboard.copyImage(A.from(n), t);
        },
        canSaveImage(e, t) {
            if (null == e || !f.isPlatformEmbedded) return !1;
            let n = j(e, t);
            return null == n || S.has(n);
        },
        async saveImage(e, t, n) {
            let i, r;
            o()(f.isPlatformEmbedded, "Save image method called outside native app");
            let s = g.A.toURLSafe(e);
            if (null == s) return "errored";
            let a = s.pathname.split("/").pop() ?? "unknown";
            a = V(a);
            let l = s.searchParams.get("format");
            if (null != l) {
                let e = l.replace(U, "").toLowerCase();
                if (e.length > 0) {
                    let t = a.replace(x, "");
                    a = `${t}.${e}`;
                }
            } else if (!a.includes(".")) {
                let i = j(e, t) ?? n ?? "png";
                a = `${a}.${i}`;
            }
            let d = await F(e),
                _ = A.from(d),
                u = E.w.get(w);
            if (("string" != typeof u && (u = void 0), "function" == typeof I.fileManager.saveWithDialog2)) {
                if (null == (i = await I.fileManager.saveWithDialog2(_, a, u ?? void 0))) return "errored";
                if (i.canceledByUser) return "canceled";
                r = i.directory;
            } else
                try {
                    r = await I.fileManager.saveWithDialog(_, a, u ?? void 0);
                } catch (e) {
                    return "errored";
                }
            return null == r || "" === r ? "errored" : (E.w.set(w, r), "saved");
        },
        async saveFile(e, t) {
            o()(f.isPlatformEmbedded, "Save file method called outside native app");
            let n = g.A.toURLSafe(e);
            if (null == n) return null;
            let i = t ?? n.pathname.split("/").pop() ?? "unknown";
            null == t && (i = V(i));
            let r = await F(e),
                s = A.from(r),
                a = await I.fileManager.saveWithDialog(s, i, void 0);
            return null == a ? null : a;
        },
        async downloadMLModelFile(e, t, n) {
            o()(f.isPlatformEmbedded, "Download ML model file method called outside native app");
            let i = g.A.toURLSafe(e);
            return (
                o()(i, "Could not download ML model, fileSrc was not a valid path"),
                await I.fileManager.maybeDownloadMLModelFile(e, t, n)
            );
        },
        stopMLModelDownloads() {
            I.fileManager.stopMLModelDownloads();
        },
        canCheckMLModelFilesExist: () => "function" == typeof I.fileManager.checkMLModelFilesExist,
        checkMLModelFilesExist: async (e) => await I.fileManager.checkMLModelFilesExist(e),
        cleanupUnusedMLModelFiles: async (e) => await I.fileManager.cleanupUnusedMLModelFiles(e),
        async downloadClipsFile(e, t, n) {
            o()(f.isPlatformEmbedded, "Download clips file method called outside native app");
            let i = g.A.toURLSafe(e);
            return (
                o()(i, "Could not download clips file, fileSrc was not a valid path"),
                await I.fileManager.maybeDownloadClipsFile(e, t, n)
            );
        },
        stopClipsDownloads() {
            I.fileManager.stopClipsDownloads();
        },
        canCheckClipsFilesExist: () => "function" == typeof I.fileManager.checkClipsFilesExist,
        checkClipsFilesExist: async (e) => await I.fileManager.checkClipsFilesExist(e),
        cleanupUnusedClipsFiles: async (e) => await I.fileManager.cleanupUnusedClipsFiles(e),
        getClipsDataDirSync: () => I.fileManager.getClipsDataDirSync(),
        async downloadOpenH264(e, t, n, i) {
            o()(f.isPlatformEmbedded, "Download OpenH264 file method called outside native app");
            let r = g.A.toURLSafe(e);
            return (
                o()(r, "Could not download OpenH264, fileSrc was not a valid path"),
                await I.fileManager.maybeDownloadOpenH264(e, t, n, i)
            );
        },
        cleanupUnusedOpenH264Files: async (e) => await I.fileManager.cleanupUnusedOpenH264Files(e),
        getOpenH264LibraryPath() {
            if (f.isPlatformEmbedded) return I.fileManager.getOpenH264LibraryPathSync?.();
        },
        canCopyImage() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
            if (!f.isPlatformEmbedded || "function" != typeof I.clipboard.copyImage) return !1;
            if (null != e) {
                let t = j(e, void 0);
                if (null != t && !T.has(t)) return !1;
            }
            return !0;
        },
        cut() {
            f.isPlatformEmbedded && I.clipboard.cut();
        },
        paste() {
            f.isPlatformEmbedded && I.clipboard.paste();
        },
        readClipboard: () => (f.isPlatformEmbedded ? I.clipboard.read() : ""),
        clipboardHasMixedContent: () => !!f.isPlatformEmbedded && (I.clipboard.hasMixedContent?.() ?? !1),
        on(e, t) {
            I.ipc.on(e, t);
        },
        onIPC(e, t) {
            I.ipc.on(e, t);
        },
        invoke(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return I.ipc.invoke(e, ...n);
        },
        invokeIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return I.ipc.invoke(e, ...n);
        },
        send(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            I.ipc.send(e, ...n);
        },
        sendIPC(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            I.ipc.send(e, ...n);
        },
        isIPCReady() {
            if (!f.isPlatformEmbedded) return !0;
            try {
                return I?.ipc != null && "function" == typeof I.ipc.send;
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
            I.window.flashFrame(e);
        },
        webAuthnRegister: async (e) => (
            await I.nativeModules.ensureModule("discord_webauthn"), await I.webAuthn.webAuthnRegister(e)
        ),
        webAuthnAuthenticate: async (e) => (
            await I.nativeModules.ensureModule("discord_webauthn"), await I.webAuthn.webAuthnAuthenticate(e)
        ),
        minimize(e) {
            I.window.minimize(e);
        },
        restore(e) {
            I.window.restore(e);
        },
        maximize(e) {
            I.window.maximize(e);
        },
        focus(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            t && (0, f.isWindows)() && this.minimize(null), I.window.focus(t, e);
        },
        blur() {
            f.isPlatformEmbedded && null != I.window.blur ? I.window.blur() : window.blur();
        },
        fullscreen(e) {
            I.window.fullscreen(e);
        },
        close(e) {
            I.window.close(e);
        },
        clearNavigationHistory() {
            W(_.NAVIGATION_HISTORY_CLEAR);
        },
        setAlwaysOnTop(e, t) {
            "function" == typeof I.window.setAlwaysOnTop && I.window.setAlwaysOnTop(e, t);
        },
        async isAlwaysOnTop(e) {
            let t = !1;
            return "function" == typeof I.window.isAlwaysOnTop && (t = await I.window.isAlwaysOnTop(e)), t;
        },
        showInactive(e) {
            "function" == typeof I?.window?.showInactive && I.window.showInactive(e);
        },
        setMinimumSize(e, t) {
            I?.window?.setMinimumSize?.(e, t);
        },
        setTrafficLightPosition(e) {
            if (f.isPlatformEmbedded && "darwin" === (0, f.getPlatformName)())
                try {
                    this.sendIPC(_.WINDOW_SET_TRAFFIC_LIGHT_POSITION, e);
                } catch (e) {}
        },
        purgeMemory() {
            f.isPlatformEmbedded && I.processUtils.purgeMemory();
        },
        updateCrashReporter(e) {
            I.crashReporter.updateCrashReporter(e);
        },
        triggerJSException(e) {
            I.crashReporter.triggerJSException(e);
        },
        flushDNSCache() {
            f.isPlatformEmbedded && I.processUtils.flushDNSCache();
        },
        supportsFeature: (e) => I.features.supports(e),
        getEnableHardwareAcceleration: () =>
            !f.isPlatformEmbedded || (!__OVERLAY__ && I.gpuSettings.getEnableHardwareAcceleration()),
        setEnableHardwareAcceleration(e) {
            I.gpuSettings.setEnableHardwareAcceleration(e);
        },
        setOpenH264Enabled(e) {
            I?.settings?.set?.("openH264Enabled", e);
        },
        setChromiumSwitches(e) {
            I.gpuSettings.setChromiumSwitches(e);
        },
        setSetting(e, t) {
            I.gpuSettings.setSetting?.(e, t);
        },
        getOpenOnStart: async () => (await I.app.getOpenOnStart?.()) ?? (await I.settings.get("OPEN_ON_STARTUP", !0)),
        getGPUDriverVersions() {
            return (0, f.isWindows)() && null != this.getDiscordUtils().getGPUDriverVersions
                ? this.getDiscordUtils().getGPUDriverVersions()
                : Promise.resolve(Object.freeze({}));
        },
        setZoomFactor: (e) => !!f.isPlatformEmbedded && (I.window.setZoomFactor(e), !0),
        setBackgroundThrottling(e) {
            null != I.window.setBackgroundThrottling
                ? I.window.setBackgroundThrottling(e)
                : I.window.webContents.setBackgroundThrottling(e);
        },
        setFocusable(e, t) {
            "function" == typeof I.window.setFocusable && I.window.setFocusable(e, t);
        },
        pauseFrameEvictor() {
            I.app.pauseFrameEvictor?.();
        },
        unpauseFrameEvictor() {
            I.app.unpauseFrameEvictor?.();
        },
        getPreferredSystemLanguages: () => I.app.getPreferredSystemLanguages?.(),
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
        showOpenDialog: (e) => I.fileManager.showOpenDialog({ properties: e }),
        flushStorageData: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != I.processUtils.flushStorageData
                          ? I.processUtils.flushStorageData((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        flushCookies: () =>
            f.isPlatformEmbedded
                ? new Promise((e, t) => {
                      null != I.processUtils.flushCookies
                          ? I.processUtils.flushCookies((n) => (null != n ? t(Error(n)) : e()))
                          : e();
                  })
                : Promise.resolve(),
        setCrashInformation(e, t) {
            f.isPlatformEmbedded &&
                I?.processUtils?.setCrashInformation != null &&
                I.processUtils.setCrashInformation(e, t);
        },
        blockDisplaySleep: () =>
            f.isPlatformEmbedded && null != I.powerSaveBlocker ? I.powerSaveBlocker.blockDisplaySleep() : null,
        unblockDisplaySleep(e) {
            f.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.unblockDisplaySleep(e);
        },
        cleanupDisplaySleep() {
            f.isPlatformEmbedded && null != I.powerSaveBlocker && I.powerSaveBlocker.cleanupDisplaySleep();
        },
        relaunch() {
            f.isPlatformEmbedded && I.app.relaunch();
        },
        makeChunkedRequest(e, t, n) {
            let i = `${(0, u.TP)()}${e}`;
            if (!f.isPlatformEmbedded) return Promise.reject(Error("Not embedded!"));
            if (null == I.http) return Promise.reject(Error("HTTP module not available"));
            let {
                    method: r,
                    maxBps: s,
                    token: a,
                    chunkInterval: o,
                    contentType: l,
                } = { maxBps: 8e3, chunkInterval: 50, contentType: "application/json", ...n },
                d = t;
            "application/json" === l && (d = JSON.stringify(t));
            let _ = (o / 1e3) * s,
                c = Math.ceil(d.length / _),
                E = Array(c);
            for (let e = 0; e < c; e++) {
                let t = e * _;
                E[e] = d.substring(t, t + _);
            }
            return new Promise((e, t) => {
                null != I.http &&
                    I.http.makeChunkedRequest(
                        i,
                        E,
                        { method: r, chunkInterval: o, contentType: l, token: a },
                        (n, i) => (null != n ? t(n) : i.status >= 400 ? t(Error(i.body)) : void e(i)),
                    );
            });
        },
        submitLiveCrashReport(e) {
            if (!(0, f.isWindows)() || null == this.getDiscordUtils().submitLiveCrashReport) return Promise.resolve();
            let t = this.getCrashReporterMetadata(),
                n = I.app.getReleaseChannel(),
                i = t?.sentry;
            return this.getDiscordUtils().submitLiveCrashReport(n, { ...i, ...e });
        },
        crash(e) {
            let t = this.getDiscordUtils().crash;
            return null != t && (t(e), !0);
        },
        setApplicationBackgroundColor(e) {
            this.sendIPC(_.SETTINGS_UPDATE_BACKGROUND_COLOR, e);
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
            return -1 === r && (r = null), r ?? n ?? h.aI.UNKNOWN;
        },
        GetWindowFullscreenTypeExtraByPid(e, t) {
            let { getWindowFullscreenTypeExtraByPid: n } = this.getDiscordUtils();
            return null == n || null == t ? { quns: h.YL.QUNS_UNKNOWN } : n(e, t);
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
            return f.isPlatformEmbedded
                ? null == I.riotGames
                    ? Promise.reject(Error("Riot Games module not available"))
                    : I.riotGames.fetchLiveClientData(e, t)
                : Promise.reject(Error("Not embedded!"));
        },
        appViewed() {
            (0, f.isDesktop)() && this.sendIPC(_.APP_VIEWED);
        },
        appFirstRenderAfterReadyPayload() {
            (0, f.isDesktop)() && this.sendIPC(_.APP_FIRST_RENDER_AFTER_READY_PAYLOAD);
        },
        appLoaded() {
            W(_.APP_LOADED);
        },
        indexLoadedAsync() {
            W(_.APP_ASYNC_INDEX_TSX_LOADED);
        },
        setUseRequireModuleCache(e) {
            y = e;
        },
    },
    K = Y;
