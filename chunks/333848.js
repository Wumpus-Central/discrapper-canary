c(411104);
var i = c(990547),
    r = c(283693),
    t = c(570140),
    a = c(408987),
    o = c(9156),
    d = c(621600),
    l = c(573261),
    _ = c(87051),
    p = c(981631),
    s = c(526761);
n.Z = {
    createChannel(e) {
        let { guildId: n, type: c, name: u, permissionOverwrites: h = [], bitrate: v, userLimit: b, parentId: C, skuId: E, branchId: g } = e;
        t.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let A = {
            type: c,
            name: u,
            permission_overwrites: h
        };
        if ((null != v && v !== p.epw && (A.bitrate = v), null != b && b > 0 && (A.user_limit = b), null != C && (A.parent_id = C), c === p.d4z.GUILD_STORE)) {
            if (null == E) throw Error('Unexpected missing SKU');
            (A.sku_id = E), (A.branch_id = g);
        }
        return l.Z.post({
            url: p.ANM.GUILD_CHANNELS(n),
            body: A,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, c;
                    return (0, r.iG)({
                        is_private: h.length > 0,
                        channel_id: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.id,
                        channel_type: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (o.ZP.isOptInEnabled(n) && _.Z.updateChannelOverrideSettings(n, e.body.id, { flags: s.ic.OPT_IN_ENABLED }, d.ZB.OptedIn), a.Z.checkGuildTemplateDirty(n), e),
            (e) => {
                throw (
                    (t.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, n, c, t) =>
        l.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
            body: {
                name: n,
                type: c,
                topic: t
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, c;
                    return (0, r.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.id,
                        channel_type: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.type
                    });
                }
            },
            rejectWithError: !1
        })
};
