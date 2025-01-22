r.d(n, {
    LU: function () {
        return y;
    }
});
var i,
    a = r(47120);
var o = r(653041);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(570140),
    d = r(911969),
    f = r(704907),
    p = r(581883);
r(689079);
var h = r(674563),
    _ = r(526761);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = [d.yU.CHAT, d.yU.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    v = new f.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: h.yP
    });
function y(e, n) {
    return e
        .filter((e) => {
            if (e.includes(':')) return (null == n ? void 0 : n.guild) != null && n.guild.id === e.split(':')[1];
            return !0;
        })
        .map((e) => e.split(':')[0]);
}
function b(e, n) {
    return 0 > Number(n.id) ? n.id : (null == e ? void 0 : e.guild) != null && null != n.guildId ? ''.concat(n.id, ':').concat(e.guild.id) : n.id;
}
function I(e) {
    let {
        settings: { type: n },
        wasSaved: r
    } = e;
    if (n !== _.yP.FRECENCY_AND_FAVORITES_SETTINGS || !r) return !1;
    E.pendingUsages = [];
}
function T(e) {
    let { command: n, context: r } = e;
    if (!g.includes(n.type)) return !1;
    let i = b(r, n);
    E.pendingUsages.push({
        key: i,
        timestamp: Date.now()
    }),
        v.track(i),
        v.compute();
}
function S() {
    var e, n;
    let r = null !== (n = null === (e = p.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) || void 0 === e ? void 0 : e.applicationCommands) && void 0 !== n ? n : {};
    v.overwriteHistory(
        l().mapValues(r, (e) => ({
            ...e,
            recentUses: e.recentUses.map(Number).filter((e) => e > 0)
        })),
        E.pendingUsages
    );
}
class A extends (i = u.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E = e), this.syncWith([p.Z], S);
    }
    getState() {
        return E;
    }
    hasPendingUsage() {
        return E.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return v;
    }
    getScoreWithoutLoadingLatest(e, n) {
        var r;
        return null !== (r = v.getScore(b(e, n))) && void 0 !== r ? r : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return v.frequently;
    }
}
m(A, 'displayName', 'ApplicationCommandFrecencyStore'),
    m(A, 'persistKey', 'ApplicationCommandFrecencyV2'),
    (n.ZP = new A(c.Z, {
        APPLICATION_COMMAND_USED: T,
        USER_SETTINGS_PROTO_UPDATE: I
    }));
