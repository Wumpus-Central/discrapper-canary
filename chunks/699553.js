t.d(n, {
    C: () => s,
    V: () => o
});
var l = t(544891),
    i = t(570140),
    r = t(405222),
    a = t(981631);
async function s(e) {
    let n = await l.tn.get({
        url: a.ANM.GUILD_PROFILE(e),
        rejectWithError: !1
    });
    return (0, r.x)(n.body);
}
function o(e) {
    i.Z.dispatch({
        type: 'GUILD_PROFILE_FETCH_SUCCESS',
        profile: e
    });
}
