r.d(n, {
    V: function () {
        return P;
    }
});
var i = r(411104);
var a = r(177593);
var o = r(990547),
    s = r(149765),
    l = r(544891),
    u = r(570140),
    c = r(34756),
    d = r(408987),
    f = r(280837),
    p = r(895886),
    h = r(35225),
    _ = r(703656),
    m = r(314897),
    g = r(664915),
    E = r(984933),
    v = r(430824),
    y = r(944486),
    b = r(914010),
    I = r(594174),
    T = r(626135),
    S = r(700785),
    A = r(74538),
    C = r(573261),
    N = r(668781),
    R = r(981631),
    O = r(388032);
let D = (e) => {
        N.Z.show({
            title: O.intl.string(O.t.cTaRxM),
            body: O.intl.formatToPlainString(O.t['VSd+Ag'], { quantity: e })
        });
    },
    L = (e) => {
        u.Z.dispatch({
            type: 'GUILD_DELETE',
            guild: { id: e }
        });
    },
    x = () => {
        N.Z.show({
            title: O.intl.string(O.t.ZZlox8),
            body: O.intl.string(O.t.ZUEGFh)
        });
    };
async function w(e) {
    var n, i, a, o, s;
    let c = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { source: d, loadId: f, lurkLocation: h } = c,
        g = null !== (n = c.lurker) && void 0 !== n && n,
        E = I.default.getCurrentUser();
    if (null !== (i = null == E ? void 0 : E.hasFlag(R.xW$.QUARANTINED)) && void 0 !== i && i) return (0, p.default)(), new Promise((e, n) => n(Error()));
    u.Z.wait(() =>
        u.Z.dispatch({
            type: 'GUILD_JOIN',
            guildId: e,
            lurker: g,
            source: d,
            loadId: f
        })
    );
    try {
        let n = b.Z.getGuildId(),
            i = e === n && null != v.Z.getGuild(e) ? y.Z.getChannelId(e) : null,
            a = await l.tn.put({
                url: R.ANM.GUILD_JOIN(e),
                query: {
                    lurker: g,
                    session_id: g ? m.default.getSessionId() : null,
                    recommendation_load_id: f,
                    location: g && null != h ? h : null
                },
                context: { source: d },
                oldFormErrors: !0,
                body: {},
                rejectWithError: !1
            });
        if (
            (null != a.body.join_request &&
                u.Z.dispatch({
                    type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
                    guildId: e,
                    request: a.body.join_request
                }),
            null == v.Z.getGuild(e) && a.body.show_verification_form)
        )
            return (0, _.uL)(R.Z5c.GUILD_MEMBER_VERIFICATION(e)), a;
        if (
            (null != a.body.welcome_screen &&
                u.Z.dispatch({
                    type: 'WELCOME_SCREEN_UPDATE',
                    guildId: a.body.id,
                    welcomeScreen: a.body.welcome_screen
                }),
            null != a.body.approximate_presence_count &&
                u.Z.dispatch({
                    type: 'ONLINE_GUILD_MEMBER_COUNT_UPDATE',
                    guildId: a.body.id,
                    count: a.body.approximate_presence_count
                }),
            !g)
        ) {
            let { default: n } = await Promise.resolve().then(r.bind(r, 17181));
            await n({
                guildId: e,
                returnChannelId: i
            });
        }
        return a;
    } catch (n) {
        if ((null === (a = n.body) || void 0 === a ? void 0 : a.code) === R.evJ.TOO_MANY_USER_GUILDS) {
            let e = I.default.getCurrentUser();
            A.ZP.canUseIncreasedGuildCap(e) || (null == e ? void 0 : e.isStaff()) ? D(R.tHP) : D(R.DZw);
        }
        throw ((null === (o = n.body) || void 0 === o ? void 0 : o.code) === R.evJ.GUILD_AT_CAPACITY && x(), g && (null === (s = n.body) || void 0 === s ? void 0 : s.code) === R.evJ.UNKNOWN_GUILD && L(e), n);
    }
}
function P(e) {
    return new Promise((n) =>
        v.Z.addConditionalChangeListener(() => {
            let r = v.Z.getGuild(e);
            return null == r || (n(r), !1);
        })
    );
}
function M(e, n) {
    return null != n ? n : (0, h.V)(e);
}
n.Z = {
    joinGuild: w,
    waitForGuild: P,
    async transitionToGuildSync(e, n, r) {
        let i = M((await P(e)).id, r),
            a = n;
        (null == n ? void 0 : n.hasOwnProperty('welcomeModalChannelId')) &&
            null == n.welcomeModalChannelId &&
            (a = {
                ...n,
                welcomeModalChannelId: null != i ? i : void 0
            }),
            (0, _.uL)(R.Z5c.CHANNEL(e, i), a),
            await new Promise(setImmediate);
    },
    deleteGuild: L,
    selectGuild(e) {
        (0, f.a)(e);
    },
    createGuild(e) {
        u.Z.dispatch({
            type: 'GUILD_CREATE',
            guild: e
        });
    },
    setServerMute: (e, n, r) =>
        l.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, n),
            body: { mute: r },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setServerDeaf: (e, n, r) =>
        l.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, n),
            body: { deaf: r },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setChannel(e, n, r) {
        l.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, n),
            body: { channel_id: r },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    setMemberFlags(e, n, r) {
        l.tn.patch({
            url: R.ANM.GUILD_MEMBER(e, n),
            body: { flags: r },
            oldFormErrors: !0,
            rejectWithError: !0
        });
    },
    kickUser: (e, n, r) =>
        l.tn.del({
            url: R.ANM.GUILD_MEMBER(e, n),
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    setCommunicationDisabledUntil(e) {
        let { guildId: n, userId: r, communicationDisabledUntilTimestamp: i, duration: a, reason: s, location: l } = e;
        return C.Z.patch({
            url: R.ANM.GUILD_MEMBER(n, r),
            reason: s,
            body: { communication_disabled_until: i },
            oldFormErrors: !0,
            trackedActionData: {
                event: o.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: n,
                    target_user_id: r,
                    duration: null != a ? a : null,
                    reason: null != s ? s : null,
                    communication_disabled_until: i,
                    location: null != l ? l : null
                }
            },
            rejectWithError: !1
        });
    },
    banUser: (e, n, r, i) =>
        l.tn.put({
            url: R.ANM.GUILD_BAN(e, n),
            reason: i,
            body: { delete_message_seconds: r },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    unbanUser: (e, n) =>
        l.tn.del({
            url: R.ANM.GUILD_BAN(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    banMultipleUsers: (e, n, r, i) =>
        l.tn.post({
            url: R.ANM.BULK_GUILD_BAN(e),
            body: {
                user_ids: n,
                delete_message_seconds: r
            },
            reason: i,
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    async createRole(e, n, r) {
        let i = {
            name: null != n && '' !== n ? n : O.intl.string(O.t.QBMHvL),
            color: null != r ? r : 0,
            permissions: S.Hn
        };
        try {
            let n = await l.tn.post({
                    url: R.ANM.GUILD_ROLES(e),
                    oldFormErrors: !0,
                    body: i,
                    rejectWithError: !1
                }),
                r = n.body;
            return (
                (r.permissions = s.vB(r.permissions)),
                u.Z.dispatch({
                    type: 'GUILD_SETTINGS_ROLE_SELECT',
                    roleId: n.body.id,
                    role: r
                }),
                d.Z.checkGuildTemplateDirty(e),
                r
            );
        } catch (e) {
            throw new c.Z(e);
        }
    },
    async updateRole(e, n, r) {
        let { icon: i, unicodeEmoji: a, ...o } = r,
            s = null === i || (null == i ? void 0 : i.startsWith('data:')) ? i : void 0,
            u = await l.tn.patch({
                url: R.ANM.GUILD_ROLE(e, n),
                body: {
                    ...o,
                    icon: s,
                    unicode_emoji: a
                },
                oldFormErrors: !0,
                rejectWithError: !1
            });
        return d.Z.checkGuildTemplateDirty(e), u;
    },
    updateRolePermissions: (e, n, r) =>
        l.tn.patch({
            url: R.ANM.GUILD_ROLE(e, n),
            body: { permissions: r },
            oldFormErrors: !0,
            rejectWithError: !1
        }),
    deleteRole(e, n) {
        l.tn
            .del({
                url: R.ANM.GUILD_ROLE(e, n),
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(() => {
                d.Z.checkGuildTemplateDirty(e);
            });
    },
    async batchChannelUpdate(e, n) {
        let r = await l.tn.patch({
            url: R.ANM.GUILD_CHANNELS(e),
            body: n,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return d.Z.checkGuildTemplateDirty(e), r;
    },
    async batchRoleUpdate(e, n) {
        let r = await l.tn.patch({
            url: R.ANM.GUILD_ROLES(e),
            body: n,
            oldFormErrors: !0,
            rejectWithError: !1
        });
        return d.Z.checkGuildTemplateDirty(e), r;
    },
    requestMembers(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '',
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return u.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            query: n,
            limit: r,
            presences: i
        });
    },
    searchRecentMembers(e, n) {
        let { query: r, continuationToken: i } = null != n ? n : {};
        return u.Z.dispatch({
            type: 'GUILD_SEARCH_RECENT_MEMBERS',
            guildId: e,
            query: r,
            continuationToken: i
        });
    },
    requestMembersById(e, n) {
        let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return u.Z.dispatch({
            type: 'GUILD_MEMBERS_REQUEST',
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(n) ? n : [n],
            presences: r
        });
    },
    move(e, n, r, i) {
        u.Z.dispatch({
            type: 'GUILD_MOVE',
            fromIndex: e,
            toIndex: n,
            fromFolderIndex: r,
            toFolderIndex: i
        });
    },
    moveById(e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === n) throw Error('GuildActionCreators.moveById: `sourceId` and `targetId` cannot be the same value: '.concat(e));
        u.Z.dispatch({
            type: 'GUILD_MOVE_BY_ID',
            sourceId: e,
            targetId: n,
            moveToBelow: r,
            combine: i
        });
    },
    createGuildFolderLocal(e, n) {
        T.default.track(R.rMx.GUILD_FOLDER_CREATED),
            u.Z.dispatch({
                type: 'GUILD_FOLDER_CREATE_LOCAL',
                sourceIds: e,
                name: n
            });
    },
    editGuildFolderLocal(e, n, r) {
        u.Z.dispatch({
            type: 'GUILD_FOLDER_EDIT_LOCAL',
            targetId: e,
            sourceIds: n,
            name: r
        });
    },
    deleteGuildFolderLocal(e) {
        u.Z.dispatch({
            type: 'GUILD_FOLDER_DELETE_LOCAL',
            targetId: e
        });
    },
    toggleGuildFolderExpand(e) {
        let n = g.Z.isFolderExpanded(e);
        T.default.track(R.rMx.GUILD_FOLDER_CLICKED, {
            source: 'sidebar',
            action: n ? 'collapsed' : 'expanded'
        }),
            u.Z.dispatch({
                type: 'TOGGLE_GUILD_FOLDER_EXPAND',
                folderId: e
            });
    },
    setGuildFolderExpanded(e, n) {
        u.Z.dispatch({
            type: 'SET_GUILD_FOLDER_EXPANDED',
            folderId: e,
            expanded: n
        });
    },
    collapseAllFolders() {
        u.Z.dispatch({ type: 'GUILD_FOLDER_COLLAPSE' });
    },
    nsfwAgree(e) {
        u.Z.dispatch({
            type: 'GUILD_NSFW_AGREE',
            guildId: e
        });
    },
    nsfwReturnToSafety(e) {
        if (null == e) {
            (0, _.uL)(R.Z5c.FRIENDS);
            return;
        }
        let n = E.ZP.getDefaultChannel(e);
        null == n || n.isNSFW() ? (0, _.uL)(R.Z5c.FRIENDS) : (0, _.uL)(R.Z5c.CHANNEL(e, n.id));
    },
    escapeToDefaultChannel(e) {
        let n = E.ZP.getDefaultChannel(e);
        null != n ? (0, _.uL)(R.Z5c.CHANNEL(e, n.id)) : (0, _.uL)(R.Z5c.FRIENDS);
    },
    async fetchApplications(e, n) {
        let r = {
            url: R.ANM.GUILD_APPLICATIONS(e),
            oldFormErrors: !0,
            rejectWithError: !1
        };
        null != n && (r.query = { channel_id: n });
        let i = (await l.tn.get(r)).body;
        u.Z.dispatch({
            type: 'GUILD_APPLICATIONS_FETCH_SUCCESS',
            guildId: e,
            applications: i
        });
    },
    async fetchGuildBansBatch(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1000,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = { limit: n };
        null != r && (i.after = r),
            await l.tn
                .get({
                    url: R.ANM.GUILD_BANS(e),
                    oldFormErrors: !0,
                    query: i,
                    rejectWithError: !1
                })
                .then((n) => {
                    u.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: n.body,
                        guildId: e
                    });
                });
    },
    async searchGuildBans(e, n, r) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            a = { limit: i };
        null != r && r.length > 0 && (a.user_ids = r),
            null != n && n.trim().length > 0 && (a.query = n),
            await l.tn
                .get({
                    url: R.ANM.GUILD_BANS_SEARCH(e),
                    oldFormErrors: !0,
                    query: a,
                    rejectWithError: !1
                })
                .then((n) => {
                    u.Z.dispatch({
                        type: 'GUILD_SETTINGS_LOADED_BANS_BATCH',
                        bans: n.body,
                        guildId: e
                    });
                });
    },
    async fetchGuildBans(e) {
        await l.tn
            .get({
                url: R.ANM.GUILD_BANS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                u.Z.dispatch({
                    type: 'GUILD_SETTINGS_LOADED_BANS',
                    bans: e.body
                });
            });
    },
    fetchGuildRoleConnectionsEligibility: (e, n) =>
        l.tn
            .get({
                url: R.ANM.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, n),
                oldFormErrors: !0,
                rejectWithError: !1
            })
            .then((e) => {
                let { body: r } = e;
                return (
                    u.Z.dispatch({
                        type: 'GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS',
                        roleId: n,
                        roleConnectionEligibility: r
                    }),
                    r
                );
            }),
    async assignGuildRoleConnection(e, n) {
        await l.tn.post({
            url: R.ANM.GUILD_ROLE_CONNECTIONS_ASSIGN(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    async unassignGuildRoleConnection(e, n) {
        await l.tn.post({
            url: R.ANM.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, n),
            oldFormErrors: !0,
            rejectWithError: !1
        });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await l.tn.get({
                url: R.ANM.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1
            })
        ).body
};
