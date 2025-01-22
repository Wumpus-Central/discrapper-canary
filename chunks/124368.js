r.d(n, {
    AX: function () {
        return u;
    },
    M3: function () {
        return d;
    },
    RN: function () {
        return m;
    },
    SX: function () {
        return a;
    },
    dg: function () {
        return p;
    },
    fZ: function () {
        return g;
    },
    iN: function () {
        return h;
    },
    on: function () {
        return i;
    },
    vw: function () {
        return c;
    },
    yX: function () {
        return f;
    },
    zb: function () {
        return _;
    }
});
var i,
    a,
    o = r(47120);
var s = r(981631),
    l = r(388032);
let u = 4320,
    c = 50,
    d = 100000,
    f = 50,
    p = 25,
    h = {
        HAS_INTERACTED: 1,
        ALL_MESSAGES: 2,
        ONLY_MENTIONS: 4,
        NO_MESSAGES: 8
    };
function _() {
    return [
        {
            setting: h.ALL_MESSAGES,
            label: l.intl.string(l.t['n/bTaW'])
        },
        {
            setting: h.ONLY_MENTIONS,
            label: l.intl.format(l.t.L2hmY2, {})
        },
        {
            setting: h.NO_MESSAGES,
            label: l.intl.string(l.t.CtVGyc)
        }
    ];
}
!(function (e) {
    (e.EMBED = 'Embed'), (e.BROWSER = 'Thread Browser'), (e.POPOUT = 'Active Threads Popout'), (e.CHANNEL_LIST = 'Channel List'), (e.GUILD_ACTIVE_THREADS_MODAL = 'Guild Active Threads Modal'), (e.INBOX = 'Inbox'), (e.FORUM = 'Forum'), (e.VOICE_AUTO_OPEN = 'Voice Auto Open');
})(i || (i = {})),
    !(function (e) {
        (e.LATEST_ACTIVITY = 'Last Message'), (e.CREATION_DATE = 'Creation');
    })(a || (a = {}));
let m = new Set([s.evJ.TOO_MANY_ATTACHMENTS, s.evJ.EXPLICIT_CONTENT, s.evJ.ENTITY_TOO_LARGE, s.evJ.EXPLICIT_CONTENT]),
    g = new Set([s.evJ.AUTOMOD_MESSAGE_BLOCKED, s.evJ.AUTOMOD_TITLE_BLOCKED]);
