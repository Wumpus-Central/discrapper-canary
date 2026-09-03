n.d(t, { DC: () => u, KL: () => _, gx: () => c, kY: () => d });
var i,
    r = n(582128),
    a = n(172218),
    s = n(174459),
    l = n(878369),
    o = n(652215),
    d =
        (((i = {}).VIEW = "view"),
        (i.PLAY = "play"),
        (i.CLOUD_PLAY = "cloud_play"),
        (i.JOIN = "join"),
        (i.ADD_APP = "add_app"),
        (i.JOIN_SERVER = "join_server"),
        (i.INVITE = "invite"),
        (i.SYNC = "sync"),
        (i.CONTENT = "content"),
        (i.BANNER = "banner"),
        (i.STREAM = "stream"),
        (i.CONNECT_ACCOUNT = "connect_account"),
        i);
function c(e) {
    let { applicationId: t, linkType: n, area: i, referrerId: r, customId: a, isDeadEnd: l, messageId: d } = e;
    s.default.track(o.HAw.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: i,
        referrer_id: r,
        custom_id: a,
        is_dead_end: l,
        message_id: d,
    });
}
function u(e) {
    let t = (0, l.Q)(e),
        n = r.useRef(!1);
    return (0, a.K)(
        (e) => {
            !n.current &&
                e &&
                ((n.current = !0),
                t.onView?.(),
                (function (e) {
                    let {
                        appId: t,
                        linkType: n,
                        referrerId: i,
                        customId: r,
                        guildId: a,
                        channelId: l,
                        messageId: d,
                        appEmbedState: c,
                    } = e;
                    s.default.track(o.HAw.APP_EMBED_VIEWED, {
                        application_id: t,
                        link_type: n,
                        referrer_id: i,
                        custom_id: r,
                        guild_id: a,
                        channel_id: l,
                        message_id: d,
                        app_embed_state: c,
                    });
                })({
                    appId: t.id,
                    linkType: t.linkType,
                    referrerId: t.referrerId,
                    customId: t.activityCustomId,
                    guildId: t.guildId,
                    channelId: t.channelId,
                    messageId: t.messageId,
                    appEmbedState: t.appEmbedState,
                }));
        },
        void 0,
    );
}
function _(e, t, n, i) {
    s.default.track(o.HAw.APP_EMBED_LINK_SENT, { application_id: e, link_type: t, referrer_id: n, custom_id: i });
}
