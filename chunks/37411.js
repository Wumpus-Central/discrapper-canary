n.d(t, {
    $j: () => f,
    CP: () => _,
    EU: () => A,
    F4: () => I,
    H9: () => E,
    Td: () => c,
    az: () => h,
    cM: () => l,
    kl: () => o,
    oR: () => u,
    su: () => d,
});
var i,
    r,
    a = n(652215),
    s = n(375708);
let l = 4320,
    o = 50,
    d = 1e5,
    c = 50,
    u = 25,
    _ = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
var E =
    (((i = {}).EMBED = "Embed"),
    (i.BROWSER = "Thread Browser"),
    (i.POPOUT = "Active Threads Popout"),
    (i.CHANNEL_LIST = "Channel List"),
    (i.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal"),
    (i.INBOX = "Inbox"),
    (i.FORUM = "Forum"),
    (i.VOICE_AUTO_OPEN = "Voice Auto Open"),
    i);
function A() {
    return [
        { setting: _.ALL_MESSAGES, label: s.intl.string(s.t["n/bTaY"]) },
        { setting: _.ONLY_MENTIONS, label: s.intl.format(s.t.L2hmYy, {}) },
        { setting: _.NO_MESSAGES, label: s.intl.string(s.t.CtVGyQ) },
    ];
}
var h = (((r = {}).LATEST_ACTIVITY = "Last Message"), (r.CREATION_DATE = "Creation"), r);
let I = new Set([a.t02.TOO_MANY_ATTACHMENTS, a.t02.EXPLICIT_CONTENT, a.t02.ENTITY_TOO_LARGE, a.t02.EXPLICIT_CONTENT]),
    f = new Set([a.t02.AUTOMOD_MESSAGE_BLOCKED, a.t02.AUTOMOD_TITLE_BLOCKED]);
