"use strict";
n.d(t, { A: () => k, k: () => P }), n(142703);
var r = n(110259),
    i = n(136722),
    a = n(562465),
    s = n(73153),
    o = n(178253),
    l = n(612200),
    u = n(323073),
    c = n(568185),
    d = n(22007),
    _ = n(854492),
    f = n(700241),
    p = n(658128),
    h = n(976860),
    m = n(961350),
    g = n(383394),
    E = n(808728),
    A = n(71393),
    I = n(309010),
    T = n(967198),
    y = n(287809),
    S = n(954571),
    v = n(488926),
    C = n(927578),
    b = n(499785),
    N = n(157559),
    R = n(652215),
    O = n(204925),
    D = n(985018);
let L = (e) => {
        N.A.show({
            title: D.intl.string(D.t.cTaRxF),
            body: D.intl.formatToPlainString(D.t["VSd+Aj"], { quantity: e }),
        });
    },
    w = (e) => {
        s.h.dispatch({ type: "GUILD_DELETE", guild: { id: e } });
    },
    x = () => {
        N.A.show({ title: D.intl.string(D.t.ZZlox4), body: D.intl.string(D.t.ZUEGFn) });
    };
function P(e) {
    return new Promise((t) =>
        A.A.addConditionalChangeListener(() => {
            let n = A.A.getGuild(e);
            return null == n || (t(n), !1);
        }),
    );
}
function M(e, t) {
    return null != t ? t : (0, p.W)(e);
}
let k = {
    joinGuild: async function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { source: r, loadId: i, lurkLocation: o } = t,
            u = t.lurker ?? !1,
            c = y.default.getCurrentUser();
        if (c?.hasFlag(R.nhx.QUARANTINED)) return (0, f.default)(), new Promise((e, t) => t(Error()));
        s.h.wait(() => s.h.dispatch({ type: "GUILD_JOIN", guildId: e, lurker: u, source: r, loadId: i }));
        try {
            let t = T.A.getGuildId(),
                l = e === t && null != A.A.getGuild(e) ? I.A.getChannelId(e) : null,
                c = await a.Bo.put({
                    url: R.Rsh.GUILD_JOIN(e),
                    query: {
                        lurker: u,
                        session_id: u ? m.default.getSessionId() : null,
                        recommendation_load_id: i,
                        location: u && null != o ? o : null,
                    },
                    context: { source: r },
                    oldFormErrors: !0,
                    body: {},
                    rejectWithError: !1,
                });
            if (
                (null != c.body.join_request &&
                    s.h.dispatch({ type: "USER_GUILD_JOIN_REQUEST_UPDATE", guildId: e, request: c.body.join_request }),
                null == A.A.getGuild(e) && c.body.show_verification_form)
            )
                return (0, h.pX)(R.BVt.GUILD_MEMBER_VERIFICATION(e)), c;
            if (
                (null != c.body.welcome_screen &&
                    s.h.dispatch({
                        type: "WELCOME_SCREEN_UPDATE",
                        guildId: c.body.id,
                        welcomeScreen: c.body.welcome_screen,
                    }),
                null != c.body.approximate_presence_count &&
                    s.h.dispatch({
                        type: "ONLINE_GUILD_MEMBER_COUNT_UPDATE",
                        guildId: c.body.id,
                        count: c.body.approximate_presence_count,
                    }),
                !u)
            ) {
                let { default: t } = await Promise.resolve().then(n.bind(n, 967305));
                await t({ guildId: e, returnChannelId: l });
            }
            return c;
        } catch (t) {
            if (
                (t.body?.code === R.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                    (0, l.yO)(O.w_.JOIN_LARGE_GUILD_UNDERAGE),
                t.body?.code === R.t02.TOO_MANY_USER_GUILDS)
            ) {
                let e = y.default.getCurrentUser();
                C.Ay.canUseIncreasedGuildCap(e) || e?.isStaff() ? L(R.cZu) : L(R.qlD);
            }
            throw (
                (t.body?.code === R.t02.GUILD_AT_CAPACITY && x(), u && t.body?.code === R.t02.UNKNOWN_GUILD && w(e), t)
            );
        }
    },
    waitForGuild: P,
    async transitionToGuildSync(e, t, n, r) {
        let i = M((await P(e)).id, n),
            a = t;
        t?.hasOwnProperty("welcomeModalChannelId") &&
            null == t.welcomeModalChannelId &&
            (a = { ...t, welcomeModalChannelId: i ?? void 0 }),
            (0, d.A)(R.BVt.CHANNEL(e, i, r), a),
            await new Promise(setImmediate);
    },
    deleteGuild: w,
    selectGuild(e) {
        (0, _.j)(e);
    },
    createGuild(e) {
        s.h.dispatch({ type: "GUILD_CREATE", guild: e });
    },
    setServerMute: (e, t, n) =>
        a.Bo.patch({ url: R.Rsh.GUILD_MEMBER(e, t), body: { mute: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setServerDeaf: (e, t, n) =>
        a.Bo.patch({ url: R.Rsh.GUILD_MEMBER(e, t), body: { deaf: n }, oldFormErrors: !0, rejectWithError: !1 }),
    setChannel(e, t, n) {
        a.Bo.patch({ url: R.Rsh.GUILD_MEMBER(e, t), body: { channel_id: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    setMemberFlags(e, t, n) {
        a.Bo.patch({ url: R.Rsh.GUILD_MEMBER(e, t), body: { flags: n }, oldFormErrors: !0, rejectWithError: !0 });
    },
    kickUser: (e, t, n, r) =>
        a.Bo.del({
            url: R.Rsh.GUILD_MEMBER(e, t),
            query: { reason: n, moderator_report_id: r },
            oldFormErrors: !0,
            rejectWithError: !1,
        }).then(() => {
            s.h.dispatch({ type: "GUILD_MEMBER_REMOVE_LOCAL", guildId: e, userId: t });
        }),
    setCommunicationDisabledUntil(e) {
        let {
            guildId: t,
            userId: n,
            communicationDisabledUntilTimestamp: i,
            duration: a,
            reason: s,
            location: o,
            moderatorReportId: l,
        } = e;
        return b.A.patch({
            url: R.Rsh.GUILD_MEMBER(t, n),
            reason: s,
            body: { communication_disabled_until: i, moderator_report_id: l },
            oldFormErrors: !0,
            trackedActionData: {
                event: r.NetworkActionNames.USER_COMMUNICATION_DISABLED_UPDATE,
                properties: {
                    guild_id: t,
                    target_user_id: n,
                    duration: null != a ? a : null,
                    reason: null != s ? s : null,
                    communication_disabled_until: i,
                    location: null != o ? o : null,
                },
            },
            rejectWithError: !1,
        });
    },
    banUser: (e, t, n, r, i) =>
        a.Bo.put({
            url: R.Rsh.GUILD_BAN(e, t),
            reason: r,
            body: { delete_message_seconds: n, moderator_report_id: i },
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    unbanUser: (e, t) => a.Bo.del({ url: R.Rsh.GUILD_BAN(e, t), oldFormErrors: !0, rejectWithError: !1 }),
    banMultipleUsers: (e, t, n, r) =>
        a.Bo.post({
            url: R.Rsh.BULK_GUILD_BAN(e),
            body: { user_ids: t, delete_message_seconds: n },
            reason: r,
            oldFormErrors: !0,
            rejectWithError: !1,
        }),
    async createRole(e, t, n, r) {
        let l = {
            name: null != t && "" !== t ? t : D.intl.string(D.t.QBMHvB),
            color: n ?? 0,
            colors: r ?? { primary_color: n ?? 0, secondary_color: null, tertiary_color: null },
            permissions: v.x3,
        };
        try {
            let t = await a.Bo.post({ url: R.Rsh.GUILD_ROLES(e), oldFormErrors: !0, body: l, rejectWithError: !1 }),
                n = t.body;
            return (
                (n.permissions = i.iu(n.permissions)),
                s.h.dispatch({ type: "GUILD_SETTINGS_ROLE_SELECT", roleId: t.body.id, role: n }),
                c.A.checkGuildTemplateDirty(e),
                n
            );
        } catch (e) {
            throw new o.A(e);
        }
    },
    async updateRole(e, t, n) {
        let { icon: r, unicodeEmoji: i, ...s } = n,
            o = null === r || r?.startsWith("data:") ? r : void 0,
            l = await a.Bo.patch({
                url: R.Rsh.GUILD_ROLE(e, t),
                body: { ...s, icon: o, unicode_emoji: i },
                oldFormErrors: !0,
                rejectWithError: !1,
            });
        return c.A.checkGuildTemplateDirty(e), l;
    },
    updateRolePermissions: (e, t, n) =>
        a.Bo.patch({ url: R.Rsh.GUILD_ROLE(e, t), body: { permissions: n }, oldFormErrors: !0, rejectWithError: !1 }),
    deleteRole(e, t) {
        a.Bo.del({ url: R.Rsh.GUILD_ROLE(e, t), oldFormErrors: !0, rejectWithError: !0 }).then(() => {
            c.A.checkGuildTemplateDirty(e);
        });
    },
    async batchChannelUpdate(e, t) {
        let n = await a.Bo.patch({ url: R.Rsh.GUILD_CHANNELS(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return c.A.checkGuildTemplateDirty(e), n;
    },
    async batchRoleUpdate(e, t) {
        let n = await a.Bo.patch({ url: R.Rsh.GUILD_ROLES(e), body: t, oldFormErrors: !0, rejectWithError: !1 });
        return c.A.checkGuildTemplateDirty(e), n;
    },
    requestMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        return s.h.dispatch({
            type: "GUILD_MEMBERS_REQUEST",
            guildIds: Array.isArray(e) ? e : [e],
            query: t,
            limit: n,
            presences: r,
        });
    },
    searchRecentMembers(e, t) {
        let { query: n, continuationToken: r } = t ?? {};
        return s.h.dispatch({ type: "GUILD_SEARCH_RECENT_MEMBERS", guildId: e, query: n, continuationToken: r });
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
    move(e, t, n, r) {
        s.h.dispatch({ type: "GUILD_MOVE", fromIndex: e, toIndex: t, fromFolderIndex: n, toFolderIndex: r });
    },
    moveById(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (e === t)
            throw Error(`GuildActionCreators.moveById: \`sourceId\` and \`targetId\` cannot be the same value: ${e}`);
        s.h.dispatch({ type: "GUILD_MOVE_BY_ID", sourceId: e, targetId: t, moveToBelow: n, combine: r });
    },
    createGuildFolderLocal(e, t) {
        S.default.track(R.HAw.GUILD_FOLDER_CREATED),
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
        S.default.track(R.HAw.GUILD_FOLDER_CLICKED, { source: "sidebar", action: t ? "collapsed" : "expanded" }),
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
        if (null == e) return void (0, h.pX)(R.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 });
        let t = E.Ay.getDefaultChannel(e);
        null == t || (0, u.qR)(t)
            ? (0, h.pX)(R.BVt.FRIENDS, { navigationReplace: !1, openChannel: !0 })
            : (0, h.pX)(R.BVt.CHANNEL(e, t.id));
    },
    escapeToDefaultChannel(e) {
        let t = E.Ay.getDefaultChannel(e);
        null != t ? (0, h.pX)(R.BVt.CHANNEL(e, t.id)) : (0, h.pX)(R.BVt.FRIENDS);
    },
    async fetchApplications(e, t) {
        let n = { url: R.Rsh.GUILD_APPLICATIONS(e), oldFormErrors: !0, rejectWithError: !1 };
        null != t && (n.query = { channel_id: t });
        let r = (await a.Bo.get(n)).body;
        s.h.dispatch({ type: "GUILD_APPLICATIONS_FETCH_SUCCESS", guildId: e, applications: r });
    },
    async fetchGuildBansBatch(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            r = { limit: t };
        null != n && (r.after = n),
            await a.Bo.get({ url: R.Rsh.GUILD_BANS(e), oldFormErrors: !0, query: r, rejectWithError: !1 }).then((t) => {
                s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, guildId: e });
            });
    },
    async searchGuildBans(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10,
            i = { limit: r };
        null != n && n.length > 0 && (i.user_ids = n),
            null != t && t.trim().length > 0 && (i.query = t),
            await a.Bo.get({ url: R.Rsh.GUILD_BANS_SEARCH(e), oldFormErrors: !0, query: i, rejectWithError: !1 }).then(
                (t) => {
                    s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS_BATCH", bans: t.body, userIds: n, guildId: e });
                },
            );
    },
    async fetchGuildBans(e) {
        await a.Bo.get({ url: R.Rsh.GUILD_BANS(e), oldFormErrors: !0, rejectWithError: !1 }).then((e) => {
            s.h.dispatch({ type: "GUILD_SETTINGS_LOADED_BANS", bans: e.body });
        });
    },
    fetchGuildRoleConnectionsEligibility: (e, t) =>
        a.Bo.get({ url: R.Rsh.GUILD_ROLE_CONNECTIONS_ELIGIBILITY(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(
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
        await a.Bo.post({ url: R.Rsh.GUILD_ROLE_CONNECTIONS_ASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    async unassignGuildRoleConnection(e, t) {
        await a.Bo.post({ url: R.Rsh.GUILD_ROLE_CONNECTIONS_UNASSIGN(e, t), oldFormErrors: !0, rejectWithError: !1 });
    },
    getGuildRoleConnectionsConfigurations: async (e) =>
        (
            await a.Bo.get({
                url: R.Rsh.GUILD_ROLE_CONNECTIONS_CONFIGURATIONS(e),
                oldFormErrors: !0,
                rejectWithError: !1,
            })
        ).body,
};
