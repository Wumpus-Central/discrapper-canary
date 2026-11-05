(n.d(t, { A: () => G }), n(574332));
var i = n(439372);
(n(372058), n(975460), n(627363), n(587895), n(712440), n(733110));
var r = n(855986),
    a = n(73153),
    s = n(951217),
    l = n(653868),
    o = n(673383);
let d = new Map(),
    c = new Set();
class u extends r.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return d.get(e) ?? null;
    }
    getInvites() {
        return d;
    }
    isJoinFlowPending(e) {
        return c.has(e);
    }
    getPendingJoinFlowCodes() {
        return c;
    }
}
let _ = new u(a.h, {
    GAME_ORGANIZATION_INVITE_RESOLVE: function (e) {
        let { code: t } = e;
        if (d.get(t)?.state === o.Zb.RESOLVED) return !1;
        (d = new Map(d)).set(t, { code: t, state: o.Zb.RESOLVING });
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS: function (e) {
        let { code: t, invite: n } = e;
        (d = new Map(d)).set(
            t,
            (function (e) {
                let { game_organization: t, application: n, application_config: i, guild: r } = e;
                return {
                    code: e.code,
                    state: o.Zb.RESOLVED,
                    inviterId: e.inviter_id,
                    accepted: e.accepted,
                    guildId: e.guild.id,
                    organization: (0, s.p)(t),
                    application: (0, l.Xw)(n),
                    displayNoun: i?.display_noun ?? null,
                    characterMode: i?.character_mode ?? o.Wy.SINGLE,
                    linkedGuild: (0, l.y1)(r),
                };
            })(n),
        );
    },
    GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE: function (e) {
        let { code: t, error: n } = e;
        if (d.get(t)?.state === o.Zb.RESOLVED) return !1;
        (d = new Map(d)).set(t, { code: t, state: o.Zb.ERROR, error: n });
    },
    GAME_ORGANIZATION_INVITE_ACCEPT_SUCCESS: function (e) {
        let { code: t } = e,
            n = d.get(t);
        if (n?.state !== o.Zb.RESOLVED) return !1;
        (d = new Map(d)).set(t, { ...n, accepted: !0 });
    },
    GAME_ORGANIZATION_JOIN_FLOW_PENDING: function (e) {
        let { code: t, pending: n } = e;
        if (c.has(t) === n) return !1;
        let i = new Set(c);
        (n ? i.add(t) : i.delete(t), (c = i));
    },
});
var E = n(927813),
    A = n(664947),
    h = n(489452),
    f = n(652215);
((0, r.UT)(_, {
    getQueryId: f.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * E.A.Seconds.MINUTE,
    failureStaleAfter: 5 * E.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: h.A },
    get: (e) => {
        let t = _.getInvite(e);
        return t?.state === o.Zb.RESOLVED ? t : null;
    },
    load: async (e) => {
        await A.A.resolveGameOrganizationInvite(e);
    },
}),
    n(503406));
var I = n(292572),
    p = n(122906),
    m = n(128391),
    g = n(167189),
    T = n(254160),
    S = n(67480),
    N = n(733391),
    C = n(945810);
((0, C.mj)({
    name: "2026-08-social-layer-storefront-mobile-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    (0, C.mj)({
        name: "2026-10-social-layer-storefront-mobile-multi-sku-embed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }));
var O = n(637893),
    R = n(227327);
let L = new Set();
function y(e, t) {
    L.has(e) ||
        (L.add(e),
        (0, T.f)(async () => {
            try {
                await t();
            } finally {
                L.delete(e);
            }
        }));
}
var D = n(168543),
    b = n(917445),
    v = n(734057);
n(299091);
var P = n(486889);
function M(e, t) {
    let n = (0, P.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case g.I.INVITE:
                    break;
                case g.I.TEMPLATE:
                    (0, T.f)(async () => {
                        null == p.A.getGuildTemplate(i) && (await I.A.resolveGuildTemplate(i));
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
                        let e = null == t ? null : v.A.getChannel(t);
                        (0, T.f)(async () => {
                            await (0, b.A)(i, void 0, {
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
                                    ? await (0, N.ap)(i.applicationId, { eager: !1 })
                                    : await (0, N.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != S.A.get(r) ||
                            S.A.isFetching(r) ||
                            S.A.didFetchingSkuFail(r) ||
                            (a.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            y((0, R.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, N.Pp)(i.applicationId, r, e)
                                    : await (0, N.qf)(i.guildId, r, e);
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
    (M(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return M(n.content, e.channel_id);
        }));
}
n(818348);
class w extends i.A {
    constructor() {
        (super(), (0, m.A)(this, U));
    }
}
let G = new w();
