t.d(n, {
    hi: () => u,
    kH: () => m,
    rz: () => h
}),
    t(997841),
    t(388685),
    t(539854),
    t(524437);
var r = t(549817);
t(581883);
var l = t(984933),
    a = t(271383),
    i = t(9156),
    o = t(630388),
    s = t(152376),
    c = t(398758),
    d = t(372897);
function u(e) {
    var n, t;
    let r = (0, c.r1)(e),
        l = null != (t = null == (n = a.ZP.getSelfMember(e)) ? void 0 : n.flags) ? t : 0,
        s = (0, o.yE)(l, d.q.COMPLETED_ONBOARDING),
        u = i.ZP.getOptedInChannels(e).size > 0;
    return !r && !s && !u;
}
function m(e) {
    if (u(e)) return void h(e);
    {
        let n = (0, c.r1)(e);
        (0, s.QG)(e, !n);
    }
}
function h(e) {
    let { include: n = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = l.ZP.getChannels(e),
        i = [...a[l.sH], ...a[l.Zb]]
            .filter((e) => {
                let { channel: n } = e;
                return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            });
    n.forEach((e) => i.push(e)), r.Z.onboardExistingMember(e, new Set(i));
}
