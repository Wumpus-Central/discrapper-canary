n.d(t, { Z: () => D }), n(266796);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(37234),
    s = n(710845),
    l = n(63568),
    c = n(408987),
    u = n(962086),
    d = n(160404),
    f = n(41776),
    p = n(6025),
    _ = n(314897),
    h = n(271383),
    m = n(430824),
    g = n(546796),
    E = n(573261),
    v = n(600553),
    b = n(999382),
    y = n(981631),
    O = n(308083),
    S = n(388032);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = new s.Z('GuildSettingsActionCreators'),
    w = {
        init(e, t, n, r) {
            o.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: t,
                subsection: r,
                location: n
            });
        },
        async open(e, t, r, i) {
            var o;
            await Promise.all([n.e('48835'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('11212'), n.e('55186'), n.e('84335'), n.e('68445'), n.e('7654'), n.e('80284'), n.e('89444'), n.e('49049'), n.e('44156'), n.e('71864'), n.e('79783'), n.e('6850'), n.e('16114'), n.e('58227'), n.e('54408'), n.e('71567'), n.e('93375'), n.e('64679'), n.e('57738'), n.e('21881'), n.e('28524')]).then(n.bind(n, 994763)),
                t === y.pNK.DISCOVERY && (0, l.K2)(e, 'GuildSettignsActionCreators.open') && ((t = y.pNK.ACCESS), (i = y.KsC.ACCESS_DISCOVERABLE)),
                t === y.pNK.OVERVIEW &&
                    i === y.KsC.INVITE &&
                    (0, v.i1)({
                        guildId: e,
                        location: 'GuildSettingsActionCreators.open'
                    }) &&
                    ((t = y.pNK.BOOST_PERKS), (i = void 0)),
                (null === (o = m.Z.getGuild(e)) || void 0 === o ? void 0 : o.hasFeature(y.oNc.COMMUNITY)) && (t === y.pNK.GUILD_AUTOMOD && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_AUTOMOD)), t === y.pNK.MEMBER_VERIFICATION && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                w.init(e, t, r, i),
                p.Z.closeGuildSidebar(e),
                (0, a.jN)(y.S9g.GUILD_SETTINGS);
        },
        close() {
            o.Z.dispatch({ type: 'GUILD_SETTINGS_CLOSE' });
        },
        saveRouteStack(e) {
            o.Z.dispatch({
                type: 'GUILD_SETTINGS_SAVE_ROUTE_STACK',
                state: e
            });
        },
        setSection(e, t) {
            var n;
            let r = b.Z.getGuildId();
            null != r &&
                (e === y.pNK.DISCOVERY && (0, l.K2)(r, 'GuildSettignsActionCreators.setSection') && ((e = y.pNK.ACCESS), (t = y.KsC.ACCESS_DISCOVERABLE)),
                (null === (n = m.Z.getGuild(r)) || void 0 === n ? void 0 : n.hasFeature(y.oNc.COMMUNITY)) && (e === y.pNK.GUILD_AUTOMOD && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_AUTOMOD)), e === y.pNK.MEMBER_VERIFICATION && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                o.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_SECTION',
                    section: e,
                    subsection: t
                }));
        },
        setSearchQuery(e) {
            o.Z.dispatch({
                type: 'GUILD_SETTINGS_SET_SEARCH_QUERY',
                searchQuery: e
            });
        },
        selectRole: (e, t) =>
            o.Z.dispatch({
                type: 'GUILD_SETTINGS_ROLE_SELECT',
                roleId: e,
                searchQuery: t
            }),
        updateEmbed: (e, t, n) =>
            i.tn
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
                    o.Z.dispatch({
                        type: 'GUILD_SETTINGS_SET_WIDGET',
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id
                    });
                }),
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: r } = e;
            return (0, g.Z)(
                (e) =>
                    i.tn.post({
                        url: y.ANM.GUILD_MFA(t),
                        body: T({ level: n }, e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: S.NW.string(S.t.Wi9LER),
                        actionText: r ? S.NW.string(S.t.MP0Ho6) : S.NW.string(S.t.yZcYGR)
                    },
                    checkEnabled: !1
                }
            ).then((e) =>
                o.Z.dispatch({
                    type: 'GUILD_SETTINGS_SET_MFA_SUCCESS',
                    level: e.body.level
                })
            );
        },
        updateIcon(e, t) {
            i.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then(
                    () => {
                        o.Z.dispatch({
                            type: 'GUILD_SETTINGS_UPDATE',
                            icon: t
                        }),
                            c.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        o.Z.dispatch({
                            type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                            errors: e.body
                        })
                );
        },
        cancelChanges(e) {
            o.Z.dispatch({
                type: 'GUILD_SETTINGS_CANCEL_CHANGES',
                guildId: e
            });
        },
        updateGuild(e) {
            var t,
                { safetyAlertsChannelId: n, profile: r } = e;
            let i = T({}, C(e, ['safetyAlertsChannelId', 'profile']));
            null != r && (i.profile = T({}, null !== (t = i.profile) && void 0 !== t ? t : {}, r)), null != b.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n), o.Z.dispatch(T({ type: 'GUILD_SETTINGS_UPDATE' }, i));
        },
        updateGuildProfile(e, t) {
            o.Z.dispatch(
                T(
                    {
                        type: 'GUILD_SETTINGS_PROFILE_UPDATE',
                        guildId: e
                    },
                    t
                )
            );
        },
        saveGuild(e, t) {
            let { name: n, description: r, icon: a, splash: s, banner: l, homeHeader: u, afkChannelId: d, afkTimeout: f, systemChannelId: p, verificationLevel: _, defaultMessageNotifications: h, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: v, rulesChannelId: b, safetyAlertsChannelId: S, discoverySplash: I, publicUpdatesChannelId: N, premiumProgressBarEnabled: C, profile: R } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = A(
                    T(
                        {
                            name: n,
                            description: r,
                            icon: a,
                            splash: s,
                            banner: l,
                            home_header: u,
                            features: g,
                            preferred_locale: v,
                            afk_channel_id: d,
                            afk_timeout: f,
                            system_channel_id: p,
                            verification_level: _,
                            default_message_notifications: h,
                            explicit_content_filter: m,
                            system_channel_flags: E,
                            rules_channel_id: b,
                            discovery_splash: I,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: S
                        },
                        null != C ? { premium_progress_bar_enabled: C } : null
                    ),
                    { profile: null != R ? (0, O.n1)(R) : R }
                );
            return (
                o.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                i.tn
                    .patch({
                        url: y.ANM.GUILD(e),
                        query: { for_discovery: w.isForDiscovery },
                        body: D,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    })
                    .then(
                        (t) => {
                            o.Z.dispatch({
                                type: 'GUILD_SETTINGS_SUBMIT_SUCCESS',
                                guild: t.body
                            }),
                                c.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (o.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                P.error('Failed to save guild settings', { errors: e.body }),
                                w.throwErr)
                            )
                                throw e.body;
                        }
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            i.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1
                })
                .then((t) => (c.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, g.Z)(
                (o) =>
                    E.Z.patch({
                        url: y.ANM.GUILD(e),
                        body: T(
                            {
                                owner_id: t,
                                code: i
                            },
                            o
                        ),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                            properties: {
                                guild_id: e,
                                verification_type: n
                            }
                        },
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: S.NW.string(S.t.Z5s7PD),
                        actionText: S.NW.string(S.t.Z5s7PD)
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
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP_SEND_CODE,
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
                    i.tn.post({
                        url: y.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: S.NW.formatToPlainString(S.t.us7mCw, { name: t }),
                        actionText: S.NW.string(S.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                w.close();
            }),
        async leaveGuild(e) {
            await i.tn.del({
                url: y.ANM.GUILD_LEAVE(e),
                body: { lurking: f.Z.isLurking(e) || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                w.close();
        },
        async updateMemberRoles(e, t, n, r, a) {
            if (d.Z.isFullServerPreview(e) && t === _.default.getId()) {
                (0, u.og)(e, n);
                return;
            }
            await i.tn.patch({
                url: y.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                r.forEach((n) =>
                    o.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                ),
                a.forEach((n) =>
                    o.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_REMOVE',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            i.tn
                .patch({
                    url: y.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n },
                    rejectWithError: !1
                })
                .then((n) => {
                    o.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_BULK_ADD',
                        guildId: e,
                        roleId: t,
                        added: n.body
                    });
                }),
        enableIntegration: (e, t, n) =>
            i.tn.post({
                url: y.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        updateIntegration(e, t, n, r, o) {
            let a = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: o
            };
            return i.tn.patch({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                body: a,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        },
        syncIntegration(e, t) {
            i.tn.post({
                url: y.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        }
    },
    D = w;
