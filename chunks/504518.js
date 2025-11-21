var n = r(81825),
    i = r(598077);
function s(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
class a extends n.Z {
    static createFromServer(e) {
        return new a(e);
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
            s(this, "user", void 0),
            s(this, "member_type", void 0),
            s(this, "accepted_at", void 0),
            (this.user = new i.Z(e.user)),
            (this.member_type = e.member_type),
            (this.accepted_at = e.accepted_at);
    }
}
