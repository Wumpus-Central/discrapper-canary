var i = r(990547),
    a = r(544891),
    s = r(570140),
    o = r(37234),
    l = r(710845),
    u = r(63568),
    c = r(408987),
    d = r(962086),
    f = r(160404),
    _ = r(41776),
    h = r(6025),
    p = r(314897),
    m = r(271383),
    g = r(430824),
    E = r(546796),
    v = r(573261),
    I = r(999382),
    T = r(981631),
    b = r(308083),
    y = r(388032);
let S = new l.Z('GuildSettingsActionCreators'),
    A = {
        init(e, n, r, i) {
            s.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: n,
                subsection: i,
                location: r
            });
        },
        async open(e, n, i, a) {
            var s;
            await Promise.all([r.e('63288'), r.e('48835'), r.e('33053'), r.e('15669'), r.e('56630'), r.e('90508'), r.e('65840'), r.e('7654'), r.e('33862'), r.e('70596'), r.e('98479'), r.e('80284'), r.e('31113'), r.e('20561'), r.e('60696'), r.e('58227'), r.e('16114'), r.e('53967'), r.e('1187'), r.e('4604'), r.e('93375'), r.e('64679'), r.e('73330'), r.e('21881'), r.e('83354')]).then(r.bind(r, 994763)), n === T.pNK.DISCOVERY && (0, u.K2)(e, 'GuildSettignsActionCreators.open') && (n = T.pNK.ACCESS), (null === (s = g.Z.getGuild(e)) || void 0 === s ? void 0 : s.hasFeature(T.oNc.COMMUNITY)) && (n === T.pNK.GUILD_AUTOMOD && ((n = T.pNK.SAFETY), (a = T.KsC.SAFETY_AUTOMOD)), n === T.pNK.MEMBER_VERIFICATION && ((n = T.pNK.SAFETY), (a = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), A.init(e, n, i, a);
            h.Z.closeGuildSidebar(e), (0, o.jN)(T.S9g.GUILD_SETTINGS);
        },
        close() {
            s.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
        },
        saveRouteStack(e) {
            s.Z.dispatch({
                type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
                state: e
            });
        },
        setSection(e, n) {
            var r;
            let i = I.Z.getGuildId();
            null != i &&
                ((null === (r = g.Z.getGuild(i)) || void 0 === r ? void 0 : r.hasFeature(T.oNc.COMMUNITY)) && (e === T.pNK.GUILD_AUTOMOD && ((e = T.pNK.SAFETY), (n = T.KsC.SAFETY_AUTOMOD)), e === T.pNK.MEMBER_VERIFICATION && ((e = T.pNK.SAFETY), (n = T.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_SECTION',
                    section: e,
                    subsection: n
                }));
        },
        setSearchQuery(e) {
            s.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
                searchQuery: e
            });
        },
        selectRole: (e, n) =>
            s.Z.dispatch({
                type: 'GUILD_SETTINGS_ROLE_SELECT',
                roleId: e,
                searchQuery: n
            }),
        updateEmbed(e, n, r) {
            a.tn
                .patch({
                    url: T.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: n,
                        channel_id: r
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((n) => {
                    s.Z.dispatch({
                        type: 'GUILD_SETTINGS_SET_WIDGET',
                        guildId: e,
                        enabled: n.body.enabled,
                        channelId: n.body.channel_id
                    });
                });
        },
        updateMFALevel(e) {
            let { guildId: n, level: r, isEnabled: i } = e;
            return (0, E.Z)(
                (e) =>
                    a.tn.post({
                        url: T.ANM.GUILD_MFA(n),
                        body: {
                            level: r,
                            ...e
                        },
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: y.intl.string(y.t.Wi9LER),
                        actionText: i ? y.intl.string(y.t.MP0Ho6) : y.intl.string(y.t.yZcYGR)
                    },
                    checkEnabled: !1
                }
            ).then((e) =>
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
                    level: e.body.level
                })
            );
        },
        updateIcon(e, n) {
            a.tn
                .patch({
                    url: T.ANM.GUILD(e),
                    body: { icon: n },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    () => {
                        s.Z.dispatch({
                            type: 'GUILD_SETTINGS_UPDATE',
                            icon: n
                        }),
                            c.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        s.Z.dispatch({
                            type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                            errors: e.body
                        })
                );
        },
        cancelChanges(e) {
            s.Z.dispatch({
                type: 'GUILD_SETTINGS_CANCEL_CHANGES',
                guildId: e
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: n, profile: r, ...i } = e,
                a = { ...i };
            if (null != r) {
                var o;
                a.profile = {
                    ...(null !== (o = a.profile) && void 0 !== o ? o : {}),
                    ...r
                };
            }
            null != I.Z.getGuildId() && null != n && (a.safetyAlertsChannelId = n),
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_UPDATE',
                    ...a
                });
        },
        saveGuild(e, n) {
            let { name: r, description: i, icon: o, splash: l, banner: u, homeHeader: d, afkChannelId: f, afkTimeout: _, systemChannelId: h, verificationLevel: p, defaultMessageNotifications: m, explicitContentFilter: g, features: E, systemChannelFlags: v, preferredLocale: I, rulesChannelId: y, safetyAlertsChannelId: A, discoverySplash: N, publicUpdatesChannelId: C, premiumProgressBarEnabled: R, profile: O } = n,
                D = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                L = {
                    name: r,
                    description: i,
                    icon: o,
                    splash: l,
                    banner: u,
                    home_header: d,
                    features: E,
                    preferred_locale: I,
                    afk_channel_id: f,
                    afk_timeout: _,
                    system_channel_id: h,
                    verification_level: p,
                    default_message_notifications: m,
                    explicit_content_filter: g,
                    system_channel_flags: v,
                    rules_channel_id: y,
                    discovery_splash: N,
                    public_updates_channel_id: C,
                    safety_alerts_channel_id: A,
                    ...(null != R ? { premium_progress_bar_enabled: R } : null),
                    profile: null != O ? (0, b.n1)(O) : O
                };
            return (
                s.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                a.tn
                    .patch({
                        url: T.ANM.GUILD(e),
                        query: { for_discovery: D.isForDiscovery },
                        body: L,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (n) => {
                            s.Z.dispatch({
                                type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
                                guild: n.body
                            }),
                                c.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (s.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                S.error('Failed to save guild settings', { errors: e.body }),
                                D.throwErr)
                            )
                                throw e.body;
                        }
                    )
            );
        },
        updateGuildModeration: (e, n) =>
            a.tn
                .patch({
                    url: T.ANM.GUILD(e),
                    body: {
                        verification_level: n.verificationLevel,
                        explicit_content_filter: n.explicitContentFilter
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((n) => (c.Z.checkGuildTemplateDirty(e), n)),
        transferOwnership(e, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, E.Z)(
                (s) =>
                    v.Z.patch({
                        url: T.ANM.GUILD(e),
                        body: {
                            owner_id: n,
                            code: a,
                            ...s
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: r
                            }
                        },
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: y.intl.string(y.t.Z5s7PD),
                        actionText: y.intl.string(y.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return v.Z.put({
                url: T.ANM.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: {
                        guild_id: e,
                        is_resend: n
                    }
                },
                rejectWithError: !1
            });
        },
        deleteGuild: (e, n) =>
            (0, E.Z)(
                (n) =>
                    a.tn.post({
                        url: T.ANM.GUILD_DELETE(e),
                        body: n,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: y.intl.formatToPlainString(y.t.us7mCw, { name: n }),
                        actionText: y.intl.string(y.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                A.close();
            }),
        async leaveGuild(e) {
            await a.tn.del({
                url: T.ANM.GUILD_LEAVE(e),
                body: { lurking: _.Z.isLurking(e) || m.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                A.close();
        },
        async updateMemberRoles(e, n, r, i, o) {
            if (f.Z.isFullServerPreview(e) && n === p.default.getId()) {
                (0, d.og)(e, r);
                return;
            }
            await a.tn.patch({
                url: T.ANM.GUILD_MEMBER(e, n),
                body: { roles: r },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                i.forEach((r) =>
                    s.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: r,
                        userId: n
                    })
                ),
                o.forEach((r) =>
                    s.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_REMOVE',
                        guildId: e,
                        roleId: r,
                        userId: n
                    })
                );
        },
        bulkAddMemberRoles: (e, n, r) =>
            a.tn
                .patch({
                    url: T.ANM.GUILD_ROLE_MEMBERS(e, n),
                    body: { member_ids: r },
                    rejectWithError: !1
                })
                .then((r) => {
                    s.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_BULK_ADD',
                        guildId: e,
                        roleId: n,
                        added: r.body
                    });
                }),
        enableIntegration: (e, n, r) =>
            a.tn.post({
                url: T.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: n,
                    id: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        disableIntegration: (e, n) =>
            a.tn.del({
                url: T.ANM.GUILD_INTEGRATION(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        updateIntegration(e, n, r, i, s) {
            let o = {
                expire_behavior: r,
                expire_grace_period: i,
                enable_emoticons: s
            };
            return a.tn.patch({
                url: T.ANM.GUILD_INTEGRATION(e, n),
                body: o,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        },
        syncIntegration(e, n) {
            a.tn.post({
                url: T.ANM.GUILD_INTEGRATION_SYNC(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        }
    };
n.Z = A;
