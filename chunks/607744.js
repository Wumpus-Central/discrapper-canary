n.d(t, { Z: () => C }), n(47120), n(789020), n(653041);
var i,
    r = n(442837),
    a = n(570140),
    s = n(630388),
    o = n(709054),
    l = n(271383),
    u = n(430824),
    c = n(594174),
    d = n(981631),
    f = n(372897);
function _(e, t, n) {
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
let p = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    },
    h = new Set(),
    m = {};
function g(e) {
    let t;
    E(e), h.add(e);
    let n = u.Z.getGuild(e),
        i = c.default.getCurrentUser();
    if (null == n || n.verificationLevel === d.sFg.NONE || null == i || n.isOwner(i) || i.isPhoneVerified()) return;
    let r = l.ZP.getMember(n.id, i.id);
    if (null != r) {
        var o;
        if ((0, s.yE)(null !== (o = r.flags) && void 0 !== o ? o : 0, f.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of r.roles) {
            let i = u.Z.getRole(n.id, t);
            null == i || i.managed || e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            i = null == r.joinedAt || new Date(r.joinedAt) < t;
        if (!(n.hasFeature(d.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return;
    }
    let _ = +i.createdAt + 60000 * d.YeM.ACCOUNT_AGE - Date.now(),
        p = +n.joinedAt + 60000 * d.YeM.MEMBER_AGE - Date.now(),
        g = n.verificationLevel >= d.sFg.LOW && !i.isClaimed(),
        v = !1,
        y = !1,
        I = !1,
        T = !1;
    i.isPhoneVerified() || i.isStaff() || ((v = n.verificationLevel >= d.sFg.LOW && !i.verified), (y = n.verificationLevel >= d.sFg.VERY_HIGH), (I = n.verificationLevel >= d.sFg.MEDIUM && _ > 0), (T = n.verificationLevel >= d.sFg.HIGH && p > 0));
    let b = [];
    T && b.push(p),
        I && b.push(_),
        b.length > 0 &&
            (t = setTimeout(
                () =>
                    a.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...b)
            )),
        (m[e] = {
            notClaimed: g,
            notEmailVerified: v,
            notPhoneVerified: y,
            newAccount: I,
            newMember: T,
            canChat: !(g || v || y || I || T),
            accountDeadline: new Date(Date.now() + _),
            memberDeadline: new Date(Date.now() + p),
            timeoutRef: t
        });
}
function E(e) {
    let t = m[e];
    null != t && clearTimeout(t.timeoutRef), delete m[e];
}
function v() {
    for (let e in (h.clear(), m)) E(e);
}
function y() {
    o.default.keys(m).forEach(E);
}
function I(e) {
    h.delete(e.guild.id), g(e.guild.id);
}
function T(e) {
    let { guild: t } = e;
    E(t.id);
}
function b(e) {
    var t;
    let { guildId: n, user: i } = e;
    if (i.id !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    h.delete(n);
}
function S() {
    h.clear();
}
function A(e) {
    let { guildId: t } = e;
    g(t);
}
class N extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.default);
    }
    getCheck(e) {
        var t;
        return null == e ? p : (h.has(e) || g(e), null !== (t = m[e]) && void 0 !== t ? t : p);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
_(N, 'displayName', 'GuildVerificationStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: v,
    CONNECTION_CLOSED: y,
    CURRENT_USER_UPDATE: S,
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: T,
    GUILD_MEMBER_UPDATE: b,
    GUILD_VERIFICATION_CHECK: A
});
