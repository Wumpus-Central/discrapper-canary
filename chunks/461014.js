r.d(n, {
    _: function () {
        return c;
    },
    u: function () {
        return u;
    }
});
var i = r(305325),
    a = r(63568),
    o = r(937111),
    s = r(703656),
    l = r(981631);
let u = (e) => {
        var n, r, i, o;
        return (0, a.K2)(e.id, 'invite') ? (null === (n = e.features) || void 0 === n ? void 0 : n.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null === (r = e.features) || void 0 === r ? void 0 : r.includes(l.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null === (i = e.features) || void 0 === i ? void 0 : i.includes(l.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null === (o = e.features) || void 0 === o ? void 0 : o.includes(l.oNc.PREVIEW_ENABLED));
    },
    c = (e) => {
        null != o.Z.getRequest(e) ? (0, s.uL)(l.Z5c.GUILD_MEMBER_VERIFICATION(e)) : (0, i.hk)(e);
    };
