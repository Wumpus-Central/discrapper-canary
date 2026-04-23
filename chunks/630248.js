"use strict";
n.d(t, { A: () => g }), n(321073);
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(155718),
    l = n(283047),
    u = n(933958),
    c = n(617617);
n(705751);
var d = n(355097);
let _ = [o.kc.CHAT, o.kc.PRIMARY_ENTRY_POINT],
    f = { pendingUsages: [] },
    p = new l.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function h(e) {
    f.pendingUsages.push({ key: e, timestamp: Date.now() }), p.track(e), p.compute();
}
function E() {
    let e = c.A.frecencyWithoutFetchingLatest,
        t = e.applicationFrecency?.applications ?? {};
    p.overwriteHistory(
        i().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        f.pendingUsages,
    );
}
class m extends s.Ay.PersistedStore {
    static displayName = "ApplicationFrecencyStore";
    static persistKey = "ApplicationFrecency";
    initialize(e) {
        null != e && (f = e), this.waitFor(u.Ay, c.A), this.syncWith([c.A], E);
    }
    getState() {
        return f;
    }
    hasPendingUsage() {
        return f.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return p;
    }
    getScoreWithoutLoadingLatest(e) {
        return p.getScore(e) ?? 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return p.frequently;
    }
}
let g = new m(a.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        if (!_.includes(t.type) || u.Ay.getLaunchState(t.applicationId)?.isLaunching) return !1;
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
        if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        f.pendingUsages = [];
    },
});
