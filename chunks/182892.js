"use strict";
n.d(t, { E: () => u, e: () => c }), n(938796);
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
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.KIY.PRIVATE,
        { secrets: s } = e,
        u = 0;
    return (t && (u |= o.jUm.INSTANCE), s?.join != null && (u |= o.jUm.JOIN), r && (u |= o.jUm.CONTEXTLESS), n)
        ? ((u |= o.jUm.EMBEDDED), (u |= l(u)))
        : ((a === o.KIY.PUBLIC || i.w.get("ACTIVITIES_FORCE_PUBLIC")) && (u |= l(u)), u);
}
function c(e) {
    return (0, r.Lt)(e?.flags ?? 0, o.jUm.CONTEXTLESS) && (0, s.A)(e);
}
