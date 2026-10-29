let i, a;
t.r(n);
var o = t(830215),
    r = t(403010),
    s = t(569745),
    d = t(280450);
((i = 0),
    (a = window.setInterval(() => {
        if (((i += 1), r.A.isConnected() || r.A.isTryingToConnect() || i > 20)) return void window.clearInterval(a);
        let e = d.default.getToken();
        null != e && (0, s.Q)(window.location.pathname) && (window.clearInterval(a), o.A.startSession(e));
    }, 500)));
