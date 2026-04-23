n.d(t, {
    $j: () => S,
    CP: () => c,
    EU: () => I,
    F4: () => T,
    H9: () => u,
    Td: () => E,
    az: () => A,
    cM: () => _,
    kl: () => l,
    oR: () => d,
    su: () => o,
});
var i,
    r,
    a = n(652215),
    s = n(985018);
let _ = 4320,
    l = 50,
    o = 1e5,
    E = 50,
    d = 25,
    c = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
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
function I() {
    return [
        { setting: c.ALL_MESSAGES, label: s.intl.string(s.t["n/bTaY"]) },
        { setting: c.ONLY_MENTIONS, label: s.intl.format(s.t.L2hmYy, {}) },
        { setting: c.NO_MESSAGES, label: s.intl.string(s.t.CtVGyQ) },
    ];
}
var A = (((r = {}).LATEST_ACTIVITY = "Last Message"), (r.CREATION_DATE = "Creation"), r);
let T = new Set([a.t02.TOO_MANY_ATTACHMENTS, a.t02.EXPLICIT_CONTENT, a.t02.ENTITY_TOO_LARGE, a.t02.EXPLICIT_CONTENT]),
    S = new Set([a.t02.AUTOMOD_MESSAGE_BLOCKED, a.t02.AUTOMOD_TITLE_BLOCKED]);
