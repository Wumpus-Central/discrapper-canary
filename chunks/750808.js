"use strict";
n.d(t, { A: () => a });
var r = n(315069),
    i = n(652215);
class s extends r.A {
    id;
    path;
    inviteCode;
    static fromPath(e) {
        return new s({ id: e, path: e });
    }
    static fromInviteCode(e) {
        return new s({ id: `invite:${e}`, path: i.BVt.INVITE(e), inviteCode: e });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.path = e.path), (this.inviteCode = e.inviteCode);
    }
}
let a = s;
