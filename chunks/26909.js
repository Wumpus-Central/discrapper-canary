n.d(t, { Ay: () => I, RG: () => _ }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(283047),
    o = n(617617);
n(73510), n(705751);
var d = n(355097);
let c = { pendingUsages: [] },
    u = new l.A({ computeBonus: () => 1, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
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
function E(e, t) {
    return 0 > Number(t.id) ? t.id : e?.guild != null && null != t.guildId ? `${t.id}:${e.guild.id}` : t.id;
}
function A() {
    let e = o.A.frecencyWithoutFetchingLatest,
        t = e.applicationCommandFrecency?.applicationCommands ?? {};
    u.overwriteHistory(
        r().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        c.pendingUsages,
    );
}
class h extends a.Ay.PersistedStore {
    static displayName = "ApplicationCommandFrecencyStore";
    static persistKey = "ApplicationCommandFrecencyV2";
    initialize(e) {
        null != e && (c = e), this.syncWith([o.A], A);
    }
    getState() {
        return c;
    }
    hasPendingUsage() {
        return c.pendingUsages.length > 0;
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
let I = new h(s.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t, context: n } = e,
            i = E(n, t);
        c.pendingUsages.push({ key: i, timestamp: Date.now() }), u.track(i), u.compute();
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        c.pendingUsages = [];
    },
});
