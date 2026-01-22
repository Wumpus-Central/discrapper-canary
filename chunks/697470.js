n.d(t, {
    A: () => o,
});
var r = n(427930),
    i = n(141468),
    a = n(143413),
    s = n(652215);

function o(e, t) {
    return !(
        null == t ||
        e.author.id !== t ||
        e.state !== s.cmJ.SENT ||
        (0, a.A)(e) ||
        !(0, i.ei)(e) ||
        e.hasFlag(s.pr7.IS_VOICE_MESSAGE) ||
        null != e.referralTrialOfferId ||
        e.isPoll() ||
        (0, r.A)(e)
    );
}
