n.d(t, { Z: () => w }), n(953529);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(37234),
    s = n(710845),
    l = n(408987),
    c = n(962086),
    u = n(160404),
    d = n(41776),
    f = n(6025),
    _ = n(314897),
    p = n(271383),
    h = n(430824),
    m = n(546796),
    g = n(573261),
    E = n(600553),
    b = n(999382),
    y = n(981631),
    v = n(308083),
    O = n(388032);
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
function S(e) {
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
function T(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = new s.Z('GuildSettingsActionCreators'),
    P = {
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
            await Promise.all([n.e('48835'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('11212'), n.e('86328'), n.e('80284'), n.e('9710'), n.e('57971'), n.e('7654'), n.e('62117'), n.e('49751'), n.e('49049'), n.e('44156'), n.e('83957'), n.e('49286'), n.e('55666'), n.e('60696'), n.e('58227'), n.e('54408'), n.e('33472'), n.e('93375'), n.e('64679'), n.e('92216'), n.e('56534'), n.e('10054')]).then(n.bind(n, 994763)),
                t === y.pNK.OVERVIEW &&
                    i === y.KsC.INVITE &&
                    (0, E.i1)({
                        guildId: e,
                        location: 'GuildSettingsActionCreators.open'
                    }) &&
                    ((t = y.pNK.BOOST_PERKS), (i = void 0)),
                (null == (o = h.Z.getGuild(e)) ? void 0 : o.hasFeature(y.oNc.COMMUNITY)) && (t === y.pNK.GUILD_AUTOMOD && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_AUTOMOD)), t === y.pNK.MEMBER_VERIFICATION && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                P.init(e, t, r, i),
                f.Z.closeGuildSidebar(e),
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
                ((null == (n = h.Z.getGuild(r)) ? void 0 : n.hasFeature(y.oNc.COMMUNITY)) && (e === y.pNK.GUILD_AUTOMOD && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_AUTOMOD)), e === y.pNK.MEMBER_VERIFICATION && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
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
            return (0, m.Z)(
                (e) =>
                    i.tn.post({
                        url: y.ANM.GUILD_MFA(t),
                        body: S({ level: n }, e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: O.NW.string(O.t.Wi9LER),
                        actionText: r ? O.NW.string(O.t.MP0Ho6) : O.NW.string(O.t.yZcYGR)
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
                            l.Z.checkGuildTemplateDirty(e);
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
            let i = S({}, A(e, ['safetyAlertsChannelId', 'profile']));
            null != r && (i.profile = S({}, null != (t = i.profile) ? t : {}, r)), null != b.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n), o.Z.dispatch(S({ type: 'GUILD_SETTINGS_UPDATE' }, i));
        },
        updateGuildProfile(e, t) {
            o.Z.dispatch(
                S(
                    {
                        type: 'GUILD_SETTINGS_PROFILE_UPDATE',
                        guildId: e
                    },
                    t
                )
            );
        },
        saveGuild(e, t) {
            let { name: n, description: r, icon: a, splash: s, banner: c, homeHeader: u, afkChannelId: d, afkTimeout: f, systemChannelId: _, verificationLevel: p, defaultMessageNotifications: h, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: b, rulesChannelId: O, safetyAlertsChannelId: I, discoverySplash: T, publicUpdatesChannelId: A, premiumProgressBarEnabled: C, profile: P } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = N(
                    S(
                        {
                            name: n,
                            description: r,
                            icon: a,
                            splash: s,
                            banner: c,
                            home_header: u,
                            features: g,
                            preferred_locale: b,
                            afk_channel_id: d,
                            afk_timeout: f,
                            system_channel_id: _,
                            verification_level: p,
                            default_message_notifications: h,
                            explicit_content_filter: m,
                            system_channel_flags: E,
                            rules_channel_id: O,
                            discovery_splash: T,
                            public_updates_channel_id: A,
                            safety_alerts_channel_id: I
                        },
                        null != C ? { premium_progress_bar_enabled: C } : null
                    ),
                    { profile: null != P ? (0, v.n1)(P) : P }
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
                                l.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (o.Z.dispatch({
                                    type: 'GUILD_SETTINGS_SUBMIT_FAILURE',
                                    errors: e.body
                                }),
                                R.error('Failed to save guild settings', { errors: e.body }),
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
                .then((t) => (l.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return (0, m.Z)(
                (o) =>
                    g.Z.patch({
                        url: y.ANM.GUILD(e),
                        body: S(
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
                        title: O.NW.string(O.t.Z5s7PD),
                        actionText: O.NW.string(O.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return g.Z.put({
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
            (0, m.Z)(
                (t) =>
                    i.tn.post({
                        url: y.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: O.NW.formatToPlainString(O.t.us7mCw, { name: t }),
                        actionText: O.NW.string(O.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                P.close();
            }),
        async leaveGuild(e) {
            await i.tn.del({
                url: y.ANM.GUILD_LEAVE(e),
                body: { lurking: d.Z.isLurking(e) || p.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                P.close();
        },
        async updateMemberRoles(e, t, n, r, a) {
            if (u.Z.isFullServerPreview(e) && t === _.default.getId()) return void (0, c.og)(e, n);
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
    w = P;
