n.d(t, { L: () => s, a: () => c });
var r = n(635377),
    E = n.n(r),
    _ = n(636537),
    h = n(228366),
    l = n(66834),
    o = n(642133),
    u = n(652215);
async function i(e) {
    try {
        h.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await _.Bo.get({ url: u.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        h.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        h.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function s(e) {
    o.A.shouldFetch(e) && (await i(e));
}
let a = new (E())({ maxAge: 1e4 });
function c(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = `${e}-${t}`;
    if (!n || null == a.get(r))
        return (
            a.set(r, !0),
            _.Bo.get({ url: u.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: (0, _.fT)() }).then(
                (t) => (l.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
