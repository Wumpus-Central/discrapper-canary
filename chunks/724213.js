n.d(t, {
    hi: () => u,
    kH: () => m,
    rz: () => h
}),
    n(997841),
    n(388685),
    n(539854),
    n(524437);
var r = n(549817);
n(581883);
var l = n(984933),
    a = n(271383),
    i = n(9156),
    o = n(630388),
    s = n(152376),
    c = n(398758),
    d = n(372897);
function u(e) {
    var t, n;
    let r = (0, c.r1)(e),
        l = null != (n = null == (t = a.ZP.getSelfMember(e)) ? void 0 : t.flags) ? n : 0,
        s = (0, o.yE)(l, d.q.COMPLETED_ONBOARDING),
        u = i.ZP.getOptedInChannels(e).size > 0;
    return !r && !s && !u;
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
        a = l.ZP.getChannels(e),
        i = [...a[l.sH], ...a[l.Zb]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !n.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    t.forEach((e) => i.push(e)), r.Z.onboardExistingMember(e, new Set(i));
}
