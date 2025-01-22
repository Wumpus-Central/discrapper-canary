var i,
    a = r(47120);
var o = r(789020);
var s = r(653041);
var l = r(442837),
    u = r(570140),
    c = r(630388),
    d = r(709054),
    f = r(271383),
    p = r(430824),
    h = r(594174),
    _ = r(981631),
    m = r(372897);
function g(e, n, r) {
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
let E = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    },
    v = new Set(),
    y = {};
function b(e) {
    let n;
    I(e), v.add(e);
    let r = p.Z.getGuild(e),
        i = h.default.getCurrentUser();
    if (null == r || r.verificationLevel === _.sFg.NONE || null == i || r.isOwner(i) || i.isPhoneVerified()) return;
    let a = f.ZP.getMember(r.id, i.id);
    if (null != a) {
        var o;
        if ((0, c.yE)(null !== (o = a.flags) && void 0 !== o ? o : 0, m.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let n of a.roles) {
            let i = p.Z.getRole(r.id, n);
            null != i && !i.managed && e.add(n);
        }
        let n = new Date('2022-12-02 00:00:00'),
            i = null == a.joinedAt || new Date(a.joinedAt) < n;
        if (!(r.hasFeature(_.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return;
    }
    let s = +i.createdAt + 60000 * _.YeM.ACCOUNT_AGE - Date.now(),
        l = +r.joinedAt + 60000 * _.YeM.MEMBER_AGE - Date.now(),
        d = r.verificationLevel >= _.sFg.LOW && !i.isClaimed(),
        g = !1,
        E = !1,
        b = !1,
        T = !1;
    !i.isPhoneVerified() && !i.isStaff() && ((g = r.verificationLevel >= _.sFg.LOW && !i.verified), (E = r.verificationLevel >= _.sFg.VERY_HIGH), (b = r.verificationLevel >= _.sFg.MEDIUM && s > 0), (T = r.verificationLevel >= _.sFg.HIGH && l > 0));
    let S = [];
    T && S.push(l),
        b && S.push(s),
        S.length > 0 &&
            (n = setTimeout(
                () =>
                    u.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...S)
            )),
        (y[e] = {
            notClaimed: d,
            notEmailVerified: g,
            notPhoneVerified: E,
            newAccount: b,
            newMember: T,
            canChat: !(d || g || E || b || T),
            accountDeadline: new Date(Date.now() + s),
            memberDeadline: new Date(Date.now() + l),
            timeoutRef: n
        });
}
function I(e) {
    let n = y[e];
    null != n && clearTimeout(n.timeoutRef), delete y[e];
}
function T() {
    for (let e in (v.clear(), y)) I(e);
}
function S() {
    d.default.keys(y).forEach(I);
}
function A(e) {
    v.delete(e.guild.id), b(e.guild.id);
}
function C(e) {
    let { guild: n } = e;
    I(n.id);
}
function N(e) {
    var n;
    let { guildId: r, user: i } = e;
    if (i.id !== (null === (n = h.default.getCurrentUser()) || void 0 === n ? void 0 : n.id)) return !1;
    v.delete(r);
}
function R() {
    v.clear();
}
function O(e) {
    let { guildId: n } = e;
    b(n);
}
class D extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(p.Z, h.default);
    }
    getCheck(e) {
        var n;
        return null == e ? E : (!v.has(e) && b(e), null !== (n = y[e]) && void 0 !== n ? n : E);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
g(D, 'displayName', 'GuildVerificationStore'),
    (n.Z = new D(u.Z, {
        CONNECTION_OPEN: T,
        CONNECTION_CLOSED: S,
        CURRENT_USER_UPDATE: R,
        GUILD_CREATE: A,
        GUILD_UPDATE: A,
        GUILD_DELETE: C,
        GUILD_MEMBER_UPDATE: N,
        GUILD_VERIFICATION_CHECK: O
    }));
