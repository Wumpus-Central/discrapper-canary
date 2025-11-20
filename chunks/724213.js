t.d(n, {
    hi: () => u,
    kH: () => p,
    rz: () => h,
}),
    t(997841),
    t(388685),
    t(539854);
var r = t(95015);
t(524437);
var l = t(549817);
t(581883);
var i = t(984933),
    a = t(271383),
    o = t(9156),
    s = t(152376),
    c = t(398758),
    d = t(372897);
function u(e) {
    var n, t;
    let l = (0, c.r1)(e),
        i = null != (t = null == (n = a.ZP.getSelfMember(e)) ? void 0 : n.flags) ? t : 0,
        s = (0, r.yE)(i, d.q.COMPLETED_ONBOARDING),
        u = o.ZP.getOptedInChannels(e).size > 0;
    return !l && !s && !u;
}
function p(e) {
    if (u(e)) return void h(e);
    {
        let n = (0, c.r1)(e);
        (0, s.QG)(e, !n);
    }
}
function h(e) {
    let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        r = i.ZP.getChannels(e),
        a = [...r[i.sH], ...r[i.Zb]]
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
