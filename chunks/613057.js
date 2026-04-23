n.d(t, {
    Hi: () => A,
    LQ: () => l,
    OE: () => I,
    VH: () => d,
    W_: () => c,
    XK: () => u,
    hj: () => E,
    kw: () => o,
    sm: () => _,
    z4: () => T,
});
var i,
    r,
    a,
    s,
    _ = (((i = {}).ANY = "$any"), (i.ALL = "$all"), i);
let l = "RPC_PRIVATE_SCOPE",
    o = "RPC_PRIVATE_LIMITED_SCOPE",
    E = "RPC_LOCAL_SCOPE",
    d = "RPC_AUTHENTICATED_SCOPE",
    c = "RPC_EMBEDDED_APP_SCOPE";
var u =
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
function I(e) {
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
var A =
        (((a = {})[(a.APPLICATION_NOT_FOUND = 101)] = "APPLICATION_NOT_FOUND"),
        (a[(a.DISK_LOW = 2022)] = "DISK_LOW"),
        (a[(a.DISK_PERMISSION_DENIED = 2025)] = "DISK_PERMISSION_DENIED"),
        (a[(a.POST_INSTALL_FAILED = 2025)] = "POST_INSTALL_FAILED"),
        (a[(a.REDISTRIBUTABLE_INSTALL_FAILED = 2026)] = "REDISTRIBUTABLE_INSTALL_FAILED"),
        (a[(a.APPLICATION_LOAD_FAILED = 2034)] = "APPLICATION_LOAD_FAILED"),
        (a[(a.DESERIALIZATION_FAILED = 2047)] = "DESERIALIZATION_FAILED"),
        (a[(a.INTERRUPTED = 2055)] = "INTERRUPTED"),
        (a[(a.MAX_REQUEST_RETRIES_EXCEEDED = 2058)] = "MAX_REQUEST_RETRIES_EXCEEDED"),
        (a[(a.AUTHENTICATION_FAILED = 2063)] = "AUTHENTICATION_FAILED"),
        (a[(a.IO_PERMISSION_DENIED = 2064)] = "IO_PERMISSION_DENIED"),
        (a[(a.NO_MANIFESTS = 2065)] = "NO_MANIFESTS"),
        (a[(a.POST_INSTALL_CANCELLED = 2066)] = "POST_INSTALL_CANCELLED"),
        (a[(a.API_ERROR = 2069)] = "API_ERROR"),
        (a[(a.FILE_NAME_TOO_LONG = 2072)] = "FILE_NAME_TOO_LONG"),
        (a[(a.NOT_ENTITLED = 2073)] = "NOT_ENTITLED"),
        (a[(a.APPLICATION_LOCK_FAILED = 2076)] = "APPLICATION_LOCK_FAILED"),
        (a[(a.NOT_DIRECTORY = 2077)] = "NOT_DIRECTORY"),
        (a[(a.INVALID_DRIVE = 2078)] = "INVALID_DRIVE"),
        (a[(a.DISK_FULL = 2080)] = "DISK_FULL"),
        a),
    T = (((s = {}).IPC = "ipc"), (s.WEBSOCKET = "ws"), (s.HTTP = "http"), (s.POST_MESSAGE = "post_message"), s);
