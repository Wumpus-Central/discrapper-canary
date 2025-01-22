r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(789020);
var a = r(913527),
    o = r.n(a),
    s = r(81825);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class u extends s.Z {
    static createFromServer(e) {
        var n;
        return new u({
            ...e,
            maxUses: e.max_uses,
            maxAge: e.max_age,
            createdAt: o()(null !== (n = e.created_at) && void 0 !== n ? n : void 0),
            targetType: e.target_type,
            targetUser: e.target_user,
            targetApplication: e.target_application
        });
    }
    isExpired() {
        let e = this.maxAge;
        return !!(e > 0 && o()(this.createdAt).add(e, 'seconds').isBefore(Date.now())) || !1;
    }
    getExpiresAt() {
        return this.maxAge > 0 ? o()(this.createdAt).add(this.maxAge, 'seconds').toDate() : 1 / 0;
    }
    toString() {
        return this.code;
    }
    constructor(e) {
        super(), l(this, 'code', void 0), l(this, 'temporary', void 0), l(this, 'revoked', void 0), l(this, 'uses', void 0), l(this, 'maxUses', void 0), l(this, 'maxAge', void 0), l(this, 'createdAt', void 0), l(this, 'channel', void 0), l(this, 'guild', void 0), l(this, 'inviter', void 0), l(this, 'targetType', void 0), l(this, 'targetUser', void 0), l(this, 'targetApplication', void 0), l(this, 'type', void 0), l(this, 'flags', void 0), (this.code = e.code || ''), (this.temporary = e.temporary || !1), (this.revoked = e.revoked || !1), (this.uses = e.uses || 0), (this.maxUses = e.maxUses || 0), (this.maxAge = e.maxAge || 0), (this.createdAt = e.createdAt || new Date()), (this.channel = e.channel), (this.guild = e.guild), (this.inviter = e.inviter || null), (this.targetType = e.targetType || null), (this.targetUser = e.targetUser || null), (this.targetApplication = e.targetApplication || null), (this.type = e.type || null), (this.flags = e.flags || 0);
    }
}
