t.d(n, {
    hi: () => u,
    kH: () => h,
    rz: () => m
}),
    t(789020),
    t(47120),
    t(653041),
    t(524437);
var l = t(549817);
t(581883);
var i = t(984933),
    a = t(271383),
    r = t(9156),
    o = t(630388),
    s = t(152376),
    d = t(398758),
    c = t(372897);
function u(e) {
    var n, t;
    let l = (0, d.r1)(e),
        i = null !== (t = null === (n = a.ZP.getSelfMember(e)) || void 0 === n ? void 0 : n.flags) && void 0 !== t ? t : 0,
        s = (0, o.yE)(i, c.q.COMPLETED_ONBOARDING),
        u = r.ZP.getOptedInChannels(e).size > 0;
    return !l && !s && !u;
}
function h(e) {
    if (u(e)) {
        m(e);
        return;
    }
    {
        let n = (0, d.r1)(e);
        (0, s.QG)(e, !n);
    }
}
function m(e) {
    let { include: n = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = i.ZP.getChannels(e),
        r = [...a[i.sH], ...a[i.Zb]]
            .filter((e) => {
                let { channel: n } = e;
                return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
                let { channel: n } = e;
                return n.id;
            });
    n.forEach((e) => r.push(e)), l.Z.onboardExistingMember(e, new Set(r));
}
