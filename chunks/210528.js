"use strict";
n.d(t, { A: () => o });
var r = n(311907),
    i = n(73153);
let s = !1;
class a extends r.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
        return s;
    }
}
let o = new a(i.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: function (e) {
        let { isRegistered: t } = e;
        s = t;
    },
});
