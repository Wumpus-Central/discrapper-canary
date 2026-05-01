"use strict";
n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366);
let s = !1;
class a extends i.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
        return s;
    }
}
let o = new a(r.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: function (e) {
        let { isRegistered: t } = e;
        s = t;
    },
});
