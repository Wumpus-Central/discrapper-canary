r.d(n, {
    u: function () {
        return o;
    }
});
var i = r(63568),
    a = r(981631);
let o = (e) => {
    var n, r, o, s;
    return (0, i.K2)(e.id, 'invite') ? (null === (n = e.features) || void 0 === n ? void 0 : n.includes(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null === (r = e.features) || void 0 === r ? void 0 : r.includes(a.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null === (o = e.features) || void 0 === o ? void 0 : o.includes(a.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && !(null === (s = e.features) || void 0 === s ? void 0 : s.includes(a.oNc.PREVIEW_ENABLED));
};
