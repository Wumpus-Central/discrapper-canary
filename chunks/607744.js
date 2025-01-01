var i,
    a = r(47120);
var s = r(789020);
var o = r(653041);
var l = r(442837),
    u = r(570140),
    c = r(630388),
    d = r(709054),
    f = r(271383),
    _ = r(430824),
    h = r(594174),
    p = r(981631),
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
    I = {};
function T(e) {
    let n;
    b(e), v.add(e);
    let r = _.Z.getGuild(e),
        i = h.default.getCurrentUser();
    if (null == r || r.verificationLevel === p.sFg.NONE || null == i || r.isOwner(i) || i.isPhoneVerified()) return;
    let a = f.ZP.getMember(r.id, i.id);
    if (null != a) {
        var s;
        if ((0, c.yE)(null !== (s = a.flags) && void 0 !== s ? s : 0, m.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let n of a.roles) {
            let i = _.Z.getRole(r.id, n);
            null != i && !i.managed && e.add(n);
        }
        let n = new Date('2022-12-02 00:00:00'),
            i = null == a.joinedAt || new Date(a.joinedAt) < n;
        if (!(r.hasFeature(p.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return;
    }
    let o = +i.createdAt + 60000 * p.YeM.ACCOUNT_AGE - Date.now(),
        l = +r.joinedAt + 60000 * p.YeM.MEMBER_AGE - Date.now(),
        d = r.verificationLevel >= p.sFg.LOW && !i.isClaimed(),
        g = !1,
        E = !1,
        T = !1,
        y = !1;
    !i.isPhoneVerified() && !i.isStaff() && ((g = r.verificationLevel >= p.sFg.LOW && !i.verified), (E = r.verificationLevel >= p.sFg.VERY_HIGH), (T = r.verificationLevel >= p.sFg.MEDIUM && o > 0), (y = r.verificationLevel >= p.sFg.HIGH && l > 0));
    let S = [];
    y && S.push(l),
        T && S.push(o),
        S.length > 0 &&
            (n = setTimeout(
                () =>
                    u.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...S)
            )),
        (I[e] = {
            notClaimed: d,
            notEmailVerified: g,
            notPhoneVerified: E,
            newAccount: T,
            newMember: y,
            canChat: !(d || g || E || T || y),
            accountDeadline: new Date(Date.now() + o),
            memberDeadline: new Date(Date.now() + l),
            timeoutRef: n
        });
}
function b(e) {
    let n = I[e];
    null != n && clearTimeout(n.timeoutRef), delete I[e];
}
function y() {
    for (let e in (v.clear(), I)) b(e);
}
function S() {
    d.default.keys(I).forEach(b);
}
function A(e) {
    v.delete(e.guild.id), T(e.guild.id);
}
function N(e) {
    let { guild: n } = e;
    b(n.id);
}
function C(e) {
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
    T(n);
}
class D extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, h.default);
    }
    getCheck(e) {
        var n;
        return null == e ? E : (!v.has(e) && T(e), null !== (n = I[e]) && void 0 !== n ? n : E);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
g(D, 'displayName', 'GuildVerificationStore'),
    (n.Z = new D(u.Z, {
        CONNECTION_OPEN: y,
        CONNECTION_CLOSED: S,
        CURRENT_USER_UPDATE: R,
        GUILD_CREATE: A,
        GUILD_UPDATE: A,
        GUILD_DELETE: N,
        GUILD_MEMBER_UPDATE: C,
        GUILD_VERIFICATION_CHECK: O
    }));
