"use strict";
n.d(t, { L: () => d, a: () => m });
var l = n(635377),
    i = n.n(l),
    s = n(636537),
    a = n(228366),
    r = n(686956),
    o = n(642133),
    c = n(652215);
async function u(e) {
    try {
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await s.Bo.get({ url: c.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function d(e) {
    o.A.shouldFetch(e) && (await u(e));
}
let h = new (i())({ maxAge: 1e4 });
function m(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = `${e}-${t}`;
    if (!n || null == h.get(l))
        return (
            h.set(l, !0),
            s.Bo.get({ url: c.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: !1 }).then(
                (t) => (r.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
