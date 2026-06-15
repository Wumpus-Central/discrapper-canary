"use strict";
n.d(t, { qO: () => s });
var i = n(83220),
    r = n(231577);
function s(e, t = {}) {
    if (
        (t.user &&
            (!e.ipAddress && t.user.ip_address && (e.ipAddress = t.user.ip_address),
            e.did || t.did || (e.did = t.user.id || t.user.email || t.user.username)),
        (e.timestamp = t.timestamp || (0, i.zf)()),
        t.abnormal_mechanism && (e.abnormal_mechanism = t.abnormal_mechanism),
        t.ignoreDuration && (e.ignoreDuration = t.ignoreDuration),
        t.sid && (e.sid = 32 === t.sid.length ? t.sid : (0, r.eJ)()),
        void 0 !== t.init && (e.init = t.init),
        !e.did && t.did && (e.did = `${t.did}`),
        "number" == typeof t.started && (e.started = t.started),
        e.ignoreDuration)
    )
        e.duration = void 0;
    else if ("number" == typeof t.duration) e.duration = t.duration;
    else {
        let t = e.timestamp - e.started;
        e.duration = t >= 0 ? t : 0;
    }
    t.release && (e.release = t.release),
        t.environment && (e.environment = t.environment),
        !e.ipAddress && t.ipAddress && (e.ipAddress = t.ipAddress),
        !e.userAgent && t.userAgent && (e.userAgent = t.userAgent),
        "number" == typeof t.errors && (e.errors = t.errors),
        t.status && (e.status = t.status);
}
