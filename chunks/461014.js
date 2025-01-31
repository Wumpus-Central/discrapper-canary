n.d(t, {
    _: () => u,
    u: () => l
});
var i = n(305325),
    r = n(63568),
    a = n(937111),
    s = n(703656),
    o = n(981631);
let l = (e) => {
        var t, n, i, a;
        return (0, r.K2)(e.id, 'invite') ? (null === (t = e.features) || void 0 === t ? void 0 : t.includes(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null === (n = e.features) || void 0 === n ? void 0 : n.includes(o.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null === (i = e.features) || void 0 === i ? void 0 : i.includes(o.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null === (a = e.features) || void 0 === a ? void 0 : a.includes(o.oNc.PREVIEW_ENABLED));
    },
    u = (e) => {
        null != a.Z.getRequest(e) ? (0, s.uL)(o.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, i.hk)(e);
    };
