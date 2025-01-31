n.d(t, { Z: () => o });
var i = n(978003),
    r = n(786761),
    a = n(901461),
    s = n(981631);
function o(e, t) {
    return !(null == t || e.author.id !== t || e.state !== s.yb.SENT || (0, a.Z)(e) || !(0, r.lp)(e) || e.hasFlag(s.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, i.Z)(e));
}
