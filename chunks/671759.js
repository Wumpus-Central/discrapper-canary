"use strict";
n.d(t, { A: () => s }), n(938796);
var r = n(989349),
    i = n.n(r),
    a = n(315069);
class s extends a.A {
    code;
    temporary;
    revoked;
    uses;
    maxUses;
    maxAge;
    createdAt;
    channel;
    guild;
    inviter;
    targetType;
    targetUser;
    targetApplication;
    type;
    flags;
    roles;
    constructor(e) {
        super(),
            (this.code = e.code || ""),
            (this.temporary = e.temporary || !1),
            (this.revoked = e.revoked || !1),
            (this.uses = e.uses || 0),
            (this.maxUses = e.maxUses || 0),
            (this.maxAge = e.maxAge || 0),
            (this.createdAt = e.createdAt || new Date()),
            (this.channel = e.channel),
            (this.guild = e.guild),
            (this.inviter = e.inviter || null),
            (this.targetType = e.targetType || null),
            (this.targetUser = e.targetUser || null),
            (this.targetApplication = e.targetApplication || null),
            (this.type = e.type || null),
            (this.flags = e.flags || 0),
            (this.roles = e.roles || []);
    }
    static createFromServer(e) {
        return new s({
            ...e,
            maxUses: e.max_uses,
            maxAge: e.max_age,
            createdAt: i()(e.created_at ?? void 0),
            targetType: e.target_type,
            targetUser: e.target_user,
            targetApplication: e.target_application,
        });
    }
    isExpired() {
        let e = this.maxAge;
        return !!(e > 0 && i()(this.createdAt).add(e, "seconds").isBefore(Date.now())) || !1;
    }
    getExpiresAt() {
        return this.maxAge > 0 ? i()(this.createdAt).add(this.maxAge, "seconds").toDate() : 1 / 0;
    }
    toString() {
        return this.code;
    }
}
