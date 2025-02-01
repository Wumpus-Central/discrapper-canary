i.d(n, { Z: () => u }), i(411104);
var r = i(990547),
    t = i(283693),
    _ = i(570140),
    o = i(408987),
    a = i(9156),
    l = i(621600),
    d = i(573261),
    c = i(87051),
    p = i(981631),
    s = i(526761);
let u = {
    createChannel(e) {
        let { guildId: n, type: i, name: u, permissionOverwrites: b = [], bitrate: h, userLimit: v, parentId: C, skuId: E, branchId: g } = e;
        _.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let f = {
            type: i,
            name: u,
            permission_overwrites: b
        };
        if ((null != h && h !== p.epw && (f.bitrate = h), null != v && v > 0 && (f.user_limit = v), null != C && (f.parent_id = C), i === p.d4z.GUILD_STORE)) {
            if (null == E) throw Error('Unexpected missing SKU');
            (f.sku_id = E), (f.branch_id = g);
        }
        return d.Z.post({
            url: p.ANM.GUILD_CHANNELS(n),
            body: f,
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, i;
                    return (0, t.iG)({
                        is_private: b.length > 0,
                        channel_id: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.id,
                        channel_type: null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (a.ZP.isOptInEnabled(n) && c.Z.updateChannelOverrideSettings(n, e.body.id, { flags: s.ic.OPT_IN_ENABLED }, l.ZB.OptedIn), o.Z.checkGuildTemplateDirty(n), e),
            (e) => {
                throw (
                    (_.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, n, i, _) =>
        d.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
            body: {
                name: n,
                type: i,
                topic: _
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, i;
                    return (0, t.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.id,
                        channel_type: null == e ? void 0 : null === (i = e.body) || void 0 === i ? void 0 : i.type
                    });
                }
            },
            rejectWithError: !1
        })
};
