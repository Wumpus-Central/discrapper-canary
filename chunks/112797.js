a.d(e, {
    CT: () => i,
    Hv: () => o,
    RJ: () => c
});
var r = a(101284),
    n = a(394798),
    _ = a(370336);
function o(t) {
    let e = (0, r.ph)(),
        a = {
            sid: (0, n.DM)(),
            init: !0,
            timestamp: e,
            started: e,
            duration: 0,
            status: 'ok',
            errors: 0,
            ignoreDuration: !1,
            toJSON: () => {
                var t;
                return (
                    (t = a),
                    (0, _.Jr)({
                        sid: `${t.sid}`,
                        init: t.init,
                        started: new Date(1000 * t.started).toISOString(),
                        timestamp: new Date(1000 * t.timestamp).toISOString(),
                        status: t.status,
                        errors: t.errors,
                        did: 'number' == typeof t.did || 'string' == typeof t.did ? `${t.did}` : void 0,
                        duration: t.duration,
                        abnormal_mechanism: t.abnormal_mechanism,
                        attrs: {
                            release: t.release,
                            environment: t.environment,
                            ip_address: t.ipAddress,
                            user_agent: t.userAgent
                        }
                    })
                );
            }
        };
    return t && i(a, t), a;
}
function i(t, e = {}) {
    if ((e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), (t.timestamp = e.timestamp || (0, r.ph)()), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, n.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), 'number' == typeof e.started && (t.started = e.started), t.ignoreDuration)) t.duration = void 0;
    else if ('number' == typeof e.duration) t.duration = e.duration;
    else {
        let e = t.timestamp - t.started;
        t.duration = e >= 0 ? e : 0;
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), 'number' == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status);
}
function c(t, e) {
    let a = {};
    e ? (a = { status: e }) : 'ok' === t.status && (a = { status: 'exited' }), i(t, a);
}
