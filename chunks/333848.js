t.d(n, { Z: () => p }), t(415506);
var i = t(990547),
    r = t(283693),
    l = t(570140),
    a = t(408987),
    o = t(9156),
    c = t(621600),
    _ = t(573261),
    d = t(87051),
    u = t(981631),
    s = t(526761);
let p = {
    createChannel(e) {
        let { guildId: n, type: t, name: p, permissionOverwrites: E = [], bitrate: h, userLimit: b, parentId: f, skuId: g, branchId: T } = e;
        l.Z.dispatch({
            type: 'CREATE_CHANNEL_MODAL_SUBMIT',
            guildId: n,
            channelType: t
        });
        let A = {
            type: t,
            name: p,
            permission_overwrites: E
        };
        if ((null != h && h !== u.epw && (A.bitrate = h), null != b && b > 0 && (A.user_limit = b), null != f && (A.parent_id = f), t === u.d4z.GUILD_STORE)) {
            if (null == g) throw Error('Unexpected missing SKU');
            (A.sku_id = g), (A.branch_id = T);
        }
        return _.Z.post({
            url: u.ANM.GUILD_CHANNELS(n),
            body: A,
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, t;
                    return (0, r.iG)({
                        is_private: E.length > 0,
                        channel_id: null == e || null == (n = e.body) ? void 0 : n.id,
                        channel_type: null == e || null == (t = e.body) ? void 0 : t.type
                    });
                }
            },
            rejectWithError: !1
        }).then(
            (e) => (o.ZP.isOptInEnabled(n) && d.Z.updateChannelOverrideSettings(n, e.body.id, { flags: s.ic.OPT_IN_ENABLED }, c.ZB.OptedIn), a.Z.checkGuildTemplateDirty(n), e),
            (e) => {
                throw (
                    (l.Z.dispatch({
                        type: 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE',
                        errors: e.body
                    }),
                    e)
                );
            }
        );
    },
    createRoleSubscriptionTemplateChannel: (e, n, t, l) =>
        _.Z.post({
            url: u.ANM.GUILD_CHANNELS(e),
            body: {
                name: n,
                type: t,
                topic: l
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.CHANNEL_CREATE,
                properties: (e) => {
                    var n, t;
                    return (0, r.iG)({
                        is_private: !0,
                        channel_id: null == e || null == (n = e.body) ? void 0 : n.id,
                        channel_type: null == e || null == (t = e.body) ? void 0 : t.type
                    });
                }
            },
            rejectWithError: !1
        })
};
