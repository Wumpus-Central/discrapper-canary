(n.d(t, { Z: () => R }), n(388685), n(997841), n(539854));
var r,
    i = n(442837),
    a = n(570140),
    o = n(601964),
    s = n(630388),
    l = n(709054),
    c = n(271383),
    u = n(485386),
    d = n(430824),
    f = n(594174),
    _ = n(981631),
    p = n(372897);
function h(e, t, n) {
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
let m = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0
    },
    g = new Set(),
    E = {};
function b(e) {
    let t;
    (y(e), g.add(e));
    let n = d.Z.getGuild(e),
        r = f.default.getCurrentUser();
    if (null == n || n.verificationLevel === _.sFg.NONE || null == r || (0, o.eM)(n, r) || r.isPhoneVerified()) return;
    let i = c.ZP.getMember(n.id, r.id);
    if (null != i) {
        var l;
        if ((0, s.yE)(null != (l = i.flags) ? l : 0, p.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of i.roles) {
            let r = u.Z.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.features.has(_.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let h = +r.createdAt + 60000 * _.YeM.ACCOUNT_AGE - Date.now(),
        m = +n.joinedAt + 60000 * _.YeM.MEMBER_AGE - Date.now(),
        b = n.verificationLevel >= _.sFg.LOW && !r.isClaimed(),
        O = !1,
        v = !1,
        I = !1,
        T = !1;
    r.isPhoneVerified() || r.isStaff() || ((O = n.verificationLevel >= _.sFg.LOW && !r.verified), (v = n.verificationLevel >= _.sFg.VERY_HIGH), (I = n.verificationLevel >= _.sFg.MEDIUM && h > 0), (T = n.verificationLevel >= _.sFg.HIGH && m > 0));
    let S = [];
    (T && S.push(m),
        I && S.push(h),
        S.length > 0 &&
            (t = setTimeout(
                () =>
                    a.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...S)
            )),
        (E[e] = {
            notClaimed: b,
            notEmailVerified: O,
            notPhoneVerified: v,
            newAccount: I,
            newMember: T,
            canChat: !(b || O || v || I || T),
            accountDeadline: new Date(Date.now() + h),
            memberDeadline: new Date(Date.now() + m),
            timeoutRef: t
        }));
}
function y(e) {
    let t = E[e];
    (null != t && clearTimeout(t.timeoutRef), delete E[e]);
}
function O() {
    for (let e in (g.clear(), E)) y(e);
}
function v() {
    l.default.keys(E).forEach(y);
}
function I(e) {
    (g.delete(e.guild.id), b(e.guild.id));
}
function T(e) {
    let { guild: t } = e;
    y(t.id);
}
function S(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    g.delete(n);
}
function A() {
    g.clear();
}
function N(e) {
    let { guildId: t } = e;
    b(t);
}
class C extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(d.Z, u.Z, f.default);
    }
    getCheck(e) {
        var t;
        return null == e ? m : (g.has(e) || b(e), null != (t = E[e]) ? t : m);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
h(C, 'displayName', 'GuildVerificationStore');
let R = new C(a.Z, {
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: v,
    CURRENT_USER_UPDATE: A,
    GUILD_CREATE: I,
    GUILD_UPDATE: I,
    GUILD_DELETE: T,
    GUILD_MEMBER_UPDATE: S,
    GUILD_VERIFICATION_CHECK: N
});
