"use strict";
n.d(t, { A: () => _ });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(73153),
    o = n(961350);
let l = Object.freeze([]),
    u = {};
function c(e) {
    (u = {}),
        e.sessions.forEach((e) => {
            u[e.sessionId] = e;
        });
}
class d extends s.Ay.Store {
    static displayName = "SessionsStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSessions() {
        return u;
    }
    getSession() {
        let e = o.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = o.default.getSessionId(),
            t = i().find(u, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : l;
    }
    getHiddenActivities() {
        let e = o.default.getSessionId(),
            t = i().find(u, (t) => t.active && t.sessionId !== e);
        return null != t && null != t.hiddenActivities ? t.hiddenActivities : l;
    }
    getSessionById(e) {
        return u[e];
    }
    getActiveSession() {
        return i().find(u, (e) => {
            let { active: t } = e;
            return t;
        });
    }
    getRemoteApplicationActivity(e) {
        if (null == e) return null;
        let t = o.default.getSessionId(),
            n = i().find(u, (e) => e.active && e.sessionId !== t);
        if (null == n) return null;
        let r = n.activities.find((t) => t.application_id === e);
        return null != r ? r : n.hiddenActivities?.find((t) => t.application_id === e);
    }
}
let _ = new d(a.h, { CONNECTION_OPEN: c, SESSIONS_REPLACE: c });
