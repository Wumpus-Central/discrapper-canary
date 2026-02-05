"use strict";
n.d(t, { A: () => o });
var r = n(439372),
    i = n(383501),
    a = n(313961);
class s extends r.A {
    stores = new Map().set(a.A, this.handleFocusParticipant);
    handleFocusParticipant() {
        let e = i.A.getChannelId();
        if (null != e) {
            let t = a.A.getSelectedParticipantId(e),
                n = a.A.getVideoParticipants(e);
            i.A.getRTCConnection()?.setSelectedParticipant(n.find((e) => e.id === t && !e.localVideoDisabled)?.id);
        }
    }
}
let o = new s();
