n.d(t, { A: () => l });
var i = n(427930),
    r = n(320095),
    a = n(143413),
    s = n(652215);
function l(e, t) {
    return (
        !(
            null == t ||
            e.author.id !== t ||
            e.state !== s.cmJ.SENT ||
            (0, a.A)(e) ||
            !(0, r.ei)(e) ||
            e.hasFlag(s.pr7.IS_VOICE_MESSAGE) ||
            null != e.referralTrialOfferId ||
            e.isPoll() ||
            (0, i.A)(e)
        ) && e.type !== s.lAJ.MEDIA_MENTION_MESSAGE
    );
}
