n.d(t, {
    Hi: () => I,
    LQ: () => o,
    OE: () => A,
    VH: () => _,
    W_: () => E,
    XK: () => u,
    hj: () => c,
    kw: () => d,
    sm: () => l,
    z4: () => T,
});
var i,
    a,
    r,
    s,
    l = (((i = {}).ANY = "$any"), (i.ALL = "$all"), i);
let o = "RPC_PRIVATE_SCOPE",
    d = "RPC_PRIVATE_LIMITED_SCOPE",
    c = "RPC_LOCAL_SCOPE",
    _ = "RPC_AUTHENTICATED_SCOPE",
    E = "RPC_EMBEDDED_APP_SCOPE";
var u =
    (((a = {}).USER_SETTINGS = "USER_SETTINGS"),
    (a.CHANGELOG = "CHANGELOG"),
    (a.LIBRARY = "LIBRARY"),
    (a.STORE_HOME = "STORE_HOME"),
    (a.STORE_LISTING = "STORE_LISTING"),
    (a.CHANNEL = "CHANNEL"),
    (a.GAME_SHOP = "GAME_SHOP"),
    (a.PICK_GUILD_SETTINGS = "PICK_GUILD_SETTINGS"),
    (a.QUEST_HOME = "QUEST_HOME"),
    (a.DISCOVERY_GAME_RESULTS = "DISCOVERY_GAME_RESULTS"),
    (a.OAUTH2 = "OAUTH2"),
    (a.FEATURES = "FEATURES"),
    (a.SHOP = "SHOP"),
    (a.ACTIVITIES = "ACTIVITIES"),
    (a.QUEST_PREVIEW_TOOL = "QUEST_PREVIEW_TOOL"),
    (a.ONE_TIME_LOGIN = "ONE_TIME_LOGIN"),
    (a.PLAYGROUND = "PLAYGROUND"),
    a);
function A(e) {
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
var I =
        (((r = {})[(r.APPLICATION_NOT_FOUND = 101)] = "APPLICATION_NOT_FOUND"),
        (r[(r.DISK_LOW = 2022)] = "DISK_LOW"),
        (r[(r.DISK_PERMISSION_DENIED = 2025)] = "DISK_PERMISSION_DENIED"),
        (r[(r.POST_INSTALL_FAILED = 2025)] = "POST_INSTALL_FAILED"),
        (r[(r.REDISTRIBUTABLE_INSTALL_FAILED = 2026)] = "REDISTRIBUTABLE_INSTALL_FAILED"),
        (r[(r.APPLICATION_LOAD_FAILED = 2034)] = "APPLICATION_LOAD_FAILED"),
        (r[(r.DESERIALIZATION_FAILED = 2047)] = "DESERIALIZATION_FAILED"),
        (r[(r.INTERRUPTED = 2055)] = "INTERRUPTED"),
        (r[(r.MAX_REQUEST_RETRIES_EXCEEDED = 2058)] = "MAX_REQUEST_RETRIES_EXCEEDED"),
        (r[(r.AUTHENTICATION_FAILED = 2063)] = "AUTHENTICATION_FAILED"),
        (r[(r.IO_PERMISSION_DENIED = 2064)] = "IO_PERMISSION_DENIED"),
        (r[(r.NO_MANIFESTS = 2065)] = "NO_MANIFESTS"),
        (r[(r.POST_INSTALL_CANCELLED = 2066)] = "POST_INSTALL_CANCELLED"),
        (r[(r.API_ERROR = 2069)] = "API_ERROR"),
        (r[(r.FILE_NAME_TOO_LONG = 2072)] = "FILE_NAME_TOO_LONG"),
        (r[(r.NOT_ENTITLED = 2073)] = "NOT_ENTITLED"),
        (r[(r.APPLICATION_LOCK_FAILED = 2076)] = "APPLICATION_LOCK_FAILED"),
        (r[(r.NOT_DIRECTORY = 2077)] = "NOT_DIRECTORY"),
        (r[(r.INVALID_DRIVE = 2078)] = "INVALID_DRIVE"),
        (r[(r.DISK_FULL = 2080)] = "DISK_FULL"),
        r),
    T = (((s = {}).IPC = "ipc"), (s.WEBSOCKET = "ws"), (s.HTTP = "http"), (s.POST_MESSAGE = "post_message"), s);
