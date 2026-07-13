"use strict";
n.d(t, { A: () => E }), n(938796);
var i = n(562708),
    r = n(933681),
    a = n(228366),
    s = n(568185),
    l = n(543465),
    o = n(477427),
    d = n(499785),
    c = n(832712),
    u = n(652215),
    _ = n(355097);
let E = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: E,
            permissionOverwrites: A = [],
            bitrate: h,
            userLimit: I,
            parentId: f,
            skuId: p,
            branchId: T,
            flags: m,
            availableTags: g,
        } = e;
        a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let S = { type: n, name: E, permission_overwrites: A };
        if (
            (null != h && h !== u.gp3 && (S.bitrate = h),
            null != I && I > 0 && (S.user_limit = I),
            null != f && (S.parent_id = f),
            null != m && (S.flags = m),
            null != g &&
                g.length > 0 &&
                (S.available_tags = g.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            n === u.rbe.GUILD_STORE)
        ) {
            if (null == p) throw Error("Unexpected missing SKU");
            (S.sku_id = p), (S.branch_id = T);
        }
        return d.A.post({
            url: u.Rsh.GUILD_CHANNELS(t),
            body: S,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, r.e0)({ is_private: A.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                l.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: _.vv.OPT_IN_ENABLED }, o.fd.OptedIn),
                s.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        d.A.post({
            url: u.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, r.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
