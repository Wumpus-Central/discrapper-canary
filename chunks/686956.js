"use strict";
n.d(t, { A: () => G, k: () => k }), n(142703);
var r = n(110259),
    i = n(136722),
    s = n(562465),
    a = n(73153),
    o = n(178253),
    l = n(612200),
    u = n(323073),
    c = n(879408),
    d = n(470348),
    _ = n(568185),
    f = n(22007),
    p = n(854492),
    h = n(700241),
    m = n(658128),
    E = n(976860),
    g = n(961350),
    A = n(383394),
    I = n(808728),
    T = n(71393),
    S = n(309010),
    y = n(967198),
    v = n(287809),
    N = n(954571),
    C = n(488926),
    R = n(927578),
    O = n(499785),
    b = n(157559),
    D = n(652215),
    L = n(204925),
    w = n(985018);
let M = (e) => {
        b.A.show({
            title: w.intl.string(w.t.cTaRxF),
            body: w.intl.formatToPlainString(w.t["VSd+Aj"], { quantity: e }),
        });
    },
    x = (e) => {
        a.h.dispatch({ type: "GUILD_DELETE", guild: { id: e } });
    },
    P = () => {
        b.A.show({ title: w.intl.string(w.t.ZZlox4), body: w.intl.string(w.t.ZUEGFn) });
    };
function k(e) {
    return new Promise((t) =>
        T.A.addConditionalChangeListener(() => {
            let n = T.A.getGuild(e);
            return null == n || (t(n), !1);
        }),
    );
}
function U(e, t) {
    return null != t ? t : (0, m.W)(e);
}
let G = {
    joinGuild: async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: r, loadId: i, lurkLocation: o, autoNavigate: u = !0 } = t,
            c = t.lurker ?? !1,
            d = v.default.getCurrentUser();
        if (d?.hasFlag(D.nhx.QUARANTINED)) return (0, h.default)(), new Promise((e, t) => t(Error()));
        a.h.wait(() => a.h.dispatch({ type: "GUILD_JOIN", guildId: e, lurker: c, source: r, loadId: i }));
        try {
            let t = y.A.getGuildId(),
                l = e === t && null != T.A.getGuild(e) ? S.A.getChannelId(e) : null,
                d = await s.Bo.put({
                    url: D.Rsh.GUILD_JOIN(e),
                    query: {
                        lurker: c,
                        session_id: c ? g.default.getSessionId() : null,
                        recommendation_load_id: i,
                        location: c && null != o ? o : null,
                        from_directory: r === D.Q4z.DIRECTORY_ENTRY || null,
                    },
                    context: { source: r },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1,
                });
            if (
                (null != d.body.join_request &&
                    a.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: d.body.join_request }),
                null == T.A.getGuild(e) && d.body.show_verification_form && u)
            )
                return (0, E.pX)(D.BVt.GUILD_MEMBER_VERIFICATION(e)), d;
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
                let { default: t } = await Promise.resolve().then(n.bind(n, 967305));
                await t({ guildId: e, returnChannelId: l });
            }
            return d;
        } catch (t) {
            if (
                (t.body?.code === D.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                    (0, l.yO)(L.w_.JOIN_LARGE_GUILD_UNDERAGE),
                t.body?.code === D.t02.TOO_MANY_USER_GUILDS)
            ) {
                let e = v.default.getCurrentUser();
                R.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() ? M(D.cZu) : M(D.qlD);
            }
            throw (
                (t.body?.code === D.t02.GUILD_AT_CAPACITY && P(), c && t.body?.code === D.t02.UNKNOWN_GUILD && x(e), t)
            );
        }
    },
    waitForGuild: k,
    async transitionToGuildSync(e, t, n, r) {
        let i = U((await k(e)).id, n),
            s = t;
        t?.hasOwnProperty("welcomeModalChannelId") &&
            null == t.welcomeModalChannelId &&
            (s = { ...t, welcomeModalChannelId: i ?? void 0 }),
            (0, f.A)(D.BVt.CHANNEL(e, i, r), s),
            await new Promise(setImmediate);
    },
    deleteGuild: x,
    selectGuild(e) {
        (0, p.j)(e);
    },
    createGuild(e) {
        a.h.dispatch({ type: "GUILD_CREATE", guild: e });
    },
    setServerMute: (e, t, n) =>
        s.Bo.patch({ url: D.Rsh.GUILD_MEMBER(e, t), body: { mute: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setServerDeaf: (e, t, n) =>
        s.Bo.patch({ url: D.Rsh.GUILD_MEMBER(e, t), body: { deaf: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setChannel(e, t, n) {
        s.Bo.patch({ url: D.Rsh.GUILD_MEMBER(e, t), body: { channel_id: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    setMemberFlags(e, t, n) {
        s.Bo.patch({ url: D.Rsh.GUILD_MEMBER(e, t), body: { flags: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    kickUser: (e, t, n, r) =>
        s.Bo.del({
            url: D.Rsh.GUILD_MEMBER(e, t),
            query: { reason: n, moderator_report_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            a.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
        }),
    setCommunicationDisabledUntil(e) {
        let {
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: i,
            duration: s,
            reason: a,
            location: o,
            moderatorReportId: l,
        } = e;
        return O.A.patch({
            url: D.Rsh.GUILD_MEMBER(t, n),
            reason: a,
            body: { communication_disabled_until: i, moderator_report_id: l },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != s ? s : null,
                    reason: null != a ? a : null,
                    communication_disabled_until: i,
                    location: null != o ? o : null,
                },
            },
            rejectWithError: !1,
        });
    },
    banUser: (e, t, n, r, i) =>
        s.Bo.put({
            url: D.Rsh.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n, moderator_report_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    unbanUser: (e, t) => s.Bo.del({ url: D.Rsh.GUILD_BAN(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    banMultipleUsers: (e, t, n, r) =>
        s.Bo.post({
            url: D.Rsh.BULK_GUILD_BAN(e),
            body: { user_ids: t, delete_message_seconds: n },
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async startBulkBan(e, t, n, r) {
        let { usePubSub: i } = d.A.getConfig({ location: "startBulkBan" });
        try {
            let s = await this.banMultipleUsers(e, t, n, r);
            if (i && c.A.consumeCompletedBeforeStarted(e, g.default.getId())) return;
            if ((a.h.dispatch({ type: "GUILD_BULK_BAN_STARTED", guildId: e }), !i)) {
                let { banned_users: n = [], failed_users: r = [] } = s.body ?? {};
                a.h.dispatch({
                    type: "GUILD_BULK_BAN_UPDATE",
                    guildId: e,
                    bulkBan: { bannedUsers: n, failedUsers: r, targetUserIds: t },
                });
            }
        } catch (t) {
            a.h.dispatch({ type: "GUILD_BULK_BAN_FAILED", guildId: e });
        }
    },
    async createRole(e, t, n, r) {
        let l = {
            name: null != t && "" !== t ? t : w.intl.string(w.t.QBMHvB),
            color: n ?? 0,
            colors: r ?? { primary_color: n ?? 0, secondary_color: null, tertiary_color: null },
            permissions: C.x3,
        };
        try {
            let t = await s.Bo.post({ url: D.Rsh.GUILD_ROLES(e), oldFormErrors: !0, body: l, rejectWithError: !1 }),
                n = t.body;
            return (
                (n.permissions = i.iu(n.permissions)),
                a.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: t.body.id, role: n }),
                _.A.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new o.A(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i, ...a } = n,
            o = null === r || r?.startsWith("data:") ? r : void 0,
            l = await s.Bo.patch({
                url: D.Rsh.GUILD_ROLE(e, t),
                body: { ...a, icon: o, unicode_emoji: i },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return _.A.checkGuildTemplateDirty(e), l;
    },
    updateRolePermissions: (e, t, n) =>
        s.Bo.patch({ url: D.Rsh.GUILD_ROLE(e, t), body: { permissions: n }, oldFormErrors: !0, rejectWithError: !1 }),
    deleteRole(e, t) {
        s.Bo.del({ url: D.Rsh.GUILD_ROLE(e, t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            _.A.checkGuildTemplateDirty(e);
        });
    },
    async batchChannelUpdate(e, t) {
        let n = await s.Bo.patch({ url: D.Rsh.GUILD_CHANNELS(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await s.Bo.patch({ url: D.Rsh.GUILD_ROLES(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return _.A.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return a.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r,
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = t ?? {};
        return a.h.dispatch({ type: "GUILD_SEARCH_RECENT_MEMBERS", guildId: e, query: n, continuationToken: r });
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
    move(e, t, n, r) {
        a.h.dispatch({ type: "GUILD_MOVE", fromIndex: e, toIndex: t, fromFolderIndex: n, toFolderIndex: r });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t)
            throw Error(`GuildActionCreators.moveById: \`sourceId\` and \`targetId\` cannot be the same value: ${e}`);
        a.h.dispatch({ type: "GUILD_MOVE_BY_ID", sourceId: e, targetId: t, moveToBelow: n, combine: r });
    },
    createGuildFolderLocal(e, t) {
        N.default.track(D.HAw.GUILD_FOLDER_CREATED),
            a.h.dispatch({ type: "GUILD_FOLDER_CREATE_LOCAL", sourceIds: e, name: t });
    },
    editGuildFolderLocal(e, t, n) {
        a.h.dispatch({ type: "GUILD_FOLDER_EDIT_LOCAL", targetId: e, sourceIds: t, name: n });
    },
    deleteGuildFolderLocal(e) {
        a.h.dispatch({ type: "GUILD_FOLDER_DELETE_LOCAL", targetId: e });
    },
    toggleGuildFolderExpand(e) {
        let t = A.A.isFolderExpanded(e);
        N.default.track(D.HAw.GUILD_FOLDER_CLICKED, { source: "sidebar", action: t ? "collapsed" : "expanded" }),
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
        if (null == e) return void (0, E.pX)(D.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 });
        let t = I.Ay.getDefaultChannel(e);
        null == t || (0, u.qR)(t)
            ? (0, E.pX)(D.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 })
            : (0, E.pX)(D.BVt.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = I.Ay.getDefaultChannel(e);
        null != t ? (0, E.pX)(D.BVt.CHANNEL(e, t.id)) : (0, E.pX)(D.BVt.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = { url: D.Rsh.GUILD_APPLICATIONS(e), oldFormErrors: !0, rejectWithError: !1 };
        null != t && (n.query = { channel_id: t });
        let r = (await s.Bo.get(n)).body;
        a.h.dispatch({ type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: e, applications: r });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = { limit: t };
        null != n && (r.after = n),
            await s.Bo.get({ url: D.Rsh.GUILD_BANS(e), oldFormErrors: !0, query: r, rejectWithError: !1 }).then((t) => {
                a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, guildId: e });
            });
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await s.Bo.get({ url: D.Rsh.GUILD_BANS_SEARCH(e), oldFormErrors: !0, query: i, rejectWithError: !1 }).then(
                (t) => {
                    a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, userIds: n, guildId: e });
                },
            );
    },
    async fetchGuildBans(e) {
        await s.Bo.get({ url: D.Rsh.GUILD_BANS(e), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
            a.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS", bans: e.body });
        });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        s.Bo.get({ url: D.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(
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
        await s.Bo.post({ url: D.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    async unassignGuildRoleConnection(e, t) {
        await s.Bo.post({ url: D.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await s.Bo.get({
                url: D.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
};
