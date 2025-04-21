t.d(n, {
    hi: () => u,
    kH: () => m,
    rz: () => h
}),
    t(997841),
    t(388685),
    t(539854),
    t(524437);
var l = t(549817);
t(581883);
var r = t(984933),
    i = t(271383),
    a = t(9156),
    o = t(630388),
    s = t(152376),
    c = t(398758),
    d = t(372897);
function u(e) {
    var n, t;
    let l = (0, c.r1)(e),
        r = null != (t = null == (n = i.ZP.getSelfMember(e)) ? void 0 : n.flags) ? t : 0,
        s = (0, o.yE)(r, d.q.COMPLETED_ONBOARDING),
        u = a.ZP.getOptedInChannels(e).size > 0;
    return !l && !s && !u;
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
        i = r.ZP.getChannels(e),
        a = [...i[r.sH], ...i[r.Zb]]
            .filter((e) => {
                let { channel: n } = e;
                return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            });
    n.forEach((e) => a.push(e)), l.Z.onboardExistingMember(e, new Set(a));
}
