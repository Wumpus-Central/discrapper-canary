r.d(t, {
    hi: () => b,
    kH: () => p,
    rz: () => O,
}),
    r(997841),
    r(388685),
    r(539854),
    r(524437);
var n = r(549817);
r(581883);
var i = r(984933),
    l = r(271383),
    o = r(9156),
    c = r(630388),
    a = r(152376),
    u = r(398758),
    s = r(372897);
function b(e) {
    var t, r;
    let n = (0, u.r1)(e),
        i = null != (r = null == (t = l.ZP.getSelfMember(e)) ? void 0 : t.flags) ? r : 0,
        a = (0, c.yE)(i, s.q.COMPLETED_ONBOARDING),
        b = o.ZP.getOptedInChannels(e).size > 0;
    return !n && !a && !b;
}
function p(e) {
    if (b(e)) return void O(e);
    {
        let t = (0, u.r1)(e);
        (0, a.QG)(e, !t);
    }
}
function O(e) {
    let { include: t = new Set(), exclude: r = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        l = i.ZP.getChannels(e),
        o = [...l[i.sH], ...l[i.Zb]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !r.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    t.forEach((e) => o.push(e)), n.Z.onboardExistingMember(e, new Set(o));
}
