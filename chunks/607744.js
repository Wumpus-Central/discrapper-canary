n.d(t, { Z: () => C }), n(388685), n(997841), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(630388),
    s = n(709054),
    l = n(271383),
    c = n(485386),
    u = n(430824),
    d = n(594174),
    f = n(981631),
    _ = n(372897);
function p(e, t, n) {
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
let h = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    },
    m = new Set(),
    g = {};
function E(e) {
    let t;
    b(e), m.add(e);
    let n = u.Z.getGuild(e),
        r = d.default.getCurrentUser();
    if (null == n || n.verificationLevel === f.sFg.NONE || null == r || n.isOwner(r) || r.isPhoneVerified()) return;
    let i = l.ZP.getMember(n.id, r.id);
    if (null != i) {
        var s;
        if ((0, o.yE)(null != (s = i.flags) ? s : 0, _.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of i.roles) {
            let r = c.Z.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.hasFeature(f.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let p = +r.createdAt + 60000 * f.YeM.ACCOUNT_AGE - Date.now(),
        h = +n.joinedAt + 60000 * f.YeM.MEMBER_AGE - Date.now(),
        E = n.verificationLevel >= f.sFg.LOW && !r.isClaimed(),
        y = !1,
        O = !1,
        v = !1,
        I = !1;
    r.isPhoneVerified() || r.isStaff() || ((y = n.verificationLevel >= f.sFg.LOW && !r.verified), (O = n.verificationLevel >= f.sFg.VERY_HIGH), (v = n.verificationLevel >= f.sFg.MEDIUM && p > 0), (I = n.verificationLevel >= f.sFg.HIGH && h > 0));
    let T = [];
    I && T.push(h),
        v && T.push(p),
        T.length > 0 &&
            (t = setTimeout(
                () =>
                    a.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...T)
            )),
        (g[e] = {
            notClaimed: E,
            notEmailVerified: y,
            notPhoneVerified: O,
            newAccount: v,
            newMember: I,
            canChat: !(E || y || O || v || I),
            accountDeadline: new Date(Date.now() + p),
            memberDeadline: new Date(Date.now() + h),
            timeoutRef: t
        });
}
function b(e) {
    let t = g[e];
    null != t && clearTimeout(t.timeoutRef), delete g[e];
}
function y() {
    for (let e in (m.clear(), g)) b(e);
}
function O() {
    s.default.keys(g).forEach(b);
}
function v(e) {
    m.delete(e.guild.id), E(e.guild.id);
}
function I(e) {
    let { guild: t } = e;
    b(t.id);
}
function T(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = d.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    m.delete(n);
}
function S() {
    m.clear();
}
function A(e) {
    let { guildId: t } = e;
    E(t);
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, c.Z, d.default);
    }
    getCheck(e) {
        var t;
        return null == e ? h : (m.has(e) || E(e), null != (t = g[e]) ? t : h);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
p(N, 'displayName', 'GuildVerificationStore');
let C = new N(a.Z, {
    CONNECTION_OPEN: y,
    CONNECTION_CLOSED: O,
    CURRENT_USER_UPDATE: S,
    GUILD_CREATE: v,
    GUILD_UPDATE: v,
    GUILD_DELETE: I,
    GUILD_MEMBER_UPDATE: T,
    GUILD_VERIFICATION_CHECK: A
});
