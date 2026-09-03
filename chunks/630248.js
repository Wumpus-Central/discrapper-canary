n.d(t, { A: () => p }), n(321073);
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(155718),
    o = n(283047),
    d = n(933958),
    c = n(617617);
n(705751);
var u = n(355097);
let _ = [l.kc.CHAT, l.kc.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    A = new o.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function h(e) {
    E.pendingUsages.push({ key: e, timestamp: Date.now() }), A.track(e), A.compute();
}
function I() {
    let e = c.A.frecencyWithoutFetchingLatest,
        t = e.applicationFrecency?.applications ?? {};
    A.overwriteHistory(
        r().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        E.pendingUsages,
    );
}
class f extends a.Ay.PersistedStore {
    static displayName = "ApplicationFrecencyStore";
    static persistKey = "ApplicationFrecency";
    initialize(e) {
        null != e && (E = e), this.waitFor(d.Ay, c.A), this.syncWith([c.A], I);
    }
    getState() {
        return E;
    }
    hasPendingUsage() {
        return E.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return A;
    }
    getScoreWithoutLoadingLatest(e) {
        return A.getScore(e) ?? 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return A.frequently;
    }
}
let p = new f(s.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        if (!_.includes(t.type) || d.Ay.getLaunchState(t.applicationId)?.isLaunching) return !1;
        h(t.applicationId);
    },
    EMBEDDED_ACTIVITY_OPEN: function (e) {
        let { applicationId: t } = e;
        h(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== u.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        E.pendingUsages = [];
    },
});
