n.d(t, {
    AX: () => a,
    M3: () => s,
    RN: () => _,
    SX: () => p,
    dg: () => c,
    fZ: () => m,
    iN: () => u,
    on: () => d,
    vw: () => o,
    yX: () => l,
    zb: () => f,
}),
    n(388685);
var r = n(981631),
    i = n(388032);
let a = 4320,
    o = 50,
    s = 100000,
    l = 50,
    c = 25,
    u = {
        HAS_INTERACTED: 1,
        ALL_MESSAGES: 2,
        ONLY_MENTIONS: 4,
        NO_MESSAGES: 8,
    };
var d = (function (e) {
    return (
        (e.EMBED = "Embed"),
        (e.BROWSER = "Thread Browser"),
        (e.POPOUT = "Active Threads Popout"),
        (e.CHANNEL_LIST = "Channel List"),
        (e.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal"),
        (e.INBOX = "Inbox"),
        (e.FORUM = "Forum"),
        (e.VOICE_AUTO_OPEN = "Voice Auto Open"),
        e
    );
})({});
function f() {
    return [
        {
            setting: u.ALL_MESSAGES,
            label: i.intl.string(i.t["n/bTaY"]),
        },
        {
            setting: u.ONLY_MENTIONS,
            label: i.intl.format(i.t.L2hmYy, {}),
        },
        {
            setting: u.NO_MESSAGES,
            label: i.intl.string(i.t.CtVGyQ),
        },
    ];
}
var p = (function (e) {
    return (e.LATEST_ACTIVITY = "Last Message"), (e.CREATION_DATE = "Creation"), e;
})({});
let _ = new Set([r.evJ.TOO_MANY_ATTACHMENTS, r.evJ.EXPLICIT_CONTENT, r.evJ.ENTITY_TOO_LARGE, r.evJ.EXPLICIT_CONTENT]),
    m = new Set([r.evJ.AUTOMOD_MESSAGE_BLOCKED, r.evJ.AUTOMOD_TITLE_BLOCKED]);
