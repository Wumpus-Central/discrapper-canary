"use strict";
n.d(t, {
    $j: () => m,
    CP: () => _,
    EU: () => h,
    F4: () => E,
    H9: () => f,
    Td: () => c,
    az: () => p,
    cM: () => o,
    kl: () => l,
    oR: () => d,
    su: () => u,
});
var i,
    r,
    s = n(652215),
    a = n(375708);
let o = 4320,
    l = 50,
    u = 1e5,
    c = 50,
    d = 25,
    _ = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
var f =
    (((i = {}).EMBED = "Embed"),
    (i.BROWSER = "Thread Browser"),
    (i.POPOUT = "Active Threads Popout"),
    (i.CHANNEL_LIST = "Channel List"),
    (i.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal"),
    (i.INBOX = "Inbox"),
    (i.FORUM = "Forum"),
    (i.VOICE_AUTO_OPEN = "Voice Auto Open"),
    i);
function h() {
    return [
        { setting: _.ALL_MESSAGES, label: a.intl.string(a.t["n/bTaY"]) },
        { setting: _.ONLY_MENTIONS, label: a.intl.format(a.t.L2hmYy, {}) },
        { setting: _.NO_MESSAGES, label: a.intl.string(a.t.CtVGyQ) },
    ];
}
var p = (((r = {}).LATEST_ACTIVITY = "Last Message"), (r.CREATION_DATE = "Creation"), r);
let E = new Set([s.t02.TOO_MANY_ATTACHMENTS, s.t02.EXPLICIT_CONTENT, s.t02.ENTITY_TOO_LARGE, s.t02.EXPLICIT_CONTENT]),
    m = new Set([s.t02.AUTOMOD_MESSAGE_BLOCKED, s.t02.AUTOMOD_TITLE_BLOCKED]);
