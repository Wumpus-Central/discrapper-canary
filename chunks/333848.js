(l.d(t, { Z: () => d }), l(415506));
var n = l(990547),
    r = l(283693),
    a = l(570140),
    i = l(408987),
    s = l(9156),
    o = l(621600),
    u = l(573261),
    c = l(87051),
    p = l(981631),
    h = l(526761);
let d = {
    createChannel(e) {
        let { guildId: t, type: l, name: d, permissionOverwrites: g = [], bitrate: f, userLimit: E, parentId: b, skuId: v, branchId: y } = e;
        a.Z.dispatch({
            type: 'CREATE_CHANNEL_MODAL_SUBMIT',
            guildId: t,
            channelType: l
        });
        let m = {
            type: l,
            name: d,
            permission_overwrites: g
        };
        if ((null != f && f !== p.epw && (m.bitrate = f), null != E && E > 0 && (m.user_limit = E), null != b && (m.parent_id = b), l === p.d4z.GUILD_STORE)) {
            if (null == v) throw Error('Unexpected missing SKU');
            ((m.sku_id = v), (m.branch_id = y));
        }
        return u.Z.post({
            url: p.ANM.GUILD_CHANNELS(t),
            body: m,
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
            (e) => (s.ZP.isOptInEnabled(t) && c.Z.updateChannelOverrideSettings(t, e.body.id, { flags: h.ic.OPT_IN_ENABLED }, o.ZB.OptedIn), i.Z.checkGuildTemplateDirty(t), e),
            (e) => {
                throw (
                    a.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, t, l, a) =>
        u.Z.post({
            url: p.ANM.GUILD_CHANNELS(e),
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
