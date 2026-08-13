r.d(t, { A: () => A }), r(938796);
var i = r(562708),
    a = r(636537),
    n = r(933681),
    o = r(228366),
    l = r(568185),
    d = r(543465),
    p = r(477427),
    s = r(499785),
    _ = r(832712),
    c = r(652215),
    h = r(355097);
let A = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
            name: A,
            permissionOverwrites: E = [],
            bitrate: m,
            userLimit: u,
            parentId: N,
            skuId: y,
            branchId: b,
            flags: C,
            availableTags: L,
            gameId: T,
        } = e;
        o.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let k = { type: r, name: A, permission_overwrites: E };
        if (
            (null != m && m !== c.gp3 && (k.bitrate = m),
            null != u && u > 0 && (k.user_limit = u),
            null != N && (k.parent_id = N),
            null != C && (k.flags = C),
            null != L &&
                L.length > 0 &&
                (k.available_tags = L.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            null != T && (k.game_id = T),
            r === c.rbe.GUILD_STORE)
        ) {
            if (null == y) throw Error("Unexpected missing SKU");
            (k.sku_id = y), (k.branch_id = b);
        }
        return s.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: k,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, n.e0)({ is_private: E.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, a.fT)(),
        }).then(
            (e) => (
                d.Ay.isOptInEnabled(t) &&
                    _.A.updateChannelOverrideSettings(t, e.body.id, { flags: h.vv.OPT_IN_ENABLED }, p.fd.OptedIn),
                l.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (o.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, o) =>
        s.A.post({
            url: c.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: o },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, n.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, a.fT)(),
        }),
};
