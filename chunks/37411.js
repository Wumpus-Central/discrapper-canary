n.d(t, {
    $j: () => h,
    CP: () => E,
    EU: () => A,
    F4: () => T,
    H9: () => u,
    Td: () => c,
    az: () => I,
    cM: () => l,
    kl: () => o,
    oR: () => _,
    su: () => d,
});
var i,
    a,
    r = n(652215),
    s = n(985018);
let l = 4320,
    o = 50,
    d = 1e5,
    c = 50,
    _ = 25,
    E = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
var u =
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
        { setting: E.ALL_MESSAGES, label: s.intl.string(s.t["n/bTaY"]) },
        { setting: E.ONLY_MENTIONS, label: s.intl.format(s.t.L2hmYy, {}) },
        { setting: E.NO_MESSAGES, label: s.intl.string(s.t.CtVGyQ) },
    ];
}
var I = (((a = {}).LATEST_ACTIVITY = "Last Message"), (a.CREATION_DATE = "Creation"), a);
let T = new Set([r.t02.TOO_MANY_ATTACHMENTS, r.t02.EXPLICIT_CONTENT, r.t02.ENTITY_TOO_LARGE, r.t02.EXPLICIT_CONTENT]),
    h = new Set([r.t02.AUTOMOD_MESSAGE_BLOCKED, r.t02.AUTOMOD_TITLE_BLOCKED]);
