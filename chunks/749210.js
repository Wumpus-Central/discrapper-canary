(n.d(t, {
    V: () => G,
    Z: () => V
}),
    n(415506),
    n(358797),
    n(781311));
var r = n(990547),
    i = n(149765),
    a = n(544891),
    o = n(570140),
    s = n(34756),
    l = n(622822),
    c = n(408987),
    u = n(336197),
    d = n(280837),
    f = n(895886),
    _ = n(35225),
    p = n(703656),
    h = n(601964),
    m = n(314897),
    g = n(664915),
    E = n(984933),
    b = n(430824),
    y = n(944486),
    O = n(914010),
    v = n(594174),
    I = n(626135),
    T = n(700785),
    S = n(74538),
    A = n(573261),
    N = n(668781),
    C = n(981631),
    R = n(388032);
function P(e, t, n) {
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
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function L(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : D(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = k(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function k(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let M = (e) => {
        N.Z.show({
            title: R.intl.string(R.t.cTaRxM),
            body: R.intl.formatToPlainString(R.t['VSd+Ag'], { quantity: e })
        });
    },
    j = (e) => {
        o.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    U = () => {
        N.Z.show({
            title: R.intl.string(R.t.ZZlox8),
            body: R.intl.string(R.t.ZUEGFh)
        });
    };
function G(e) {
    return new Promise((t) =>
        b.Z.addConditionalChangeListener(() => {
            let n = b.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
function B(e, t) {
    return null != t ? t : (0, _.V)(e);
}
let V = {
    joinGuild: async function (e) {
        var t, r, i, s, l;
        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: u, loadId: d, lurkLocation: _ } = c,
            h = null != (t = c.lurker) && t,
            g = v.default.getCurrentUser();
        if (null != (r = null == g ? void 0 : g.hasFlag(C.xW$.QUARANTINED)) && r) return ((0, f.default)(), new Promise((e, t) => t(Error())));
        o.Z.wait(() =>
            o.Z.dispatch({
                type: 'GUILD_JOIN',
                guildId: e,
                lurker: h,
                source: u,
                loadId: d
            })
        );
        try {
            let t = O.Z.getGuildId(),
                r = e === t && null != b.Z.getGuild(e) ? y.Z.getChannelId(e) : null,
                i = await a.tn.put({
                    url: C.ANM.GUILD_JOIN(e),
                    query: {
                        lurker: h,
                        session_id: h ? m.default.getSessionId() : null,
                        recommendation_load_id: d,
                        location: h && null != _ ? _ : null
                    },
                    context: { source: u },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1
                });
            if (
                (null != i.body.join_request &&
                    o.Z.dispatch({
                        type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                        guildId: e,
                        request: i.body.join_request
                    }),
                null == b.Z.getGuild(e) && i.body.show_verification_form)
            )
                return ((0, p.uL)(C.Z5c.GUILD_MEMBER_VERIFICATION(e)), i);
            if (
                (null != i.body.welcome_screen &&
                    o.Z.dispatch({
                        type: 'WELCOME_SCREEN_UPDATE',
                        guildId: i.body.id,
                        welcomeScreen: i.body.welcome_screen
                    }),
                null != i.body.approximate_presence_count &&
                    o.Z.dispatch({
                        type: 'ONLINE_GUILD_MEMBER_COUNT_UPDATE',
                        guildId: i.body.id,
                        count: i.body.approximate_presence_count
                    }),
                !h)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
                await t({
                    guildId: e,
                    returnChannelId: r
                });
            }
            return i;
        } catch (t) {
            if ((null == (i = t.body) ? void 0 : i.code) === C.evJ.TOO_MANY_USER_GUILDS) {
                let e = v.default.getCurrentUser();
                S.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? M(C.tHP) : M(C.DZw);
            }
            throw ((null == (s = t.body) ? void 0 : s.code) === C.evJ.GUILD_AT_CAPACITY && U(), h && (null == (l = t.body) ? void 0 : l.code) === C.evJ.UNKNOWN_GUILD && j(e), t);
        }
    },
    waitForGuild: G,
    async transitionToGuildSync(e, t, n, r) {
        let i = B((await G(e)).id, n),
            a = t;
        ((null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) && null == t.welcomeModalChannelId && (a = L(w({}, t), { welcomeModalChannelId: null != i ? i : void 0 })), (0, u.Z)(C.Z5c.CHANNEL(e, i, r), a), await new Promise(setImmediate));
    },
    deleteGuild: j,
    selectGuild(e) {
        (0, d.a)(e);
    },
    createGuild(e) {
        o.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        a.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setServerDeaf: (e, t, n) =>
        a.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setChannel(e, t, n) {
        a.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    setMemberFlags(e, t, n) {
        a.tn.patch({
            url: C.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    kickUser: (e, t, n, r) =>
        a.tn
            .del({
                url: C.ANM.GUILD_MEMBER(e, t),
                query: {
                    reason: n,
                    moderator_report_id: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then(() => {
                o.Z.dispatch({
                    type: 'GUILD_MEMBER_REMOVE_LOCAL',
                    guildId: e,
                    userId: t
                });
            }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: i, duration: a, reason: o, location: s, moderatorReportId: l } = e;
        return A.Z.patch({
            url: C.ANM.GUILD_MEMBER(t, n),
            reason: o,
            body: {
                communication_disabled_until: i,
                moderator_report_id: l
            },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != o ? o : null,
                    communication_disabled_until: i,
                    location: null != s ? s : null
                }
            },
            rejectWithError: !1
        });
    },
    banUser: (e, t, n, r, i) =>
        a.tn.put({
            url: C.ANM.GUILD_BAN(e, t),
            reason: r,
            body: {
                delete_message_seconds: n,
                moderator_report_id: i
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    unbanUser: (e, t) =>
        a.tn.del({
            url: C.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, t, n, r) =>
        a.tn.post({
            url: C.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async createRole(e, t, n, r) {
        let l = {
            name: null != t && '' !== t ? t : R.intl.string(R.t.QBMHvL),
            color: null != n ? n : 0,
            colors:
                null != r
                    ? r
                    : {
                          primary_color: null != n ? n : 0,
                          secondary_color: null,
                          tertiary_color: null
                      },
            permissions: T.Hn
        };
        try {
            let t = await a.tn.post({
                    url: C.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: l,
                    rejectWithError: !1
                }),
                n = t.body;
            return (
                (n.permissions = i.vB(n.permissions)),
                o.Z.dispatch({
                    type: 'GUILD_SETTINGS_ROLE_SELECT',
                    roleId: t.body.id,
                    role: n
                }),
                c.Z.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new s.Z(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i } = n,
            o = x(n, ['icon', 'unicodeEmoji']),
            s = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            l = await a.tn.patch({
                url: C.ANM.GUILD_ROLE(e, t),
                body: L(w({}, o), {
                    icon: s,
                    unicode_emoji: i
                }),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return (c.Z.checkGuildTemplateDirty(e), l);
    },
    updateRolePermissions: (e, t, n) =>
        a.tn.patch({
            url: C.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    deleteRole(e, t) {
        a.tn
            .del({
                url: C.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                c.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await a.tn.patch({
            url: C.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (c.Z.checkGuildTemplateDirty(e), n);
    },
    async batchRoleUpdate(e, t) {
        let n = await a.tn.patch({
            url: C.ANM.GUILD_ROLES(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return (c.Z.checkGuildTemplateDirty(e), n);
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return o.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = null != t ? t : {};
        return o.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: n,
            continuationToken: r
        });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return o.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        });
    },
    move(e, t, n, r) {
        o.Z.dispatch({
            type: 'GUILD_MOVE',
            fromIndex: e,
            toIndex: t,
            fromFolderIndex: n,
            toFolderIndex: r
        });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t) throw Error('GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: '.concat(e));
        o.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: r
        });
    },
    createGuildFolderLocal(e, t) {
        (I.default.track(C.rMx.GUILD_FOLDER_CREATED),
            o.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            }));
    },
    editGuildFolderLocal(e, t, n) {
        o.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: t,
            name: n
        });
    },
    deleteGuildFolderLocal(e) {
        o.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let t = g.Z.isFolderExpanded(e);
        (I.default.track(C.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            o.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            }));
    },
    setGuildFolderExpanded(e, t) {
        o.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: t
        });
    },
    collapseAllFolders() {
        o.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        o.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        let t = b.Z.getGuild(e),
            n = (0, h.Y2)(t);
        if (null == e || n) return void (0, p.uL)(C.Z5c.FRIENDS);
        let r = E.ZP.getDefaultChannel(e);
        null == r || (0, l.aC)(r) ? (0, p.uL)(C.Z5c.FRIENDS) : (0, p.uL)(C.Z5c.CHANNEL(e, r.id));
    },
    escapeToDefaultChannel(e) {
        let t = E.ZP.getDefaultChannel(e);
        null != t ? (0, p.uL)(C.Z5c.CHANNEL(e, t.id)) : (0, p.uL)(C.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: C.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        };
        null != t && (n.query = { channel_id: t });
        let r = (await a.tn.get(n)).body;
        o.Z.dispatch({
            type: 'GUILD_APPLICATIONS_FETCH_SUCCESS',
            guildId: e,
            applications: r
        });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = { limit: t };
        (null != n && (r.after = n),
            await a.tn
                .get({
                    url: C.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: r,
                    rejectWithError: !1
                })
                .then((t) => {
                    o.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                }));
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        (null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await a.tn
                .get({
                    url: C.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: i,
                    rejectWithError: !1
                })
                .then((t) => {
                    o.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        userIds: n,
                        guildId: e
                    });
                }));
    },
    async fetchGuildBans(e) {
        await a.tn
            .get({
                url: C.ANM.GUILD_BANS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                o.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_BANS',
                    bans: e.body
                });
            });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        a.tn
            .get({
                url: C.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    o.Z.dispatch({
                        type: 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS',
                        roleId: t,
                        roleConnectionEligibility: n
                    }),
                    n
                );
            }),
    async assignGuildRoleConnection(e, t) {
        await a.tn.post({
            url: C.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await a.tn.post({
            url: C.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await a.tn.get({
                url: C.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body
};
