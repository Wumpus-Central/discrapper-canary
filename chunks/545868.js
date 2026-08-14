n.d(t, { L: () => R, a: () => L });
var l = n(635377),
    E = n.n(l),
    u = n(636537),
    _ = n(228366),
    r = n(66834),
    i = n(642133),
    o = n(652215);
async function c(e) {
    try {
        _.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await u.Bo.get({ url: o.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        _.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        _.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function R(e) {
    i.A.shouldFetch(e) && (await c(e));
}
let s = new (E())({ maxAge: 1e4 });
function L(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = `${e}-${t}`;
    if (!n || null == s.get(l))
        return (
            s.set(l, !0),
            u.Bo.get({ url: o.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: (0, u.fT)() }).then(
                (t) => (r.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
