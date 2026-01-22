n.d(t, {
    A: () => l,
}),
    n(896048);
var r = n(835245),
    i = n(822382);

function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}

function o() {
    return {
        sessionId: (0, r.A)(),
        searchQueryId: null,
    };
}
class l {
    getSession(e) {
        var t;
        return null != (t = this.sessions.get((0, i.bS)(e))) ? t : null;
    }
    setSession(e, t) {
        var n;
        let r = (0, i.bS)(e),
            a = null != (n = this.sessions.get(r)) ? n : o();
        this.sessions.set(r, s({}, a, t));
    }
    deleteSession(e) {
        this.sessions.delete((0, i.bS)(e));
    }
    getSessionId(e) {
        var t, n;
        return null != (t = null == (n = this.getSession(e)) ? void 0 : n.sessionId) ? t : null;
    }
    getQueryId(e) {
        var t, n;
        return null != (t = null == (n = this.getSession(e)) ? void 0 : n.searchQueryId) ? t : null;
    }
    refreshQueryId(e) {
        this.setSession(e, {
            searchQueryId: (0, r.A)(),
        });
    }
    initialize(e) {
        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        this._initialize(e, ...n),
            this.setSession(e, {
                sessionId: (0, r.A)(),
                searchQueryId: null,
            });
    }
    terminate(e) {
        this._terminate(e), this.deleteSession(e);
    }
    transferSession(e, t) {
        this._transferSession(e, t);
        let n = this.getSession(e);
        this.sessions.set((0, i.bS)(t), null != n ? n : o()), this.deleteSession(e);
    }
    constructor() {
        a(this, "sessions", new Map());
    }
}
