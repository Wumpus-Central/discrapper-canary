n.d(t, {
    AX: () => a,
    M3: () => o,
    RN: () => p,
    SX: () => _,
    dg: () => u,
    fZ: () => h,
    iN: () => c,
    on: () => d,
    vw: () => s,
    yX: () => l,
    zb: () => f
}),
    n(47120);
var i = n(981631),
    r = n(388032);
let a = 4320,
    s = 50,
    o = 100000,
    l = 50,
    u = 25,
    c = {
        HAS_INTERACTED: 1,
        ALL_MESSAGES: 2,
        ONLY_MENTIONS: 4,
        NO_MESSAGES: 8
    };
var d = (function (e) {
    return (e.EMBED = 'Embed'), (e.BROWSER = 'Thread Browser'), (e.POPOUT = 'Active Threads Popout'), (e.CHANNEL_LIST = 'Channel List'), (e.GUILD_ACTIVE_THREADS_MODAL = 'Guild Active Threads Modal'), (e.INBOX = 'Inbox'), (e.FORUM = 'Forum'), (e.VOICE_AUTO_OPEN = 'Voice Auto Open'), e;
})({});
function f() {
    return [
        {
            setting: c.ALL_MESSAGES,
            label: r.intl.string(r.t['n/bTaW'])
        },
        {
            setting: c.ONLY_MENTIONS,
            label: r.intl.format(r.t.L2hmY2, {})
        },
        {
            setting: c.NO_MESSAGES,
            label: r.intl.string(r.t.CtVGyc)
        }
    ];
}
var _ = (function (e) {
    return (e.LATEST_ACTIVITY = 'Last Message'), (e.CREATION_DATE = 'Creation'), e;
})({});
let p = new Set([i.evJ.TOO_MANY_ATTACHMENTS, i.evJ.EXPLICIT_CONTENT, i.evJ.ENTITY_TOO_LARGE, i.evJ.EXPLICIT_CONTENT]),
    h = new Set([i.evJ.AUTOMOD_MESSAGE_BLOCKED, i.evJ.AUTOMOD_TITLE_BLOCKED]);
