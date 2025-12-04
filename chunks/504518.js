n.d(t, { Z: () => o });
var r = n(81825),
    i = n(598077);
function a(e, t, n) {
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
class o extends r.Z {
    static createFromServer(e) {
        return new o(e);
    }
    isPrimary() {
        return 1 === this.member_type;
    }
    isMember() {
        return 2 === this.member_type && null != this.accepted_at;
    }
    isInvited() {
        return 2 === this.member_type && null == this.accepted_at;
    }
    constructor(e) {
        super(),
            a(this, "user", void 0),
            a(this, "member_type", void 0),
            a(this, "accepted_at", void 0),
            (this.user = new i.Z(e.user)),
            (this.member_type = e.member_type),
            (this.accepted_at = e.accepted_at);
    }
}
