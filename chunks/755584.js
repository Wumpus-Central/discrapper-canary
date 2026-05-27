"use strict";
n.d(t, { A: () => h }), n(938796);
var i = n(562708),
    r = n(933681),
    s = n(228366),
    a = n(568185),
    o = n(543465),
    l = n(477427),
    u = n(499785),
    c = n(832712),
    d = n(652215),
    _ = n(355097);
let h = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: h,
            permissionOverwrites: f = [],
            bitrate: p,
            userLimit: E,
            parentId: m,
            skuId: g,
            branchId: A,
            flags: I,
            availableTags: T,
        } = e;
        s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let S = { type: n, name: h, permission_overwrites: f };
        if (
            (null != p && p !== d.gp3 && (S.bitrate = p),
            null != E && E > 0 && (S.user_limit = E),
            null != m && (S.parent_id = m),
            null != I && (S.flags = I),
            null != T &&
                T.length > 0 &&
                (S.available_tags = T.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == g) throw Error("Unexpected missing SKU");
            (S.sku_id = g), (S.branch_id = A);
        }
        return u.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: S,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, r.e0)({ is_private: f.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                o.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: _.vv.OPT_IN_ENABLED }, l.fd.OptedIn),
                a.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, s) =>
        u.A.post({
            url: d.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: s },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, r.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
