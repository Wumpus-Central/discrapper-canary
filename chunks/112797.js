s.d(e, { CT: () => r });
var n = s(101284),
    i = s(394798);
function r(t, e = {}) {
    if ((e.user && (!t.ipAddress && e.user.ip_address && (t.ipAddress = e.user.ip_address), t.did || e.did || (t.did = e.user.id || e.user.email || e.user.username)), (t.timestamp = e.timestamp || (0, n.ph)()), e.abnormal_mechanism && (t.abnormal_mechanism = e.abnormal_mechanism), e.ignoreDuration && (t.ignoreDuration = e.ignoreDuration), e.sid && (t.sid = 32 === e.sid.length ? e.sid : (0, i.DM)()), void 0 !== e.init && (t.init = e.init), !t.did && e.did && (t.did = `${e.did}`), 'number' == typeof e.started && (t.started = e.started), t.ignoreDuration)) t.duration = void 0;
    else if ('number' == typeof e.duration) t.duration = e.duration;
    else {
        let e = t.timestamp - t.started;
        t.duration = e >= 0 ? e : 0;
    }
    e.release && (t.release = e.release), e.environment && (t.environment = e.environment), !t.ipAddress && e.ipAddress && (t.ipAddress = e.ipAddress), !t.userAgent && e.userAgent && (t.userAgent = e.userAgent), 'number' == typeof e.errors && (t.errors = e.errors), e.status && (t.status = e.status);
}
