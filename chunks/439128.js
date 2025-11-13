n.d(t, { w: () => r });
var a = n(81825);
function i(e, t, n) {
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
class r extends a.Z {
    static fromServer(e) {
        return new r(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
    constructor(e) {
        super(),
            i(this, "id", void 0),
            i(this, "summary", void 0),
            i(this, "userIds", void 0),
            i(this, "password", void 0),
            (this.id = e.pool_id),
            (this.summary = e.summary),
            (this.userIds = e.user_ids);
    }
}
