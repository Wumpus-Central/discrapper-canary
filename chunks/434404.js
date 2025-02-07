n.d(t, { Z: () => A });
var i = n(990547),
    r = n(544891),
    a = n(570140),
    s = n(37234),
    o = n(710845),
    l = n(63568),
    u = n(408987),
    c = n(962086),
    d = n(160404),
    f = n(41776),
    _ = n(6025),
    p = n(314897),
    h = n(271383),
    m = n(430824),
    g = n(546796),
    E = n(573261),
    v = n(999382),
    y = n(981631),
    I = n(308083),
    b = n(388032);
let T = new o.Z('GuildSettingsActionCreators'),
    S = {
        init(e, t, n, i) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: t,
                subsection: i,
                location: n
            });
        },
        async open(e, t, i, r) {
            var a;
            await Promise.all([n.e('48835'), n.e('90508'), n.e('68445'), n.e('7654'), n.e('33862'), n.e('80284'), n.e('6009'), n.e('44156'), n.e('86133'), n.e('53967'), n.e('16806'), n.e('60696'), n.e('58227'), n.e('16114'), n.e('66593'), n.e('93375'), n.e('64679'), n.e('13001'), n.e('94107'), n.e('69593')]).then(n.bind(n, 994763)), t === y.pNK.DISCOVERY && (0, l.K2)(e, 'GuildSettignsActionCreators.open') && ((t = y.pNK.ACCESS), (r = y.KsC.ACCESS_DISCOVERABLE)), (null === (a = m.Z.getGuild(e)) || void 0 === a ? void 0 : a.hasFeature(y.oNc.COMMUNITY)) && (t === y.pNK.GUILD_AUTOMOD && ((t = y.pNK.SAFETY), (r = y.KsC.SAFETY_AUTOMOD)), t === y.pNK.MEMBER_VERIFICATION && ((t = y.pNK.SAFETY), (r = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), S.init(e, t, i, r), _.Z.closeGuildSidebar(e), (0, s.jN)(y.S9g.GUILD_SETTINGS);
        },
        close() {
            a.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
        },
        saveRouteStack(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
                state: e
            });
        },
        setSection(e, t) {
            var n;
            let i = v.Z.getGuildId();
            null != i &&
                (e === y.pNK.DISCOVERY && (0, l.K2)(i, 'GuildSettignsActionCreators.setSection') && ((e = y.pNK.ACCESS), (t = y.KsC.ACCESS_DISCOVERABLE)),
                (null === (n = m.Z.getGuild(i)) || void 0 === n ? void 0 : n.hasFeature(y.oNc.COMMUNITY)) && (e === y.pNK.GUILD_AUTOMOD && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_AUTOMOD)), e === y.pNK.MEMBER_VERIFICATION && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_SECTION',
                    section: e,
                    subsection: t
                }));
        },
        setSearchQuery(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
                searchQuery: e
            });
        },
        selectRole: (e, t) =>
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_ROLE_SELECT',
                roleId: e,
                searchQuery: t
            }),
        updateEmbed(e, t, n) {
            r.tn
                .patch({
                    url: y.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0
                })
                .then((t) => {
                    a.Z.dispatch({
                        type: 'GUILD_SETTINGS_SET_WIDGET',
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    });
                });
        },
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: i } = e;
            return (0, g.Z)(
                (e) =>
                    r.tn.post({
                        url: y.ANM.GUILD_MFA(t),
                        body: {
                            level: n,
                            ...e
                        },
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: b.intl.string(b.t.Wi9LER),
                        actionText: i ? b.intl.string(b.t.MP0Ho6) : b.intl.string(b.t.yZcYGR)
                    },
                    checkEnabled: !1
                }
            ).then((e) =>
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
                    level: e.body.level
                })
            );
        },
        updateIcon(e, t) {
            r.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    () => {
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_UPDATE',
                            icon: t
                        }),
                            u.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        a.Z.dispatch({
                            type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                            errors: e.body
                        })
                );
        },
        cancelChanges(e) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_CANCEL_CHANGES',
                guildId: e
            });
        },
        updateGuild(e) {
            let { safetyAlertsChannelId: t, profile: n, ...i } = e,
                r = { ...i };
            if (null != n) {
                var s;
                r.profile = {
                    ...(null !== (s = r.profile) && void 0 !== s ? s : {}),
                    ...n
                };
            }
            null != v.Z.getGuildId() && null != t && (r.safetyAlertsChannelId = t),
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_UPDATE',
                    ...r
                });
        },
        updateGuildProfile(e, t) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_PROFILE_UPDATE',
                guildId: e,
                ...t
            });
        },
        saveGuild(e, t) {
            let { name: n, description: i, icon: s, splash: o, banner: l, homeHeader: c, afkChannelId: d, afkTimeout: f, systemChannelId: _, verificationLevel: p, defaultMessageNotifications: h, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: v, rulesChannelId: b, safetyAlertsChannelId: S, discoverySplash: A, publicUpdatesChannelId: N, premiumProgressBarEnabled: C, profile: R } = t,
                O = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = {
                    name: n,
                    description: i,
                    icon: s,
                    splash: o,
                    banner: l,
                    home_header: c,
                    features: g,
                    preferred_locale: v,
                    afk_channel_id: d,
                    afk_timeout: f,
                    system_channel_id: _,
                    verification_level: p,
                    default_message_notifications: h,
                    explicit_content_filter: m,
                    system_channel_flags: E,
                    rules_channel_id: b,
                    discovery_splash: A,
                    public_updates_channel_id: N,
                    safety_alerts_channel_id: S,
                    ...(null != C ? { premium_progress_bar_enabled: C } : null),
                    profile: null != R ? (0, I.n1)(R) : R
                };
            return (
                a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                r.tn
                    .patch({
                        url: y.ANM.GUILD(e),
                        query: { for_discovery: O.isForDiscovery },
                        body: D,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (t) => {
                            a.Z.dispatch({
                                type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
                                guild: t.body
                            }),
                                u.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (a.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                T.error('Failed to save guild settings', { errors: e.body }),
                                O.throwErr)
                            )
                                throw e.body;
                        }
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            r.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => (u.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, g.Z)(
                (a) =>
                    E.Z.patch({
                        url: y.ANM.GUILD(e),
                        body: {
                            owner_id: t,
                            code: r,
                            ...a
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: n
                            }
                        },
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: b.intl.string(b.t.Z5s7PD),
                        actionText: b.intl.string(b.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return E.Z.put({
                url: y.ANM.GUILD_PINCODE(e),
                oldFormErrors: !0,
                trackedActionData: {
                    event: i.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
                    properties: {
                        guild_id: e,
                        is_resend: t
                    }
                },
                rejectWithError: !1
            });
        },
        deleteGuild: (e, t) =>
            (0, g.Z)(
                (t) =>
                    r.tn.post({
                        url: y.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: b.intl.formatToPlainString(b.t.us7mCw, { name: t }),
                        actionText: b.intl.string(b.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                S.close();
            }),
        async leaveGuild(e) {
            await r.tn.del({
                url: y.ANM.GUILD_LEAVE(e),
                body: { lurking: f.Z.isLurking(e) || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                S.close();
        },
        async updateMemberRoles(e, t, n, i, s) {
            if (d.Z.isFullServerPreview(e) && t === p.default.getId()) {
                (0, c.og)(e, n);
                return;
            }
            await r.tn.patch({
                url: y.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                i.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                ),
                s.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_REMOVE',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            r.tn
                .patch({
                    url: y.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n },
                    rejectWithError: !1
                })
                .then((n) => {
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_BULK_ADD',
                        guildId: e,
                        roleId: t,
                        added: n.body
                    });
                }),
        enableIntegration: (e, t, n) =>
            r.tn.post({
                url: y.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        disableIntegration: (e, t) =>
            r.tn.del({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        updateIntegration(e, t, n, i, a) {
            let s = {
                expire_behavior: n,
                expire_grace_period: i,
                enable_emoticons: a
            };
            return r.tn.patch({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                body: s,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        },
        syncIntegration(e, t) {
            r.tn.post({
                url: y.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        }
    },
    A = S;
