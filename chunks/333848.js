n.d(t, { Z: () => p }), n(415506);
var r = n(990547),
    i = n(283693),
    a = n(570140),
    o = n(408987),
    s = n(9156),
    l = n(621600),
    c = n(573261),
    u = n(87051),
    d = n(981631),
    f = n(526761);
let p = {
    createChannel(e) {
        let {
            guildId: t,
            type: n,
            name: p,
            permissionOverwrites: _ = [],
            bitrate: m,
            userLimit: h,
            parentId: g,
            skuId: E,
            branchId: b,
        } = e;
        a.Z.dispatch({
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
            (null != m && m !== d.epw && (y.bitrate = m),
            null != h && h > 0 && (y.user_limit = h),
            null != g && (y.parent_id = g),
            n === d.d4z.GUILD_STORE)
        ) {
            if (null == E) throw Error("Unexpected missing SKU");
            (y.sku_id = E), (y.branch_id = b);
        }
        return c.Z.post({
            url: d.ANM.GUILD_CHANNELS(t),
            body: y,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.iG)({
                        is_private: _.length > 0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type,
                    });
                },
            },
            rejectWithError: !1,
        }).then(
            (e) => (
                s.ZP.isOptInEnabled(t) &&
                    u.Z.updateChannelOverrideSettings(t, e.body.id, { flags: f.ic.OPT_IN_ENABLED }, l.ZB.OptedIn),
                o.Z.checkGuildTemplateDirty(t),
                e
            ),
            (e) => {
                throw (
                    (a.Z.dispatch({
                        type: "CREATE_CHANNEL_MODAL_SUBMIT_FAILURE",
                        errors: e.body,
                    }),
                    e)
                );
            },
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, a) =>
        c.Z.post({
            url: d.ANM.GUILD_CHANNELS(e),
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
                    return (0, i.iG)({
                        is_private: !0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type,
                    });
                },
            },
            rejectWithError: !1,
        }),
};
