n.d(t, { o9: () => d, qH: () => o, yh: () => u });
var i = n(17928),
    l = n(287809),
    r = n(474090),
    s = n(202541),
    a = n(375708);
function o() {
    return (0, i.bG)([l.default], () => {
        let e = l.default.getCurrentUser();
        return (function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return t ? "staff" : (0, r.CC)(e, s.PremiumTypes.TIER_2) ? "entitled" : null != e ? "upgrade" : "acquire";
        })(e?.premiumType, e?.isStaff() ?? !1);
    });
}
function u(e) {
    return "upgrade" === e || "acquire" === e;
}
function d(e) {
    return "upgrade" === e ? a.t.KfitWs : "acquire" === e ? a.t.Sqrz1V : a.t.yZOtoD;
}
