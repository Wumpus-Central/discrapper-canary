"use strict";
n.d(t, { Cf: () => E, PI: () => I, Vv: () => A, o$: () => _, tp: () => h, zU: () => u });
var i = n(687123),
    r = n(17928),
    a = n(36149),
    s = n(207560),
    l = n(734057),
    o = n(576705),
    d = n(309010),
    c = n(818348);
function u() {
    let e = (0, a.yM)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && e;
}
function _() {
    let e = (0, a.NI)();
    return (0, s.d6)(i.t.STAGE_SPEAKING) && e;
}
function E(e) {
    let t = (0, a.$8)(),
        n = null != e ? e : d.Ay.getChannelId(),
        r = null != n ? l.A.getChannel(n) : null,
        u = null != r && o.A.can(c.xB.REQUEST_TO_SPEAK, r);
    return (0, s.d6)(i.t.STAGE_SPEAKING) && !t && u;
}
function A(e) {
    let t = null != e ? e : d.Ay.getChannelId(),
        n = (0, r.bG)([o.A, l.A], () => {
            let e = null != t ? l.A.getChannel(t) : null;
            return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        u = (0, a.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !u && n;
}
function h(e) {
    let t = null != e ? e : d.Ay.getChannelId(),
        n = (0, r.bG)([o.A, l.A], () => {
            let e = null != t ? l.A.getChannel(t) : null;
            return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        u = (0, a.b8)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !u && n;
}
function I() {
    let e = (0, a.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !e;
}
