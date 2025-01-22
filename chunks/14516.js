var i = r(47120);
var a = r(147913),
    o = r(19780),
    s = r(358221);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class u extends a.Z {
    handleFocusParticipant() {
        let e = o.Z.getChannelId();
        if (null != e) {
            var n, r;
            let i = s.Z.getSelectedParticipantId(e),
                a = s.Z.getVideoParticipants(e);
            null === (r = o.Z.getRTCConnection()) || void 0 === r || r.setSelectedParticipant(null === (n = a.find((e) => e.id === i && !e.localVideoDisabled)) || void 0 === n ? void 0 : n.id);
        }
    }
    constructor(...e) {
        super(...e), l(this, 'stores', new Map().set(s.Z, this.handleFocusParticipant));
    }
}
n.Z = new u();
