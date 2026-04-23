"use strict";
n.d(t, { Ay: () => E, RG: () => _ }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(283047),
    l = n(617617);
n(73510), n(705751);
var u = n(355097);
let c = { pendingUsages: [] },
    d = new o.A({ computeBonus: () => 1, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function _(e, t) {
    return e
        .filter((e) => {
            if (e.includes(":"))
                if (t?.guild != null) return t.guild.id === e.split(":")[1];
                else return !1;
            return !0;
        })
        .map((e) => e.split(":")[0]);
}
function f(e, t) {
    return 0 > Number(t.id) ? t.id : e?.guild != null && null != t.guildId ? `${t.id}:${e.guild.id}` : t.id;
}
function p() {
    let e = l.A.frecencyWithoutFetchingLatest,
        t = e.applicationCommandFrecency?.applicationCommands ?? {};
    d.overwriteHistory(
        i().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        c.pendingUsages,
    );
}
class h extends s.Ay.PersistedStore {
    static displayName = "ApplicationCommandFrecencyStore";
    static persistKey = "ApplicationCommandFrecencyV2";
    initialize(e) {
        null != e && (c = e), this.syncWith([l.A], p);
    }
    getState() {
        return c;
    }
    hasPendingUsage() {
        return c.pendingUsages.length > 0;
    }
    getCommandFrecencyWithoutLoadingLatest() {
        return d;
    }
    getScoreWithoutLoadingLatest(e, t) {
        return d.getScore(f(e, t)) ?? 0;
    }
    getTopCommandsWithoutLoadingLatest() {
        return d.frequently;
    }
}
let E = new h(a.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t, context: n } = e,
            r = f(n, t);
        c.pendingUsages.push({ key: r, timestamp: Date.now() }), d.track(r), d.compute();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== u.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        c.pendingUsages = [];
    },
});
