"use strict";
n.d(t, { DC: () => d, KL: () => _, gx: () => c, kY: () => u });
var i,
    r = n(64700),
    s = n(172218),
    a = n(174459),
    o = n(878369),
    l = n(652215),
    u =
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
    let { applicationId: t, linkType: n, area: i, referrerId: r, customId: s, isDeadEnd: o, messageId: u } = e;
    a.default.track(l.HAw.APP_EMBED_CLICKED, {
        application_id: t,
        link_type: n,
        area: i,
        referrer_id: r,
        custom_id: s,
        is_dead_end: o,
        message_id: u,
    });
}
function d(e) {
    let t = (0, o.Q)(e),
        n = r.useRef(!1);
    return (0, s.K)(
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
                        guildId: s,
                        channelId: o,
                        messageId: u,
                        appEmbedState: c,
                    } = e;
                    a.default.track(l.HAw.APP_EMBED_VIEWED, {
                        application_id: t,
                        link_type: n,
                        referrer_id: i,
                        custom_id: r,
                        guild_id: s,
                        channel_id: o,
                        message_id: u,
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
    a.default.track(l.HAw.APP_EMBED_LINK_SENT, { application_id: e, link_type: t, referrer_id: n, custom_id: i });
}
