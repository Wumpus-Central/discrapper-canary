"use strict";
n.d(t, { L: () => d, a: () => m });
var i = n(635377),
    l = n.n(i),
    s = n(562465),
    r = n(73153),
    a = n(686956),
    o = n(642133),
    c = n(652215);
async function u(e) {
    try {
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await s.Bo.get({ url: c.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        r.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function d(e) {
    o.A.shouldFetch(e) && (await u(e));
}
let h = new (l())({ maxAge: 1e4 });
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = `${e}-${t}`;
    if (!n || null == h.get(i))
        return (
            h.set(i, !0),
            s.Bo.get({ url: c.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: !1 }).then(
                (t) => (a.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
