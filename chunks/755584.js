"use strict";
n.d(t, { A: () => A }), n(938796);
var i = n(562708),
    r = n(562465),
    a = n(933681),
    s = n(228366),
    l = n(568185),
    o = n(543465),
    d = n(477427),
    c = n(499785),
    u = n(832712),
    _ = n(652215),
    E = n(355097);
let A = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: A,
            permissionOverwrites: h = [],
            bitrate: I,
            userLimit: f,
            parentId: p,
            skuId: T,
            branchId: m,
            flags: g,
            availableTags: S,
            gameId: N,
        } = e;
        s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let C = { type: n, name: A, permission_overwrites: h };
        if (
            (null != I && I !== _.gp3 && (C.bitrate = I),
            null != f && f > 0 && (C.user_limit = f),
            null != p && (C.parent_id = p),
            null != g && (C.flags = g),
            null != S &&
                S.length > 0 &&
                (C.available_tags = S.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            null != N && (C.game_id = N),
            n === _.rbe.GUILD_STORE)
        ) {
            if (null == T) throw Error("Unexpected missing SKU");
            (C.sku_id = T), (C.branch_id = m);
        }
        return c.A.post({
            url: _.Rsh.GUILD_CHANNELS(t),
            body: C,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, a.e0)({ is_private: h.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, r.fT)(),
        }).then(
            (e) => (
                o.Ay.isOptInEnabled(t) &&
                    u.A.updateChannelOverrideSettings(t, e.body.id, { flags: E.vv.OPT_IN_ENABLED }, d.fd.OptedIn),
                l.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, s) =>
        c.A.post({
            url: _.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: s },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, a.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, r.fT)(),
        }),
};
