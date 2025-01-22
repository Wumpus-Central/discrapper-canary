r.d(n, {
    E: function () {
        return f;
    },
    H: function () {
        return _;
    }
});
var i = r(31775),
    a = r.n(i),
    o = r(544891),
    s = r(570140),
    l = r(749210),
    u = r(243730),
    c = r(981631);
async function d(e) {
    try {
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_START',
            guildId: e
        });
        let n = (
            await o.tn.get({
                url: c.ANM.GUILD_ROLE_MEMBER_COUNTS(e),
                rejectWithError: !0
            })
        ).body;
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS',
            guildId: e,
            roleMemberCount: n
        });
    } catch (n) {
        s.Z.dispatch({
            type: 'GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE',
            guildId: e
        });
    }
}
async function f(e) {
    u.Z.shouldFetch(e) && (await d(e));
}
let p = new (a())({ maxAge: 10000 });
function h(e, n) {
    return o.tn
        .get({
            url: c.ANM.GUILD_ROLE_MEMBER_IDS(e, n),
            rejectWithError: !1
        })
        .then((n) => (l.Z.requestMembersById(e, n.body, !1), n.body.length));
}
function _(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = ''.concat(e, '-').concat(n);
    return r && null != p.get(i) ? Promise.resolve(null) : (p.set(i, !0), h(e, n));
}
