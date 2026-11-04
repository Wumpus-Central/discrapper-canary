(n.d(t, { A: () => B }), n(574332));
var i,
    r,
    a,
    s = n(439372),
    l = n(945810);
((0, l.mj)({
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
var o = n(855986),
    d = n(73153),
    c = n(951217),
    u = (((i = {}).RESOLVING = "RESOLVING"), (i.RESOLVED = "RESOLVED"), (i.ERROR = "ERROR"), i),
    _ =
        (((r = {})[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.SINGLE = 1)] = "SINGLE"),
        (r[(r.MULTI = 2)] = "MULTI"),
        r),
    E = (((a = {})[(a.JOINED = 1)] = "JOINED"), (a[(a.FAILED = 2)] = "FAILED"), a);
let A = new Map();
class h extends o.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return A.get(e) ?? null;
    }
    getInvites() {
        return A;
    }
}
let f = new h(d.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (A.get(t)?.state === u.RESOLVED) return !1;
        (A = new Map(A)).set(t, { code: t, state: u.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (A = new Map(A)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: u.RESOLVED,
                    inviterId: e.inviter_id,
                    accepted: e.accepted,
                    guildId: e.guild.id,
                    organization: (0, c.p)(t),
                    application: { id: n.id, name: n.name, iconUrl: n.icon_url },
                    displayNoun: i?.display_noun ?? null,
                    characterMode: i?.character_mode ?? _.SINGLE,
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
        if (A.get(t)?.state === u.RESOLVED) return !1;
        (A = new Map(A)).set(t, { code: t, state: u.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = A.get(t);
        if (n?.state !== u.RESOLVED) return !1;
        (A = new Map(A)).set(t, { ...n, accepted: !0 });
    },
});
var I = n(927813),
    p = n(620632),
    m = n(181658),
    T = n(652215);
let g = {
    async resolveGameOrganizationInvite(e) {
        if (d.h.isDispatching()) return (await Promise.resolve(), g.resolveGameOrganizationInvite(e));
        d.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE", code: e });
        try {
            let { body: t } = await p.Bo.get({ url: T.Rsh.GAME_ORGANIZATION_INVITE(e), rejectWithError: !0 });
            d.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: e, invite: t });
        } catch (n) {
            let t = new m.A(n);
            throw (
                d.h.dispatch({
                    type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE",
                    code: e,
                    error: { code: t.code, message: t.message },
                }),
                n
            );
        }
    },
    async fetchInvitableGameOrganizations(e) {
        let { body: t } = await p.Bo.get({
            url: T.Rsh.GAME_ORGANIZATIONS_INVITABLE,
            query: { guild_ids: e },
            rejectWithError: !0,
        });
        d.h.dispatch({ type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: e, gameOrganizations: t });
    },
    async fetchCharacterEligibility(e) {
        let { body: t } = await p.Bo.get({ url: T.Rsh.GAME_ORGANIZATION_INVITE_CHARACTERS(e), rejectWithError: !0 });
        d.h.dispatch({
            type: "GAME_ORGANIZATION_CHARACTER_ELIGIBILITY_FETCH_SUCCESS",
            code: e,
            characters: t.characters,
        });
    },
    async acceptGameOrganizationInvite(e, t) {
        try {
            let { body: n } = await p.Bo.post({
                url: T.Rsh.GAME_ORGANIZATION_INVITE_JOIN(e),
                body: { character_id: t },
                rejectWithError: !0,
            });
            return (
                n.game_organization_join_status === E.JOINED &&
                    d.h.dispatch({ type: "GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS", code: e }),
                n
            );
        } catch (e) {
            throw new m.A(e);
        }
    },
};
((0, o.UT)(f, {
    getQueryId: T.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * I.A.Seconds.MINUTE,
    failureStaleAfter: 5 * I.A.Seconds.MINUTE,
    retryConfig: {
        retryableErrors: function (e) {
            let t = e.status;
            return null != t && (429 === t || (t >= 500 && 503 !== t));
        },
    },
    get: (e) => {
        let t = f.getInvite(e);
        return t?.state === u.RESOLVED ? t : null;
    },
    load: async (e) => {
        await g.resolveGameOrganizationInvite(e);
    },
}),
    n(503406));
var S = n(292572),
    N = n(122906),
    C = n(128391),
    O = n(167189),
    R = n(254160),
    L = n(67480),
    y = n(733391);
((0, l.mj)({
    name: "2026-08-social-layer-storefront-mobile-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    (0, l.mj)({
        name: "2026-10-social-layer-storefront-mobile-multi-sku-embed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }));
var D = n(637893),
    b = n(227327);
let v = new Set();
function P(e, t) {
    v.has(e) ||
        (v.add(e),
        (0, R.f)(async () => {
            try {
                await t();
            } finally {
                v.delete(e);
            }
        }));
}
var M = n(168543),
    U = n(917445),
    w = n(734057);
n(299091);
var G = n(486889);
function x(e, t) {
    let n = (0, G.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case O.I.INVITE:
                    break;
                case O.I.TEMPLATE:
                    (0, R.f)(async () => {
                        null == N.A.getGuildTemplate(i) && (await S.A.resolveGuildTemplate(i));
                    });
                    break;
                case O.I.BUILD_OVERRIDE:
                case O.I.MANUAL_BUILD_OVERRIDE:
                case O.I.EVENT:
                case O.I.CHANNEL_LINK:
                case O.I.ACTIVITY_BOOKMARK:
                case O.I.EMBEDDED_ACTIVITY_INVITE:
                case O.I.GUILD_PRODUCT:
                case O.I.SERVER_SHOP:
                case O.I.QUESTS_EMBED:
                case O.I.APP_DIRECTORY_STOREFRONT:
                case O.I.APP_DIRECTORY_STOREFRONT_SKU:
                case O.I.APP_OAUTH2_LINK:
                case O.I.COLLECTIBLES_SHOP:
                case O.I.EXPERIMENT:
                case O.I.GAME_PROFILE:
                case O.I.GAME_SERVER_SHARE:
                    break;
                case O.I.USER_PROFILE:
                    if ((0, M.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : w.A.getChannel(t);
                        (0, R.f)(async () => {
                            await (0, U.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case O.I.GAME_ORGANIZATION_INVITE:
                    break;
                case O.I.SOCIAL_LAYER_STOREFRONT:
                case O.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, b.rg)(t);
                        if (null == n) return;
                        let i =
                            e === O.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, D.x)("resolveStorefrontCodedLink")) return;
                            P(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, y.ap)(i.applicationId, { eager: !1 })
                                    : await (0, y.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != L.A.get(r) ||
                            L.A.isFetching(r) ||
                            L.A.didFetchingSkuFail(r) ||
                            (d.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            P((0, b.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, y.Pp)(i.applicationId, r, e)
                                    : await (0, y.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case O.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function k(e) {
    (x(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return x(n.content, e.channel_id);
        }));
}
n(818348);
class F extends s.A {
    constructor() {
        (super(), (0, C.A)(this, k));
    }
}
let B = new F();
