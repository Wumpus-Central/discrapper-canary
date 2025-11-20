n.d(t, {
    D: () => u,
    S: () => c,
}),
    n(997841);
var r = n(95015),
    i = n(433517),
    a = n(695346),
    o = n(841784),
    s = n(981631);
function l(e) {
    let t = a.cP.getSetting(),
        n = a.Ou.getSetting();
    return (
        t ? (e |= s.xjy.PARTY_PRIVACY_FRIENDS) : (e &= ~s.xjy.PARTY_PRIVACY_FRIENDS),
        n ? (e |= s.xjy.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~s.xjy.PARTY_PRIVACY_VOICE_CHANNEL),
        e
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : s.RYY.PRIVATE,
        { secrets: o } = e,
        c = 0;
    return (t && (c |= s.xjy.INSTANCE),
    (null == o ? void 0 : o.join) != null && (c |= s.xjy.JOIN),
    r && (c |= s.xjy.CONTEXTLESS),
    n)
        ? ((c |= s.xjy.EMBEDDED), (c |= l(c)))
        : ((a === s.RYY.PUBLIC || i.K.get("ACTIVITIES_FORCE_PUBLIC")) && (c |= l(c)), c);
}
function u(e) {
    var t;
    return (0, r.yE)(null != (t = null == e ? void 0 : e.flags) ? t : 0, s.xjy.CONTEXTLESS) && (0, o.Z)(e);
}
