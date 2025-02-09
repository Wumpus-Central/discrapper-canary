n.d(t, {
    V: () => D,
    Z: () => x
}),
    n(411104),
    n(177593);
var i = n(990547),
    r = n(149765),
    a = n(544891),
    s = n(570140),
    o = n(34756),
    l = n(408987),
    u = n(280837),
    c = n(895886),
    d = n(35225),
    f = n(703656),
    _ = n(314897),
    p = n(664915),
    h = n(984933),
    m = n(430824),
    g = n(944486),
    E = n(914010),
    v = n(594174),
    y = n(626135),
    I = n(700785),
    T = n(74538),
    b = n(573261),
    S = n(668781),
    A = n(981631),
    N = n(388032);
let C = (e) => {
        S.Z.show({
            title: N.intl.string(N.t.cTaRxM),
            body: N.intl.formatToPlainString(N.t['VSd+Ag'], { quantity: e })
        });
    },
    R = (e) => {
        s.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    O = () => {
        S.Z.show({
            title: N.intl.string(N.t.ZZlox8),
            body: N.intl.string(N.t.ZUEGFh)
        });
    };
function D(e) {
    return new Promise((t) =>
        m.Z.addConditionalChangeListener(() => {
            let n = m.Z.getGuild(e);
            return null == n || (t(n), !1);
        })
    );
}
function L(e, t) {
    return null != t ? t : (0, d.V)(e);
}
let x = {
    joinGuild: async function (e) {
        var t, i, r, o, l;
        let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: d, loadId: p, lurkLocation: h } = u,
            y = null !== (t = u.lurker) && void 0 !== t && t,
            I = v.default.getCurrentUser();
        if (null !== (i = null == I ? void 0 : I.hasFlag(A.xW$.QUARANTINED)) && void 0 !== i && i) return (0, c.default)(), new Promise((e, t) => t(Error()));
        s.Z.wait(() =>
            s.Z.dispatch({
                type: 'GUILD_JOIN',
                guildId: e,
                lurker: y,
                source: d,
                loadId: p
            })
        );
        try {
            let t = E.Z.getGuildId(),
                i = e === t && null != m.Z.getGuild(e) ? g.Z.getChannelId(e) : null,
                r = await a.tn.put({
                    url: A.ANM.GUILD_JOIN(e),
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
                (null != r.body.join_request &&
                    s.Z.dispatch({
                        type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                        guildId: e,
                        request: r.body.join_request
                    }),
                null == m.Z.getGuild(e) && r.body.show_verification_form)
            )
                return (0, f.uL)(A.Z5c.GUILD_MEMBER_VERIFICATION(e)), r;
            if (
                (null != r.body.welcome_screen &&
                    s.Z.dispatch({
                        type: 'WELCOME_SCREEN_UPDATE',
                        guildId: r.body.id,
                        welcomeScreen: r.body.welcome_screen
                    }),
                null != r.body.approximate_presence_count &&
                    s.Z.dispatch({
                        type: 'ONLINE_GUILD_MEMBER_COUNT_UPDATE',
                        guildId: r.body.id,
                        count: r.body.approximate_presence_count
                    }),
                !y)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 17181));
                await t({
                    guildId: e,
                    returnChannelId: i
                });
            }
            return r;
        } catch (t) {
            if ((null === (r = t.body) || void 0 === r ? void 0 : r.code) === A.evJ.TOO_MANY_USER_GUILDS) {
                let e = v.default.getCurrentUser();
                T.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? C(A.tHP) : C(A.DZw);
            }
            throw ((null === (o = t.body) || void 0 === o ? void 0 : o.code) === A.evJ.GUILD_AT_CAPACITY && O(), y && (null === (l = t.body) || void 0 === l ? void 0 : l.code) === A.evJ.UNKNOWN_GUILD && R(e), t);
        }
    },
    waitForGuild: D,
    async transitionToGuildSync(e, t, n) {
        let i = L((await D(e)).id, n),
            r = t;
        (null == t ? void 0 : t.hasOwnProperty('welcomeModalChannelId')) &&
            null == t.welcomeModalChannelId &&
            (r = {
                ...t,
                welcomeModalChannelId: null != i ? i : void 0
            }),
            (0, f.uL)(A.Z5c.CHANNEL(e, i), r),
            await new Promise(setImmediate);
    },
    deleteGuild: R,
    selectGuild(e) {
        (0, u.a)(e);
    },
    createGuild(e) {
        s.Z.dispatch({
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
    kickUser: (e, t, n) =>
        a.tn.del({
            url: A.ANM.GUILD_MEMBER(e, t),
            reason: n,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: t, userId: n, communicationDisabledUntilTimestamp: r, duration: a, reason: s, location: o } = e;
        return b.Z.patch({
            url: A.ANM.GUILD_MEMBER(t, n),
            reason: s,
            body: { communication_disabled_until: r },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != s ? s : null,
                    communication_disabled_until: r,
                    location: null != o ? o : null
                }
            },
            rejectWithError: !1
        });
    },
    banUser: (e, t, n, i) =>
        a.tn.put({
            url: A.ANM.GUILD_BAN(e, t),
            reason: i,
            body: { delete_message_seconds: n },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    unbanUser: (e, t) =>
        a.tn.del({
            url: A.ANM.GUILD_BAN(e, t),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, t, n, i) =>
        a.tn.post({
            url: A.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: t,
                delete_message_seconds: n
            },
            reason: i,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async createRole(e, t, n) {
        let i = {
            name: null != t && '' !== t ? t : N.intl.string(N.t.QBMHvL),
            color: null != n ? n : 0,
            permissions: I.Hn
        };
        try {
            let t = await a.tn.post({
                    url: A.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: i,
                    rejectWithError: !1
                }),
                n = t.body;
            return (
                (n.permissions = r.vB(n.permissions)),
                s.Z.dispatch({
                    type: 'GUILD_SETTINGS_ROLE_SELECT',
                    roleId: t.body.id,
                    role: n
                }),
                l.Z.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new o.Z(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: i, unicodeEmoji: r, ...s } = n,
            o = null === i || (null == i ? void 0 : i.startsWith('data:')) ? i : void 0,
            u = await a.tn.patch({
                url: A.ANM.GUILD_ROLE(e, t),
                body: {
                    ...s,
                    icon: o,
                    unicode_emoji: r
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return l.Z.checkGuildTemplateDirty(e), u;
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
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return s.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: i
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = null != t ? t : {};
        return s.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: n,
            continuationToken: i
        });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n
        });
    },
    move(e, t, n, i) {
        s.Z.dispatch({
            type: 'GUILD_MOVE',
            fromIndex: e,
            toIndex: t,
            fromFolderIndex: n,
            toFolderIndex: i
        });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t) throw Error('GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: '.concat(e));
        s.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: t,
            moveToBelow: n,
            combine: i
        });
    },
    createGuildFolderLocal(e, t) {
        y.default.track(A.rMx.GUILD_FOLDER_CREATED),
            s.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: t
            });
    },
    editGuildFolderLocal(e, t, n) {
        s.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: t,
            name: n
        });
    },
    deleteGuildFolderLocal(e) {
        s.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let t = p.Z.isFolderExpanded(e);
        y.default.track(A.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: t ? 'collapsed' : 'expanded'
        }),
            s.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
    },
    setGuildFolderExpanded(e, t) {
        s.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: t
        });
    },
    collapseAllFolders() {
        s.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        s.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        if (null == e) {
            (0, f.uL)(A.Z5c.FRIENDS);
            return;
        }
        let t = h.ZP.getDefaultChannel(e);
        null == t || t.isNSFW() ? (0, f.uL)(A.Z5c.FRIENDS) : (0, f.uL)(A.Z5c.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = h.ZP.getDefaultChannel(e);
        null != t ? (0, f.uL)(A.Z5c.CHANNEL(e, t.id)) : (0, f.uL)(A.Z5c.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = {
            url: A.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        };
        null != t && (n.query = { channel_id: t });
        let i = (await a.tn.get(n)).body;
        s.Z.dispatch({
            type: 'GUILD_APPLICATIONS_FETCH_SUCCESS',
            guildId: e,
            applications: i
        });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = { limit: t };
        null != n && (i.after = n),
            await a.tn
                .get({
                    url: A.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: i,
                    rejectWithError: !1
                })
                .then((t) => {
                    s.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: t.body,
                        guildId: e
                    });
                });
    },
    async searchGuildBans(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            r = { limit: i };
        null != n && n.length > 0 && (r.user_ids = n),
            null != t && t.trim().length > 0 && (r.query = t),
            await a.tn
                .get({
                    url: A.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: r,
                    rejectWithError: !1
                })
                .then((t) => {
                    s.Z.dispatch({
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
                s.Z.dispatch({
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
                    s.Z.dispatch({
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
