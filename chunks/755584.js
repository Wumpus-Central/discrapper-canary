n.d(t, { A: () => p });
var i = n(110259),
    r = n(933681),
    a = n(73153),
    _ = n(568185),
    l = n(543465),
    o = n(477427),
    s = n(499785),
    c = n(832712),
    d = n(652215),
    h = n(355097);
let p = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: p,
            permissionOverwrites: g = [],
            bitrate: u,
            userLimit: A,
            parentId: E,
            skuId: N,
            branchId: T,
        } = e;
        a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let f = { type: n, name: p, permission_overwrites: g };
        if (
            (null != u && u !== d.gp3 && (f.bitrate = u),
            null != A && A > 0 && (f.user_limit = A),
            null != E && (f.parent_id = E),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == N) throw Error("Unexpected missing SKU");
            (f.sku_id = N), (f.branch_id = T);
        }
        return s.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: f,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, r.e0)({ is_private: g.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                l.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: h.vv.OPT_IN_ENABLED }, o.fd.OptedIn),
                _.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        s.A.post({
            url: d.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, r.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
