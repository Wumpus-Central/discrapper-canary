n.d(t, { N: () => s });
var a = n(315069);
class s extends a.A {
    id;
    summary;
    userIds;
    password;
    constructor(e) {
        super(), (this.id = e.pool_id), (this.summary = e.summary), (this.userIds = e.user_ids);
    }
    static fromServer(e) {
        return new s(e);
    }
    setPassword(e) {
        return (this.password = e), this;
    }
}
