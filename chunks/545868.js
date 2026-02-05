"use strict";
n.d(t, { L: () => d, a: () => p });
var r = n(635377),
    i = n.n(r),
    a = n(562465),
    s = n(73153),
    o = n(686956),
    l = n(642133),
    u = n(652215);
async function c(e) {
    try {
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START", guildId: e });
        let t = (await a.Bo.get({ url: u.Rsh.GUILD_ROLE_MEMBER_COUNTS(e), rejectWithError: !0 })).body;
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS", guildId: e, roleMemberCount: t });
    } catch (t) {
        s.h.dispatch({ type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE", guildId: e });
    }
}
async function d(e) {
    l.A.shouldFetch(e) && (await c(e));
}
let _ = new (i())({ maxAge: 1e4 });
function f(e, t) {
    return a.Bo.get({ url: u.Rsh.GUILD_ROLE_MEMBER_IDS(e, t), rejectWithError: !1 }).then(
        (t) => (o.A.requestMembersById(e, t.body, !1), t.body.length),
    );
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = `${e}-${t}`;
    return n && null != _.get(r) ? Promise.resolve(null) : (_.set(r, !0), f(e, t));
}
