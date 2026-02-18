n.d(t, { A: () => u });
var a = n(110259),
    l = n(933681),
    r = n(73153),
    s = n(568185),
    i = n(543465),
    o = n(477427),
    h = n(499785),
    c = n(832712),
    d = n(652215),
    p = n(355097);
let u = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: u,
            permissionOverwrites: _ = [],
            bitrate: g,
            userLimit: f,
            parentId: E,
            skuId: b,
            branchId: R,
        } = e;
        r.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let v = { type: n, name: u, permission_overwrites: _ };
        if (
            (null != g && g !== d.gp3 && (v.bitrate = g),
            null != f && f > 0 && (v.user_limit = f),
            null != E && (v.parent_id = E),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == b) throw Error("Unexpected missing SKU");
            (v.sku_id = b), (v.branch_id = R);
        }
        return h.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: v,
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, l.e0)({ is_private: _.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                i.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: p.vv.OPT_IN_ENABLED }, o.fd.OptedIn),
                s.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (r.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, r) =>
        h.A.post({
            url: d.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, l.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
