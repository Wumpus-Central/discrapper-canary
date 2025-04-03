n.d(t, {
    LU: () => y,
    ZP: () => N
}),
    n(47120),
    n(301563),
    n(653041);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(911969),
    c = n(704907),
    u = n(581883);
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = [l.yU.CHAT, l.yU.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    b = new c.ZP({
        computeBonus: () => 1,
        computeWeight: (e) => (e <= 3 ? 100 : e <= 15 ? 70 : e <= 30 ? 50 : e <= 45 ? 30 : e <= 80 ? 10 : 1),
        lookupKey: (e) => e,
        afterCompute: () => {},
        numFrequentlyItems: d.yP
    });
function y(e, t) {
    return e
        .filter((e) => {
            if (e.includes(':'))
                if ((null == t ? void 0 : t.guild) != null) return t.guild.id === e.split(':')[1];
                else return !1;
            return !0;
        })
        .map((e) => e.split(':')[0]);
}
function v(e, t) {
    return 0 > Number(t.id) ? t.id : (null == e ? void 0 : e.guild) != null && null != t.guildId ? ''.concat(t.id, ':').concat(e.guild.id) : t.id;
}
function O(e) {
    let {
        settings: { type: t },
        wasSaved: n
    } = e;
    if (t !== f.yP.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    E.pendingUsages = [];
}
function I(e) {
    let { command: t, context: n } = e;
    if (!g.includes(t.type)) return !1;
    let r = v(n, t);
    E.pendingUsages.push({
        key: r,
        timestamp: Date.now()
    }),
        b.track(r),
        b.compute();
}
function S() {
    var e, t;
    let n = null != (t = null == (e = u.Z.frecencyWithoutFetchingLatest.applicationCommandFrecency) ? void 0 : e.applicationCommands) ? t : {};
    b.overwriteHistory(
        o().mapValues(n, (e) => m(p({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        E.pendingUsages
    );
}
class T extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        null != e && (E = e), this.syncWith([u.Z], S);
    }
    getState() {
        return E;
    }
    hasPendingUsage() {
        return E.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return b;
    }
    getScoreWithoutLoadingLatest(e, t) {
        var n;
        return null != (n = b.getScore(v(e, t))) ? n : 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return b.frequently;
    }
}
_(T, 'displayName', 'ApplicationCommandFrecencyStore'), _(T, 'persistKey', 'ApplicationCommandFrecencyV2');
let N = new T(s.Z, {
    APPLICATION_COMMAND_USED: I,
    USER_SETTINGS_PROTO_UPDATE: O
});
