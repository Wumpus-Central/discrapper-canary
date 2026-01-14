n.d(t, { Z: () => w }), n(953529);
var r = n(990547),
    i = n(925477),
    a = n(544891),
    o = n(570140),
    s = n(37234),
    l = n(710845),
    c = n(749191),
    u = n(408987),
    d = n(962086),
    f = n(160404),
    p = n(41776),
    _ = n(703656),
    m = n(6025),
    h = n(314897),
    g = n(271383),
    E = n(430824),
    b = n(573261),
    y = n(999382),
    O = n(981631),
    v = n(388032);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
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
function C(e, t) {
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
        i = N(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = new l.Z("GuildSettingsActionCreators"),
    R = {
        init(e, t, n, r) {
            o.Z.dispatch({
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
                n.e("53870"),
                n.e("57804"),
                n.e("36599"),
                n.e("7654"),
                n.e("49049"),
                n.e("76692"),
                n.e("8271"),
                n.e("15851"),
                n.e("51453"),
                n.e("845"),
                n.e("9414"),
                n.e("6850"),
                n.e("58227"),
                n.e("63575"),
                n.e("44686"),
                n.e("38697"),
                n.e("9536"),
                n.e("96795"),
                n.e("39206"),
                n.e("93375"),
                n.e("69937"),
                n.e("22516"),
                n.e("15227"),
            ]).then(n.bind(n, 994763)),
                (null == (a = E.Z.getGuild(e)) ? void 0 : a.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (t === O.pNK.GUILD_AUTOMOD && ((t = O.pNK.SAFETY), (i = O.KsC.SAFETY_AUTOMOD)),
                    t === O.pNK.MEMBER_VERIFICATION && ((t = O.pNK.SAFETY), (i = O.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                R.init(e, t, r, i),
                m.Z.closeGuildSidebar(e),
                (0, s.jN)(O.S9g.GUILD_SETTINGS);
        },
        close() {
            o.Z.dispatch({ type: "GUILD_SETTINGS_CLOSE" });
        },
        saveRouteStack(e) {
            o.Z.dispatch({
                type: "GUILD_SETTINGS_SAVE_ROUTE_STACK",
                state: e,
            });
        },
        setSection(e, t) {
            var n;
            let r = y.Z.getGuildId();
            null != r &&
                ((null == (n = E.Z.getGuild(r)) ? void 0 : n.features.has(O.GuildFeatures.COMMUNITY)) &&
                    (e === O.pNK.GUILD_AUTOMOD && ((e = O.pNK.SAFETY), (t = O.KsC.SAFETY_AUTOMOD)),
                    e === O.pNK.MEMBER_VERIFICATION && ((e = O.pNK.SAFETY), (t = O.KsC.SAFETY_DM_AND_SPAM_PROTECTION))),
                o.Z.dispatch({
                    type: "GUILD_SETTINGS_SET_SECTION",
                    section: e,
                    subsection: t,
                }));
        },
        setSearchQuery(e) {
            o.Z.dispatch({
                type: "GUILD_SETTINGS_SET_SEARCH_QUERY",
                searchQuery: e,
            });
        },
        selectRole: (e, t) =>
            o.Z.dispatch({
                type: "GUILD_SETTINGS_ROLE_SELECT",
                roleId: e,
                searchQuery: t,
            }),
        updateEmbed: (e, t, n) =>
            a.tn
                .patch({
                    url: O.ANM.GUILD_WIDGET(e),
                    body: {
                        enabled: t,
                        channel_id: n,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !0,
                })
                .then((t) => {
                    o.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_WIDGET",
                        guildId: e,
                        enabled: t.body.enabled,
                        channelId: t.body.channel_id,
                    });
                }),
        updateMFALevel(e) {
            let { guildId: t, level: n } = e;
            return a.tn
                .post({
                    url: O.ANM.GUILD_MFA(t),
                    body: { level: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((e) =>
                    o.Z.dispatch({
                        type: "GUILD_SETTINGS_SET_MFA_SUCCESS",
                        level: e.body.level,
                    }),
                );
        },
        updateIcon(e, t) {
            a.tn
                .patch({
                    url: O.ANM.GUILD(e),
                    body: { icon: t },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(
                    () => {
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_UPDATE",
                            icon: t,
                        }),
                            u.Z.checkGuildTemplateDirty(e);
                    },
                    (e) =>
                        o.Z.dispatch({
                            type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                            errors: e.body,
                        }),
                );
        },
        cancelChanges(e) {
            o.Z.dispatch({
                type: "GUILD_SETTINGS_CANCEL_CHANGES",
                guildId: e,
            });
        },
        updateGuild(e) {
            var t,
                { safetyAlertsChannelId: n, profile: r } = e;
            let i = I({}, A(e, ["safetyAlertsChannelId", "profile"]));
            null != r && (i.profile = I({}, null != (t = i.profile) ? t : {}, r)),
                null != y.Z.getGuildId() && null != n && (i.safetyAlertsChannelId = n),
                o.Z.dispatch(I({ type: "GUILD_SETTINGS_UPDATE" }, i));
        },
        updateGuildProfile(e, t) {
            o.Z.dispatch(
                I(
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
                    icon: i,
                    splash: s,
                    banner: l,
                    homeHeader: d,
                    afkChannelId: f,
                    afkTimeout: p,
                    systemChannelId: _,
                    verificationLevel: m,
                    defaultMessageNotifications: h,
                    explicitContentFilter: g,
                    features: E,
                    systemChannelFlags: b,
                    preferredLocale: y,
                    rulesChannelId: v,
                    safetyAlertsChannelId: S,
                    ownerConfiguredContentLevel: T,
                    discoverySplash: A,
                    publicUpdatesChannelId: N,
                    premiumProgressBarEnabled: R,
                    profile: w,
                    moderatorReportingEnabled: D,
                } = t,
                x = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                L = C(
                    I(
                        {
                            name: n,
                            description: r,
                            icon: i,
                            splash: s,
                            banner: l,
                            home_header: d,
                            features: E,
                            preferred_locale: y,
                            afk_channel_id: f,
                            afk_timeout: p,
                            system_channel_id: _,
                            verification_level: m,
                            default_message_notifications: h,
                            explicit_content_filter: g,
                            system_channel_flags: b,
                            rules_channel_id: v,
                            owner_configured_content_level: T,
                            discovery_splash: A,
                            public_updates_channel_id: N,
                            safety_alerts_channel_id: S,
                        },
                        null != R ? { premium_progress_bar_enabled: R } : null,
                    ),
                    {
                        profile: null != w ? (0, c.n)(w) : w,
                        moderator_reporting_enabled: D,
                    },
                );
            return (
                o.Z.dispatch({ type: "GUILD_SETTINGS_SUBMIT" }),
                a.tn
                    .patch({
                        url: O.ANM.GUILD(e),
                        query: { for_discovery: x.isForDiscovery },
                        body: L,
                        oldFormErrors: !0,
                        rejectWithError: !1,
                    })
                    .then(
                        (t) => {
                            o.Z.dispatch({
                                type: "GUILD_SETTINGS_SUBMIT_SUCCESS",
                                guild: t.body,
                            }),
                                u.Z.checkGuildTemplateDirty(e);
                        },
                        (e) => {
                            if (
                                (o.Z.dispatch({
                                    type: "GUILD_SETTINGS_SUBMIT_FAILURE",
                                    errors: e.body,
                                }),
                                P.error("Failed to save guild settings", { errors: e.body }),
                                x.throwErr)
                            )
                                throw e.body;
                        },
                    )
            );
        },
        updateGuildModeration: (e, t) =>
            a.tn
                .patch({
                    url: O.ANM.GUILD(e),
                    body: {
                        verification_level: t.verificationLevel,
                        explicit_content_filter: t.explicitContentFilter,
                    },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then((t) => (u.Z.checkGuildTemplateDirty(e), t)),
        transferOwnership(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return b.Z.patch({
                url: O.ANM.GUILD(e),
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
            return b.Z.put({
                url: O.ANM.GUILD_PINCODE(e),
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
            a.tn
                .post({
                    url: O.ANM.GUILD_DELETE(e),
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(() => {
                    R.close();
                }),
        async leaveGuild(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = p.Z.isLurking(e);
            await a.tn
                .del({
                    url: O.ANM.GUILD_LEAVE(e),
                    body: { lurking: n || g.ZP.isCurrentUserGuest(e) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                })
                .then(() => {
                    i.uv.announce(v.intl.string(v.t["7iPyVW"]));
                }),
                R.close(),
                t && n && (0, _.uL)(O.Z5c.GUILD_DISCOVERY);
        },
        async updateMemberRoles(e, t, n, r, i) {
            if (f.Z.isFullServerPreview(e) && t === h.default.getId()) return void (0, d.og)(e, n);
            await a.tn.patch({
                url: O.ANM.GUILD_MEMBER(e, t),
                body: { roles: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
                r.forEach((n) =>
                    o.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_ADD",
                        guildId: e,
                        roleId: n,
                        userId: t,
                    }),
                ),
                i.forEach((n) =>
                    o.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_REMOVE",
                        guildId: e,
                        roleId: n,
                        userId: t,
                    }),
                );
        },
        bulkAddMemberRoles: (e, t, n) =>
            a.tn
                .patch({
                    url: O.ANM.GUILD_ROLE_MEMBERS(e, t),
                    body: { member_ids: n },
                    rejectWithError: !1,
                })
                .then((n) => {
                    o.Z.dispatch({
                        type: "GUILD_ROLE_MEMBER_BULK_ADD",
                        guildId: e,
                        roleId: t,
                        added: n.body,
                    });
                }),
        enableIntegration: (e, t, n) =>
            a.tn.post({
                url: O.ANM.GUILD_INTEGRATIONS(e),
                body: {
                    type: t,
                    id: n,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        disableIntegration: (e, t) =>
            a.tn.del({
                url: O.ANM.GUILD_INTEGRATION(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
        updateIntegration(e, t, n, r, i) {
            let o = {
                expire_behavior: n,
                expire_grace_period: r,
                enable_emoticons: i,
            };
            return a.tn.patch({
                url: O.ANM.GUILD_INTEGRATION(e, t),
                body: o,
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        syncIntegration(e, t) {
            a.tn.post({
                url: O.ANM.GUILD_INTEGRATION_SYNC(e, t),
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        },
        async migratePinPermission(e) {
            await a.tn
                .post({
                    url: O.ANM.GUILD_MIGRATE_PIN_PERMISSION(e),
                    rejectWithError: !0,
                })
                .then(() =>
                    o.Z.dispatch({
                        type: "GUILD_SETTINGS_PIN_PERMISSION_MIGRATED",
                        guildId: e,
                    }),
                );
        },
        async migrateSlowmodePermission(e) {
            await a.tn
                .post({
                    url: O.ANM.GUILD_MIGRATE_SLOWMODE_PERMISSION(e),
                    rejectWithError: !0,
                })
                .then(() =>
                    o.Z.dispatch({
                        type: "GUILD_SETTINGS_SLOWMODE_PERMISSION_MIGRATED",
                        guildId: e,
                    }),
                );
        },
        async migratePermissions(e, t) {
            let { migratePin: n, migrateSlowmode: r } = t;
            n && (await R.migratePinPermission(e)), r && (await R.migrateSlowmodePermission(e));
        },
    },
    w = R;
