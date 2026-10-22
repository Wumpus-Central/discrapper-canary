(n.d(t, { A: () => U }), n(376728));
var i,
    r = n(439372);
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
var a = n(17928),
    s = n(73153),
    l = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i);
let o = new Map();
class d extends a.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return o.get(e) ?? null;
    }
    getInvites() {
        return o;
    }
}
let c = new d(s.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (o.get(t)?.state === l.RESOLVED) return !1;
        (o = new Map(o)).set(t, { code: t, state: l.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (o = new Map(o)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i } = e;
                return {
                    code: e.code,
                    state: l.RESOLVED,
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
                };
            })(n),
        );
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        if (o.get(t)?.state === l.RESOLVED) return !1;
        (o = new Map(o)).set(t, { code: t, state: l.ERROR, error: n });
    },
});
var u = n(927813),
    _ = n(636537),
    E = n(181658),
    A = n(652215);
let h = {
    async resolveGameOrganizationInvite(e) {
        if (s.h.isDispatching()) return (await Promise.resolve(), h.resolveGameOrganizationInvite(e));
        s.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await _.Bo.get({ url: A.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            s.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new E.A(n);
            throw (
                s.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { code: t.code, message: t.message },
                }),
                n
            );
        }
    },
    async fetchInvitableGameOrganizations(e) {
        let { body: t } = await _.Bo.get({
            url: A.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        s.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
};
((0, a.UT)(c, {
    getQueryId: A.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * u.A.Seconds.MINUTE,
    failureStaleAfter: 5 * u.A.Seconds.MINUTE,
    retryConfig: {
        retryableErrors: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
    get: (e) => {
        let t = c.getInvite(e);
        return t?.state === l.RESOLVED ? t : null;
    },
    load: async (e) => {
        await h.resolveGameOrganizationInvite(e);
    },
}),
    n(993748));
var f = n(292572),
    I = n(122906),
    p = n(128391),
    T = n(167189),
    m = n(254160),
    g = n(67480),
    S = n(733391),
    N = n(637893),
    C = n(227327);
let O = new Set();
function R(e, t) {
    O.has(e) ||
        (O.add(e),
        (0, m.f)(async () => {
            try {
                await t();
            } finally {
                O.delete(e);
            }
        }));
}
var L = n(168543),
    y = n(903209),
    D = n(734057);
n(299091);
var v = n(721779);
function b(e, t) {
    let n = (0, v.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case T.I.INVITE:
                    break;
                case T.I.TEMPLATE:
                    (0, m.f)(async () => {
                        null == I.A.getGuildTemplate(i) && (await f.A.resolveGuildTemplate(i));
                    });
                    break;
                case T.I.BUILD_OVERRIDE:
                case T.I.MANUAL_BUILD_OVERRIDE:
                case T.I.EVENT:
                case T.I.CHANNEL_LINK:
                case T.I.ACTIVITY_BOOKMARK:
                case T.I.EMBEDDED_ACTIVITY_INVITE:
                case T.I.GUILD_PRODUCT:
                case T.I.SERVER_SHOP:
                case T.I.QUESTS_EMBED:
                case T.I.APP_DIRECTORY_STOREFRONT:
                case T.I.APP_DIRECTORY_STOREFRONT_SKU:
                case T.I.APP_OAUTH2_LINK:
                case T.I.COLLECTIBLES_SHOP:
                case T.I.EXPERIMENT:
                case T.I.GAME_PROFILE:
                case T.I.GAME_SERVER_SHARE:
                    break;
                case T.I.USER_PROFILE:
                    if ((0, L.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : D.A.getChannel(t);
                        (0, m.f)(async () => {
                            await (0, y.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case T.I.GAME_ORGANIZATION_INVITE:
                    break;
                case T.I.SOCIAL_LAYER_STOREFRONT:
                case T.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, C.rg)(t);
                        if (null == n) return;
                        let i =
                            e === T.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, N.x)("resolveStorefrontCodedLink")) return;
                            R(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, S.ap)(i.applicationId, { eager: !1 })
                                    : await (0, S.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != g.A.get(r) ||
                            g.A.isFetching(r) ||
                            g.A.didFetchingSkuFail(r) ||
                            (s.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            R((0, C.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, S.Pp)(i.applicationId, r, e)
                                    : await (0, S.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case T.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function M(e) {
    (b(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return b(n.content, e.channel_id);
        }));
}
n(818348);
class P extends r.A {
    constructor() {
        (super(), (0, p.A)(this, M));
    }
}
let U = new P();
