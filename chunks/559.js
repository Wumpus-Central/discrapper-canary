a.d(t, { N: () => l });
var n = a(315069);
class l extends n.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new l(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
