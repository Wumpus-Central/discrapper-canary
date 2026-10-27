(n.d(t, { A: () => G }), n(376728));
var i,
    r,
    a = n(439372);
((0, n(945810).mj)({
    kind: "user",
    name: "2026-09-linked-game-org-invites-dev",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
}),
    n(975460),
    n(627363),
    n(587895),
    n(712440),
    n(733110));
var s = n(17928),
    l = n(73153),
    o = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i),
    d = (((r = {})[(r.JOINED = 1)] = "JOINED"), (r[(r.FAILED = 2)] = "FAILED"), r);
let c = new Map();
class u extends s.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return c.get(e) ?? null;
    }
    getInvites() {
        return c;
    }
}
let _ = new u(l.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (c.get(t)?.state === o.RESOLVED) return !1;
        (c = new Map(c)).set(t, { code: t, state: o.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (c = new Map(c)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: o.RESOLVED,
                    inviterId: e.inviter_id,
                    accepted: e.accepted,
                    guildId: e.guild.id,
                    organization: {
                        id: t.game_organization_id,
                        name: t.name,
                        description: t.description,
                        iconUrl: t.icon_url,
                        applicationId: t.application_id,
                        memberCount: t.member_count,
                        maxMembers: t.max_members,
                    },
                    application: { id: n.id, name: n.name, iconUrl: n.icon_url },
                    displayNoun: i?.display_noun ?? null,
                    linkedGuild: {
                        id: r.id,
                        name: r.name,
                        icon: r.icon,
                        memberCount: r.approximate_member_count,
                        presenceCount: r.approximate_presence_count,
                    },
                };
            })(n),
        );
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        if (c.get(t)?.state === o.RESOLVED) return !1;
        (c = new Map(c)).set(t, { code: t, state: o.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = c.get(t);
        if (n?.state !== o.RESOLVED) return !1;
        (c = new Map(c)).set(t, { ...n, accepted: !0 });
    },
});
var E = n(927813),
    A = n(636537),
    h = n(181658),
    f = n(652215);
let I = {
    async resolveGameOrganizationInvite(e) {
        if (l.h.isDispatching()) return (await Promise.resolve(), I.resolveGameOrganizationInvite(e));
        l.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await A.Bo.get({ url: f.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            l.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new h.A(n);
            throw (
                l.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { code: t.code, message: t.message },
                }),
                n
            );
        }
    },
    async fetchInvitableGameOrganizations(e) {
        let { body: t } = await A.Bo.get({
            url: f.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        l.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
    async acceptGameOrganizationInvite(e, t) {
        try {
            let { body: n } = await A.Bo.post({
                url: f.Rsh.GAME_ORGANIZATION_INVITE_JOIN(e),
                body: { character_id: t },
                rejectWithError: !0,
            });
            return (
                n.game_organization_join_status === d.JOINED &&
                    l.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: e }),
                n
            );
        } catch (e) {
            throw new h.A(e);
        }
    },
};
((0, s.UT)(_, {
    getQueryId: f.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * E.A.Seconds.MINUTE,
    failureStaleAfter: 5 * E.A.Seconds.MINUTE,
    retryConfig: {
        retryableErrors: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
    get: (e) => {
        let t = _.getInvite(e);
        return t?.state === o.RESOLVED ? t : null;
    },
    load: async (e) => {
        await I.resolveGameOrganizationInvite(e);
    },
}),
    n(993748));
var p = n(292572),
    T = n(122906),
    m = n(128391),
    g = n(167189),
    S = n(254160),
    N = n(67480),
    C = n(733391),
    O = n(637893),
    R = n(227327);
let L = new Set();
function y(e, t) {
    L.has(e) ||
        (L.add(e),
        (0, S.f)(async () => {
            try {
                await t();
            } finally {
                L.delete(e);
            }
        }));
}
var D = n(168543),
    v = n(903209),
    b = n(734057);
n(299091);
var M = n(721779);
function P(e, t) {
    let n = (0, M.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case g.I.INVITE:
                    break;
                case g.I.TEMPLATE:
                    (0, S.f)(async () => {
                        null == T.A.getGuildTemplate(i) && (await p.A.resolveGuildTemplate(i));
                    });
                    break;
                case g.I.BUILD_OVERRIDE:
                case g.I.MANUAL_BUILD_OVERRIDE:
                case g.I.EVENT:
                case g.I.CHANNEL_LINK:
                case g.I.ACTIVITY_BOOKMARK:
                case g.I.EMBEDDED_ACTIVITY_INVITE:
                case g.I.GUILD_PRODUCT:
                case g.I.SERVER_SHOP:
                case g.I.QUESTS_EMBED:
                case g.I.APP_DIRECTORY_STOREFRONT:
                case g.I.APP_DIRECTORY_STOREFRONT_SKU:
                case g.I.APP_OAUTH2_LINK:
                case g.I.COLLECTIBLES_SHOP:
                case g.I.EXPERIMENT:
                case g.I.GAME_PROFILE:
                case g.I.GAME_SERVER_SHARE:
                    break;
                case g.I.USER_PROFILE:
                    if ((0, D.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : b.A.getChannel(t);
                        (0, S.f)(async () => {
                            await (0, v.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case g.I.GAME_ORGANIZATION_INVITE:
                    break;
                case g.I.SOCIAL_LAYER_STOREFRONT:
                case g.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, R.rg)(t);
                        if (null == n) return;
                        let i =
                            e === g.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, O.x)("resolveStorefrontCodedLink")) return;
                            y(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, C.ap)(i.applicationId, { eager: !1 })
                                    : await (0, C.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != N.A.get(r) ||
                            N.A.isFetching(r) ||
                            N.A.didFetchingSkuFail(r) ||
                            (l.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            y((0, R.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, C.Pp)(i.applicationId, r, e)
                                    : await (0, C.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case g.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function U(e) {
    (P(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return P(n.content, e.channel_id);
        }));
}
n(818348);
class w extends a.A {
    constructor() {
        (super(), (0, m.A)(this, U));
    }
}
let G = new w();
