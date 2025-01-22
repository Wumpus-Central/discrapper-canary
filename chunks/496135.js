r.d(n, {
    D: function () {
        return s;
    }
});
var i = r(570140),
    a = r(576007),
    o = r(672458);
async function s(e, n, r) {
    let s = await (0, a.g)(e, n, r);
    if (s.type === o.d.ERROR) throw s.body;
    let { body: l } = s;
    i.Z.dispatch({
        type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS',
        guildId: e,
        members: l.members,
        page_result_count: l.page_result_count,
        total_result_count: l.total_result_count
    });
}
