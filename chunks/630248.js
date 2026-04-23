"use strict";
n.d(t, { A: () => p }), n(321073);
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(155718),
    l = n(283047),
    d = n(933958),
    _ = n(617617);
n(705751);
var u = n(355097);
let c = [o.kc.CHAT, o.kc.PRIMARY_ENTRY_POINT],
    E = { pendingUsages: [] },
    h = new l.A({ computeBonus: () => 100, lookupKey: (e) => e, afterCompute: () => {}, numFrequentlyItems: 100 });
function m(e) {
    E.pendingUsages.push({ key: e, timestamp: Date.now() }), h.track(e), h.compute();
}
function f() {
    let e = _.A.frecencyWithoutFetchingLatest,
        t = e.applicationFrecency?.applications ?? {};
    h.overwriteHistory(
        r().mapValues(t, (e) => ({ ...e, recentUses: e.recentUses.map(Number).filter((e) => e > 0) })),
        E.pendingUsages,
    );
}
class g extends s.Ay.PersistedStore {
    static displayName = "ApplicationFrecencyStore";
    static persistKey = "ApplicationFrecency";
    initialize(e) {
        null != e && (E = e), this.waitFor(d.Ay, _.A), this.syncWith([_.A], f);
    }
    getState() {
        return E;
    }
    hasPendingUsage() {
        return E.pendingUsages.length > 0;
    }
    getApplicationFrecencyWithoutLoadingLatest() {
        return h;
    }
    getScoreWithoutLoadingLatest(e) {
        return h.getScore(e) ?? 0;
    }
    getTopApplicationsWithoutLoadingLatest() {
        return h.frequently;
    }
}
let p = new g(a.h, {
    APPLICATION_COMMAND_USED: function (e) {
        let { command: t } = e;
        if (!c.includes(t.type) || d.Ay.getLaunchState(t.applicationId)?.isLaunching) return !1;
        m(t.applicationId);
    },
    EMBEDDED_ACTIVITY_OPEN: function (e) {
        let { applicationId: t } = e;
        m(t);
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
