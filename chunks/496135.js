n.d(t, { D: () => a });
var r = n(570140),
    i = n(576007),
    o = n(672458);
async function a(e, t, n) {
    let a = await (0, i.g)(e, t, n);
    if (a.type === o.d.ERROR) throw a.body;
    let { body: s } = a;
    r.Z.dispatch({
        type: 'MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS',
        guildId: e,
        members: s.members,
        page_result_count: s.page_result_count,
        total_result_count: s.total_result_count
    });
}
