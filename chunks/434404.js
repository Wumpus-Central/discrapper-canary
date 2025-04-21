n.d(t, { Z: () => D }), n(953529);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(37234),
    s = n(710845),
    l = n(408987),
    c = n(962086),
    u = n(160404),
    d = n(41776),
    f = n(703656),
    _ = n(6025),
    p = n(314897),
    h = n(271383),
    m = n(430824),
    g = n(546796),
    E = n(573261),
    b = n(600553),
    y = n(999382),
    v = n(981631),
    O = n(308083),
    I = n(388032);
function S(e, t, n) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = new s.Z('GuildSettingsActionCreators'),
    w = {
        init(e, t, n, r) {
            a.Z.dispatch({
                type: 'GUILD_SETTINGS_INIT',
                guildId: e,
                section: t,
                subsection: r,
                location: n
            });
        },
        async open(e, t, r, i) {
            var a;
            await Promise.all([n.e('48835'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('91245'), n.e('80284'), n.e('27146'), n.e('2286'), n.e('63958'), n.e('7654'), n.e('62117'), n.e('49049'), n.e('44156'), n.e('76346'), n.e('49286'), n.e('32652'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('10923'), n.e('93375'), n.e('64679'), n.e('44606'), n.e('56534'), n.e('86668')]).then(n.bind(n, 994763)),
                t === v.pNK.OVERVIEW &&
                    i === v.KsC.INVITE &&
                    (0, b.i1)({
                        guildId: e,
                        location: 'GuildSettingsActionCreators.open'
                    }) &&
                    ((t = v.pNK.BOOST_PERKS), (i = void 0)),
                (null == (a = m.Z.getGuild(e)) ? void 0 : a.hasFeature(v.oNc.COMMUNITY)) && (t === v.pNK.GUILD_AUTOMOD && ((t = v.pNK.SAFETY), (i = v.KsC.SAFETY_AUTOMOD)), t === v.pNK.MEMBER_VERIFICATION && ((t = v.pNK.SAFETY), (i = v.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                w.init(e, t, r, i),
                _.Z.closeGuildSidebar(e),
                (0, o.jN)(v.S9g.GUILD_SETTINGS);
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
            let r = y.Z.getGuildId();
            null != r &&
                ((null == (n = m.Z.getGuild(r)) ? void 0 : n.hasFeature(v.oNc.COMMUNITY)) && (e === v.pNK.GUILD_AUTOMOD && ((e = v.pNK.SAFETY), (t = v.KsC.SAFETY_AUTOMOD)), e === v.pNK.MEMBER_VERIFICATION && ((e = v.pNK.SAFETY), (t = v.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
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
        updateEmbed: (e, t, n) =>
            i.tn
                .patch({
                    url: v.ANM.GUILD_WIDGET(e),
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
                }),
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: r } = e;
            return (0, g.Z)(
                (e) =>
                    i.tn.post({
                        url: v.ANM.GUILD_MFA(t),
                        body: T({ level: n }, e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: I.intl.string(I.t.Wi9LER),
                        actionText: r ? I.intl.string(I.t.MP0Ho6) : I.intl.string(I.t.yZcYGR)
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
            i.tn
                .patch({
                    url: v.ANM.GUILD(e),
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
                            l.Z.checkGuildTemplateDirty(e);
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
            var t,
                { safetyAlertsChannelId: n, profile: r } = e;
            let i = T({}, C(e, ['safetyAlertsChannelId', 'profile']));
            null != r && (i.profile = T({}, null != (t = i.profile) ? t : {}, r)), null != y.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n), a.Z.dispatch(T({ type: 'GUILD_SETTINGS_UPDATE' }, i));
        },
        updateGuildProfile(e, t) {
            a.Z.dispatch(
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
            let { name: n, description: r, icon: o, splash: s, banner: c, homeHeader: u, afkChannelId: d, afkTimeout: f, systemChannelId: _, verificationLevel: p, defaultMessageNotifications: h, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: b, rulesChannelId: y, safetyAlertsChannelId: I, discoverySplash: S, publicUpdatesChannelId: A, premiumProgressBarEnabled: C, profile: R } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = N(
                    T(
                        {
                            name: n,
                            description: r,
                            icon: o,
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
                            rules_channel_id: y,
                            discovery_splash: S,
                            public_updates_channel_id: A,
                            safety_alerts_channel_id: I
                        },
                        null != C ? { premium_progress_bar_enabled: C } : null
                    ),
                    { profile: null != R ? (0, O.n1)(R) : R }
                );
            return (
                a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                i.tn
                    .patch({
                        url: v.ANM.GUILD(e),
                        query: { for_discovery: w.isForDiscovery },
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
                                l.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (a.Z.dispatch({
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
                    url: v.ANM.GUILD(e),
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
            return (0, g.Z)(
                (a) =>
                    E.Z.patch({
                        url: v.ANM.GUILD(e),
                        body: T(
                            {
                                owner_id: t,
                                code: i
                            },
                            a
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
                        title: I.intl.string(I.t.Z5s7PD),
                        actionText: I.intl.string(I.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return E.Z.put({
                url: v.ANM.GUILD_PINCODE(e),
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
                        url: v.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: I.intl.formatToPlainString(I.t.us7mCw, { name: t }),
                        actionText: I.intl.string(I.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                w.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = d.Z.isLurking(e);
            await i.tn.del({
                url: v.ANM.GUILD_LEAVE(e),
                body: { lurking: n || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                w.close(),
                t && n && (0, f.uL)(v.Z5c.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, o) {
            if (u.Z.isFullServerPreview(e) && t === p.default.getId()) return void (0, c.og)(e, n);
            await i.tn.patch({
                url: v.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                r.forEach((n) =>
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_MEMBER_ADD',
                        guildId: e,
                        roleId: n,
                        userId: t
                    })
                ),
                o.forEach((n) =>
                    a.Z.dispatch({
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
                    url: v.ANM.GUILD_ROLE_MEMBERS(e, t),
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
            i.tn.post({
                url: v.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: v.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        updateIntegration(e, t, n, r, a) {
            let o = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: a
            };
            return i.tn.patch({
                url: v.ANM.GUILD_INTEGRATION(e, t),
                body: o,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        },
        syncIntegration(e, t) {
            i.tn.post({
                url: v.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        }
    },
    D = w;
