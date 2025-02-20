n.d(t, { Z: () => i });
var r = n(864106);
function i(e) {
    let { userId: t, nick: n, guildId: i, avatar: l, avatarDecoration: o, banner: a, bio: s, pronouns: c, colorString: u } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: i,
        avatar: l,
        avatar_decoration_data: (0, r.FG)(o),
        banner: a,
        bio: s,
        pronouns: c,
        color_string: u
    };
}
