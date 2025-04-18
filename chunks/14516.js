n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(19780),
    a = n(358221);
function o(e, t, n) {
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
        let e = i.Z.getChannelId();
        if (null != e) {
            var t, n;
            let r = a.Z.getSelectedParticipantId(e),
                o = a.Z.getVideoParticipants(e);
            null == (n = i.Z.getRTCConnection()) || n.setSelectedParticipant(null == (t = o.find((e) => e.id === r && !e.localVideoDisabled)) ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e), o(this, 'stores', new Map().set(a.Z, this.handleFocusParticipant));
    }
}
let l = new s();
