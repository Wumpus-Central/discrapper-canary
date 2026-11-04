(n.d(t, { A: () => w }), n(574332));
var i = n(439372);
(n(372058), n(975460), n(627363), n(587895), n(712440), n(733110));
var r = n(855986),
    a = n(73153),
    s = n(951217),
    l = n(653868),
    o = n(673383);
let d = new Map();
class c extends r.Ay.Store {
    static displayName = "GameOrganizationInviteStore";
    getInvite(e) {
        return d.get(e) ?? null;
    }
    getInvites() {
        return d;
    }
}
let u = new c(a.h, {
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
});
var _ = n(927813),
    E = n(664947),
    A = n(489452),
    h = n(652215);
((0, r.UT)(u, {
    getQueryId: h.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * _.A.Seconds.MINUTE,
    failureStaleAfter: 5 * _.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: A.A },
    get: (e) => {
        let t = u.getInvite(e);
        return t?.state === o.Zb.RESOLVED ? t : null;
    },
    load: async (e) => {
        await E.A.resolveGameOrganizationInvite(e);
    },
}),
    n(503406));
var f = n(292572),
    I = n(122906),
    p = n(128391),
    m = n(167189),
    T = n(254160),
    g = n(67480),
    S = n(733391),
    N = n(945810);
((0, N.mj)({
    name: "2026-08-social-layer-storefront-mobile-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    (0, N.mj)({
        name: "2026-10-social-layer-storefront-mobile-multi-sku-embed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }));
var C = n(637893),
    O = n(227327);
let R = new Set();
function L(e, t) {
    R.has(e) ||
        (R.add(e),
        (0, T.f)(async () => {
            try {
                await t();
            } finally {
                R.delete(e);
            }
        }));
}
var y = n(168543),
    D = n(917445),
    b = n(734057);
n(299091);
var v = n(486889);
function P(e, t) {
    let n = (0, v.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case m.I.INVITE:
                    break;
                case m.I.TEMPLATE:
                    (0, T.f)(async () => {
                        null == I.A.getGuildTemplate(i) && (await f.A.resolveGuildTemplate(i));
                    });
                    break;
                case m.I.BUILD_OVERRIDE:
                case m.I.MANUAL_BUILD_OVERRIDE:
                case m.I.EVENT:
                case m.I.CHANNEL_LINK:
                case m.I.ACTIVITY_BOOKMARK:
                case m.I.EMBEDDED_ACTIVITY_INVITE:
                case m.I.GUILD_PRODUCT:
                case m.I.SERVER_SHOP:
                case m.I.QUESTS_EMBED:
                case m.I.APP_DIRECTORY_STOREFRONT:
                case m.I.APP_DIRECTORY_STOREFRONT_SKU:
                case m.I.APP_OAUTH2_LINK:
                case m.I.COLLECTIBLES_SHOP:
                case m.I.EXPERIMENT:
                case m.I.GAME_PROFILE:
                case m.I.GAME_SERVER_SHARE:
                    break;
                case m.I.USER_PROFILE:
                    if ((0, y.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : b.A.getChannel(t);
                        (0, T.f)(async () => {
                            await (0, D.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case m.I.GAME_ORGANIZATION_INVITE:
                    break;
                case m.I.SOCIAL_LAYER_STOREFRONT:
                case m.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, O.rg)(t);
                        if (null == n) return;
                        let i =
                            e === m.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, C.x)("resolveStorefrontCodedLink")) return;
                            L(`${e}:${n.scopeId}`, async () => {
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
                            (a.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            L((0, O.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, S.Pp)(i.applicationId, r, e)
                                    : await (0, S.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case m.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function M(e) {
    (P(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return P(n.content, e.channel_id);
        }));
}
n(818348);
class U extends i.A {
    constructor() {
        (super(), (0, p.A)(this, M));
    }
}
let w = new U();
