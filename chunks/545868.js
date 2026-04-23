"use strict";
n.d(t, { L: () => u, a: () => E });
var i = n(635377),
    r = n.n(i),
    s = n(636537),
    a = n(228366),
    o = n(686956),
    l = n(642133),
    d = n(652215);
async function _(e) {
    try {
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await s.Bo.get({ url: d.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        a.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function u(e) {
    l.A.shouldFetch(e) && (await _(e));
}
let c = new (r())({ maxAge: 1e4 });
function E(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = `${e}-${t}`;
    if (!n || null == c.get(i))
        return (
            c.set(i, !0),
            s.Bo.get({ url: d.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: !1 }).then(
                (t) => (o.A.requestMembersById(e, t.body, !1), t.body.length),
            )
        );
    return Promise.resolve(null);
}
