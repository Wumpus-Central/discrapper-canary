n.d(t, {
    Lu: () => f,
    cE: () => u,
    le: () => b,
}),
    n(938796),
    n(896048),
    n(321073);
var l = n(665260);
n(873298);
var r = n(669953);
n(617617);
var i = n(808728),
    a = n(696451),
    s = n(543465),
    c = n(816662),
    d = n(395504),
    o = n(340837);
function u(e) {
    var t, n;
    let r = (0, d.WW)(e),
        i = null != (t = null == (n = a.Ay.getSelfMember(e)) ? void 0 : n.flags) ? t : 0,
        c = (0, l.Lt)(i, o.D.COMPLETED_ONBOARDING),
        u = s.Ay.getOptedInChannels(e).size > 0;
    return !r && !c && !u;
}
function f(e) {
    if (u(e)) return void b(e);
    {
        let t = (0, d.WW)(e);
        (0, c.e4)(e, !t);
    }
}
function b(e) {
    let { include: t = new Set(), exclude: n = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = i.Ay.getChannels(e),
        a = [...l[i.I6], ...l[i.vM]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !n.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    t.forEach((e) => a.push(e)), r.A.onboardExistingMember(e, new Set(a));
}
