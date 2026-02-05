"use strict";
n.d(t, { A: () => l });
var r = n(311907),
    i = n(73153);
let a = !1;
function s(e) {
    let { isRegistered: t } = e;
    a = t;
}
class o extends r.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
        return a;
    }
}
let l = new o(i.h, { SPOTIFY_SET_PROTOCOL_REGISTERED: s });
