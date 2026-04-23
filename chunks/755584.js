r.d(t, { A: () => d });
var l = r(110259),
    n = r(933681),
    a = r(228366),
    s = r(568185),
    o = r(543465),
    i = r(477427),
    h = r(499785),
    c = r(832712),
    p = r(652215),
    u = r(355097);
let d = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
            name: d,
            permissionOverwrites: _ = [],
            bitrate: g,
            userLimit: E,
            parentId: f,
            skuId: A,
            branchId: R,
        } = e;
        a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let v = { type: r, name: d, permission_overwrites: _ };
        if (
            (null != g && g !== p.gp3 && (v.bitrate = g),
            null != E && E > 0 && (v.user_limit = E),
            null != f && (v.parent_id = f),
            r === p.rbe.GUILD_STORE)
        ) {
            if (null == A) throw Error("Unexpected missing SKU");
            (v.sku_id = A), (v.branch_id = R);
        }
        return h.A.post({
            url: p.Rsh.GUILD_CHANNELS(t),
            body: v,
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, n.e0)({ is_private: _.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                o.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: u.vv.OPT_IN_ENABLED }, i.fd.OptedIn),
                s.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, a) =>
        h.A.post({
            url: p.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, n.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
