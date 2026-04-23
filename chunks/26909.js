"use strict";
n.d(t, { Ay: () => f, RG: () => c }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(283047),
    l = n(617617);
n(73510), n(705751);
var d = n(355097);
let _ = { pendingUsages: [] },
    u = new o.A({ computeBonus: () => 1, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function c(e, t) {
    return e
        .filter((e) => {
            if (e.includes(":"))
                if (t?.guild != null) return t.guild.id === e.split(":")[1];
                else return !1;
            return !0;
        })
        .map((e) => e.split(":")[0]);
}
function E(e, t) {
    return 0 > Number(t.id) ? t.id : e?.guild != null && null != t.guildId ? `${t.id}:${e.guild.id}` : t.id;
}
function h() {
    let e = l.A.frecencyWithoutFetchingLatest,
        t = e.applicationCommandFrecency?.applicationCommands ?? {};
    u.overwriteHistory(
        r().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        _.pendingUsages,
    );
}
class m extends s.Ay.PersistedStore {
    static displayName = "ApplicationCommandFrecencyStore";
    static persistKey = "ApplicationCommandFrecencyV2";
    initialize(e) {
        null != e && (_ = e), this.syncWith([l.A], h);
    }
    getState() {
        return _;
    }
    hasPendingUsage() {
        return _.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return u;
    }
    getScoreWithoutLoadingLatest(e, t) {
        return u.getScore(E(e, t)) ?? 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return u.frequently;
    }
}
let f = new m(a.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t, context: n } = e,
            i = E(n, t);
        _.pendingUsages.push({ key: i, timestamp: Date.now() }), u.track(i), u.compute();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        _.pendingUsages = [];
    },
});
