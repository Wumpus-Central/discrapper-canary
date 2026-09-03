n.d(t, { A: () => l });
var i = n(439372),
    r = n(763827),
    a = n(198052);
class s extends i.A {
    stores = new Map().set(a.A, this.handleFocusParticipant);
    handleFocusParticipant() {
        let e = r.A.getChannelId();
        if (null != e) {
            let t = a.A.getSelectedParticipantId(e),
                n = a.A.getVideoParticipants(e);
            r.A.getRTCConnection()?.setSelectedParticipant(n.find((e) => e.id === t && !e.localVideoDisabled)?.id);
        }
    }
}
let l = new s();
