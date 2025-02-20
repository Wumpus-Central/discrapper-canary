n.d(t, { Z: () => A }), n(47120), n(789020), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(630388),
    s = n(709054),
    l = n(271383),
    c = n(430824),
    u = n(594174),
    d = n(981631),
    f = n(372897);
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
let _ = {
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
    let n = c.Z.getGuild(e),
        r = u.default.getCurrentUser();
    if (null == n || n.verificationLevel === d.sFg.NONE || null == r || n.isOwner(r) || r.isPhoneVerified()) return;
    let i = l.ZP.getMember(n.id, r.id);
    if (null != i) {
        var s;
        if ((0, a.yE)(null !== (s = i.flags) && void 0 !== s ? s : 0, f.q.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of i.roles) {
            let r = c.Z.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date('2022-12-02 00:00:00'),
            r = null == i.joinedAt || new Date(i.joinedAt) < t;
        if (!(n.hasFeature(d.oNc.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let p = +r.createdAt + 60000 * d.YeM.ACCOUNT_AGE - Date.now(),
        _ = +n.joinedAt + 60000 * d.YeM.MEMBER_AGE - Date.now(),
        g = n.verificationLevel >= d.sFg.LOW && !r.isClaimed(),
        v = !1,
        b = !1,
        y = !1,
        O = !1;
    r.isPhoneVerified() || r.isStaff() || ((v = n.verificationLevel >= d.sFg.LOW && !r.verified), (b = n.verificationLevel >= d.sFg.VERY_HIGH), (y = n.verificationLevel >= d.sFg.MEDIUM && p > 0), (O = n.verificationLevel >= d.sFg.HIGH && _ > 0));
    let S = [];
    O && S.push(_),
        y && S.push(p),
        S.length > 0 &&
            (t = setTimeout(
                () =>
                    o.Z.dispatch({
                        type: 'GUILD_VERIFICATION_CHECK',
                        guildId: e
                    }),
                Math.max(...S)
            )),
        (m[e] = {
            notClaimed: g,
            notEmailVerified: v,
            notPhoneVerified: b,
            newAccount: y,
            newMember: O,
            canChat: !(g || v || b || y || O),
            accountDeadline: new Date(Date.now() + p),
            memberDeadline: new Date(Date.now() + _),
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
function b() {
    s.default.keys(m).forEach(E);
}
function y(e) {
    h.delete(e.guild.id), g(e.guild.id);
}
function O(e) {
    let { guild: t } = e;
    E(t.id);
}
function S(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null === (t = u.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    h.delete(n);
}
function I() {
    h.clear();
}
function T(e) {
    let { guildId: t } = e;
    g(t);
}
class N extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.default);
    }
    getCheck(e) {
        var t;
        return null == e ? _ : (h.has(e) || g(e), null !== (t = m[e]) && void 0 !== t ? t : _);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
p(N, 'displayName', 'GuildVerificationStore');
let A = new N(o.Z, {
    CONNECTION_OPEN: v,
    CONNECTION_CLOSED: b,
    CURRENT_USER_UPDATE: I,
    GUILD_CREATE: y,
    GUILD_UPDATE: y,
    GUILD_DELETE: O,
    GUILD_MEMBER_UPDATE: S,
    GUILD_VERIFICATION_CHECK: T
});
