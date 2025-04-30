n.d(t, {
    Ix: () => c,
    Pu: () => l,
    S5: () => u
});
var r = n(433517),
    i = n(695346),
    o = n(630388),
    a = n(16609),
    s = n(981631);
function l(e, t, n) {
    if (!(0, o.yE)(e, s.xjy.CONTEXTLESS) || (0, o.yE)(e, s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) || null == t) return e;
    let r = (0, a.Bt)(n);
    return null != r && r === t && (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e;
}
function c(e) {
    let t = i.cP.getSetting(),
        n = i.Ou.getSetting();
    return t ? (e |= s.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), n ? (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL), e;
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: o } = e,
        a = 0;
    return (n && (a |= s.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (a |= s.xjy.JOIN), t) ? ((a |= s.xjy.EMBEDDED), (a |= c(a))) : (((null == o ? void 0 : o.privacy) === s.RYY.PUBLIC || r.K.get('ACTIVITIES_FORCE_PUBLIC')) && (a |= c(a)), a);
}
