n.d(t, { Z: () => l });
var i = n(864106);
function l(e) {
    let { userId: t, nick: n, guildId: l, avatar: r, avatarDecoration: a, banner: s, bio: o, pronouns: c, colorString: d } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: l,
        avatar: r,
        avatar_decoration_data: (0, i.FG)(a),
        banner: s,
        bio: o,
        pronouns: c,
        color_string: d
    };
}
