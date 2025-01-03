n.d(t, {
    Z: function () {
        return i;
    }
});
function i(e) {
    let { userId: t, nick: n, guildId: i, avatar: r, avatarDecoration: l, banner: a, bio: s, pronouns: o, colorString: c } = e;
    return {
        user_id: t,
        nick: n,
        guild_id: i,
        avatar: r,
        avatar_decoration_data:
            null != l
                ? {
                      asset: l.asset,
                      sku_id: l.skuId
                  }
                : null,
        banner: a,
        bio: s,
        pronouns: o,
        color_string: c
    };
}
