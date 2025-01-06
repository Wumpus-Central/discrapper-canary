s.d(t, {
    b: function () {
        return o;
    }
});
var n = s(442837),
    r = s(276444),
    i = s(912244),
    a = s(232076);
let o = function (e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { enabled: s, eligibleToFetch: o } = (0, i.N)(e);
    (0, a.B)(e, !o || t);
    let c = (0, n.e7)([r.Z], () => r.Z.getIsEligibleToSendReferrals());
    return s && c;
};
