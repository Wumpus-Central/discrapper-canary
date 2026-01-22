n.d(t, { A: () => _ });
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(961350);
function c(e, t, n) {
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
let u = Object.freeze([]),
    d = {};
function f(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class p extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(l.default);
    }
    getSessions() {
        return d;
    }
    getSession() {
        let e = l.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = l.default.getSessionId(),
            t = a().find(d, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : u;
    }
    getHiddenActivities() {
        let e = l.default.getSessionId(),
            t = a().find(d, (t) => t.active && t.sessionId !== e);
        return null != t && null != t.hiddenActivities ? t.hiddenActivities : u;
    }
    getSessionById(e) {
        return d[e];
    }
    getActiveSession() {
        return a().find(d, (e) => {
            let { active: t } = e;
            return t;
        });
    }
    getRemoteApplicationActivity(e) {
        var t;
        if (null == e) return null;
        let n = l.default.getSessionId(),
            r = a().find(d, (e) => e.active && e.sessionId !== n);
        if (null == r) return null;
        let i = r.activities.find((t) => t.application_id === e);
        return null != i ? i : null == (t = r.hiddenActivities) ? void 0 : t.find((t) => t.application_id === e);
    }
}
c(p, "displayName", "SessionsStore");
let _ = new p(o.h, {
    CONNECTION_OPEN: f,
    SESSIONS_REPLACE: f,
});
