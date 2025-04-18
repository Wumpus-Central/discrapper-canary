n.d(t, { Z: () => s });
var r = n(978003),
    i = n(786761),
    a = n(901461),
    o = n(981631);
function s(e, t) {
    return !(null == t || e.author.id !== t || e.state !== o.yb.SENT || (0, a.Z)(e) || !(0, i.lp)(e) || e.hasFlag(o.iLy.IS_VOICE_MESSAGE) || null != e.referralTrialOfferId || e.isPoll() || (0, r.Z)(e));
}
