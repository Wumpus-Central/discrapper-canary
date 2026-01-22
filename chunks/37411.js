n.d(t, {
    $j: () => h,
    CP: () => u,
    EU: () => f,
    F4: () => _,
    H9: () => d,
    Td: () => l,
    az: () => p,
    cM: () => a,
    kl: () => s,
    oR: () => c,
    su: () => o,
}),
    n(896048);
var r = n(652215),
    i = n(985018);
let a = 4320,
    s = 50,
    o = 100000,
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
let _ = new Set([r.t02.TOO_MANY_ATTACHMENTS, r.t02.EXPLICIT_CONTENT, r.t02.ENTITY_TOO_LARGE, r.t02.EXPLICIT_CONTENT]),
    h = new Set([r.t02.AUTOMOD_MESSAGE_BLOCKED, r.t02.AUTOMOD_TITLE_BLOCKED]);
