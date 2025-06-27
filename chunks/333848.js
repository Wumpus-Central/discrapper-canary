l.d(t, { Z: () => d }), l(415506);
var n = l(990547),
    r = l(283693),
    a = l(570140),
    s = l(408987),
    i = l(9156),
    o = l(621600),
    u = l(573261),
    c = l(87051),
    h = l(981631),
    p = l(526761);
let d = {
    createChannel(e) {
        let { guildId: t, type: l, name: d, permissionOverwrites: g = [], bitrate: f, userLimit: y, parentId: E, skuId: v, branchId: b } = e;
        a.Z.dispatch({
            type: 'CREATE_CHANNEL_MODAL_SUBMIT',
            guildId: t,
            channelType: l
        });
        let C = {
            type: l,
            name: d,
            permission_overwrites: g
        };
        if ((null != f && f !== h.epw && (C.bitrate = f), null != y && y > 0 && (C.user_limit = y), null != E && (C.parent_id = E), l === h.d4z.GUILD_STORE)) {
            if (null == v) throw Error('Unexpected missing SKU');
            (C.sku_id = v), (C.branch_id = b);
        }
        return u.Z.post({
            url: h.ANM.GUILD_CHANNELS(t),
            body: C,
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, l;
                    return (0, r.iG)({
                        is_private: g.length > 0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (l = e.body) ? void 0 : l.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (i.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, { flags: p.ic.OPT_IN_ENABLED }, o.ZB.OptedIn), s.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    (a.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, l, a) =>
        u.Z.post({
            url: h.ANM.GUILD_CHANNELS(e),
            body: {
                name: t,
                type: l,
                topic: a
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: n.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var t, l;
                    return (0, r.iG)({
                        is_private: !0,
                        channel_id: null == e || null == (t = e.body) ? void 0 : t.id,
                        channel_type: null == e || null == (l = e.body) ? void 0 : l.type
                    });
                }
            },
            rejectWithError: !1
        })
};
