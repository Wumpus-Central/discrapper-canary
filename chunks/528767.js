"use strict";
n.d(t, { A: () => c });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(495544);
let l = Object.freeze([]),
    d = {};
function _(e) {
    (d = {}),
        e.sessions.forEach((e) => {
            d[e.sessionId] = e;
        });
}
class u extends s.Ay.Store {
    static displayName = "SessionsStore";
    initialize() {
        this.waitFor(o.default);
    }
    getSessions() {
        return d;
    }
    getSession() {
        let e = o.default.getSessionId();
        return null != e ? this.getSessionById(e) : null;
    }
    getRemoteActivities() {
        let e = o.default.getSessionId(),
            t = r().find(d, (t) => t.active && t.sessionId !== e);
        return null != t ? t.activities : l;
    }
    getHiddenActivities() {
        let e = o.default.getSessionId(),
            t = r().find(d, (t) => t.active && t.sessionId !== e);
        return null != t && null != t.hiddenActivities ? t.hiddenActivities : l;
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
        let t = o.default.getSessionId(),
            n = r().find(d, (e) => e.active && e.sessionId !== t);
        if (null == n) return null;
        let i = n.activities.find((t) => t.application_id === e);
        return null != i ? i : n.hiddenActivities?.find((t) => t.application_id === e);
    }
}
let c = new u(a.h, { CONNECTION_OPEN: _, SESSIONS_REPLACE: _ });
