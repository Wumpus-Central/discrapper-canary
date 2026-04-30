n.d(t, { Cf: () => u, PI: () => T, Vv: () => A, o$: () => E, tp: () => I, zU: () => _ });
var i = n(687123),
    a = n(17928),
    r = n(36149),
    s = n(207560),
    l = n(734057),
    o = n(576705),
    d = n(309010),
    c = n(818348);
function _() {
    let e = (0, r.yM)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && e;
}
function E() {
    let e = (0, r.NI)();
    return (0, s.d6)(i.t.STAGE_SPEAKING) && e;
}
function u(e) {
    let t = (0, r.$8)(),
        n = null != e ? e : d.A.getChannelId(),
        a = null != n ? l.A.getChannel(n) : null,
        _ = null != a && o.A.can(c.xB.REQUEST_TO_SPEAK, a);
    return (0, s.d6)(i.t.STAGE_SPEAKING) && !t && _;
}
function A(e) {
    let t = null != e ? e : d.A.getChannelId(),
        n = (0, a.bG)([o.A, l.A], () => {
            let e = null != t ? l.A.getChannel(t) : null;
            return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        _ = (0, r.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !_ && n;
}
function I(e) {
    let t = null != e ? e : d.A.getChannelId(),
        n = (0, a.bG)([o.A, l.A], () => {
            let e = null != t ? l.A.getChannel(t) : null;
            return null != e && o.A.can(c.xB.REQUEST_TO_SPEAK, e);
        }, [t]),
        _ = (0, r.b8)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !_ && n;
}
function T() {
    let e = (0, r.uE)();
    return (0, s.aX)(i.t.STAGE_SPEAKING) && !e;
}
