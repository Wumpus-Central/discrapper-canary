"use strict";
n.d(t, { A: () => x, k: () => G }), n(142703);
var i = n(562708),
    r = n(136722),
    a = n(636537),
    s = n(228366),
    l = n(178253),
    o = n(612200),
    d = n(323073),
    c = n(879408),
    u = n(470348),
    _ = n(568185),
    E = n(741231),
    A = n(271004),
    h = n(398884),
    I = n(700241),
    f = n(658128),
    p = n(976860),
    T = n(288254),
    m = n(280450),
    g = n(383394),
    S = n(808728),
    N = n(71393),
    C = n(309010),
    R = n(967198),
    O = n(287809),
    L = n(174459),
    D = n(488926),
    y = n(499785),
    v = n(157559),
    b = n(652215),
    M = n(204925),
    P = n(375708);
function U(e) {
    v.A.show({ title: P.intl.string(P.t.cTaRxF), body: P.intl.formatToPlainString(P.t["VSd+Aj"], { quantity: e }) });
}
function w(e) {
    s.h.dispatch({ type: "GUILD_DELETE", guild: { id: e } });
}
function G(e) {
    return new Promise((t) =>
        N.A.addConditionalChangeListener(() => {
            let n = N.A.getGuild(e);
            return null == n || (t(n), !1);
        }),
    );
}
let x = {
    joinGuild: async function e(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: i, loadId: r, lurkLocation: l, autoNavigate: d = !0 } = t,
            c = t.lurker ?? !1,
            u = O.default.getCurrentUser();
        if (u?.hasFlag(b.nhx.QUARANTINED)) return (0, I.default)(), new Promise((e, t) => t(Error()));
        s.h.wait(() => s.h.dispatch({ type: "GUILD_JOIN", guildId: e, lurker: c, source: i, loadId: r }));
        try {
            let t = R.A.getGuildId(),
                o = e === t && null != N.A.getGuild(e) ? C.A.getChannelId(e) : null,
                u = await a.Bo.put({
                    url: b.Rsh.GUILD_JOIN(e),
                    query: {
                        lurker: c,
                        session_id: c ? m.default.getSessionId() : null,
                        recommendation_load_id: r,
                        location: c && null != l ? l : null,
                        from_directory: i === b.Q4z.DIRECTORY_ENTRY || null,
                    },
                    context: { source: i },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1,
                });
            if (
                (null != u.body.join_request &&
                    s.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: u.body.join_request }),
                null == N.A.getGuild(e) && u.body.show_verification_form && d)
            )
                return (0, p.pX)(b.BVt.GUILD_MEMBER_VERIFICATION(e)), u;
            if (
                (null != u.body.welcome_screen &&
                    s.h.dispatch({
                        type: "WELCOME_SCREEN_UPDATE",
                        guildId: u.body.id,
                        welcomeScreen: u.body.welcome_screen,
                    }),
                null != u.body.approximate_presence_count &&
                    s.h.dispatch({
                        type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                        guildId: u.body.id,
                        count: u.body.approximate_presence_count,
                    }),
                !c && d)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 608401));
                await t({ guildId: e, returnChannelId: o });
            }
            return u;
        } catch (t) {
            throw (
                (t.body?.code === b.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                    (0, o.yO)(M.w_.JOIN_LARGE_GUILD_UNDERAGE),
                t.body?.code === b.t02.TOO_MANY_USER_GUILDS &&
                    ((0, h.Om)(O.default.getCurrentUser()) ? U(b.cZu) : U(b.qlD)),
                t.body?.code === b.t02.GUILD_AT_CAPACITY &&
                    v.A.show({ title: P.intl.string(P.t.ZZlox4), body: P.intl.string(P.t.ZUEGFn) }),
                c && t.body?.code === b.t02.UNKNOWN_GUILD && w(e),
                t)
            );
        }
    },
    waitForGuild: G,
    async transitionToGuildSync(e, t, n, i) {
        var r;
        let a = ((r = (await G(e)).id), null != n ? n : (0, f.W)(r)),
            s = t;
        t?.hasOwnProperty("welcomeModalChannelId") &&
            null == t.welcomeModalChannelId &&
            (s = { ...t, welcomeModalChannelId: a ?? void 0 }),
            (0, E.A)(b.BVt.CHANNEL(e, a, i), s),
            await new Promise(setImmediate);
    },
    deleteGuild: w,
    selectGuild(e) {
        (0, A.jA)(e);
    },
    createGuild(e) {
        s.h.dispatch({ type: "GUILD_CREATE", guild: e });
    },
    setServerMute: (e, t, n) =>
        a.Bo.patch({ url: b.Rsh.GUILD_MEMBER(e, t), body: { mute: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setServerDeaf: (e, t, n) =>
        a.Bo.patch({ url: b.Rsh.GUILD_MEMBER(e, t), body: { deaf: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setChannel(e, t, n) {
        a.Bo.patch({ url: b.Rsh.GUILD_MEMBER(e, t), body: { channel_id: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    setMemberFlags(e, t, n) {
        a.Bo.patch({ url: b.Rsh.GUILD_MEMBER(e, t), body: { flags: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    kickUser: (e, t, n, i) =>
        a.Bo.del({
            url: b.Rsh.GUILD_MEMBER(e, t),
            query: { reason: n, moderator_report_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            s.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
        }),
    setCommunicationDisabledUntil(e) {
        let {
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: r,
            duration: a,
            reason: s,
            location: l,
            moderatorReportId: o,
        } = e;
        return y.A.patch({
            url: b.Rsh.GUILD_MEMBER(t, n),
            reason: s,
            body: { communication_disabled_until: r, moderator_report_id: o },
            oldFormErrors: !0,
            trackedActionData: {
                event: i.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != s ? s : null,
                    communication_disabled_until: r,
                    location: null != l ? l : null,
                },
            },
            rejectWithError: !1,
        });
    },
    banUser: (e, t, n, i, r) =>
        a.Bo.put({
            url: b.Rsh.GUILD_BAN(e, t),
            reason: i,
            body: { delete_message_seconds: n, moderator_report_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    unbanUser: (e, t) => a.Bo.del({ url: b.Rsh.GUILD_BAN(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    banMultipleUsers(e, t, n, i) {
        let r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        return a.Bo.post({
            url: r ? b.Rsh.BULK_GUILD_BAN_V2(e) : b.Rsh.BULK_GUILD_BAN(e),
            body: { user_ids: t, delete_message_seconds: n },
            reason: i,
            oldFormErrors: !0,
            rejectWithError: !1,
        });
    },
    async startBulkBan(e, t, n, i) {
        let { usePubSub: r } = u.A.getConfig({ location: "startBulkBan" });
        try {
            let a = await this.banMultipleUsers(e, t, n, i, r);
            if (r && c.A.consumeCompletedBeforeStarted(e, m.default.getId())) return;
            if ((s.h.dispatch({ type: "GUILD_BULK_BAN_STARTED", guildId: e }), !r)) {
                let { banned_users: n = [], failed_users: i = [] } = a.body ?? {};
                s.h.dispatch({
                    type: "GUILD_BULK_BAN_UPDATE",
                    guildId: e,
                    bulkBan: { bannedUsers: n, failedUsers: i, targetUserIds: t },
                });
            }
        } catch (t) {
            s.h.dispatch({ type: "GUILD_BULK_BAN_FAILED", guildId: e });
        }
    },
    async createRole(e, t, n, i) {
        let { skipSelect: o = !1 } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
            d = {
                name: null != t && "" !== t ? t : P.intl.string(P.t.QBMHvB),
                color: n ?? 0,
                colors: i ?? { primary_color: n ?? 0, secondary_color: null, tertiary_color: null },
                permissions: D.x3,
            };
        try {
            let t = await a.Bo.post({ url: b.Rsh.GUILD_ROLES(e), oldFormErrors: !0, body: d, rejectWithError: !1 }),
                n = t.body;
            return (
                (n.permissions = r.iu(n.permissions)),
                o || s.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: t.body.id, role: n }),
                _.A.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new l.A(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: i, unicodeEmoji: r, ...s } = n,
            l = null === i || i?.startsWith("data:") ? i : void 0,
            o = await a.Bo.patch({
                url: b.Rsh.GUILD_ROLE(e, t),
                body: { ...s, icon: l, unicode_emoji: r },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return _.A.checkGuildTemplateDirty(e), o;
    },
    updateRolePermissions: (e, t, n) =>
        a.Bo.patch({ url: b.Rsh.GUILD_ROLE(e, t), body: { permissions: n }, oldFormErrors: !0, rejectWithError: !1 }),
    deleteRole(e, t) {
        a.Bo.del({ url: b.Rsh.GUILD_ROLE(e, t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            _.A.checkGuildTemplateDirty(e);
        });
    },
    async batchChannelUpdate(e, t) {
        let n = await a.Bo.patch({ url: b.Rsh.GUILD_CHANNELS(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await a.Bo.patch({ url: b.Rsh.GUILD_ROLES(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return s.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: i,
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: i } = t ?? {};
        return s.h.dispatch({ type: "GUILD_SEARCH_RECENT_MEMBERS", guildId: e, query: n, continuationToken: i });
    },
    requestMembersById(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return s.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            userIds: Array.isArray(t) ? t : [t],
            presences: n,
        });
    },
    move(e, t, n, i) {
        s.h.dispatch({ type: "GUILD_MOVE", fromIndex: e, toIndex: t, fromFolderIndex: n, toFolderIndex: i });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t)
            throw Error(`GuildActionCreators.moveById: \`sourceId\` and \`targetId\` cannot be the same value: ${e}`);
        s.h.dispatch({ type: "GUILD_MOVE_BY_ID", sourceId: e, targetId: t, moveToBelow: n, combine: i });
    },
    createGuildFolderLocal(e, t) {
        L.default.track(b.HAw.GUILD_FOLDER_CREATED),
            s.h.dispatch({ type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: e, name: t });
    },
    editGuildFolderLocal(e, t, n) {
        s.h.dispatch({ type: "GUILD_FOLDER_EDIT_LOCAL", targetId: e, sourceIds: t, name: n });
    },
    deleteGuildFolderLocal(e) {
        s.h.dispatch({ type: "GUILD_FOLDER_DELETE_LOCAL", targetId: e });
    },
    toggleGuildFolderExpand(e) {
        let t = g.A.isFolderExpanded(e);
        L.default.track(b.HAw.GUILD_FOLDER_CLICKED, { source: "sidebar", action: t ? "collapsed" : "expanded" }),
            s.h.dispatch({ type: "TOGGLE_GUILD_FOLDER_EXPAND", folderId: e });
    },
    setGuildFolderExpanded(e, t) {
        s.h.dispatch({ type: "SET_GUILD_FOLDER_EXPANDED", folderId: e, expanded: t });
    },
    collapseAllFolders() {
        s.h.dispatch({ type: "GUILD_FOLDER_COLLAPSE" });
    },
    nsfwAgree(e) {
        s.h.dispatch({ type: "GUILD_NSFW_AGREE", guildId: e });
    },
    nsfwReturnToSafety(e) {
        if (null == e) return void (0, p.pX)(b.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 });
        let t = S.Ay.getDefaultChannel(e);
        null == t || (0, d.qR)(t) || (0, T.BV)(t)
            ? (0, p.pX)(b.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 })
            : (0, p.pX)(b.BVt.CHANNEL(e, t.id));
    },
    spoilerAgree(e) {
        s.h.dispatch({ type: "CHANNEL_SPOILER_AGREE", channelId: e });
    },
    clearSpoilerAgree(e) {
        s.h.dispatch({ type: "CHANNEL_SPOILER_AGREE_CLEAR", channelId: e });
    },
    escapeToDefaultChannel(e) {
        let t = S.Ay.getDefaultChannel(e);
        null != t ? (0, p.pX)(b.BVt.CHANNEL(e, t.id)) : (0, p.pX)(b.BVt.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = { url: b.Rsh.GUILD_APPLICATIONS(e), oldFormErrors: !0, rejectWithError: !1 };
        null != t && (n.query = { channel_id: t });
        let i = (await a.Bo.get(n)).body;
        s.h.dispatch({ type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: e, applications: i });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            i = { limit: t };
        null != n && (i.after = n),
            await a.Bo.get({ url: b.Rsh.GUILD_BANS(e), oldFormErrors: !0, query: i, rejectWithError: !1 }).then((t) => {
                s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, guildId: e });
            });
    },
    async searchGuildBans(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            r = { limit: i };
        null != n && n.length > 0 && (r.user_ids = n),
            null != t && t.trim().length > 0 && (r.query = t),
            await a.Bo.get({ url: b.Rsh.GUILD_BANS_SEARCH(e), oldFormErrors: !0, query: r, rejectWithError: !1 }).then(
                (t) => {
                    s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, userIds: n, guildId: e });
                },
            );
    },
    async fetchGuildBans(e) {
        await a.Bo.get({ url: b.Rsh.GUILD_BANS(e), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
            s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS", bans: e.body });
        });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        a.Bo.get({ url: b.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(
            (e) => {
                let { body: n } = e;
                return (
                    s.h.dispatch({
                        type: "GUILD_ROLE_CONNECTION_ELIGIBILITY_FETCH_SUCCESS",
                        roleId: t,
                        roleConnectionEligibility: n,
                    }),
                    n
                );
            },
        ),
    async assignGuildRoleConnection(e, t) {
        await a.Bo.post({ url: b.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    async unassignGuildRoleConnection(e, t) {
        await a.Bo.post({ url: b.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await a.Bo.get({
                url: b.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
};
