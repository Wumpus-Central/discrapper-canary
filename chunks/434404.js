n.d(t, { Z: () => w }), n(953529);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let R = new s.Z('GuildSettingsActionCreators'),
    P = {
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
            await Promise.all([n.e('48835'), n.e('25292'), n.e('95477'), n.e('90508'), n.e('91245'), n.e('80284'), n.e('83166'), n.e('92779'), n.e('2286'), n.e('94928'), n.e('7654'), n.e('62117'), n.e('49049'), n.e('44156'), n.e('86133'), n.e('49286'), n.e('32652'), n.e('6850'), n.e('58227'), n.e('54408'), n.e('80728'), n.e('50629'), n.e('93375'), n.e('64679'), n.e('44606'), n.e('56534'), n.e('10280')]).then(n.bind(n, 994763)), (null == (a = m.Z.getGuild(e)) ? void 0 : a.hasFeature(y.oNc.COMMUNITY)) && (t === y.pNK.GUILD_AUTOMOD && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_AUTOMOD)), t === y.pNK.MEMBER_VERIFICATION && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))), P.init(e, t, r, i), _.Z.closeGuildSidebar(e), (0, o.jN)(y.S9g.GUILD_SETTINGS);
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
            let r = b.Z.getGuildId();
            null != r &&
                ((null == (n = m.Z.getGuild(r)) ? void 0 : n.hasFeature(y.oNc.COMMUNITY)) && (e === y.pNK.GUILD_AUTOMOD && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_AUTOMOD)), e === y.pNK.MEMBER_VERIFICATION && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
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
                }),
        updateMFALevel(e) {
            let { guildId: t, level: n, isEnabled: r } = e;
            return (0, g.Z)(
                (e) =>
                    i.tn.post({
                        url: y.ANM.GUILD_MFA(t),
                        body: S({ level: n }, e),
                        oldFormErrors: !0,
                        rejectWithError: !1
                    }),
                {
                    modalProps: {
                        title: O.intl.string(O.t.Wi9LER),
                        actionText: r ? O.intl.string(O.t.MP0Ho6) : O.intl.string(O.t.yZcYGR)
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
            let i = S({}, N(e, ['safetyAlertsChannelId', 'profile']));
            null != r && (i.profile = S({}, null != (t = i.profile) ? t : {}, r)), null != b.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n), a.Z.dispatch(S({ type: 'GUILD_SETTINGS_UPDATE' }, i));
        },
        updateGuildProfile(e, t) {
            a.Z.dispatch(
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
            let { name: n, description: r, icon: o, splash: s, banner: c, homeHeader: u, afkChannelId: d, afkTimeout: f, systemChannelId: _, verificationLevel: p, defaultMessageNotifications: h, explicitContentFilter: m, features: g, systemChannelFlags: E, preferredLocale: b, rulesChannelId: O, safetyAlertsChannelId: I, discoverySplash: T, publicUpdatesChannelId: N, premiumProgressBarEnabled: C, profile: P } = t,
                w = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                D = A(
                    S(
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
                            rules_channel_id: O,
                            discovery_splash: T,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: I
                        },
                        null != C ? { premium_progress_bar_enabled: C } : null
                    ),
                    { profile: null != P ? (0, v.n1)(P) : P }
                );
            return (
                a.Z.dispatch({ type: 'GUILD_SETTINGS_SUBMIT' }),
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
            return (0, g.Z)(
                (a) =>
                    E.Z.patch({
                        url: y.ANM.GUILD(e),
                        body: S(
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
                        title: O.intl.string(O.t.Z5s7PD),
                        actionText: O.intl.string(O.t.Z5s7PD)
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
                        title: O.intl.formatToPlainString(O.t.us7mCw, { name: t }),
                        actionText: O.intl.string(O.t.l3hWPz),
                        disallowBackupCodes: !0
                    },
                    checkEnabled: !1
                }
            ).then(() => {
                P.close();
            }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = d.Z.isLurking(e);
            await i.tn.del({
                url: y.ANM.GUILD_LEAVE(e),
                body: { lurking: n || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1
            }),
                P.close(),
                t && n && (0, f.uL)(y.Z5c.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, o) {
            if (u.Z.isFullServerPreview(e) && t === p.default.getId()) return void (0, c.og)(e, n);
            await i.tn.patch({
                url: y.ANM.GUILD_MEMBER(e, t),
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
        updateIntegration(e, t, n, r, a) {
            let o = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: a
            };
            return i.tn.patch({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                body: o,
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
