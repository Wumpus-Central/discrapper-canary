t.d(s, { A: () => h });
var i = t(132500),
    n = t(822382);
function S() {
    return { sessionId: (0, i.A)(), searchQueryId: null };
}
class h {
    sessions = new Map();
    getSession(e) {
        return this.sessions.get((0, n.bS)(e)) ?? null;
    }
    setSession(e, s) {
        let t = (0, n.bS)(e),
            i = this.sessions.get(t) ?? S();
        this.sessions.set(t, { ...i, ...s });
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
        this.setSession(e, { searchQueryId: (0, i.A)() });
    }
    initialize(e) {
        for (var s = arguments.length, t = Array(s > 1 ? s - 1 : 0), n = 1; n < s; n++) t[n - 1] = arguments[n];
        this._initialize(e, ...t), this.setSession(e, { sessionId: (0, i.A)(), searchQueryId: null });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, s) {
        this._transferSession(e, s);
        let t = this.getSession(e);
        this.sessions.set((0, n.bS)(s), t ?? S()), this.deleteSession(e);
    }
}
