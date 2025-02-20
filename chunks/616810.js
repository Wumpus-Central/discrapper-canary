n.d(t, { Z: () => s });
var r = n(928801),
    i = n(549895),
    o = n(885110);
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
    getInitialState() {
        return o.Z.getLocalPresence();
    }
    getNextState() {
        return o.Z.getLocalPresence();
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
        super(!1), a(this, 'socket', void 0), a(this, 'switchingAccounts', void 0), a(this, 'didCommit', void 0), (this.socket = e), (this.switchingAccounts = !1), (this.didCommit = (0, i.Z)(5, 20000, this.emitPresenceUpdate.bind(this)));
    }
}
