"use strict";
n.d(t, { A: () => f });
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
let f = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: f,
            permissionOverwrites: h = [],
            bitrate: p,
            userLimit: E,
            parentId: m,
            skuId: g,
            branchId: A,
        } = e;
        s.h.dispatch({ type: "CREATE_CHANNEL_MODAL_SUBMIT", guildId: t, channelType: n });
        let I = { type: n, name: f, permission_overwrites: h };
        if (
            (null != p && p !== d.gp3 && (I.bitrate = p),
            null != E && E > 0 && (I.user_limit = E),
            null != m && (I.parent_id = m),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == g) throw Error("Unexpected missing SKU");
            (I.sku_id = g), (I.branch_id = A);
        }
        return u.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: I,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) =>
                    (0, r.e0)({ is_private: h.length > 0, channel_id: e?.body?.id, channel_type: e?.body?.type }),
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
