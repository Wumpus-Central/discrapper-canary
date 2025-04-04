n.d(t, {
    V: () => j,
    Z: () => G
}),
    n(411104),
    n(177593),
    n(566702);
var r = n(990547),
    i = n(149765),
    o = n(544891),
    a = n(570140),
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
    v = n(626135),
    O = n(700785),
    I = n(74538),
    S = n(573261),
    T = n(668781),
    N = n(981631),
    A = n(388032);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function L(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let x = (e) => {
        T.Z.show({
            title: A.NW.string(A.t.cTaRxM),
            body: A.NW.formatToPlainString(A.t['VSd+Ag'], { quantity: e })
        });
    },
    M = (e) => {
        a.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    k = () => {
        T.Z.show({
            title: A.NW.string(A.t.ZZlox8),
            body: A.NW.string(A.t.ZUEGFh)
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
            v = y.default.getCurrentUser();
        if (null != (r = null == v ? void 0 : v.hasFlag(N.xW$.QUARANTINED)) && r) return (0, d.default)(), new Promise((e, t) => t(Error()));
        a.Z.wait(() =>
            a.Z.dispatch({
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
                i = await o.tn.put({
                    url: N.ANM.GUILD_JOIN(e),
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
                    a.Z.dispatch({
                        type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                        guildId: e,
                        request: i.body.join_request
                    }),
                null == g.Z.getGuild(e) && i.body.show_verification_form)
            )
                return (0, _.uL)(N.Z5c.GUILD_MEMBER_VERIFICATION(e)), i;
            if (
                (null != i.body.welcome_screen &&
                    a.Z.dispatch({
                        type: 'WELCOME_SCREEN_UPDATE',
                        guildId: i.body.id,
                        welcomeScreen: i.body.welcome_screen
                    }),
                null != i.body.approximate_presence_count &&
                    a.Z.dispatch({
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
            if ((null == (i = t.body) ? void 0 : i.code) === N.evJ.TOO_MANY_USER_GUILDS) {
                let e = y.default.getCurrentUser();
                I.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? x(N.tHP) : x(N.DZw);
            }
            throw ((null == (s = t.body) ? void 0 : s.code) === N.evJ.GUILD_AT_CAPACITY && k(), m && (null == (l = t.body) ? void 0 : l.code) === N.evJ.UNKNOWN_GUILD && M(e), t);
        }
    },
    waitForGuild: j,
    async transitionToGuildSync(e, t, n, r) {
        let i = U((await j(e)).id, n),
            o = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) && null == t.welcomeModalChannelId && (o = w(R({}, t), { welcomeModalChannelId: null != i ? i : void 0 })), (0, c.Z)(N.Z5c.CHANNEL(e, i, r), o), await new Promise(setImmediate);
    },
    deleteGuild: M,
    selectGuild(e) {
        (0, u.a)(e);
    },
    createGuild(e) {
        a.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        o.tn.patch({
            url: N.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setServerDeaf: (e, t, n) =>
        o.tn.patch({
            url: N.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setChannel(e, t, n) {
        o.tn.patch({
            url: N.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    setMemberFlags(e, t, n) {
        o.tn.patch({
            url: N.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    kickUser: (e, t, n) =>
        o.tn.del({
            url: N.ANM.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: i, duration: o, reason: a, location: s } = e;
        return S.Z.patch({
            url: N.ANM.GUILD_MEMBER(t, n),
            reason: a,
            body: { communication_disabled_until: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != o ? o : null,
                    reason: null != a ? a : null,
                    communication_disabled_until: i,
                    location: null != s ? s : null
                }
            },
            rejectWithError: !1
        });
    },
    banUser: (e, t, n, r) =>
        o.tn.put({
            url: N.ANM.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    unbanUser: (e, t) =>
        o.tn.del({
            url: N.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, t, n, r) =>
        o.tn.post({
            url: N.ANM.BULK_GUILD_BAN(e),
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
            name: null != t && '' !== t ? t : A.NW.string(A.t.QBMHvL),
            color: null != n ? n : 0,
            colors:
                null != r
                    ? r
                    : {
                          primary: null != n ? n : 0,
                          secondary: null,
                          tertiary: null
                      },
            permissions: O.Hn
        };
        try {
            let t = await o.tn.post({
                    url: N.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: c,
                    rejectWithError: !1
                }),
                n = t.body;
            return (
                (n.permissions = i.vB(n.permissions)),
                a.Z.dispatch({
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
            a = D(n, ['icon', 'unicodeEmoji']),
            s = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            c = await o.tn.patch({
                url: N.ANM.GUILD_ROLE(e, t),
                body: w(R({}, a), {
                    icon: s,
                    unicode_emoji: i
                }),
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return l.Z.checkGuildTemplateDirty(e), c;
    },
    updateRolePermissions: (e, t, n) =>
        o.tn.patch({
            url: N.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    deleteRole(e, t) {
        o.tn
            .del({
                url: N.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                l.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await o.tn.patch({
            url: N.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await o.tn.patch({
            url: N.ANM.GUILD_ROLES(e),
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
        return a.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = null != t ? t : {};
        return a.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: n,
            continuationToken: r
        });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return a.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        });
    },
    move(e, t, n, r) {
        a.Z.dispatch({
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
        a.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: r
        });
    },
    createGuildFolderLocal(e, t) {
        v.default.track(N.rMx.GUILD_FOLDER_CREATED),
            a.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            });
    },
    editGuildFolderLocal(e, t, n) {
        a.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: t,
            name: n
        });
    },
    deleteGuildFolderLocal(e) {
        a.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let t = h.Z.isFolderExpanded(e);
        v.default.track(N.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            a.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
    },
    setGuildFolderExpanded(e, t) {
        a.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: t
        });
    },
    collapseAllFolders() {
        a.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        a.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        if (null == e) return void (0, _.uL)(N.Z5c.FRIENDS);
        let t = m.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, _.uL)(N.Z5c.FRIENDS) : (0, _.uL)(N.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = m.ZP.getDefaultChannel(e);
        null != t ? (0, _.uL)(N.Z5c.CHANNEL(e, t.id)) : (0, _.uL)(N.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: N.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        };
        null != t && (n.query = { channel_id: t });
        let r = (await o.tn.get(n)).body;
        a.Z.dispatch({
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
            await o.tn
                .get({
                    url: N.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: r,
                    rejectWithError: !1
                })
                .then((t) => {
                    a.Z.dispatch({
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
            await o.tn
                .get({
                    url: N.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: i,
                    rejectWithError: !1
                })
                .then((t) => {
                    a.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async fetchGuildBans(e) {
        await o.tn
            .get({
                url: N.ANM.GUILD_BANS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                a.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_BANS',
                    bans: e.body
                });
            });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        o.tn
            .get({
                url: N.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let { body: n } = e;
                return (
                    a.Z.dispatch({
                        type: 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS',
                        roleId: t,
                        roleConnectionEligibility: n
                    }),
                    n
                );
            }),
    async assignGuildRoleConnection(e, t) {
        await o.tn.post({
            url: N.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await o.tn.post({
            url: N.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await o.tn.get({
                url: N.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body
};
