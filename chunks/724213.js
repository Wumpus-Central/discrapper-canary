n.d(t, {
    hi: () => u,
    kH: () => b,
    rz: () => p,
}),
    n(997841),
    n(388685),
    n(539854);
var a = n(95015);
n(524437);
var r = n(549817);
n(581883);
var l = n(984933),
    i = n(271383),
    o = n(9156),
    c = n(152376),
    d = n(398758),
    s = n(372897);
function u(e) {
    var t, n;
    let r = (0, d.r1)(e),
        l = null != (n = null == (t = i.ZP.getSelfMember(e)) ? void 0 : t.flags) ? n : 0,
        c = (0, a.yE)(l, s.q.COMPLETED_ONBOARDING),
        u = o.ZP.getOptedInChannels(e).size > 0;
    return !r && !c && !u;
}
function b(e) {
    if (u(e)) return void p(e);
    {
        let t = (0, d.r1)(e);
        (0, c.QG)(e, !t);
    }
}
function p(e) {
    let { include: t = new Set(), exclude: n = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
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
