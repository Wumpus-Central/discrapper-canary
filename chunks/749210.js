n.d(t, {
    V: () => j,
    Z: () => G
}),
    n(415506),
    n(358797),
    n(781311);
var r = n(990547),
    i = n(149765),
    a = n(544891),
    o = n(570140),
    s = n(34756),
    l = n(408987),
    c = n(336197),
    u = n(280837),
    d = n(895886),
    f = n(35225),
    _ = n(703656),
    p = n(314897),
    h = n(664915),
    m = n(984933),
    g = n(430824),
    E = n(944486),
    b = n(914010),
    y = n(594174),
    O = n(626135),
    v = n(700785),
    I = n(74538),
    S = n(573261),
    T = n(668781),
    A = n(981631),
    N = n(388032);
function C(e, t, n) {
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
function R(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = L(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = (e) => {
        T.Z.show({
            title: N.intl.string(N.t.cTaRxM),
            body: N.intl.formatToPlainString(N.t['VSd+Ag'], { quantity: e })
        });
    },
    M = (e) => {
        o.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    k = () => {
        T.Z.show({
            title: N.intl.string(N.t.ZZlox8),
            body: N.intl.string(N.t.ZUEGFh)
        });
    };
function j(e) {
    return new Promise((t) =>
        g.Z.addConditionalChangeListener(() => {
            let n = g.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
function U(e, t) {
    return null != t ? t : (0, f.V)(e);
}
let G = {
    joinGuild: async function (e) {
        var t, r, i, s, l;
        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: u, loadId: f, lurkLocation: h } = c,
            m = null != (t = c.lurker) && t,
            O = y.default.getCurrentUser();
        if (null != (r = null == O ? void 0 : O.hasFlag(A.xW$.QUARANTINED)) && r) return (0, d.default)(), new Promise((e, t) => t(Error()));
        o.Z.wait(() =>
            o.Z.dispatch({
                type: 'GUILD_JOIN',
                guildId: e,
                lurker: m,
                source: u,
                loadId: f
            })
        );
        try {
            let t = b.Z.getGuildId(),
                r = e === t && null != g.Z.getGuild(e) ? E.Z.getChannelId(e) : null,
                i = await a.tn.put({
                    url: A.ANM.GUILD_JOIN(e),
                    query: {
                        lurker: m,
                        session_id: m ? p.default.getSessionId() : null,
                        recommendation_load_id: f,
                        location: m && null != h ? h : null
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
                null == g.Z.getGuild(e) && i.body.show_verification_form)
            )
                return (0, _.uL)(A.Z5c.GUILD_MEMBER_VERIFICATION(e)), i;
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
                !m)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
                await t({
                    guildId: e,
                    returnChannelId: r
                });
            }
            return i;
        } catch (t) {
            if ((null == (i = t.body) ? void 0 : i.code) === A.evJ.TOO_MANY_USER_GUILDS) {
                let e = y.default.getCurrentUser();
                I.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? x(A.tHP) : x(A.DZw);
            }
            throw ((null == (s = t.body) ? void 0 : s.code) === A.evJ.GUILD_AT_CAPACITY && k(), m && (null == (l = t.body) ? void 0 : l.code) === A.evJ.UNKNOWN_GUILD && M(e), t);
        }
    },
    waitForGuild: j,
    async transitionToGuildSync(e, t, n, r) {
        let i = U((await j(e)).id, n),
            a = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) && null == t.welcomeModalChannelId && (a = w(R({}, t), { welcomeModalChannelId: null != i ? i : void 0 })), (0, c.Z)(A.Z5c.CHANNEL(e, i, r), a), await new Promise(setImmediate);
    },
    deleteGuild: M,
    selectGuild(e) {
        (0, u.a)(e);
    },
    createGuild(e) {
        o.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        a.tn.patch({
            url: A.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setServerDeaf: (e, t, n) =>
        a.tn.patch({
            url: A.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setChannel(e, t, n) {
        a.tn.patch({
            url: A.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    setMemberFlags(e, t, n) {
        a.tn.patch({
            url: A.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    kickUser: (e, t, n, r) =>
        a.tn.del({
            url: A.ANM.GUILD_MEMBER(e, t),
            query: {
                reason: n,
                moderator_report_id: r
            },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: i, duration: a, reason: o, location: s, moderatorReportId: l } = e;
        return S.Z.patch({
            url: A.ANM.GUILD_MEMBER(t, n),
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
            url: A.ANM.GUILD_BAN(e, t),
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
            url: A.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, t, n, r) =>
        a.tn.post({
            url: A.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async createRole(e, t, n, r) {
        let c = {
            name: null != t && '' !== t ? t : N.intl.string(N.t.QBMHvL),
            color: null != n ? n : 0,
            colors:
                null != r
                    ? r
                    : {
                          primary_color: null != n ? n : 0,
                          secondary_color: null,
                          tertiary_color: null
                      },
            permissions: v.Hn
        };
        try {
            let t = await a.tn.post({
                    url: A.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: c,
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
                l.Z.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new s.Z(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i } = n,
            o = D(n, ['icon', 'unicodeEmoji']),
            s = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            c = await a.tn.patch({
                url: A.ANM.GUILD_ROLE(e, t),
                body: w(R({}, o), {
                    icon: s,
                    unicode_emoji: i
                }),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return l.Z.checkGuildTemplateDirty(e), c;
    },
    updateRolePermissions: (e, t, n) =>
        a.tn.patch({
            url: A.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    deleteRole(e, t) {
        a.tn
            .del({
                url: A.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                l.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await a.tn.patch({
            url: A.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await a.tn.patch({
            url: A.ANM.GUILD_ROLES(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), n;
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
        O.default.track(A.rMx.GUILD_FOLDER_CREATED),
            o.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            });
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
        let t = h.Z.isFolderExpanded(e);
        O.default.track(A.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            o.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
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
        if (null == e) return void (0, _.uL)(A.Z5c.FRIENDS);
        let t = m.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, _.uL)(A.Z5c.FRIENDS) : (0, _.uL)(A.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = m.ZP.getDefaultChannel(e);
        null != t ? (0, _.uL)(A.Z5c.CHANNEL(e, t.id)) : (0, _.uL)(A.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: A.ANM.GUILD_APPLICATIONS(e),
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
        null != n && (r.after = n),
            await a.tn
                .get({
                    url: A.ANM.GUILD_BANS(e),
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
                });
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await a.tn
                .get({
                    url: A.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: i,
                    rejectWithError: !1
                })
                .then((t) => {
                    o.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async fetchGuildBans(e) {
        await a.tn
            .get({
                url: A.ANM.GUILD_BANS(e),
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
                url: A.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
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
            url: A.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await a.tn.post({
            url: A.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await a.tn.get({
                url: A.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body
};
