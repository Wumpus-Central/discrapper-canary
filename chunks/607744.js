n.d(t, { Z: () => P }), n(388685), n(997841), n(539854);
var r,
    i = n(95015),
    a = n(442837),
    o = n(570140),
    s = n(601964),
    l = n(709054),
    c = n(271383),
    u = n(485386),
    d = n(430824),
    f = n(594174),
    p = n(981631),
    _ = n(372897);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
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
        canChat: !0,
    },
    g = new Set(),
    E = {};
function b(e) {
    let t;
    y(e), g.add(e);
    let n = d.Z.getGuild(e),
        r = f.default.getCurrentUser();
    if (null == n || n.verificationLevel === p.sFg.NONE || null == r || (0, s.eM)(n, r) || r.isPhoneVerified()) return;
    let a = c.ZP.getMember(n.id, r.id);
    if (null != a) {
        var l;
        if ((0, i.yE)(null != (l = a.flags) ? l : 0, _.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of a.roles) {
            let r = u.Z.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date("2022-12-02 00:00:00"),
            r = null == a.joinedAt || new Date(a.joinedAt) < t;
        if (!(n.features.has(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let m = +r.createdAt + 60000 * p.YeM.ACCOUNT_AGE - Date.now(),
        h = +n.joinedAt + 60000 * p.YeM.MEMBER_AGE - Date.now(),
        b = n.verificationLevel >= p.sFg.LOW && !r.isClaimed(),
        O = !1,
        v = !1,
        S = !1,
        I = !1;
    r.isPhoneVerified() ||
        r.isStaff() ||
        ((O = n.verificationLevel >= p.sFg.LOW && !r.verified),
        (v = n.verificationLevel >= p.sFg.VERY_HIGH),
        (S = n.verificationLevel >= p.sFg.MEDIUM && m > 0),
        (I = n.verificationLevel >= p.sFg.HIGH && h > 0));
    let T = [];
    I && T.push(h),
        S && T.push(m),
        T.length > 0 &&
            (t = setTimeout(
                () =>
                    o.Z.dispatch({
                        type: "GUILD_VERIFICATION_CHECK",
                        guildId: e,
                    }),
                Math.max(...T),
            )),
        (E[e] = {
            notClaimed: b,
            notEmailVerified: O,
            notPhoneVerified: v,
            newAccount: S,
            newMember: I,
            canChat: !(b || O || v || S || I),
            accountDeadline: new Date(Date.now() + m),
            memberDeadline: new Date(Date.now() + h),
            timeoutRef: t,
        });
}
function y(e) {
    let t = E[e];
    null != t && clearTimeout(t.timeoutRef), delete E[e];
}
function O() {
    for (let e in (g.clear(), E)) y(e);
}
function v() {
    l.default.keys(E).forEach(y);
}
function S(e) {
    g.delete(e.guild.id), b(e.guild.id);
}
function I(e) {
    let { guild: t } = e;
    y(t.id);
}
function T(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    g.delete(n);
}
function A() {
    g.clear();
}
function C(e) {
    let { guildId: t } = e;
    b(t);
}
class N extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.ZP, u.Z, d.Z, f.default);
    }
    getCheck(e) {
        var t;
        return null == e ? h : (g.has(e) || b(e), null != (t = E[e]) ? t : h);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
m(N, "displayName", "GuildVerificationStore");
let P = new N(o.Z, {
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: v,
    CURRENT_USER_UPDATE: A,
    GUILD_CREATE: S,
    GUILD_UPDATE: S,
    GUILD_DELETE: I,
    GUILD_MEMBER_UPDATE: T,
    GUILD_VERIFICATION_CHECK: C,
});
