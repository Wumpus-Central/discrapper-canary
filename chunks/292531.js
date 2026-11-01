(n.d(t, { A: () => k }), n(376728));
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
    d = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i),
    c =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.SINGLE = 1)] = "SINGLE"),
        (r[(r.MULTI = 2)] = "MULTI"),
        r),
    u = (((a = {})[(a.JOINED = 1)] = "JOINED"), (a[(a.FAILED = 2)] = "FAILED"), a);
let _ = new Map();
class E extends l.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return _.get(e) ?? null;
    }
    getInvites() {
        return _;
    }
}
let A = new E(o.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (_.get(t)?.state === d.RESOLVED) return !1;
        (_ = new Map(_)).set(t, { code: t, state: d.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (_ = new Map(_)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: d.RESOLVED,
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
                    characterMode: i?.character_mode ?? c.SINGLE,
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
        if (_.get(t)?.state === d.RESOLVED) return !1;
        (_ = new Map(_)).set(t, { code: t, state: d.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = _.get(t);
        if (n?.state !== d.RESOLVED) return !1;
        (_ = new Map(_)).set(t, { ...n, accepted: !0 });
    },
});
var h = n(927813),
    f = n(636537),
    I = n(181658),
    p = n(652215);
let T = {
    async resolveGameOrganizationInvite(e) {
        if (o.h.isDispatching()) return (await Promise.resolve(), T.resolveGameOrganizationInvite(e));
        o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await f.Bo.get({ url: p.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new I.A(n);
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
        let { body: t } = await f.Bo.get({
            url: p.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        o.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
    async fetchCharacterEligibility(e) {
        let { body: t } = await f.Bo.get({ url: p.Rsh.GAME_ORGANIZATION_INVITE_CHARACTERS(e), rejectWithError: !0 });
        o.h.dispatch({
            type: "GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS",
            code: e,
            characters: t.characters,
        });
    },
    async acceptGameOrganizationInvite(e, t) {
        try {
            let { body: n } = await f.Bo.post({
                url: p.Rsh.GAME_ORGANIZATION_INVITE_JOIN(e),
                body: { character_id: t },
                rejectWithError: !0,
            });
            return (
                n.game_organization_join_status === u.JOINED &&
                    o.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: e }),
                n
            );
        } catch (e) {
            throw new I.A(e);
        }
    },
};
((0, l.UT)(A, {
    getQueryId: p.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * h.A.Seconds.MINUTE,
    failureStaleAfter: 5 * h.A.Seconds.MINUTE,
    retryConfig: {
        retryableErrors: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
    get: (e) => {
        let t = A.getInvite(e);
        return t?.state === d.RESOLVED ? t : null;
    },
    load: async (e) => {
        await T.resolveGameOrganizationInvite(e);
    },
}),
    n(993748));
var m = n(292572),
    g = n(122906),
    S = n(128391),
    N = n(167189),
    C = n(254160),
    O = n(67480),
    R = n(733391),
    L = n(637893),
    y = n(227327);
let D = new Set();
function v(e, t) {
    D.has(e) ||
        (D.add(e),
        (0, C.f)(async () => {
            try {
                await t();
            } finally {
                D.delete(e);
            }
        }));
}
var b = n(168543),
    P = n(903209),
    M = n(734057);
n(299091);
var U = n(721779);
function w(e, t) {
    let n = (0, U.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case N.I.INVITE:
                    break;
                case N.I.TEMPLATE:
                    (0, C.f)(async () => {
                        null == g.A.getGuildTemplate(i) && (await m.A.resolveGuildTemplate(i));
                    });
                    break;
                case N.I.BUILD_OVERRIDE:
                case N.I.MANUAL_BUILD_OVERRIDE:
                case N.I.EVENT:
                case N.I.CHANNEL_LINK:
                case N.I.ACTIVITY_BOOKMARK:
                case N.I.EMBEDDED_ACTIVITY_INVITE:
                case N.I.GUILD_PRODUCT:
                case N.I.SERVER_SHOP:
                case N.I.QUESTS_EMBED:
                case N.I.APP_DIRECTORY_STOREFRONT:
                case N.I.APP_DIRECTORY_STOREFRONT_SKU:
                case N.I.APP_OAUTH2_LINK:
                case N.I.COLLECTIBLES_SHOP:
                case N.I.EXPERIMENT:
                case N.I.GAME_PROFILE:
                case N.I.GAME_SERVER_SHARE:
                    break;
                case N.I.USER_PROFILE:
                    if ((0, b.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : M.A.getChannel(t);
                        (0, C.f)(async () => {
                            await (0, P.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case N.I.GAME_ORGANIZATION_INVITE:
                    break;
                case N.I.SOCIAL_LAYER_STOREFRONT:
                case N.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, y.rg)(t);
                        if (null == n) return;
                        let i =
                            e === N.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, L.x)("resolveStorefrontCodedLink")) return;
                            v(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, R.ap)(i.applicationId, { eager: !1 })
                                    : await (0, R.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != O.A.get(r) ||
                            O.A.isFetching(r) ||
                            O.A.didFetchingSkuFail(r) ||
                            (o.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            v((0, y.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, R.Pp)(i.applicationId, r, e)
                                    : await (0, R.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case N.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function G(e) {
    (w(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return w(n.content, e.channel_id);
        }));
}
n(818348);
class x extends s.A {
    constructor() {
        (super(), (0, S.A)(this, G));
    }
}
let k = new x();
