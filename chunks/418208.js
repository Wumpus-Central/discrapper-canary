"use strict";
n.d(t, { Cf: () => f, PI: () => m, Vv: () => p, o$: () => _, tp: () => h, zU: () => d });
var r = n(687123),
    i = n(311907),
    s = n(36149),
    a = n(207560),
    o = n(734057),
    l = n(576705),
    u = n(309010),
    c = n(818348);
function d() {
    let e = (0, s.yM)();
    return (0, a.aX)(r.t.STAGE_SPEAKING) && e;
}
function _() {
    let e = (0, s.NI)();
    return (0, a.d6)(r.t.STAGE_SPEAKING) && e;
}
function f(e) {
    let t = (0, s.$8)(),
        n = null != e ? e : u.A.getChannelId(),
        i = null != n ? o.A.getChannel(n) : null,
        d = null != i && l.A.can(c.xB.REQUEST_TO_SPEAK, i);
    return (0, a.d6)(r.t.STAGE_SPEAKING) && !t && d;
}
function p(e) {
    let t = null != e ? e : u.A.getChannelId(),
        n = (0, i.bG)([l.A, o.A], () => {
            let e = null != t ? o.A.getChannel(t) : null;
            return null != e && l.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        d = (0, s.uE)();
    return (0, a.aX)(r.t.STAGE_SPEAKING) && !d && n;
}
function h(e) {
    let t = null != e ? e : u.A.getChannelId(),
        n = (0, i.bG)([l.A, o.A], () => {
            let e = null != t ? o.A.getChannel(t) : null;
            return null != e && l.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        d = (0, s.b8)();
    return (0, a.aX)(r.t.STAGE_SPEAKING) && !d && n;
}
function m() {
    let e = (0, s.uE)();
    return (0, a.aX)(r.t.STAGE_SPEAKING) && !e;
}
