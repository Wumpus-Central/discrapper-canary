r.d(t, {
    hi: () => b,
    kH: () => O,
    rz: () => f
}),
    r(789020),
    r(47120),
    r(653041),
    r(524437);
var n = r(549817);
r(581883);
var i = r(984933),
    o = r(271383),
    l = r(9156),
    c = r(630388),
    a = r(152376),
    u = r(398758),
    s = r(372897);
function b(e) {
    var t, r;
    let n = (0, u.r1)(e),
        i = null != (r = null == (t = o.ZP.getSelfMember(e)) ? void 0 : t.flags) ? r : 0,
        a = (0, c.yE)(i, s.q.COMPLETED_ONBOARDING),
        b = l.ZP.getOptedInChannels(e).size > 0;
    return !n && !a && !b;
}
function O(e) {
    if (b(e)) return void f(e);
    {
        let t = (0, u.r1)(e);
        (0, a.QG)(e, !t);
    }
}
function f(e) {
    let { include: t = new Set(), exclude: r = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        o = i.ZP.getChannels(e),
        l = [...o[i.sH], ...o[i.Zb]]
            .filter((e) => {
                let { channel: t } = e;
                return !t.isThread() && !r.has(t.id);
            })
            .map((e) => {
                let { channel: t } = e;
                return t.id;
            });
    t.forEach((e) => l.push(e)), n.Z.onboardExistingMember(e, new Set(l));
}
