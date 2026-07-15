r.d(t, { A: () => A }), r(938796);
var i = r(562708),
    a = r(636537),
    n = r(933681),
    o = r(228366),
    d = r(568185),
    l = r(543465),
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
            userLimit: N,
            parentId: u,
            skuId: y,
            branchId: b,
            flags: C,
            availableTags: L,
        } = e;
        o.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let T = { type: r, name: A, permission_overwrites: E };
        if (
            (null != m && m !== c.gp3 && (T.bitrate = m),
            null != N && N > 0 && (T.user_limit = N),
            null != u && (T.parent_id = u),
            null != C && (T.flags = C),
            null != L &&
                L.length > 0 &&
                (T.available_tags = L.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            r === c.rbe.GUILD_STORE)
        ) {
            if (null == y) throw Error("Unexpected missing SKU");
            (T.sku_id = y), (T.branch_id = b);
        }
        return s.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: T,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, n.e0)({ is_private: E.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, a.fT)(),
        }).then(
            (e) => (
                l.Ay.isOptInEnabled(t) &&
                    _.A.updateChannelOverrideSettings(t, e.body.id, { flags: h.vv.OPT_IN_ENABLED }, p.fd.OptedIn),
                d.A.checkGuildTemplateDirty(t),
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
