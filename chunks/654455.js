n.d(t, {
    LU: () => g,
    ZP: () => b
}),
    n(47120),
    n(653041);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(570140),
    l = n(911969),
    u = n(704907),
    c = n(581883);
n(689079);
var d = n(674563),
    f = n(526761);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    h = { pendingUsages: [] },
    m = new u.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: d.yP
    });
function g(e, t) {
    return e.filter((e) => !e.includes(':') || ((null == t ? void 0 : t.guild) != null && t.guild.id === e.split(':')[1])).map((e) => e.split(':')[0]);
}
function E(e, t) {
    return 0 > Number(t.id) ? t.id : (null == e ? void 0 : e.guild) != null && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function v(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    h.pendingUsages = [];
}
function y(e) {
    let { command: t, context: n } = e;
    if (!p.includes(t.type)) return !1;
    let i = E(n, t);
    h.pendingUsages.push({
        key: i,
        timestamp: Date.now()
    }),
        m.track(i),
        m.compute();
}
function I() {
    var e, t;
    let n = null !== (t = null === (e = c.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== t ? t : {};
    m.overwriteHistory(
        a().mapValues(n, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        h.pendingUsages
    );
}
class T extends (i = s.ZP.PersistedStore) {
    initialize(e) {
        null != e && (h = e), this.syncWith([c.Z], I);
    }
    getState() {
        return h;
    }
    hasPendingUsage() {
        return h.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return m;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null !== (n = m.getScore(E(e, t))) && void 0 !== n ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return m.frequently;
    }
}
_(T, 'displayName', 'ApplicationCommandFrecencyStore'), _(T, 'persistKey', 'ApplicationCommandFrecencyV2');
let b = new T(o.Z, {
    APPLICATION_COMMAND_USED: y,
    USER_SETTINGS_PROTO_UPDATE: v
});
