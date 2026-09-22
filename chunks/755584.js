(r.d(t, { A: () => A }), r(938796));
var i = r(562708),
    n = r(636537),
    a = r(933681),
    l = r(228366),
    o = r(568185),
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
            skuId: b,
            branchId: y,
            applicationId: C,
            flags: L,
            availableTags: T,
            gameId: I,
        } = e;
        l.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let g = { type: r, name: A, permission_overwrites: E };
        if (
            (null != m && m !== c.gp3 && (g.bitrate = m),
            null != u && u > 0 && (g.user_limit = u),
            null != N && (g.parent_id = N),
            null != L && (g.flags = L),
            null != T &&
                T.length > 0 &&
                (g.available_tags = T.map((e) => ({
                    name: e.name,
                    emoji_id: e.emojiId,
                    emoji_name: e.emojiName,
                    moderated: e.moderated,
                }))),
            null != I && (g.game_id = I),
            r === c.rbe.GUILD_STORE)
        ) {
            if (null == b) throw Error("Unexpected missing SKU");
            ((g.sku_id = b), (g.branch_id = y));
        }
        if (r === c.rbe.GUILD_APP) {
            if (null == C) throw Error("Unexpected missing application");
            g.application_id = C;
        }
        return s.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: g,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, a.e0)({ is_private: E.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, n.fT)(),
        }).then(
            (e) => (
                d.Ay.isOptInEnabled(t) &&
                    _.A.updateChannelOverrideSettings({
                        guildId: t,
                        channelId: e.body.id,
                        settings: { flags: h.vv.OPT_IN_ENABLED },
                        label: p.fd.OptedIn,
                    }),
                o.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (l.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, l) =>
        s.A.post({
            url: c.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: l },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, a.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: (0, n.fT)(),
        }),
};
