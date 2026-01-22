n.d(t, { A: () => l }), n(896048);
var r = n(439372),
    i = n(383501),
    a = n(313961);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class o extends r.A {
    handleFocusParticipant() {
        let e = i.A.getChannelId();
        if (null != e) {
            var t, n;
            let r = a.A.getSelectedParticipantId(e),
                s = a.A.getVideoParticipants(e);
            null == (n = i.A.getRTCConnection()) ||
                n.setSelectedParticipant(
                    null == (t = s.find((e) => e.id === r && !e.localVideoDisabled)) ? void 0 : t.id,
                );
        }
    }
    constructor(...e) {
        super(...e), s(this, "stores", new Map().set(a.A, this.handleFocusParticipant));
    }
}
let l = new o();
