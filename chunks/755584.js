n.d(t, {
    A: () => p,
}),
    n(65821);
var r = n(110259),
    i = n(933681),
    a = n(73153),
    s = n(568185),
    o = n(543465),
    l = n(477427),
    c = n(499785),
    u = n(832712),
    d = n(652215),
    f = n(355097);
let p = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: p,
            permissionOverwrites: _ = [],
            bitrate: h,
            userLimit: m,
            parentId: g,
            skuId: E,
            branchId: b,
        } = e;
        a.h.dispatch({
            type: "CREATE_CHANNEL_MODAL_SUBMIT",
            guildId: t,
            channelType: n,
        });
        let y = {
            type: n,
            name: p,
            permission_overwrites: _,
        };
        if (
            (null != h && h !== d.gp3 && (y.bitrate = h),
            null != m && m > 0 && (y.user_limit = m),
            null != g && (y.parent_id = g),
            n === d.rbe.GUILD_STORE)
        ) {
            if (null == E) throw Error("Unexpected missing SKU");
            (y.sku_id = E), (y.branch_id = b);
        }
        return c.A.post({
            url: d.Rsh.GUILD_CHANNELS(t),
            body: y,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.e0)({
                        is_private: _.length > 0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type,
                    });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                o.Ay.isOptInEnabled(t) &&
                    u.A.updateChannelOverrideSettings(
                        t,
                        e.body.id,
                        {
                            flags: f.vv.OPT_IN_ENABLED,
                        },
                        l.fd.OptedIn,
                    ),
                s.A.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (
                    (a.h.dispatch({
                        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
                    e)
                );
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        c.A.post({
            url: d.Rsh.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: a,
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.e0)({
                        is_private: !0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type,
                    });
                },
            },
            rejectWithError: !1,
        }),
};
