n.d(t, { A: () => u });
var i = n(17928),
    l = n(228366),
    a = n(967198);
let r = null,
    s = null,
    o = { reportedMessages: {} };
function c() {
    let e = a.A.getLastSelectedGuildId();
    e !== r && ((s = null), (r = e ?? null));
}
class d extends i.Ay.PersistedStore {
    static displayName = "ReportToModStore";
    static persistKey = "ReportToModStore";
    static migrations = [(e) => ({ reportedMessages: e?.reportedMessages ?? {} })];
    initialize(e) {
        null != e &&
            (o.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                }),
            )),
            this.syncWith([a.A], c);
    }
    getState() {
        return o;
    }
    isUserBanned(e) {
        return s?.get(e) ?? null;
    }
    getReportedMessages() {
        return o.reportedMessages;
    }
    hasReportedMessage(e, t) {
        return o.reportedMessages[e]?.has(t) ?? !1;
    }
}
let u = new d(l.h, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function (e) {
        let { channelId: t, messageId: n } = e;
        null == o.reportedMessages[t] && (o.reportedMessages[t] = new Set()), o.reportedMessages[t].add(n);
    },
    GUILD_BAN_ADD: function (e) {
        let { user: t, guildId: n } = e;
        n !== r || (null != s && s.set(t.id, !0));
    },
    GUILD_BAN_REMOVE: function (e) {
        let { user: t, guildId: n } = e;
        n !== r || (null != s && s.set(t.id, !1));
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
        let { bans: t, guildId: n, userIds: i } = e;
        if (n !== r) return;
        let l = new Set(t.map((e) => e.user?.id)),
            a = Array.from(new Set(i ?? [])).filter((e) => !l.has(e));
        null == s && (s = new Map()),
            l.forEach((e) => {
                s?.set(e, !0);
            }),
            a.forEach((e) => {
                s?.set(e, !1);
            });
    },
    LOGOUT: function () {
        (r = null), (s = null), (o.reportedMessages = {});
    },
});
