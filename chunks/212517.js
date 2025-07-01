(n.d(t, {
    Ix: () => o,
    S5: () => s
}),
    n(997841));
var r = n(433517),
    i = n(695346);
(n(630388), n(841784));
var a = n(981631);
function o(e) {
    let t = i.cP.getSetting(),
        n = i.Ou.getSetting();
    return (t ? (e |= a.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~a.xjy.PARTY_PRIVACY_FRIENDS), n ? (e |= a.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~a.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e);
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: s } = e,
        l = 0;
    return (n && (l |= a.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (l |= a.xjy.JOIN), t) ? ((l |= a.xjy.EMBEDDED), (l |= o(l))) : (((null == s ? void 0 : s.privacy) === a.RYY.PUBLIC || r.K.get('ACTIVITIES_FORCE_PUBLIC')) && (l |= o(l)), l);
}
