n.d(t, { D: () => o });
var r = n(570140),
    i = n(576007),
    a = n(672458);
async function o(e, t, n) {
    let o = await (0, i.g)(e, t, n);
    if (o.type === a.d.ERROR) throw o.body;
    let { body: s } = o;
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS',
        guildId: e,
        members: s.members,
        page_result_count: s.page_result_count,
        total_result_count: s.total_result_count
    });
}
