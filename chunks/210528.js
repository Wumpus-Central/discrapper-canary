n.d(t, { A: () => l });
var i = n(17928),
    a = n(228366);
let r = !1;
class s extends i.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
        return r;
    }
}
let l = new s(a.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: function (e) {
        let { isRegistered: t } = e;
        r = t;
    },
});
