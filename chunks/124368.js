n.d(t, {
    AX: () => o,
    M3: () => s,
    RN: () => p,
    SX: () => _,
    dg: () => c,
    fZ: () => h,
    iN: () => u,
    on: () => d,
    vw: () => a,
    yX: () => l,
    zb: () => f
}),
    n(47120);
var r = n(981631),
    i = n(388032);
let o = 4320,
    a = 50,
    s = 100000,
    l = 50,
    c = 25,
    u = {
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
            setting: u.ALL_MESSAGES,
            label: i.NW.string(i.t['n/bTaW'])
        },
        {
            setting: u.ONLY_MENTIONS,
            label: i.NW.format(i.t.L2hmY2, {})
        },
        {
            setting: u.NO_MESSAGES,
            label: i.NW.string(i.t.CtVGyc)
        }
    ];
}
var _ = (function (e) {
    return (e.LATEST_ACTIVITY = 'Last Message'), (e.CREATION_DATE = 'Creation'), e;
})({});
let p = new Set([r.evJ.TOO_MANY_ATTACHMENTS, r.evJ.EXPLICIT_CONTENT, r.evJ.ENTITY_TOO_LARGE, r.evJ.EXPLICIT_CONTENT]),
    h = new Set([r.evJ.AUTOMOD_MESSAGE_BLOCKED, r.evJ.AUTOMOD_TITLE_BLOCKED]);
