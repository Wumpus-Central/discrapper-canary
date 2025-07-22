(n.d(t, {
    hi: () => u,
    kH: () => m,
    rz: () => h
}),
    n(997841),
    n(388685),
    n(539854),
    n(524437));
var l = n(549817);
n(581883);
var r = n(984933),
    i = n(271383),
    a = n(9156),
    o = n(630388),
    s = n(152376),
    c = n(398758),
    d = n(372897);
function u(e) {
    var t, n;
    let l = (0, c.r1)(e),
        r = null != (n = null == (t = i.ZP.getSelfMember(e)) ? void 0 : t.flags) ? n : 0,
        s = (0, o.yE)(r, d.q.COMPLETED_ONBOARDING),
        u = a.ZP.getOptedInChannels(e).size > 0;
    return !l && !s && !u;
}
function m(e) {
    if (u(e)) return void h(e);
    {
        let t = (0, c.r1)(e);
        (0, s.QG)(e, !t);
    }
}
function h(e) {
    let { include: t = new Set(), exclude: n = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        i = r.ZP.getChannels(e),
        a = [...i[r.sH], ...i[r.Zb]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !n.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    (t.forEach((e) => a.push(e)), l.Z.onboardExistingMember(e, new Set(a)));
}
