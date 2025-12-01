n.d(t, { Z: () => P }), n(953529);
var r = n(990547),
    i = n(544891),
    a = n(570140),
    o = n(37234),
    s = n(710845),
    l = n(749191),
    c = n(408987),
    u = n(962086),
    d = n(160404),
    f = n(41776),
    p = n(703656),
    _ = n(6025),
    m = n(314897),
    h = n(271383),
    g = n(430824),
    E = n(573261),
    b = n(999382),
    y = n(981631);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = A(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let C = new s.Z("GuildSettingsActionCreators"),
    N = {
        init(e, t, n, r) {
            a.Z.dispatch({
                type: "GUILD_SETTINGS_INIT",
                guildId: e,
                section: t,
                subsection: r,
                location: n,
            });
        },
        async open(e, t, r, i) {
            var a;
            await Promise.all([
                n.e("61924"),
                n.e("57804"),
                n.e("70363"),
                n.e("49049"),
                n.e("36599"),
                n.e("7654"),
                n.e("76692"),
                n.e("8271"),
                n.e("15851"),
                n.e("51453"),
                n.e("845"),
                n.e("38697"),
                n.e("86736"),
                n.e("6850"),
                n.e("58227"),
                n.e("63575"),
                n.e("62856"),
                n.e("44686"),
                n.e("384"),
                n.e("66201"),
                n.e("93375"),
                n.e("39206"),
                n.e("22516"),
                n.e("20598"),
                n.e("59231"),
            ]).then(n.bind(n, 994763)),
                (null == (a = g.Z.getGuild(e)) ? void 0 : a.features.has(y.GuildFeatures.COMMUNITY)) &&
                    (t === y.pNK.GUILD_AUTOMOD && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_AUTOMOD)),
                    t === y.pNK.MEMBER_VERIFICATION && ((t = y.pNK.SAFETY), (i = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                N.init(e, t, r, i),
                _.Z.closeGuildSidebar(e),
                (0, o.jN)(y.S9g.GUILD_SETTINGS);
        },
        close() {
            a.Z.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            a.Z.dispatch({
                type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                state: e,
            });
        },
        setSection(e, t) {
            var n;
            let r = b.Z.getGuildId();
            null != r &&
                ((null == (n = g.Z.getGuild(r)) ? void 0 : n.features.has(y.GuildFeatures.COMMUNITY)) &&
                    (e === y.pNK.GUILD_AUTOMOD && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_AUTOMOD)),
                    e === y.pNK.MEMBER_VERIFICATION && ((e = y.pNK.SAFETY), (t = y.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                a.Z.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t,
                }));
        },
        setSearchQuery(e) {
            a.Z.dispatch({
                type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                searchQuery: e,
            });
        },
        selectRole: (e, t) =>
            a.Z.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t,
            }),
        updateEmbed: (e, t, n) =>
            i.tn
                .patch({
                    url: y.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                .then((t) => {
                    a.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id,
                    });
                }),
        updateMFALevel(e) {
            let { guildId: t, level: n } = e;
            return i.tn
                .post({
                    url: y.ANM.GUILD_MFA(t),
                    body: { level: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) =>
                    a.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                        level: e.body.level,
                    }),
                );
        },
        updateIcon(e, t) {
            i.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(
                    () => {
                        a.Z.dispatch({
                            type: "GUILD_SETTINGS_UPDATE",
                            icon: t,
                        }),
                            c.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        a.Z.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body,
                        }),
                );
        },
        cancelChanges(e) {
            a.Z.dispatch({
                type: "GUILD_SETTINGS_CANCEL_CHANGES",
                guildId: e,
            });
        },
        updateGuild(e) {
            var t,
                { safetyAlertsChannelId: n, profile: r } = e;
            let i = v({}, T(e, ["safetyAlertsChannelId", "profile"]));
            null != r && (i.profile = v({}, null != (t = i.profile) ? t : {}, r)),
                null != b.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n),
                a.Z.dispatch(v({ type: "GUILD_SETTINGS_UPDATE" }, i));
        },
        updateGuildProfile(e, t) {
            a.Z.dispatch(
                v(
                    {
                        type: "GUILD_SETTINGS_PROFILE_UPDATE",
                        guildId: e,
                    },
                    t,
                ),
            );
        },
        saveGuild(e, t) {
            let {
                    name: n,
                    description: r,
                    icon: o,
                    splash: s,
                    banner: u,
                    homeHeader: d,
                    afkChannelId: f,
                    afkTimeout: p,
                    systemChannelId: _,
                    verificationLevel: m,
                    defaultMessageNotifications: h,
                    explicitContentFilter: g,
                    features: E,
                    systemChannelFlags: b,
                    preferredLocale: O,
                    rulesChannelId: S,
                    safetyAlertsChannelId: T,
                    ownerConfiguredContentLevel: A,
                    discoverySplash: N,
                    publicUpdatesChannelId: P,
                    premiumProgressBarEnabled: R,
                    profile: w,
                    moderatorReportingEnabled: D,
                } = t,
                x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                L = I(
                    v(
                        {
                            name: n,
                            description: r,
                            icon: o,
                            splash: s,
                            banner: u,
                            home_header: d,
                            features: E,
                            preferred_locale: O,
                            afk_channel_id: f,
                            afk_timeout: p,
                            system_channel_id: _,
                            verification_level: m,
                            default_message_notifications: h,
                            explicit_content_filter: g,
                            system_channel_flags: b,
                            rules_channel_id: S,
                            owner_configured_content_level: A,
                            discovery_splash: N,
                            public_updates_channel_id: P,
                            safety_alerts_channel_id: T,
                        },
                        null != R ? { premium_progress_bar_enabled: R } : null,
                    ),
                    {
                        profile: null != w ? (0, l.n)(w) : w,
                        moderator_reporting_enabled: D,
                    },
                );
            return (
                a.Z.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                i.tn
                    .patch({
                        url: y.ANM.GUILD(e),
                        query: { for_discovery: x.isForDiscovery },
                        body: L,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                    .then(
                        (t) => {
                            a.Z.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                                guild: t.body,
                            }),
                                c.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (a.Z.dispatch({
                                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                    errors: e.body,
                                }),
                                C.error("Failed to save guild settings", { errors: e.body }),
                                x.throwErr)
                            )
                                throw e.body;
                        },
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            i.tn
                .patch({
                    url: y.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((t) => (c.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return E.Z.patch({
                url: y.ANM.GUILD(e),
                body: {
                    owner_id: t,
                    code: i,
                },
                oldFormErrors: !0,
                trackedActionData: {
                    event: r.NetworkActionNames.GUILD_TRANSFER_OWNERSHIP,
                    properties: {
                        guild_id: e,
                        verification_type: n,
                    },
                },
                rejectWithError: !1,
            });
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
                        is_resend: t,
                    },
                },
                rejectWithError: !1,
            });
        },
        deleteGuild: (e) =>
            i.tn
                .post({
                    url: y.ANM.GUILD_DELETE(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(() => {
                    N.close();
                }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = f.Z.isLurking(e);
            await i.tn.del({
                url: y.ANM.GUILD_LEAVE(e),
                body: { lurking: n || h.ZP.isCurrentUserGuest(e) },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
                N.close(),
                t && n && (0, p.uL)(y.Z5c.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, o) {
            if (d.Z.isFullServerPreview(e) && t === m.default.getId()) return void (0, u.og)(e, n);
            await i.tn.patch({
                url: y.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
                r.forEach((n) =>
                    a.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_ADD",
                        guildId: e,
                        roleId: n,
                        userId: t,
                    }),
                ),
                o.forEach((n) =>
                    a.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_REMOVE",
                        guildId: e,
                        roleId: n,
                        userId: t,
                    }),
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            i.tn
                .patch({
                    url: y.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n },
                    rejectWithError: !1,
                })
                .then((n) => {
                    a.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_BULK_ADD",
                        guildId: e,
                        roleId: t,
                        added: n.body,
                    });
                }),
        enableIntegration: (e, t, n) =>
            i.tn.post({
                url: y.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            i.tn.del({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        updateIntegration(e, t, n, r, a) {
            let o = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: a,
            };
            return i.tn.patch({
                url: y.ANM.GUILD_INTEGRATION(e, t),
                body: o,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        syncIntegration(e, t) {
            i.tn.post({
                url: y.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        async migratePinPermission(e) {
            await i.tn
                .post({
                    url: y.ANM.GUILD_MIGRATE_PIN_PERMISSION(e),
                    rejectWithError: !0,
                })
                .then(() =>
                    a.Z.dispatch({
                        type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED",
                        guildId: e,
                    }),
                );
        },
        async migrateSlowmodePermission(e) {
            await i.tn
                .post({
                    url: y.ANM.GUILD_MIGRATE_SLOWMODE_PERMISSION(e),
                    rejectWithError: !0,
                })
                .then(() =>
                    a.Z.dispatch({
                        type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED",
                        guildId: e,
                    }),
                );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await N.migratePinPermission(e)), r && (await N.migrateSlowmodePermission(e));
        },
    },
    P = N;
