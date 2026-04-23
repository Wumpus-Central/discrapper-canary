r.d(t, { A: () => a });
var n = r(835245),
    s = r(822382);
function l() {
    return { sessionId: (0, n.A)(), searchQueryId: null };
}
class a {
    sessions = new Map();
    getSession(e) {
        return this.sessions.get((0, s.bS)(e)) ?? null;
    }
    setSession(e, t) {
        let r = (0, s.bS)(e),
            n = this.sessions.get(r) ?? l();
        this.sessions.set(r, { ...n, ...t });
    }
    deleteSession(e) {
        this.sessions.delete((0, s.bS)(e));
    }
    getSessionId(e) {
        return this.getSession(e)?.sessionId ?? null;
    }
    getQueryId(e) {
        return this.getSession(e)?.searchQueryId ?? null;
    }
    refreshQueryId(e) {
        this.setSession(e, { searchQueryId: (0, n.A)() });
    }
    initialize(e) {
        for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++) r[s - 1] = arguments[s];
        this._initialize(e, ...r), this.setSession(e, { sessionId: (0, n.A)(), searchQueryId: null });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let r = this.getSession(e);
        this.sessions.set((0, s.bS)(t), r ?? l()), this.deleteSession(e);
    }
}
