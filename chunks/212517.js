n.d(t, {
    Ix: () => a,
    S5: () => s
}),
    n(997841);
var r = n(433517),
    i = n(695346);
n(630388), n(841784);
var o = n(981631);
function a(e) {
    let t = i.cP.getSetting(),
        n = i.Ou.getSetting();
    return t ? (e |= o.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~o.xjy.PARTY_PRIVACY_FRIENDS), n ? (e |= o.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~o.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e;
}
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: s } = e,
        l = 0;
    return (n && (l |= o.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (l |= o.xjy.JOIN), t) ? ((l |= o.xjy.EMBEDDED), (l |= a(l))) : (((null == s ? void 0 : s.privacy) === o.RYY.PUBLIC || r.K.get('ACTIVITIES_FORCE_PUBLIC')) && (l |= a(l)), l);
}
