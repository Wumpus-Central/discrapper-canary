n.d(t, {
    A: () => g,
}),
    n(896048),
    n(446912);
var r,
    l = n(311907),
    i = n(73153),
    o = n(967198);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = null,
    s = null,
    d = {
        reportedMessages: {},
    };

function u() {
    let e = o.A.getLastSelectedGuildId();
    e !== c && ((s = null), (c = null != e ? e : null));
}
class f extends (r = l.Ay.PersistedStore) {
    initialize(e) {
        null != e &&
            (d.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                }),
            )),
            this.syncWith([o.A], u);
    }
    getState() {
        return d;
    }
    isUserBanned(e) {
        var t;
        return null != (t = null == s ? void 0 : s.get(e)) ? t : null;
    }
    getReportedMessages() {
        return d.reportedMessages;
    }
    hasReportedMessage(e, t) {
        var n, r;
        return null != (n = null == (r = d.reportedMessages[e]) ? void 0 : r.has(t)) && n;
    }
}
a(f, "displayName", "ReportToModStore"),
    a(f, "persistKey", "ReportToModStore"),
    a(f, "migrations", [
        (e) => {
            var t;
            return {
                reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {},
            };
        },
    ]);
let g = new f(i.h, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function (e) {
        let { channelId: t, messageId: n } = e;
        null == d.reportedMessages[t] && (d.reportedMessages[t] = new Set()), d.reportedMessages[t].add(n);
    },
    GUILD_BAN_ADD: function (e) {
        let { user: t, guildId: n } = e;
        n !== c || (null != s && s.set(t.id, !0));
    },
    GUILD_BAN_REMOVE: function (e) {
        let { user: t, guildId: n } = e;
        n !== c || (null != s && s.set(t.id, !1));
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
        let { bans: t, guildId: n, userIds: r } = e;
        if (n !== c) return;
        let l = new Set(
                t.map((e) => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.id;
                }),
            ),
            i = Array.from(new Set(null != r ? r : [])).filter((e) => !l.has(e));
        null == s && (s = new Map()),
            l.forEach((e) => {
                null == s || s.set(e, !0);
            }),
            i.forEach((e) => {
                null == s || s.set(e, !1);
            });
    },
    LOGOUT: function () {
        (c = null), (s = null), (d.reportedMessages = {});
    },
});
