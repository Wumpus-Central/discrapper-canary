t.d(e, {
    hi: function () {
        return s;
    },
    kH: function () {
        return g;
    },
    rz: function () {
        return I;
    }
}),
    t(789020),
    t(47120),
    t(653041),
    t(524437);
var i = t(549817);
t(581883);
var l = t(984933),
    a = t(271383),
    r = t(9156),
    o = t(630388),
    u = t(152376),
    d = t(398758),
    c = t(372897);
function s(n) {
    var e, t;
    let i = (0, d.r1)(n),
        l = null !== (t = null === (e = a.ZP.getSelfMember(n)) || void 0 === e ? void 0 : e.flags) && void 0 !== t ? t : 0,
        u = (0, o.yE)(l, c.q.COMPLETED_ONBOARDING),
        s = r.ZP.getOptedInChannels(n).size > 0;
    return !i && !u && !s;
}
function g(n) {
    if (s(n)) {
        I(n);
        return;
    }
    {
        let e = (0, d.r1)(n);
        (0, u.QG)(n, !e);
    }
}
function I(n) {
    let { include: e = new Set(), exclude: t = new Set() } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = l.ZP.getChannels(n),
        r = [...a[l.sH], ...a[l.Zb]]
            .filter((n) => {
                let { channel: e } = n;
                return !e.isThread() && !t.has(e.id);
            })
            .map((n) => {
                let { channel: e } = n;
                return e.id;
            });
    e.forEach((n) => r.push(n)), i.Z.onboardExistingMember(n, new Set(r));
}
