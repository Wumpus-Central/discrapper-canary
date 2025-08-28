n.d(t, {
    Dp: () => u,
    Ix: () => l,
    S5: () => c,
    ZW: () => d,
}),
    n(997841);
var r = n(433517),
    i = n(695346),
    a = n(630388),
    o = n(841784),
    s = n(981631);
function l(e) {
    let t = i.cP.getSetting(),
        n = i.Ou.getSetting();
    return (
        t ? (e |= s.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~s.xjy.PARTY_PRIVACY_FRIENDS),
        n ? (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL),
        e
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { instance: n, secrets: i, party: a } = e,
        o = 0;
    return (n && (o |= s.xjy.INSTANCE), (null == i ? void 0 : i.join) != null && (o |= s.xjy.JOIN), t)
        ? ((o |= s.xjy.EMBEDDED), (o |= l(o)))
        : (((null == a ? void 0 : a.privacy) === s.RYY.PUBLIC || r.K.get("ACTIVITIES_FORCE_PUBLIC")) && (o |= l(o)), o);
}
function u(e) {
    var t;
    return (0, a.yE)(null != (t = null == e ? void 0 : e.flags) ? t : 0, s.xjy.CONTEXTLESS) && (0, o.Z)(e);
}
function d(e) {
    return e | s.xjy.CONTEXTLESS;
}
