"use strict";
n.d(t, { A: () => A }), n(938796);
var i = n(562708),
    r = n(636537),
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
        } = e;
        s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let N = { type: n, name: A, permission_overwrites: h };
        if (
            (null != I && I !== _.gp3 && (N.bitrate = I),
            null != f && f > 0 && (N.user_limit = f),
            null != p && (N.parent_id = p),
            null != g && (N.flags = g),
            null != S &&
                S.length > 0 &&
                (N.available_tags = S.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            n === _.rbe.GUILD_STORE)
        ) {
            if (null == T) throw Error("Unexpected missing SKU");
            (N.sku_id = T), (N.branch_id = m);
        }
        return c.A.post({
            url: _.Rsh.GUILD_CHANNELS(t),
            body: N,
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
