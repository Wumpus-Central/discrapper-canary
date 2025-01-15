l(411104);
var n = l(990547),
    a = l(283693),
    r = l(570140),
    s = l(408987),
    o = l(9156),
    i = l(621600),
    u = l(573261),
    c = l(87051),
    p = l(981631),
    h = l(526761);
t.Z = {
    createChannel(e) {
        let { guildId: t, type: l, name: d, permissionOverwrites: g = [], bitrate: f, userLimit: v, parentId: E, skuId: y, branchId: C } = e;
        r.Z.dispatch({ type: 'CREATE_CHANNEL_MODAL_SUBMIT' });
        let b = {
            type: l,
            name: d,
            permission_overwrites: g
        };
        if ((null != f && f !== p.epw && (b.bitrate = f), null != v && v > 0 && (b.user_limit = v), null != E && (b.parent_id = E), l === p.d4z.GUILD_STORE)) {
            if (null == y) throw Error('Unexpected missing SKU');
            (b.sku_id = y), (b.branch_id = C);
        }
        return u.Z.post({
            url: p.ANM.GUILD_CHANNELS(t),
            body: b,
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, l;
                    return (0, a.iG)({
                        is_private: g.length > 0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (o.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, { flags: h.ic.OPT_IN_ENABLED }, i.ZB.OptedIn), s.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    (r.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, l, r) =>
        u.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: l,
                topic: r
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, l;
                    return (0, a.iG)({
                        is_private: !0,
                        channel_id: null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.id,
                        channel_type: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.type
                    });
                }
            },
            rejectWithError: !1
        })
};
