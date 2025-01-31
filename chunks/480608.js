n.d(t, {
    E: () => d,
    H: () => p
});
var i = n(31775),
    r = n.n(i),
    a = n(544891),
    s = n(570140),
    o = n(749210),
    l = n(243730),
    u = n(981631);
async function c(e) {
    try {
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_START',
            guildId: e
        });
        let t = (
            await a.tn.get({
                url: u.ANM.GUILD_ROLE_MEMBER_COUNTS(e),
                rejectWithError: !0
            })
        ).body;
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS',
            guildId: e,
            roleMemberCount: t
        });
    } catch (t) {
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE',
            guildId: e
        });
    }
}
async function d(e) {
    l.Z.shouldFetch(e) && (await c(e));
}
let f = new (r())({ maxAge: 10000 });
function _(e, t) {
    return a.tn
        .get({
            url: u.ANM.GUILD_ROLE_MEMBER_IDS(e, t),
            rejectWithError: !1
        })
        .then((t) => (o.Z.requestMembersById(e, t.body, !1), t.body.length));
}
function p(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ''.concat(e, '-').concat(t);
    return n && null != f.get(i) ? Promise.resolve(null) : (f.set(i, !0), _(e, t));
}
