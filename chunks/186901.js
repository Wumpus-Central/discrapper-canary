n.d(t, {
    CN: () => o,
    Gp: () => r,
    He: () => f,
    O: () => u,
    b_: () => l,
    cE: () => i,
    ff: () => d,
    jE: () => c,
    lH: () => a,
    wE: () => s
});
var r = (function (e) {
    return (e.ANY = '$any'), (e.ALL = '$all'), e;
})({});
let i = 'RPC_PRIVATE_SCOPE',
    o = 'RPC_PRIVATE_LIMITED_SCOPE',
    a = 'RPC_LOCAL_SCOPE',
    s = 'RPC_AUTHENTICATED_SCOPE',
    l = 'RPC_EMBEDDED_APP_SCOPE';
var c = (function (e) {
    return (e.USER_SETTINGS = 'USER_SETTINGS'), (e.CHANGELOG = 'CHANGELOG'), (e.LIBRARY = 'LIBRARY'), (e.STORE_HOME = 'STORE_HOME'), (e.STORE_LISTING = 'STORE_LISTING'), (e.CHANNEL = 'CHANNEL'), (e.PICK_GUILD_SETTINGS = 'PICK_GUILD_SETTINGS'), (e.QUEST_HOME = 'QUEST_HOME'), (e.DISCOVERY_GAME_RESULTS = 'DISCOVERY_GAME_RESULTS'), (e.OAUTH2 = 'OAUTH2'), (e.FEATURES = 'FEATURES'), (e.SHOP = 'SHOP'), (e.ACTIVITIES = 'ACTIVITIES'), e;
})({});
function u(e) {
    switch (e) {
        case 'USER_SETTINGS':
            return 'settings';
        case 'CHANGELOG':
            return 'changelog';
        case 'LIBRARY':
            return 'library';
        case 'STORE_HOME':
        case 'STORE_LISTING':
            return 'store';
        case 'CHANNEL':
            return 'channel';
        case 'PICK_GUILD_SETTINGS':
            return 'guild_settings';
        case 'QUEST_HOME':
            return 'quest_home';
        case 'DISCOVERY_GAME_RESULTS':
            return 'discovery_game';
        case 'SHOP':
            return 'shop';
        default:
            return e;
    }
}
var d = (function (e) {
        return (e[(e.APPLICATION_NOT_FOUND = 101)] = 'APPLICATION_NOT_FOUND'), (e[(e.DISK_LOW = 2022)] = 'DISK_LOW'), (e[(e.DISK_PERMISSION_DENIED = 2025)] = 'DISK_PERMISSION_DENIED'), (e[(e.POST_INSTALL_FAILED = 2025)] = 'POST_INSTALL_FAILED'), (e[(e.REDISTRIBUTABLE_INSTALL_FAILED = 2026)] = 'REDISTRIBUTABLE_INSTALL_FAILED'), (e[(e.APPLICATION_LOAD_FAILED = 2034)] = 'APPLICATION_LOAD_FAILED'), (e[(e.DESERIALIZATION_FAILED = 2047)] = 'DESERIALIZATION_FAILED'), (e[(e.INTERRUPTED = 2055)] = 'INTERRUPTED'), (e[(e.MAX_REQUEST_RETRIES_EXCEEDED = 2058)] = 'MAX_REQUEST_RETRIES_EXCEEDED'), (e[(e.AUTHENTICATION_FAILED = 2063)] = 'AUTHENTICATION_FAILED'), (e[(e.IO_PERMISSION_DENIED = 2064)] = 'IO_PERMISSION_DENIED'), (e[(e.NO_MANIFESTS = 2065)] = 'NO_MANIFESTS'), (e[(e.POST_INSTALL_CANCELLED = 2066)] = 'POST_INSTALL_CANCELLED'), (e[(e.API_ERROR = 2069)] = 'API_ERROR'), (e[(e.FILE_NAME_TOO_LONG = 2072)] = 'FILE_NAME_TOO_LONG'), (e[(e.NOT_ENTITLED = 2073)] = 'NOT_ENTITLED'), (e[(e.APPLICATION_LOCK_FAILED = 2076)] = 'APPLICATION_LOCK_FAILED'), (e[(e.NOT_DIRECTORY = 2077)] = 'NOT_DIRECTORY'), (e[(e.INVALID_DRIVE = 2078)] = 'INVALID_DRIVE'), (e[(e.DISK_FULL = 2080)] = 'DISK_FULL'), e;
    })({}),
    f = (function (e) {
        return (e.IPC = 'ipc'), (e.WEBSOCKET = 'ws'), (e.HTTP = 'http'), (e.POST_MESSAGE = 'post_message'), e;
    })({});
