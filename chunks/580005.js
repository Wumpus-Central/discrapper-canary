n.d(t, {
    C: () => v,
    Z: () => D,
}),
    n(35282),
    n(539854);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(704907),
    c = n(581883),
    u = n(592125),
    d = n(430824),
    f = n(944486),
    p = n(914010),
    _ = n(981631),
    m = n(526761);
function h(e, t, n) {
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
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 10,
    O = 100,
    v = 100,
    S = new l.Z({
        computeBonus: () => O,
        computeWeight: (e) => {
            let t = 1;
            return (
                0 === e
                    ? (t = 100)
                    : e >= 1 && e < 2
                      ? (t = 70)
                      : e >= 2 && e < 4
                        ? (t = 50)
                        : e >= 4 && e < 7
                          ? (t = 30)
                          : e >= 7 && (t = 10),
                t
            );
        },
        lookupKey: (e) => {
            var t, n;
            return null != (n = null != (t = d.Z.getGuild(e)) ? t : u.Z.getChannel(e))
                ? n
                : u.Z.getChannel(u.Z.getDMFromUserId(e));
        },
        afterCompute: () => {},
        numFrequentlyItems: v,
        maxSamples: y,
    }),
    I = null,
    T = null;
function A(e) {
    let { guildId: t, channelId: n } = e,
        r = !1;
    return (
        n !== I &&
            ((I = null != n ? n : null),
            null != n &&
                _.Xyh.test(n) &&
                ((r = !0),
                S.track(n),
                P.pendingUsages.push({
                    key: n,
                    timestamp: Date.now(),
                }))),
        t !== T &&
            ((T = null != t ? t : null),
            null != t &&
                _.Xyh.test(t) &&
                ((r = !0),
                S.track(t),
                P.pendingUsages.push({
                    key: t,
                    timestamp: Date.now(),
                }))),
        r
    );
}
function C(e) {
    let {
        settings: { type: t },
        wasSaved: n,
    } = e;
    return t === m.yP.FRECENCY_AND_FAVORITES_SETTINGS && !!n && ((P.pendingUsages = []), !0);
}
function N() {
    var e;
    let t = null == (e = c.Z.frecencyWithoutFetchingLatest.guildAndChannelFrecency) ? void 0 : e.guildAndChannels;
    if (null == t) return !1;
    S.overwriteHistory(
        a().mapValues(t, (e) => b(g({}, e), { recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        P.pendingUsages,
    );
}
let P = { pendingUsages: [] };
class R extends (r = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(u.Z, d.Z, f.Z, p.Z, c.Z),
            null != e && ((e.pendingUsages = e.pendingUsages.filter((e) => null != e && _.Xyh.test(e.key))), (P = e)),
            this.syncWith([c.Z], N);
    }
    getState() {
        return P;
    }
    hasPendingUsage() {
        return P.pendingUsages.length > 0;
    }
    get frecencyWithoutFetchingLatest() {
        return S;
    }
    getFrequentlyWithoutFetchingLatest() {
        return S.frequently;
    }
    getScoreWithoutFetchingLatest(e) {
        var t;
        return null != (t = S.getFrecency(e)) ? t : 0;
    }
    getScoreForDMWithoutFetchingLatest(e) {
        let t = u.Z.getDMFromUserId(e);
        return null != t ? this.getScoreWithoutFetchingLatest(t) : 0;
    }
    getMaxScore() {
        return v * y;
    }
    getBonusScore() {
        return O;
    }
}
h(R, "displayName", "FrecencyStore"), h(R, "persistKey", "FrecencyStore");
let D = new R(s.Z, {
    CHANNEL_SELECT: A,
    VOICE_CHANNEL_SELECT: A,
    USER_SETTINGS_PROTO_UPDATE: C,
});
