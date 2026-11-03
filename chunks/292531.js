(n.d(t, { A: () => F }), n(376728));
var i,
    r,
    a,
    s = n(439372);
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
var l = n(17928),
    o = n(73153),
    d = n(951217),
    c = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i),
    u =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.SINGLE = 1)] = "SINGLE"),
        (r[(r.MULTI = 2)] = "MULTI"),
        r),
    _ = (((a = {})[(a.JOINED = 1)] = "JOINED"), (a[(a.FAILED = 2)] = "FAILED"), a);
let E = new Map();
class A extends l.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return E.get(e) ?? null;
    }
    getInvites() {
        return E;
    }
}
let h = new A(o.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (E.get(t)?.state === c.RESOLVED) return !1;
        (E = new Map(E)).set(t, { code: t, state: c.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (E = new Map(E)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: c.RESOLVED,
                    inviterId: e.inviter_id,
                    accepted: e.accepted,
                    guildId: e.guild.id,
                    organization: (0, d.p)(t),
                    application: { id: n.id, name: n.name, iconUrl: n.icon_url },
                    displayNoun: i?.display_noun ?? null,
                    characterMode: i?.character_mode ?? u.SINGLE,
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
        if (E.get(t)?.state === c.RESOLVED) return !1;
        (E = new Map(E)).set(t, { code: t, state: c.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = E.get(t);
        if (n?.state !== c.RESOLVED) return !1;
        (E = new Map(E)).set(t, { ...n, accepted: !0 });
    },
});
var f = n(927813),
    I = n(636537),
    p = n(181658),
    m = n(652215);
let T = {
    async resolveGameOrganizationInvite(e) {
        if (o.h.isDispatching()) return (await Promise.resolve(), T.resolveGameOrganizationInvite(e));
        o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await I.Bo.get({ url: m.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new p.A(n);
            throw (
                o.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { code: t.code, message: t.message },
                }),
                n
            );
        }
    },
    async fetchInvitableGameOrganizations(e) {
        let { body: t } = await I.Bo.get({
            url: m.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
    async fetchCharacterEligibility(e) {
        let { body: t } = await I.Bo.get({ url: m.Rsh.GAME_ORGANIZATION_INVITE_CHARACTERS(e), rejectWithError: !0 });
        o.h.dispatch({
            type: "GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS",
            code: e,
            characters: t.characters,
        });
    },
    async acceptGameOrganizationInvite(e, t) {
        try {
            let { body: n } = await I.Bo.post({
                url: m.Rsh.GAME_ORGANIZATION_INVITE_JOIN(e),
                body: { character_id: t },
                rejectWithError: !0,
            });
            return (
                n.game_organization_join_status === _.JOINED &&
                    o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: e }),
                n
            );
        } catch (e) {
            throw new p.A(e);
        }
    },
};
((0, l.UT)(h, {
    getQueryId: m.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * f.A.Seconds.MINUTE,
    failureStaleAfter: 5 * f.A.Seconds.MINUTE,
    retryConfig: {
        retryableErrors: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
    get: (e) => {
        let t = h.getInvite(e);
        return t?.state === c.RESOLVED ? t : null;
    },
    load: async (e) => {
        await T.resolveGameOrganizationInvite(e);
    },
}),
    n(993748));
var g = n(292572),
    S = n(122906),
    N = n(128391),
    C = n(167189),
    O = n(254160),
    R = n(67480),
    L = n(733391),
    y = n(637893),
    D = n(227327);
let b = new Set();
function v(e, t) {
    b.has(e) ||
        (b.add(e),
        (0, O.f)(async () => {
            try {
                await t();
            } finally {
                b.delete(e);
            }
        }));
}
var P = n(168543),
    M = n(903209),
    U = n(734057);
n(299091);
var w = n(721779);
function G(e, t) {
    let n = (0, w.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case C.I.INVITE:
                    break;
                case C.I.TEMPLATE:
                    (0, O.f)(async () => {
                        null == S.A.getGuildTemplate(i) && (await g.A.resolveGuildTemplate(i));
                    });
                    break;
                case C.I.BUILD_OVERRIDE:
                case C.I.MANUAL_BUILD_OVERRIDE:
                case C.I.EVENT:
                case C.I.CHANNEL_LINK:
                case C.I.ACTIVITY_BOOKMARK:
                case C.I.EMBEDDED_ACTIVITY_INVITE:
                case C.I.GUILD_PRODUCT:
                case C.I.SERVER_SHOP:
                case C.I.QUESTS_EMBED:
                case C.I.APP_DIRECTORY_STOREFRONT:
                case C.I.APP_DIRECTORY_STOREFRONT_SKU:
                case C.I.APP_OAUTH2_LINK:
                case C.I.COLLECTIBLES_SHOP:
                case C.I.EXPERIMENT:
                case C.I.GAME_PROFILE:
                case C.I.GAME_SERVER_SHARE:
                    break;
                case C.I.USER_PROFILE:
                    if ((0, P.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : U.A.getChannel(t);
                        (0, O.f)(async () => {
                            await (0, M.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case C.I.GAME_ORGANIZATION_INVITE:
                    break;
                case C.I.SOCIAL_LAYER_STOREFRONT:
                case C.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, D.rg)(t);
                        if (null == n) return;
                        let i =
                            e === C.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, y.x)("resolveStorefrontCodedLink")) return;
                            v(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, L.ap)(i.applicationId, { eager: !1 })
                                    : await (0, L.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != R.A.get(r) ||
                            R.A.isFetching(r) ||
                            R.A.didFetchingSkuFail(r) ||
                            (o.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            v((0, D.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, L.Pp)(i.applicationId, r, e)
                                    : await (0, L.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case C.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function x(e) {
    (G(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return G(n.content, e.channel_id);
        }));
}
n(818348);
class k extends s.A {
    constructor() {
        (super(), (0, N.A)(this, x));
    }
}
let F = new k();
