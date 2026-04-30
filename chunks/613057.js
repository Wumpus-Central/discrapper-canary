"use strict";
n.d(t, {
    Hi: () => p,
    LQ: () => l,
    OE: () => h,
    VH: () => d,
    W_: () => _,
    XK: () => f,
    hj: () => c,
    kw: () => u,
    sm: () => o,
    z4: () => E,
});
var i,
    r,
    s,
    a,
    o = (((i = {}).ANY = "$any"), (i.ALL = "$all"), i);
let l = "RPC_PRIVATE_SCOPE",
    u = "RPC_PRIVATE_LIMITED_SCOPE",
    c = "RPC_LOCAL_SCOPE",
    d = "RPC_AUTHENTICATED_SCOPE",
    _ = "RPC_EMBEDDED_APP_SCOPE";
var f =
    (((r = {}).USER_SETTINGS = "USER_SETTINGS"),
    (r.CHANGELOG = "CHANGELOG"),
    (r.LIBRARY = "LIBRARY"),
    (r.STORE_HOME = "STORE_HOME"),
    (r.STORE_LISTING = "STORE_LISTING"),
    (r.CHANNEL = "CHANNEL"),
    (r.GAME_SHOP = "GAME_SHOP"),
    (r.PICK_GUILD_SETTINGS = "PICK_GUILD_SETTINGS"),
    (r.QUEST_HOME = "QUEST_HOME"),
    (r.DISCOVERY_GAME_RESULTS = "DISCOVERY_GAME_RESULTS"),
    (r.OAUTH2 = "OAUTH2"),
    (r.FEATURES = "FEATURES"),
    (r.SHOP = "SHOP"),
    (r.ACTIVITIES = "ACTIVITIES"),
    (r.QUEST_PREVIEW_TOOL = "QUEST_PREVIEW_TOOL"),
    (r.ONE_TIME_LOGIN = "ONE_TIME_LOGIN"),
    (r.PLAYGROUND = "PLAYGROUND"),
    r);
function h(e) {
    switch (e) {
        case "USER_SETTINGS":
            return "settings";
        case "CHANGELOG":
            return "changelog";
        case "LIBRARY":
            return "library";
        case "STORE_HOME":
        case "STORE_LISTING":
            return "store";
        case "CHANNEL":
            return "channel";
        case "PICK_GUILD_SETTINGS":
            return "guild_settings";
        case "QUEST_HOME":
            return "quest_home";
        case "QUEST_PREVIEW_TOOL":
            return "quest_preview_tool";
        case "DISCOVERY_GAME_RESULTS":
            return "discovery_game";
        case "SHOP":
            return "shop";
        case "ACTIVITIES":
            return "activities";
        case "PLAYGROUND":
            return "playground";
        default:
            return e;
    }
}
var p =
        (((s = {})[(s.APPLICATION_NOT_FOUND = 101)] = "APPLICATION_NOT_FOUND"),
        (s[(s.DISK_LOW = 2022)] = "DISK_LOW"),
        (s[(s.DISK_PERMISSION_DENIED = 2025)] = "DISK_PERMISSION_DENIED"),
        (s[(s.POST_INSTALL_FAILED = 2025)] = "POST_INSTALL_FAILED"),
        (s[(s.REDISTRIBUTABLE_INSTALL_FAILED = 2026)] = "REDISTRIBUTABLE_INSTALL_FAILED"),
        (s[(s.APPLICATION_LOAD_FAILED = 2034)] = "APPLICATION_LOAD_FAILED"),
        (s[(s.DESERIALIZATION_FAILED = 2047)] = "DESERIALIZATION_FAILED"),
        (s[(s.INTERRUPTED = 2055)] = "INTERRUPTED"),
        (s[(s.MAX_REQUEST_RETRIES_EXCEEDED = 2058)] = "MAX_REQUEST_RETRIES_EXCEEDED"),
        (s[(s.AUTHENTICATION_FAILED = 2063)] = "AUTHENTICATION_FAILED"),
        (s[(s.IO_PERMISSION_DENIED = 2064)] = "IO_PERMISSION_DENIED"),
        (s[(s.NO_MANIFESTS = 2065)] = "NO_MANIFESTS"),
        (s[(s.POST_INSTALL_CANCELLED = 2066)] = "POST_INSTALL_CANCELLED"),
        (s[(s.API_ERROR = 2069)] = "API_ERROR"),
        (s[(s.FILE_NAME_TOO_LONG = 2072)] = "FILE_NAME_TOO_LONG"),
        (s[(s.NOT_ENTITLED = 2073)] = "NOT_ENTITLED"),
        (s[(s.APPLICATION_LOCK_FAILED = 2076)] = "APPLICATION_LOCK_FAILED"),
        (s[(s.NOT_DIRECTORY = 2077)] = "NOT_DIRECTORY"),
        (s[(s.INVALID_DRIVE = 2078)] = "INVALID_DRIVE"),
        (s[(s.DISK_FULL = 2080)] = "DISK_FULL"),
        s),
    E = (((a = {}).IPC = "ipc"), (a.WEBSOCKET = "ws"), (a.HTTP = "http"), (a.POST_MESSAGE = "post_message"), a);
