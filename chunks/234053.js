n.d(t, { Lu: () => _, cE: () => u, le: () => h }), n(938796), n(321073);
var l = n(665260);
n(873298);
var i = n(669953);
n(617617);
var s = n(808728),
    a = n(696451),
    r = n(543465),
    d = n(816662),
    c = n(395504),
    o = n(340837);
function u(e) {
    let t = (0, c.WW)(e),
        n = a.Ay.getSelfMember(e)?.flags ?? 0,
        i = (0, l.Lt)(n, o.D.COMPLETED_ONBOARDING),
        s = r.Ay.getOptedInChannels(e).size > 0;
    return !t && !i && !s;
}
function _(e) {
    if (u(e)) return void h(e);
    {
        let t = (0, c.WW)(e);
        (0, d.e4)(e, !t);
    }
}
function h(e) {
    let { include: t = new Set(), exclude: n = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = s.Ay.getChannels(e),
        a = [...l[s.I6], ...l[s.vM]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !n.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    t.forEach((e) => a.push(e)), i.A.onboardExistingMember(e, new Set(a));
}
