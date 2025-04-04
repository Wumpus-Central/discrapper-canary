n.d(t, {
    R_: () => g,
    cm: () => O
}),
    n(653041),
    n(230036),
    n(47120);
var r = n(498607),
    i = n.n(r),
    o = n(759174),
    a = n(493892),
    s = n(594174),
    l = n(815790),
    c = n(588215),
    u = n(44715),
    d = n(331551);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let m = Date.now();
var g = (function (e) {
    return (e.NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER'), (e.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER'), (e.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS'), e;
})({});
function E(e) {
    let t = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
    return e.isIncludedInSearchResults && t.push('INCLUDED_IN_SEARCH_RESULTS'), t;
}
function b(e) {
    return e.sort;
}
function y() {
    return new o.h(E, b);
}
function v(e) {
    return null != e && new Date(e).getTime() >= m - c.rL;
}
class O {
    reset() {
        this._membersMap.clear(), (this._membersMap = y()), this.resetNewMemberTimestamp();
    }
    resetNewMemberTimestamp() {
        this.newMemberTimestamp = Date.now();
    }
    enhanceNewMember(e, t) {
        var n;
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (0, l.Dw)(e.joinedAt),
            { hasUnusualDmActivity: o, hasUnusualAccountActivity: a, sourceInviteCode: u, joinSourceType: f, inviterId: p, integrationType: m } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
            g = s.default.getUser(e.userId);
        return _(
            h(
                _(
                    {
                        hasUnusualDmActivity: o,
                        hasUnusualAccountActivity: a,
                        sourceInviteCode: u,
                        joinSourceType: f,
                        inviterId: p,
                        integrationType: m
                    },
                    e
                ),
                {
                    isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
                    isIncludedInSearchResults: !1,
                    user: g,
                    sort: (0, d.b)(e, null != (n = t.selectedSort) ? n : c.d$.ORDER_BY_UNSPECIFIED),
                    joinedAtTimestamp: i
                }
            ),
            r
        );
    }
    _computeMemberSupplementals(e, t) {
        var n;
        let { sourceInviteCode: r, joinSourceType: i, inviterId: o, integrationType: s } = null != (n = (0, u.W2)(this.guildId)[e]) ? n : {};
        return {
            sourceInviteCode: null != r ? r : null,
            joinSourceType: null != i ? i : null,
            inviterId: null != o ? o : null,
            integrationType: null != s ? s : null,
            hasUnusualDmActivity: v(t),
            hasUnusualAccountActivity: (0, a.He)(e)
        };
    }
    createMember(e) {
        return this._membersMap.set(e.userId, e);
    }
    updateMember(e, t) {
        var n;
        if (null == t) return this._membersMap.set(e.userId, e);
        let r = _({}, e),
            o = _({}, t),
            a = !1,
            { sourceInviteCode: s, hasUnusualDmActivity: l, hasUnusualAccountActivity: c, joinSourceType: u, inviterId: d, integrationType: f } = this._computeMemberSupplementals(r.userId, null != (n = o.unusualDMActivityUntil) ? n : r.unusualDMActivityUntil);
        for (let e in (r.sourceInviteCode !== s && (o.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (o.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== c && (o.hasUnusualAccountActivity = c), r.joinSourceType !== u && (o.joinSourceType = u), r.inviterId !== d && (o.inviterId = d), r.integrationType !== f && (o.integrationType = f), o)) {
            let t = e,
                n = o[t],
                s = r[t];
            i()(n, s) || ((r[t] = n), (a = !0));
        }
        return this._membersMap.set(r.userId, r) || a;
    }
    removeMember(e) {
        return this._membersMap.delete(e);
    }
    getMemberByUserId(e) {
        return this._membersMap.get(e);
    }
    values(e) {
        return this._membersMap.values(e, !0);
    }
    count(e) {
        return this._membersMap.size(e);
    }
    get version() {
        return this._membersMap.version;
    }
    constructor(e) {
        f(this, 'guildId', void 0), f(this, '_membersMap', void 0), f(this, 'newMemberTimestamp', Date.now()), (this.guildId = e), (this._membersMap = y());
    }
}
