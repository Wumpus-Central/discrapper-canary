n.d(t, {
    V: () => k,
    Z: () => U
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
    c = n(280837),
    u = n(895886),
    d = n(35225),
    f = n(703656),
    _ = n(314897),
    p = n(664915),
    h = n(984933),
    m = n(430824),
    g = n(944486),
    E = n(914010),
    b = n(594174),
    y = n(626135),
    v = n(700785),
    O = n(74538),
    I = n(573261),
    S = n(668781),
    T = n(981631),
    N = n(388032);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = (e) => {
        S.Z.show({
            title: N.NW.string(N.t.cTaRxM),
            body: N.NW.formatToPlainString(N.t['VSd+Ag'], { quantity: e })
        });
    },
    x = (e) => {
        a.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    M = () => {
        S.Z.show({
            title: N.NW.string(N.t.ZZlox8),
            body: N.NW.string(N.t.ZUEGFh)
        });
    };
function k(e) {
    return new Promise((t) =>
        m.Z.addConditionalChangeListener(() => {
            let n = m.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
function j(e, t) {
    return null != t ? t : (0, d.V)(e);
}
let U = {
    joinGuild: async function (e) {
        var t, r, i, s, l;
        let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: d, loadId: p, lurkLocation: h } = c,
            y = null != (t = c.lurker) && t,
            v = b.default.getCurrentUser();
        if (null != (r = null == v ? void 0 : v.hasFlag(T.xW$.QUARANTINED)) && r) return (0, u.default)(), new Promise((e, t) => t(Error()));
        a.Z.wait(() =>
            a.Z.dispatch({
                type: 'GUILD_JOIN',
                guildId: e,
                lurker: y,
                source: d,
                loadId: p
            })
        );
        try {
            let t = E.Z.getGuildId(),
                r = e === t && null != m.Z.getGuild(e) ? g.Z.getChannelId(e) : null,
                i = await o.tn.put({
                    url: T.ANM.GUILD_JOIN(e),
                    query: {
                        lurker: y,
                        session_id: y ? _.default.getSessionId() : null,
                        recommendation_load_id: p,
                        location: y && null != h ? h : null
                    },
                    context: { source: d },
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
                null == m.Z.getGuild(e) && i.body.show_verification_form)
            )
                return (0, f.uL)(T.Z5c.GUILD_MEMBER_VERIFICATION(e)), i;
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
                !y)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
                await t({
                    guildId: e,
                    returnChannelId: r
                });
            }
            return i;
        } catch (t) {
            if ((null == (i = t.body) ? void 0 : i.code) === T.evJ.TOO_MANY_USER_GUILDS) {
                let e = b.default.getCurrentUser();
                O.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? L(T.tHP) : L(T.DZw);
            }
            throw ((null == (s = t.body) ? void 0 : s.code) === T.evJ.GUILD_AT_CAPACITY && M(), y && (null == (l = t.body) ? void 0 : l.code) === T.evJ.UNKNOWN_GUILD && x(e), t);
        }
    },
    waitForGuild: k,
    async transitionToGuildSync(e, t, n) {
        let r = j((await k(e)).id, n),
            i = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) && null == t.welcomeModalChannelId && (i = P(C({}, t), { welcomeModalChannelId: null != r ? r : void 0 })), (0, f.uL)(T.Z5c.CHANNEL(e, r), i), await new Promise(setImmediate);
    },
    deleteGuild: x,
    selectGuild(e) {
        (0, c.a)(e);
    },
    createGuild(e) {
        a.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, t, n) =>
        o.tn.patch({
            url: T.ANM.GUILD_MEMBER(e, t),
            body: { mute: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setServerDeaf: (e, t, n) =>
        o.tn.patch({
            url: T.ANM.GUILD_MEMBER(e, t),
            body: { deaf: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setChannel(e, t, n) {
        o.tn.patch({
            url: T.ANM.GUILD_MEMBER(e, t),
            body: { channel_id: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    setMemberFlags(e, t, n) {
        o.tn.patch({
            url: T.ANM.GUILD_MEMBER(e, t),
            body: { flags: n },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    kickUser: (e, t, n) =>
        o.tn.del({
            url: T.ANM.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: i, duration: o, reason: a, location: s } = e;
        return I.Z.patch({
            url: T.ANM.GUILD_MEMBER(t, n),
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
            url: T.ANM.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    unbanUser: (e, t) =>
        o.tn.del({
            url: T.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, t, n, r) =>
        o.tn.post({
            url: T.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async createRole(e, t, n) {
        let r = {
            name: null != t && '' !== t ? t : N.NW.string(N.t.QBMHvL),
            color: null != n ? n : 0,
            permissions: v.Hn
        };
        try {
            let t = await o.tn.post({
                    url: T.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: r,
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
            a = w(n, ['icon', 'unicodeEmoji']),
            s = null === r || (null == r ? void 0 : r.startsWith('data:')) ? r : void 0,
            c = await o.tn.patch({
                url: T.ANM.GUILD_ROLE(e, t),
                body: P(C({}, a), {
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
            url: T.ANM.GUILD_ROLE(e, t),
            body: { permissions: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    deleteRole(e, t) {
        o.tn
            .del({
                url: T.ANM.GUILD_ROLE(e, t),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                l.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, t) {
        let n = await o.tn.patch({
            url: T.ANM.GUILD_CHANNELS(e),
            body: t,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return l.Z.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await o.tn.patch({
            url: T.ANM.GUILD_ROLES(e),
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
        y.default.track(T.rMx.GUILD_FOLDER_CREATED),
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
        let t = p.Z.isFolderExpanded(e);
        y.default.track(T.rMx.GUILD_FOLDER_CLICKED, {
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
        if (null == e) return void (0, f.uL)(T.Z5c.FRIENDS);
        let t = h.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, f.uL)(T.Z5c.FRIENDS) : (0, f.uL)(T.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = h.ZP.getDefaultChannel(e);
        null != t ? (0, f.uL)(T.Z5c.CHANNEL(e, t.id)) : (0, f.uL)(T.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: T.ANM.GUILD_APPLICATIONS(e),
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
                    url: T.ANM.GUILD_BANS(e),
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
                    url: T.ANM.GUILD_BANS_SEARCH(e),
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
                url: T.ANM.GUILD_BANS(e),
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
                url: T.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t),
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
            url: T.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    async unassignGuildRoleConnection(e, t) {
        await o.tn.post({
            url: T.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await o.tn.get({
                url: T.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body
};
