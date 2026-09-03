n.d(t, { E: () => d, e: () => c }), n(938796);
var i = n(665260),
    r = n(506774),
    a = n(885386),
    s = n(765379),
    l = n(652215);
function o(e) {
    let t = a.e.getSetting(),
        n = a.UM.getSetting();
    return (
        t ? (e |= l.jUm.PARTY_PRIVACY_FRIENDS) : (e &= ~l.jUm.PARTY_PRIVACY_FRIENDS),
        n ? (e |= l.jUm.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~l.jUm.PARTY_PRIVACY_VOICE_CHANNEL),
        e
    );
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l.KIY.PRIVATE,
        { secrets: s } = e,
        d = 0;
    return (t && (d |= l.jUm.INSTANCE), s?.join != null && (d |= l.jUm.JOIN), i && (d |= l.jUm.CONTEXTLESS), n)
        ? ((d |= l.jUm.EMBEDDED), (d |= o(d)))
        : ((a === l.KIY.PUBLIC || r.w.get("ACTIVITIES_FORCE_PUBLIC")) && (d |= o(d)), d);
}
function c(e) {
    return (0, i.Lt)(e?.flags ?? 0, l.jUm.CONTEXTLESS) && (0, s.A)(e);
}
