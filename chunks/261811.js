"use strict";
n.d(t, { A: () => a });
var r = n(173618),
    i = n(952335),
    s = n(461213);
class a extends r.A {
    socket;
    switchingAccounts = !1;
    constructor(e) {
        super(!1), (this.socket = e);
    }
    getInitialState() {
        return s.A.getLocalPresence();
    }
    getNextState() {
        return s.A.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit = (0, i.A)(5, 2e4, this.emitPresenceUpdate.bind(this));
    emitPresenceUpdate(e) {
        let { status: t, since: n, activities: r, afk: i } = e;
        this.socket.presenceUpdate(t, n, r, i);
    }
    handleConnectionOpen() {
        let e = !this.switchingAccounts;
        this.update({}, e), (this.switchingAccounts = !1);
    }
    handleAccountSwitch() {
        (this.switchingAccounts = !0), this.reset(), this.emitPresenceUpdate(this.getState());
    }
}
