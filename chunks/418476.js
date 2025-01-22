r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(978003),
    a = r(786761),
    o = r(901461),
    s = r(981631);
function l(e, n) {
    return !(null == n || e.author.id !== n || e.state !== s.yb.SENT || (0, o.Z)(e) || !(0, a.lp)(e) || e.hasFlag(s.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, i.Z)(e)) && !0;
}
