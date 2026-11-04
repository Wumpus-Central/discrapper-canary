var i,
    r,
    a = n(652215),
    s = n(792996);
let l = { HAS_INTERACTED: 1, ALL_MESSAGES: 2, ONLY_MENTIONS: 4, NO_MESSAGES: 8 };
var o =
        (((i = {}).EMBED = "Embed"),
        (i.BROWSER = "Thread Browser"),
        (i.POPOUT = "Active Threads Popout"),
        (i.CHANNEL_LIST = "Channel List"),
        (i.GUILD_ACTIVE_THREADS_MODAL = "Guild Active Threads Modal"),
        (i.INBOX = "Inbox"),
        (i.FORUM = "Forum"),
        (i.VOICE_AUTO_OPEN = "Voice Auto Open"),
        i),
    d = (((r = {}).LATEST_ACTIVITY = "Last Message"), (r.CREATION_DATE = "Creation"), r);
let c = new Set([a.t02.TOO_MANY_ATTACHMENTS, a.t02.EXPLICIT_CONTENT, a.t02.ENTITY_TOO_LARGE, a.t02.EXPLICIT_CONTENT]),
    u = new Set([a.t02.AUTOMOD_MESSAGE_BLOCKED, a.t02.AUTOMOD_TITLE_BLOCKED]);
n.d(
    t,
    {},
    {
        $j: u,
        CP: l,
        EU: function () {
            return [
                { setting: l.ALL_MESSAGES, label: s.intl.string(s.t["n/bTaY"]) },
                { setting: l.ONLY_MENTIONS, label: s.intl.format(s.t.L2hmYy, {}) },
                { setting: l.NO_MESSAGES, label: s.intl.string(s.t.CtVGyQ) },
            ];
        },
        F4: c,
        H9: o,
        az: d,
    },
);
