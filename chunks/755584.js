r.d(t, { A: () => h }), r(938796);
var i = r(562708),
    a = r(933681),
    n = r(228366),
    o = r(568185),
    d = r(543465),
    l = r(477427),
    p = r(499785),
    s = r(832712),
    _ = r(652215),
    c = r(355097);
let h = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
            name: h,
            permissionOverwrites: A = [],
            bitrate: E,
            userLimit: m,
            parentId: N,
            skuId: u,
            branchId: y,
            flags: b,
            availableTags: C,
        } = e;
        n.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let L = { type: r, name: h, permission_overwrites: A };
        if (
            (null != E && E !== _.gp3 && (L.bitrate = E),
            null != m && m > 0 && (L.user_limit = m),
            null != N && (L.parent_id = N),
            null != b && (L.flags = b),
            null != C &&
                C.length > 0 &&
                (L.available_tags = C.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            r === _.rbe.GUILD_STORE)
        ) {
            if (null == u) throw Error("Unexpected missing SKU");
            (L.sku_id = u), (L.branch_id = y);
        }
        return p.A.post({
            url: _.Rsh.GUILD_CHANNELS(t),
            body: L,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, a.e0)({ is_private: A.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                d.Ay.isOptInEnabled(t) &&
                    s.A.updateChannelOverrideSettings(t, e.body.id, { flags: c.vv.OPT_IN_ENABLED }, l.fd.OptedIn),
                o.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (n.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, n) =>
        p.A.post({
            url: _.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: n },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, a.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
