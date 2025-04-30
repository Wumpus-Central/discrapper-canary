n.d(t, {
    Ix: () => c,
    Pu: () => l,
    S5: () => u
});
var r = n(433517),
    i = n(695346),
    a = n(630388),
    o = n(16609),
    s = n(981631);
function l(e, t, n) {
    if (!(0, a.yE)(e, s.xjy.CONTEXTLESS) || (0, a.yE)(e, s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) || null == t) return e;
    let r = (0, o.Bt)(n);
    return null != r && r === t && (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e;
}
function c(e) {
    let t = i.cP.getSetting(),
        n = i.Ou.getSetting();
    return t ? (e |= s.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), n ? (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: a } = e,
        o = 0;
    return (n && (o |= s.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (o |= s.xjy.JOIN), t) ? ((o |= s.xjy.EMBEDDED), (o |= c(o))) : (((null == a ? void 0 : a.privacy) === s.RYY.PUBLIC || r.K.get('ACTIVITIES_FORCE_PUBLIC')) && (o |= c(o)), o);
}
