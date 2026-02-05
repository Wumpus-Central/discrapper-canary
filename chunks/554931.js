r.d(t, { A: () => a });
var s = r(835245),
    n = r(822382);
function l() {
    return { sessionId: (0, s.A)(), searchQueryId: null };
}
class a {
    sessions = new Map();
    getSession(e) {
        return this.sessions.get((0, n.bS)(e)) ?? null;
    }
    setSession(e, t) {
        let r = (0, n.bS)(e),
            s = this.sessions.get(r) ?? l();
        this.sessions.set(r, { ...s, ...t });
    }
    deleteSession(e) {
        this.sessions.delete((0, n.bS)(e));
    }
    getSessionId(e) {
        return this.getSession(e)?.sessionId ?? null;
    }
    getQueryId(e) {
        return this.getSession(e)?.searchQueryId ?? null;
    }
    refreshQueryId(e) {
        this.setSession(e, { searchQueryId: (0, s.A)() });
    }
    initialize(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        this._initialize(e, ...r), this.setSession(e, { sessionId: (0, s.A)(), searchQueryId: null });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let r = this.getSession(e);
        this.sessions.set((0, n.bS)(t), r ?? l()), this.deleteSession(e);
    }
}
