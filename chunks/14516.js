n.d(t, { Z: () => l }), n(47120);
var i = n(147913),
    r = n(19780),
    a = n(358221);
function s(e, t, n) {
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
class o extends i.Z {
    handleFocusParticipant() {
        let e = r.Z.getChannelId();
        if (null != e) {
            var t, n;
            let i = a.Z.getSelectedParticipantId(e),
                s = a.Z.getVideoParticipants(e);
            null === (n = r.Z.getRTCConnection()) || void 0 === n || n.setSelectedParticipant(null === (t = s.find((e) => e.id === i && !e.localVideoDisabled)) || void 0 === t ? void 0 : t.id);
        }
    }
    constructor(...e) {
        super(...e), s(this, 'stores', new Map().set(a.Z, this.handleFocusParticipant));
    }
}
let l = new o();
