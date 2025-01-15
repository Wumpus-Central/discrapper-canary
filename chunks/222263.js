n.d(t, {
    Z: function () {
        return r;
    }
});
var i = n(864106);
function r(e) {
    let { userId: t, nick: n, guildId: r, avatar: l, avatarDecoration: a, banner: s, bio: o, pronouns: c, colorString: d } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: r,
        avatar: l,
        avatar_decoration_data: (0, i.FG)(a),
        banner: s,
        bio: o,
        pronouns: c,
        color_string: d
    };
}
