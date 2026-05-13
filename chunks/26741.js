n.d(t, { $s: () => p, J_: () => x, P9: () => g, cM: () => f, dX: () => m, nK: () => E, pZ: () => N, z6: () => C });
var l,
    i = n(64700),
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
    let { guildId: t, channelId: n, bannerHash: l } = e,
        [d, c] = i.useState(!1),
        u = i.useRef(null),
        h = (0, r.K)(c, 0.1),
        g = `${n}:${l}`;
    return (
        i.useEffect(() => {
            d &&
                u.current !== g &&
                ((u.current = g),
                (function (e) {
                    let { guildId: t, channelId: n, bannerHash: l } = e;
                    (0, a.x)({
                        name: s.ImpressionNames.GUILD_HANGOUT_WINDOW,
                        type: s.ImpressionTypes.VIEW,
                        properties: {
                            guild_id: t,
                            channel_id: n,
                            num_voice_users: A(n),
                            media_session_id: o.A.getMediaSessionId(),
                            banner_hash: l,
                        },
                    });
                })({ guildId: t, channelId: n, bannerHash: l }));
        }, [d, g, t, n, l]),
        h
    );
}
function m(e) {
    let { guildId: t, channelId: n } = e,
        [l, d] = i.useState(!1),
        c = i.useRef(null),
        u = (0, r.K)(d, 0.1);
    return (
        i.useEffect(() => {
            l &&
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
        }, [l, n, t]),
        u
    );
}
let p = (e) => {
    let { guildId: t, channelId: n, contentExists: l } = e;
    (0, a.A)({
        name: s.ImpressionNames.GUILD_HANGOUT_WINDOW_MODAL,
        type: s.ImpressionTypes.MODAL,
        properties: { guild_id: t, channel_id: n, num_voice_users: A(n), content_exists: l },
    });
};
var f =
    (((l = {}).GIF_CATEGORY = "gif-category"),
    (l.GIF_CUSTOM_SEARCH = "gif-custom-search"),
    (l.RECENT_IMAGE = "recent-image"),
    (l.PRESET_GIF = "preset-gif"),
    l);
let C = (e) => {
        let { guildId: t, channelId: n, contentType: l, gifCategoryType: i } = e,
            s = "gif-category" === l ? (0, u.Er)(i) : null;
        c.default.track(h.HAw.HANGOUT_WINDOW_CONTENT_SET, {
            guild_id: t,
            channel_id: n,
            content_type: l,
            num_voice_users: A(n),
            media_session_id: o.A.getMediaSessionId(),
            gif_category_type: s,
        });
    },
    E = (e) => {
        let { guildId: t, channelId: n } = e;
        c.default.track(h.HAw.HANGOUT_WINDOW_CONTENT_CLEARED, { guild_id: t, channel_id: n });
    },
    x = (e) => {
        let { guildId: t, channelId: n } = e;
        c.default.track(h.HAw.HANGOUT_WINDOW_CLICKED, { guild_id: t, channel_id: n });
    },
    N = (e) => {
        let { guildId: t, channelId: n, categoryType: l } = e,
            i = (0, u.Er)(l);
        null != i &&
            c.default.track(h.HAw.HANGOUT_WINDOW_GIF_CATEGORY_CLICKED, {
                guild_id: t,
                channel_id: n,
                category_type: i,
            });
    };
