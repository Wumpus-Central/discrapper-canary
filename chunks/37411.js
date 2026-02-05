"use strict";
n.d(t, {
    $j: () => h,
    CP: () => c,
    EU: () => _,
    F4: () => p,
    H9: () => d,
    Td: () => l,
    az: () => f,
    cM: () => a,
    kl: () => s,
    oR: () => u,
    su: () => o,
});
var r = n(652215),
    i = n(985018);
let a = 4320,
    s = 50,
    o = 1e5,
    l = 50,
    u = 25,
    c = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
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
function _() {
    return [
        { setting: c.ALL_MESSAGES, label: i.intl.string(i.t["n/bTaY"]) },
        { setting: c.ONLY_MENTIONS, label: i.intl.format(i.t.L2hmYy, {}) },
        { setting: c.NO_MESSAGES, label: i.intl.string(i.t.CtVGyQ) },
    ];
}
var f = (function (e) {
    return (e.LATEST_ACTIVITY = "Last Message"), (e.CREATION_DATE = "Creation"), e;
})({});
let p = new Set([r.t02.TOO_MANY_ATTACHMENTS, r.t02.EXPLICIT_CONTENT, r.t02.ENTITY_TOO_LARGE, r.t02.EXPLICIT_CONTENT]),
    h = new Set([r.t02.AUTOMOD_MESSAGE_BLOCKED, r.t02.AUTOMOD_TITLE_BLOCKED]);
