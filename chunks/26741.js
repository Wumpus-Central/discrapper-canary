n.d(t, { $s: () => f, J_: () => x, P9: () => g, cM: () => p, dX: () => m, nK: () => E, pZ: () => N, z6: () => C });
var i,
    l = n(582128),
    s = n(562708),
    r = n(172218),
    a = n(139286),
    o = n(763827),
    d = n(977997),
    c = n(174459),
    u = n(131955),
    h = n(652215);
function A(e) {
    return Object.keys(d.A.getVoiceStatesForChannel(e)).length;
}
function g(e) {
    let { guildId: t, channelId: n, bannerHash: i } = e,
        [d, c] = l.useState(!1),
        u = l.useRef(null),
        h = (0, r.K)(c, 0.1),
        g = `${n}:${i}`;
    return (
        l.useEffect(() => {
            d &&
                u.current !== g &&
                ((u.current = g),
                (function (e) {
                    let { guildId: t, channelId: n, bannerHash: i } = e;
                    (0, a.x)({
                        name: s.ImpressionNames.GUILD_HANGOUT_WINDOW,
                        type: s.ImpressionTypes.VIEW,
                        properties: {
                            guild_id: t,
                            channel_id: n,
                            num_voice_users: A(n),
                            media_session_id: o.A.getMediaSessionId(),
                            banner_hash: i,
                        },
                    });
                })({ guildId: t, channelId: n, bannerHash: i }));
        }, [d, g, t, n, i]),
        h
    );
}
function m(e) {
    let { guildId: t, channelId: n } = e,
        [i, d] = l.useState(!1),
        c = l.useRef(null),
        u = (0, r.K)(d, 0.1);
    return (
        l.useEffect(() => {
            i &&
                c.current !== n &&
                ((c.current = n),
                (function (e) {
                    let { guildId: t, channelId: n } = e;
                    (0, a.x)({
                        name: s.ImpressionNames.GUILD_HANGOUT_WINDOW_ENTRY_POINT,
                        type: s.ImpressionTypes.VIEW,
                        properties: {
                            guild_id: t,
                            channel_id: n,
                            num_voice_users: A(n),
                            media_session_id: o.A.getMediaSessionId(),
                        },
                    });
                })({ guildId: t, channelId: n }));
        }, [i, n, t]),
        u
    );
}
function f(e) {
    let { guildId: t, channelId: n, contentExists: i } = e;
    (0, a.A)({
        name: s.ImpressionNames.GUILD_HANGOUT_WINDOW_MODAL,
        type: s.ImpressionTypes.MODAL,
        properties: { guild_id: t, channel_id: n, num_voice_users: A(n), content_exists: i },
    });
}
var p =
    (((i = {}).GIF_CATEGORY = "gif-category"),
    (i.GIF_CUSTOM_SEARCH = "gif-custom-search"),
    (i.RECENT_IMAGE = "recent-image"),
    (i.PRESET_GIF = "preset-gif"),
    i);
function C(e) {
    let { guildId: t, channelId: n, contentType: i, gifCategoryType: l } = e,
        s = "gif-category" === i ? (0, u.Er)(l) : null;
    c.default.track(h.HAw.HANGOUT_WINDOW_CONTENT_SET, {
        guild_id: t,
        channel_id: n,
        content_type: i,
        num_voice_users: A(n),
        media_session_id: o.A.getMediaSessionId(),
        gif_category_type: s,
    });
}
function E(e) {
    let { guildId: t, channelId: n } = e;
    c.default.track(h.HAw.HANGOUT_WINDOW_CONTENT_CLEARED, { guild_id: t, channel_id: n });
}
function x(e) {
    let { guildId: t, channelId: n } = e;
    c.default.track(h.HAw.HANGOUT_WINDOW_CLICKED, { guild_id: t, channel_id: n });
}
function N(e) {
    let { guildId: t, channelId: n, categoryType: i } = e,
        l = (0, u.Er)(i);
    null != l &&
        c.default.track(h.HAw.HANGOUT_WINDOW_GIF_CATEGORY_CLICKED, { guild_id: t, channel_id: n, category_type: l });
}
