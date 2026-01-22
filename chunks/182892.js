n.d(t, {
    E: () => c,
    e: () => u,
}),
    n(938796);
var r = n(665260),
    i = n(506774),
    a = n(253932),
    s = n(765379),
    o = n(652215);
function l(e) {
    let t = a.e.getSetting(),
        n = a.UM.getSetting();
    return (
        t ? (e |= o.jUm.PARTY_PRIVACY_FRIENDS) : (e &= ~o.jUm.PARTY_PRIVACY_FRIENDS),
        n ? (e |= o.jUm.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~o.jUm.PARTY_PRIVACY_VOICE_CHANNEL),
        e
    );
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.KIY.PRIVATE,
        { secrets: s } = e,
        c = 0;
    return (t && (c |= o.jUm.INSTANCE),
    (null == s ? void 0 : s.join) != null && (c |= o.jUm.JOIN),
    r && (c |= o.jUm.CONTEXTLESS),
    n)
        ? ((c |= o.jUm.EMBEDDED), (c |= l(c)))
        : ((a === o.KIY.PUBLIC || i.w.get("ACTIVITIES_FORCE_PUBLIC")) && (c |= l(c)), c);
}
function u(e) {
    var t;
    return (0, r.Lt)(null != (t = null == e ? void 0 : e.flags) ? t : 0, o.jUm.CONTEXTLESS) && (0, s.A)(e);
}
