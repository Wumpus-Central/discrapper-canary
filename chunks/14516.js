n.d(t, { Z: () => l }), n(47120);
var r = n(147913),
    i = n(19780),
    o = n(358221);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class s extends r.Z {
    handleFocusParticipant() {
        let e = i.ZP.getChannelId();
        if (null != e) {
            var t, n;
            let r = o.Z.getSelectedParticipantId(e),
                a = o.Z.getVideoParticipants(e);
            null == (n = i.ZP.getRTCConnection()) || n.setSelectedParticipant(null == (t = a.find((e) => e.id === r && !e.localVideoDisabled)) ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e), a(this, 'stores', new Map().set(o.Z, this.handleFocusParticipant));
    }
}
let l = new s();
