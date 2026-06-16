"use strict";
n.d(t, { E: () => u, e: () => c }), n(938796);
var i = n(665260),
    r = n(506774),
    s = n(885386),
    a = n(765379),
    o = n(652215);
function l(e) {
    let t = s.e.getSetting(),
        n = s.UM.getSetting();
    return (
        t ? (e |= o.jUm.PARTY_PRIVACY_FRIENDS) : (e &= ~o.jUm.PARTY_PRIVACY_FRIENDS),
        n ? (e |= o.jUm.PARTY_PRIVACY_VOICE_CHANNEL) : (e &= ~o.jUm.PARTY_PRIVACY_VOICE_CHANNEL),
        e
    );
}
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o.KIY.PRIVATE,
        { secrets: a } = e,
        u = 0;
    return (t && (u |= o.jUm.INSTANCE), a?.join != null && (u |= o.jUm.JOIN), i && (u |= o.jUm.CONTEXTLESS), n)
        ? ((u |= o.jUm.EMBEDDED), (u |= l(u)))
        : ((s === o.KIY.PUBLIC || r.w.get("ACTIVITIES_FORCE_PUBLIC")) && (u |= l(u)), u);
}
function c(e) {
    return (0, i.Lt)(e?.flags ?? 0, o.jUm.CONTEXTLESS) && (0, a.A)(e);
}
