"use strict";
n.d(t, {
    $j: () => m,
    CP: () => _,
    EU: () => E,
    F4: () => p,
    H9: () => f,
    Td: () => d,
    az: () => h,
    cM: () => o,
    kl: () => l,
    oR: () => c,
    su: () => u,
});
var r,
    i,
    s = n(652215),
    a = n(985018);
let o = 4320,
    l = 50,
    u = 1e5,
    d = 50,
    c = 25,
    _ = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
var f =
    (((r = {}).EMBED = "Embed"),
    (r.BROWSER = "Thread Browser"),
    (r.POPOUT = "Active Threads Popout"),
    (r.CHANNEL_LIST = "Channel List"),
    (r.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal"),
    (r.INBOX = "Inbox"),
    (r.FORUM = "Forum"),
    (r.VOICE_AUTO_OPEN = "Voice Auto Open"),
    r);
function E() {
    return [
        { setting: _.ALL_MESSAGES, label: a.intl.string(a.t["n/bTaY"]) },
        { setting: _.ONLY_MENTIONS, label: a.intl.format(a.t.L2hmYy, {}) },
        { setting: _.NO_MESSAGES, label: a.intl.string(a.t.CtVGyQ) },
    ];
}
var h = (((i = {}).LATEST_ACTIVITY = "Last Message"), (i.CREATION_DATE = "Creation"), i);
let p = new Set([s.t02.TOO_MANY_ATTACHMENTS, s.t02.EXPLICIT_CONTENT, s.t02.ENTITY_TOO_LARGE, s.t02.EXPLICIT_CONTENT]),
    m = new Set([s.t02.AUTOMOD_MESSAGE_BLOCKED, s.t02.AUTOMOD_TITLE_BLOCKED]);
