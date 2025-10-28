n.d(t, { w: () => l });
var a = n(81825);
function r(e, t, n) {
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
class l extends a.Z {
    static fromServer(e) {
        return new l(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
    constructor(e) {
        super(),
            r(this, "id", void 0),
            r(this, "summary", void 0),
            r(this, "userIds", void 0),
            r(this, "password", void 0),
            (this.id = e.pool_id),
            (this.summary = e.summary),
            (this.userIds = e.user_ids);
    }
}
