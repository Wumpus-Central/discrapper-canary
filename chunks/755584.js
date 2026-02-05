"use strict";
n.d(t, { A: () => f });
var r = n(110259),
    i = n(933681),
    a = n(73153),
    s = n(568185),
    o = n(543465),
    l = n(477427),
    u = n(499785),
    c = n(832712),
    d = n(652215),
    _ = n(355097);
let f = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: f,
            permissionOverwrites: p = [],
            bitrate: h,
            userLimit: m,
            parentId: g,
            skuId: E,
            branchId: A,
        } = e;
        a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let I = { type: n, name: f, permission_overwrites: p };
        if (
            (null != h && h !== d.gp3 && (I.bitrate = h),
            null != m && m > 0 && (I.user_limit = m),
            null != g && (I.parent_id = g),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == E) throw Error("Unexpected missing SKU");
            (I.sku_id = E), (I.branch_id = A);
        }
        return u.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: I,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, i.e0)({ is_private: p.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                o.Ay.isOptInEnabled(t) &&
                    c.A.updateChannelOverrideSettings(t, e.body.id, { flags: _.vv.OPT_IN_ENABLED }, l.fd.OptedIn),
                s.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (a.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE", errors: e.body }), e);
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        u.A.post({
            url: d.Rsh.GUILD_CHANNELS(e),
            body: { name: t, type: n, topic: a },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => (0, i.e0)({ is_private: !0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
            },
            rejectWithError: !1,
        }),
};
