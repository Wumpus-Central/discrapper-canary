r.d(t, { A: () => _ }), r(938796);
var i = r(562708),
    n = r(933681),
    a = r(228366),
    o = r(568185),
    p = r(543465),
    l = r(477427),
    s = r(499785),
    d = r(832712),
    c = r(652215),
    h = r(355097);
let _ = {
    createChannel(e) {
        let {
            guildId: t,
            type: r,
            name: _,
            permissionOverwrites: A = [],
            bitrate: E,
            userLimit: N,
            parentId: u,
            skuId: y,
            branchId: C,
            flags: b,
        } = e;
        a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: r });
        let L = { type: r, name: _, permission_overwrites: A };
        if (
            (null != E && E !== c.gp3 && (L.bitrate = E),
            null != N && N > 0 && (L.user_limit = N),
            null != u && (L.parent_id = u),
            null != b && (L.flags = b),
            r === c.rbe.GUILD_STORE)
        ) {
            if (null == y) throw Error("Unexpected missing SKU");
            (L.sku_id = y), (L.branch_id = C);
        }
        return s.A.post({
            url: c.Rsh.GUILD_CHANNELS(t),
            body: L,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, n.e0)({ is_private: A.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                p.Ay.isOptInEnabled(t) &&
                    d.A.updateChannelOverrideSettings(t, e.body.id, { flags: h.vv.OPT_IN_ENABLED }, l.fd.OptedIn),
                o.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, r, a) =>
        s.A.post({
            url: c.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: r, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, n.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
