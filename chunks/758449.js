n.d(t, { Z: () => u }), n(789020);
var r = n(913527),
    i = n.n(r),
    o = n(81825);
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
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
class u extends o.Z {
    static createFromServer(e) {
        var t;
        return new u(
            c(s({}, e), {
                maxUses: e.max_uses,
                maxAge: e.max_age,
                createdAt: i()(null != (t = e.created_at) ? t : void 0),
                targetType: e.target_type,
                targetUser: e.target_user,
                targetApplication: e.target_application
            })
        );
    }
    isExpired() {
        let e = this.maxAge;
        return !!(e > 0 && i()(this.createdAt).add(e, 'seconds').isBefore(Date.now())) || !1;
    }
    getExpiresAt() {
        return this.maxAge > 0 ? i()(this.createdAt).add(this.maxAge, 'seconds').toDate() : 1 / 0;
    }
    toString() {
        return this.code;
    }
    constructor(e) {
        super(), a(this, 'code', void 0), a(this, 'temporary', void 0), a(this, 'revoked', void 0), a(this, 'uses', void 0), a(this, 'maxUses', void 0), a(this, 'maxAge', void 0), a(this, 'createdAt', void 0), a(this, 'channel', void 0), a(this, 'guild', void 0), a(this, 'inviter', void 0), a(this, 'targetType', void 0), a(this, 'targetUser', void 0), a(this, 'targetApplication', void 0), a(this, 'type', void 0), a(this, 'flags', void 0), (this.code = e.code || ''), (this.temporary = e.temporary || !1), (this.revoked = e.revoked || !1), (this.uses = e.uses || 0), (this.maxUses = e.maxUses || 0), (this.maxAge = e.maxAge || 0), (this.createdAt = e.createdAt || new Date()), (this.channel = e.channel), (this.guild = e.guild), (this.inviter = e.inviter || null), (this.targetType = e.targetType || null), (this.targetUser = e.targetUser || null), (this.targetApplication = e.targetApplication || null), (this.type = e.type || null), (this.flags = e.flags || 0);
    }
}
