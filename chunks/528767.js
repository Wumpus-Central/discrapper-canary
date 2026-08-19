"use strict";
n.d(t, { A: () => _ });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(280450);
let o = Object.freeze([]),
    d = {};
function c(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class u extends a.Ay.Store {
    static displayName = "SessionsStore";
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
            t = r().find(d, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : o;
    }
    getHiddenActivities() {
        let e = l.default.getSessionId(),
            t = r().find(d, (t) => t.active && t.sessionId !== e);
        return null != t && null != t.hiddenActivities ? t.hiddenActivities : o;
    }
    getSessionById(e) {
        return d[e];
    }
    getActiveSession() {
        return r().find(d, (e) => {
            let { active: t } = e;
            return t;
        });
    }
    getRemoteApplicationActivity(e) {
        if (null == e) return null;
        let t = l.default.getSessionId(),
            n = r().find(d, (e) => e.active && e.sessionId !== t);
        if (null == n) return null;
        let i = n.activities.find((t) => t.application_id === e);
        return null != i ? i : n.hiddenActivities?.find((t) => t.application_id === e);
    }
}
let _ = new u(s.h, { CONNECTION_OPEN: c, SESSIONS_REPLACE: c });
