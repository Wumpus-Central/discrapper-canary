n.d(t, { Z: () => w }), n(953529);
var r = n(990547),
    i = n(544891),
    o = n(570140),
    a = n(37234),
    s = n(710845),
    l = n(749191),
    c = n(408987),
    u = n(962086),
    d = n(160404),
    f = n(41776),
    _ = n(703656),
    p = n(6025),
    h = n(314897),
    m = n(271383),
    g = n(430824),
    E = n(546796),
    b = n(573261),
    y = n(999382),
    O = n(981631),
    v = n(388032);
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
function A(e, t) {
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
function N(e, t) {
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
            await Promise.all([n.e('48835'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('91245'), n.e('80284'), n.e('27146'), n.e('2286'), n.e('94928'), n.e('7654'), n.e('62117'), n.e('49049'), n.e('44156'), n.e('86133'), n.e('49286'), n.e('32652'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('10923'), n.e('93375'), n.e('64679'), n.e('44606'), n.e('56534'), n.e('10280')]).then(n.bind(n, 994763)), (null == (o = g.Z.getGuild(e)) ? void 0 : o.hasFeature(O.oNc.COMMUNITY)) && (t === O.pNK.GUILD_AUTOMOD && ((t = O.pNK.SAFETY), (i = O.KsC.SAFETY_AUTOMOD)), t === O.pNK.MEMBER_VERIFICATION && ((t = O.pNK.SAFETY), (i = O.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), P.init(e, t, r, i), p.Z.closeGuildSidebar(e), (0, a.jN)(O.S9g.GUILD_SETTINGS);
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
            let r = y.Z.getGuildId();
            null != r &&
                ((null == (n = g.Z.getGuild(r)) ? void 0 : n.hasFeature(O.oNc.COMMUNITY)) && (e === O.pNK.GUILD_AUTOMOD && ((e = O.pNK.SAFETY), (t = O.KsC.SAFETY_AUTOMOD)), e === O.pNK.MEMBER_VERIFICATION && ((e = O.pNK.SAFETY), (t = O.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
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
                    url: O.ANM.GUILD_WIDGET(e),
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
            return (0, E.Z)(
                (e) =>
                    i.tn.post({
                        url: O.ANM.GUILD_MFA(t),
                        body: S({ level: n }, e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: v.intl.string(v.t.Wi9LER),
                        actionText: r ? v.intl.string(v.t.MP0Ho6) : v.intl.string(v.t.yZcYGR)
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
                    url: O.ANM.GUILD(e),
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
            let i = S({}, N(e, ['safetyAlertsChannelId', 'profile']));
            null != r && (i.profile = S({}, null != (t = i.profile) ? t : {}, r)), null != y.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n), o.Z.dispatch(S({ type: 'GUILD_SETTINGS_UPDATE' }, i));
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
            let { name: n, description: r, icon: a, splash: s, banner: u, homeHeader: d, afkChannelId: f, afkTimeout: _, systemChannelId: p, verificationLevel: h, defaultMessageNotifications: m, explicitContentFilter: g, features: E, systemChannelFlags: b, preferredLocale: y, rulesChannelId: v, safetyAlertsChannelId: I, discoverySplash: T, publicUpdatesChannelId: N, premiumProgressBarEnabled: C, profile: P } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = A(
                    S(
                        {
                            name: n,
                            description: r,
                            icon: a,
                            splash: s,
                            banner: u,
                            home_header: d,
                            features: E,
                            preferred_locale: y,
                            afk_channel_id: f,
                            afk_timeout: _,
                            system_channel_id: p,
                            verification_level: h,
                            default_message_notifications: m,
                            explicit_content_filter: g,
                            system_channel_flags: b,
                            rules_channel_id: v,
                            discovery_splash: T,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: I
                        },
                        null != C ? { premium_progress_bar_enabled: C } : null
                    ),
                    { profile: null != P ? (0, l.n)(P) : P }
                );
            return (
                o.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
                i.tn
                    .patch({
                        url: O.ANM.GUILD(e),
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
                    url: O.ANM.GUILD(e),
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
            return (0, E.Z)(
                (o) =>
                    b.Z.patch({
                        url: O.ANM.GUILD(e),
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
                        title: v.intl.string(v.t.Z5s7PD),
                        actionText: v.intl.string(v.t.Z5s7PD)
                    },
                    checkEnabled: !1
                }
            );
        },
        sendTransferOwnershipPincode(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return b.Z.put({
                url: O.ANM.GUILD_PINCODE(e),
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
            (0, E.Z)(
                (t) =>
                    i.tn.post({
                        url: O.ANM.GUILD_DELETE(e),
                        body: t,
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: v.intl.formatToPlainString(v.t.us7mCw, { name: t }),
                        actionText: v.intl.string(v.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                P.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = f.Z.isLurking(e);
            await i.tn.del({
                url: O.ANM.GUILD_LEAVE(e),
                body: { lurking: n || m.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                P.close(),
                t && n && (0, _.uL)(O.Z5c.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, a) {
            if (d.Z.isFullServerPreview(e) && t === h.default.getId()) return void (0, u.og)(e, n);
            await i.tn.patch({
                url: O.ANM.GUILD_MEMBER(e, t),
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
                    url: O.ANM.GUILD_ROLE_MEMBERS(e, t),
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
                url: O.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n
                },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: O.ANM.GUILD_INTEGRATION(e, t),
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
                url: O.ANM.GUILD_INTEGRATION(e, t),
                body: a,
                oldFormErrors: !0,
                rejectWithError: !1
            });
        },
        syncIntegration(e, t) {
            i.tn.post({
                url: O.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        }
    },
    w = P;
