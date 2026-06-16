"use strict";
n.d(t, { A: () => g }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(155718),
    l = n(283047),
    u = n(933958),
    c = n(617617);
n(705751);
var d = n(355097);
let _ = [o.kc.CHAT, o.kc.PRIMARY_ENTRY_POINT],
    h = { pendingUsages: [] },
    f = new l.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function p(e) {
    h.pendingUsages.push({ key: e, timestamp: Date.now() }), f.track(e), f.compute();
}
function E() {
    let e = c.A.frecencyWithoutFetchingLatest,
        t = e.applicationFrecency?.applications ?? {};
    f.overwriteHistory(
        r().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        h.pendingUsages,
    );
}
class m extends s.Ay.PersistedStore {
    static displayName = "ApplicationFrecencyStore";
    static persistKey = "ApplicationFrecency";
    initialize(e) {
        null != e && (h = e), this.waitFor(u.Ay, c.A), this.syncWith([c.A], E);
    }
    getState() {
        return h;
    }
    hasPendingUsage() {
        return h.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return f;
    }
    getScoreWithoutLoadingLatest(e) {
        return f.getScore(e) ?? 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return f.frequently;
    }
}
let g = new m(a.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        if (!_.includes(t.type) || u.Ay.getLaunchState(t.applicationId)?.isLaunching) return !1;
        p(t.applicationId);
    },
    EMBEDDED_ACTIVITY_OPEN: function (e) {
        let { applicationId: t } = e;
        p(t);
    },
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let {
            settings: { type: t },
            wasSaved: n,
        } = e;
        if (t !== d.oD.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
        h.pendingUsages = [];
    },
});
