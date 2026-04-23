n.d(t, { Cf: () => u, PI: () => T, Vv: () => I, o$: () => c, tp: () => A, zU: () => d });
var i = n(687123),
    r = n(17928),
    a = n(36149),
    s = n(207560),
    _ = n(734057),
    l = n(576705),
    o = n(309010),
    E = n(818348);
function d() {
    let e = (0, a.yM)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && e;
}
function c() {
    let e = (0, a.NI)();
    return (0, s.d6)(i.t.STAGE_SPEAKING) && e;
}
function u(e) {
    let t = (0, a.$8)(),
        n = null != e ? e : o.A.getChannelId(),
        r = null != n ? _.A.getChannel(n) : null,
        d = null != r && l.A.can(E.xB.REQUEST_TO_SPEAK, r);
    return (0, s.d6)(i.t.STAGE_SPEAKING) && !t && d;
}
function I(e) {
    let t = null != e ? e : o.A.getChannelId(),
        n = (0, r.bG)([l.A, _.A], () => {
            let e = null != t ? _.A.getChannel(t) : null;
            return null != e && l.A.can(E.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        d = (0, a.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !d && n;
}
function A(e) {
    let t = null != e ? e : o.A.getChannelId(),
        n = (0, r.bG)([l.A, _.A], () => {
            let e = null != t ? _.A.getChannel(t) : null;
            return null != e && l.A.can(E.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        d = (0, a.b8)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !d && n;
}
function T() {
    let e = (0, a.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !e;
}
