n.d(t, { A: () => o });
var r = n(173618),
    i = n(952335),
    a = n(461213);
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
    getInitialState() {
        return a.A.getLocalPresence();
    }
    getNextState() {
        return a.A.getLocalPresence();
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
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
    constructor(e) {
        super(!1),
            s(this, "socket", void 0),
            s(this, "switchingAccounts", void 0),
            s(this, "didCommit", void 0),
            (this.socket = e),
            (this.switchingAccounts = !1),
            (this.didCommit = (0, i.A)(5, 20000, this.emitPresenceUpdate.bind(this)));
    }
}
