(n.d(t, { Z: () => m }), n(415506));
var r = n(990547),
    i = n(283693),
    l = n(570140),
    a = n(408987),
    o = n(9156),
    s = n(621600),
    c = n(573261),
    u = n(87051),
    d = n(981631),
    p = n(526761);
let m = {
    createChannel(e) {
        let { guildId: t, type: n, name: m, permissionOverwrites: f = [], bitrate: g, userLimit: h, parentId: _, skuId: b, branchId: E } = e;
        l.Z.dispatch({
            type: 'CREATE_CHANNEL_MODAL_SUBMIT',
            guildId: t,
            channelType: n
        });
        let x = {
            type: n,
            name: m,
            permission_overwrites: f
        };
        if ((null != g && g !== d.epw && (x.bitrate = g), null != h && h > 0 && (x.user_limit = h), null != _ && (x.parent_id = _), n === d.d4z.GUILD_STORE)) {
            if (null == b) throw Error('Unexpected missing SKU');
            ((x.sku_id = b), (x.branch_id = E));
        }
        return c.Z.post({
            url: d.ANM.GUILD_CHANNELS(t),
            body: x,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.iG)({
                        is_private: f.length > 0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (o.ZP.isOptInEnabled(t) && u.Z.updateChannelOverrideSettings(t, e.body.id, { flags: p.ic.OPT_IN_ENABLED }, s.ZB.OptedIn), a.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    l.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, n, l) =>
        c.Z.post({
            url: d.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: n,
                topic: l
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, n;
                    return (0, i.iG)({
                        is_private: !0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (n = e.body) ? void 0 : n.type
                    });
                }
            },
            rejectWithError: !1
        })
};
