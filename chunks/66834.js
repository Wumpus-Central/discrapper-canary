"use strict";
n.d(t, { A: () => k, k: () => U }), n(142703);
var i = n(562708),
    r = n(136722),
    s = n(636537),
    a = n(228366),
    o = n(178253),
    l = n(612200),
    u = n(323073),
    c = n(879408),
    d = n(470348),
    _ = n(568185),
    f = n(741231),
    h = n(854492),
    p = n(700241),
    E = n(658128),
    m = n(976860),
    g = n(288254),
    A = n(495544),
    I = n(383394),
    T = n(808728),
    S = n(71393),
    N = n(309010),
    y = n(967198),
    C = n(287809),
    v = n(174459),
    O = n(488926),
    R = n(927578),
    b = n(499785),
    D = n(157559),
    L = n(652215),
    w = n(204925),
    M = n(375708);
let P = (e) => {
        D.A.show({
            title: M.intl.string(M.t.cTaRxF),
            body: M.intl.formatToPlainString(M.t["VSd+Aj"], { quantity: e }),
        });
    },
    x = (e) => {
        a.h.dispatch({ type: "GUILD_DELETE", guild: { id: e } });
    };
function U(e) {
    return new Promise((t) =>
        S.A.addConditionalChangeListener(() => {
            let n = S.A.getGuild(e);
            return null == n || (t(n), !1);
        }),
    );
}
let k = {
    joinGuild: async function e(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: i, loadId: r, lurkLocation: o, autoNavigate: u = !0 } = t,
            c = t.lurker ?? !1,
            d = C.default.getCurrentUser();
        if (d?.hasFlag(L.nhx.QUARANTINED)) return (0, p.default)(), new Promise((e, t) => t(Error()));
        a.h.wait(() => a.h.dispatch({ type: "GUILD_JOIN", guildId: e, lurker: c, source: i, loadId: r }));
        try {
            let t = y.A.getGuildId(),
                l = e === t && null != S.A.getGuild(e) ? N.A.getChannelId(e) : null,
                d = await s.Bo.put({
                    url: L.Rsh.GUILD_JOIN(e),
                    query: {
                        lurker: c,
                        session_id: c ? A.default.getSessionId() : null,
                        recommendation_load_id: r,
                        location: c && null != o ? o : null,
                        from_directory: i === L.Q4z.DIRECTORY_ENTRY || null,
                    },
                    context: { source: i },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1,
                });
            if (
                (null != d.body.join_request &&
                    a.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: d.body.join_request }),
                null == S.A.getGuild(e) && d.body.show_verification_form && u)
            )
                return (0, m.pX)(L.BVt.GUILD_MEMBER_VERIFICATION(e)), d;
            if (
                (null != d.body.welcome_screen &&
                    a.h.dispatch({
                        type: "WELCOME_SCREEN_UPDATE",
                        guildId: d.body.id,
                        welcomeScreen: d.body.welcome_screen,
                    }),
                null != d.body.approximate_presence_count &&
                    a.h.dispatch({
                        type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                        guildId: d.body.id,
                        count: d.body.approximate_presence_count,
                    }),
                !c && u)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 608401));
                await t({ guildId: e, returnChannelId: l });
            }
            return d;
        } catch (t) {
            if (
                (t.body?.code === L.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                    (0, l.yO)(w.w_.JOIN_LARGE_GUILD_UNDERAGE),
                t.body?.code === L.t02.TOO_MANY_USER_GUILDS)
            ) {
                let e = C.default.getCurrentUser();
                R.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() ? P(L.cZu) : P(L.qlD);
            }
            throw (
                (t.body?.code === L.t02.GUILD_AT_CAPACITY &&
                    D.A.show({ title: M.intl.string(M.t.ZZlox4), body: M.intl.string(M.t.ZUEGFn) }),
                c && t.body?.code === L.t02.UNKNOWN_GUILD && x(e),
                t)
            );
        }
    },
    waitForGuild: U,
    async transitionToGuildSync(e, t, n, i) {
        var r;
        let s = ((r = (await U(e)).id), null != n ? n : (0, E.W)(r)),
            a = t;
        t?.hasOwnProperty("welcomeModalChannelId") &&
            null == t.welcomeModalChannelId &&
            (a = { ...t, welcomeModalChannelId: s ?? void 0 }),
            (0, f.A)(L.BVt.CHANNEL(e, s, i), a),
            await new Promise(setImmediate);
    },
    deleteGuild: x,
    selectGuild(e) {
        (0, h.j)(e);
    },
    createGuild(e) {
        a.h.dispatch({ type: "GUILD_CREATE", guild: e });
    },
    setServerMute: (e, t, n) =>
        s.Bo.patch({ url: L.Rsh.GUILD_MEMBER(e, t), body: { mute: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setServerDeaf: (e, t, n) =>
        s.Bo.patch({ url: L.Rsh.GUILD_MEMBER(e, t), body: { deaf: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setChannel(e, t, n) {
        s.Bo.patch({ url: L.Rsh.GUILD_MEMBER(e, t), body: { channel_id: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    setMemberFlags(e, t, n) {
        s.Bo.patch({ url: L.Rsh.GUILD_MEMBER(e, t), body: { flags: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    kickUser: (e, t, n, i) =>
        s.Bo.del({
            url: L.Rsh.GUILD_MEMBER(e, t),
            query: { reason: n, moderator_report_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            a.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
        }),
    setCommunicationDisabledUntil(e) {
        let {
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: r,
            duration: s,
            reason: a,
            location: o,
            moderatorReportId: l,
        } = e;
        return b.A.patch({
            url: L.Rsh.GUILD_MEMBER(t, n),
            reason: a,
            body: { communication_disabled_until: r, moderator_report_id: l },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != s ? s : null,
                    reason: null != a ? a : null,
                    communication_disabled_until: r,
                    location: null != o ? o : null,
                },
            },
            rejectWithError: !1,
        });
    },
    banUser: (e, t, n, i, r) =>
        s.Bo.put({
            url: L.Rsh.GUILD_BAN(e, t),
            reason: i,
            body: { delete_message_seconds: n, moderator_report_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    unbanUser: (e, t) => s.Bo.del({ url: L.Rsh.GUILD_BAN(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    banMultipleUsers: (e, t, n, i) =>
        s.Bo.post({
            url: L.Rsh.BULK_GUILD_BAN(e),
            body: { user_ids: t, delete_message_seconds: n },
            reason: i,
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async startBulkBan(e, t, n, i) {
        let { usePubSub: r } = d.A.getConfig({ location: "startBulkBan" });
        try {
            let s = await this.banMultipleUsers(e, t, n, i);
            if (r && c.A.consumeCompletedBeforeStarted(e, A.default.getId())) return;
            if ((a.h.dispatch({ type: "GUILD_BULK_BAN_STARTED", guildId: e }), !r)) {
                let { banned_users: n = [], failed_users: i = [] } = s.body ?? {};
                a.h.dispatch({
                    type: "GUILD_BULK_BAN_UPDATE",
                    guildId: e,
                    bulkBan: { bannedUsers: n, failedUsers: i, targetUserIds: t },
                });
            }
        } catch (t) {
            a.h.dispatch({ type: "GUILD_BULK_BAN_FAILED", guildId: e });
        }
    },
    async createRole(e, t, n, i) {
        let l = {
            name: null != t && "" !== t ? t : M.intl.string(M.t.QBMHvB),
            color: n ?? 0,
            colors: i ?? { primary_color: n ?? 0, secondary_color: null, tertiary_color: null },
            permissions: O.x3,
        };
        try {
            let t = await s.Bo.post({ url: L.Rsh.GUILD_ROLES(e), oldFormErrors: !0, body: l, rejectWithError: !1 }),
                n = t.body;
            return (
                (n.permissions = r.iu(n.permissions)),
                a.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: t.body.id, role: n }),
                _.A.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new o.A(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: i, unicodeEmoji: r, ...a } = n,
            o = null === i || i?.startsWith("data:") ? i : void 0,
            l = await s.Bo.patch({
                url: L.Rsh.GUILD_ROLE(e, t),
                body: { ...a, icon: o, unicode_emoji: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return _.A.checkGuildTemplateDirty(e), l;
    },
    updateRolePermissions: (e, t, n) =>
        s.Bo.patch({ url: L.Rsh.GUILD_ROLE(e, t), body: { permissions: n }, oldFormErrors: !0, rejectWithError: !1 }),
    deleteRole(e, t) {
        s.Bo.del({ url: L.Rsh.GUILD_ROLE(e, t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            _.A.checkGuildTemplateDirty(e);
        });
    },
    async batchChannelUpdate(e, t) {
        let n = await s.Bo.patch({ url: L.Rsh.GUILD_CHANNELS(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await s.Bo.patch({ url: L.Rsh.GUILD_ROLES(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return a.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: i,
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t ?? {};
        return a.h.dispatch({ type: "GUILD_SEARCH_RECENT_MEMBERS", guildId: e, query: n, continuationToken: i });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return a.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n,
        });
    },
    move(e, t, n, i) {
        a.h.dispatch({ type: "GUILD_MOVE", fromIndex: e, toIndex: t, fromFolderIndex: n, toFolderIndex: i });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t)
            throw Error(`GuildActionCreators.moveById: \`sourceId\` and \`targetId\` cannot be the same value: ${e}`);
        a.h.dispatch({ type: "GUILD_MOVE_BY_ID", sourceId: e, targetId: t, moveToBelow: n, combine: i });
    },
    createGuildFolderLocal(e, t) {
        v.default.track(L.HAw.GUILD_FOLDER_CREATED),
            a.h.dispatch({ type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: e, name: t });
    },
    editGuildFolderLocal(e, t, n) {
        a.h.dispatch({ type: "GUILD_FOLDER_EDIT_LOCAL", targetId: e, sourceIds: t, name: n });
    },
    deleteGuildFolderLocal(e) {
        a.h.dispatch({ type: "GUILD_FOLDER_DELETE_LOCAL", targetId: e });
    },
    toggleGuildFolderExpand(e) {
        let t = I.A.isFolderExpanded(e);
        v.default.track(L.HAw.GUILD_FOLDER_CLICKED, { source: "sidebar", action: t ? "collapsed" : "expanded" }),
            a.h.dispatch({ type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: e });
    },
    setGuildFolderExpanded(e, t) {
        a.h.dispatch({ type: "SET_GUILD_FOLDER_EXPANDED", folderId: e, expanded: t });
    },
    collapseAllFolders() {
        a.h.dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
    },
    nsfwAgree(e) {
        a.h.dispatch({ type: "GUILD_NSFW_AGREE", guildId: e });
    },
    nsfwReturnToSafety(e) {
        if (null == e) return void (0, m.pX)(L.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 });
        let t = T.Ay.getDefaultChannel(e);
        null == t || (0, u.qR)(t) || (0, g.BV)(t)
            ? (0, m.pX)(L.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 })
            : (0, m.pX)(L.BVt.CHANNEL(e, t.id));
    },
    spoilerAgree(e) {
        a.h.dispatch({ type: "CHANNEL_SPOILER_AGREE", channelId: e });
    },
    clearSpoilerAgree(e) {
        a.h.dispatch({ type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: e });
    },
    escapeToDefaultChannel(e) {
        let t = T.Ay.getDefaultChannel(e);
        null != t ? (0, m.pX)(L.BVt.CHANNEL(e, t.id)) : (0, m.pX)(L.BVt.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = { url: L.Rsh.GUILD_APPLICATIONS(e), oldFormErrors: !0, rejectWithError: !1 };
        null != t && (n.query = { channel_id: t });
        let i = (await s.Bo.get(n)).body;
        a.h.dispatch({ type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: e, applications: i });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = { limit: t };
        null != n && (i.after = n),
            await s.Bo.get({ url: L.Rsh.GUILD_BANS(e), oldFormErrors: !0, query: i, rejectWithError: !1 }).then((t) => {
                a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, guildId: e });
            });
    },
    async searchGuildBans(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            r = { limit: i };
        null != n && n.length > 0 && (r.user_ids = n),
            null != t && t.trim().length > 0 && (r.query = t),
            await s.Bo.get({ url: L.Rsh.GUILD_BANS_SEARCH(e), oldFormErrors: !0, query: r, rejectWithError: !1 }).then(
                (t) => {
                    a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, userIds: n, guildId: e });
                },
            );
    },
    async fetchGuildBans(e) {
        await s.Bo.get({ url: L.Rsh.GUILD_BANS(e), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
            a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS", bans: e.body });
        });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        s.Bo.get({ url: L.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => {
                let { body: n } = e;
                return (
                    a.h.dispatch({
                        type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionEligibility: n,
                    }),
                    n
                );
            },
        ),
    async assignGuildRoleConnection(e, t) {
        await s.Bo.post({ url: L.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    async unassignGuildRoleConnection(e, t) {
        await s.Bo.post({ url: L.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await s.Bo.get({
                url: L.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
};
