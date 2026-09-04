n.d(t, { L: () => R, a: () => s });
var l = n(635377),
    u = n.n(l),
    E = n(636537),
    r = n(228366),
    _ = n(66834),
    i = n(642133),
    o = n(652215);
async function c(e) {
    try {
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await E.Bo.get({ url: o.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function R(e) {
    i.A.shouldFetch(e) && (await c(e));
}
let a = new (u())({ maxAge: 1e4 });
function s(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = `${e}-${t}`;
    if (!n || null == a.get(l))
        return (
            a.set(l, !0),
            E.Bo.get({ url: o.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: (0, E.fT)() }).then(
                (t) => (_.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
