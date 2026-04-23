n.d(t, { A: () => _ });
var i = n(17928),
    r = n(228366);
let a = !1;
class s extends i.Ay.Store {
    static displayName = "SpotifyProtocolStore";
    isProtocolRegistered() {
        return a;
    }
}
let _ = new s(r.h, {
    SPOTIFY_SET_PROTOCOL_REGISTERED: function (e) {
        let { isRegistered: t } = e;
        a = t;
    },
});
