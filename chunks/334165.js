n.d(t, { A: () => d });
var a,
    l = n(311907),
    i = n(73153);
function r(e, t, n) {
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
let s = { lastSeenInfos: {} },
    o = s;
class c extends (a = l.Ay.PersistedStore) {
    initialize(e) {
        o = null != e ? e : s;
    }
    getState() {
        return o;
    }
    getGuildLastSeenInfo(e) {
        var t;
        return null != (t = o.lastSeenInfos[e]) ? t : null;
    }
}
r(c, "displayName", "GuildTagChangedCoachmarkStore"), r(c, "persistKey", "GuildTagChangedCoachmarkStore");
let d = new c(i.h, {
    GUILD_TAG_CHANGED_COACHMARK_SEEN: function (e) {
        let { guildId: t, lastSeenInfo: n } = e;
        o.lastSeenInfos[t] = n;
    },
    LOGOUT: function () {
        o = s;
    },
});
