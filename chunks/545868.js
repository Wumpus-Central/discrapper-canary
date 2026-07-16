"use strict";
n.d(t, { L: () => u, a: () => E });
var i = n(635377),
    r = n.n(i),
    a = n(636537),
    s = n(228366),
    l = n(66834),
    o = n(642133),
    d = n(652215);
async function c(e) {
    try {
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await a.Bo.get({ url: d.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function u(e) {
    o.A.shouldFetch(e) && (await c(e));
}
let _ = new (r())({ maxAge: 1e4 });
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = `${e}-${t}`;
    if (!n || null == _.get(i))
        return (
            _.set(i, !0),
            a.Bo.get({ url: d.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: !1 }).then(
                (t) => (l.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
