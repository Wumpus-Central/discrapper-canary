(n.d(t, { A: () => F }), n(574332));
var i = n(439372),
    r = n(372058),
    a = n(975460),
    s = n(627363),
    l = n(587895),
    o = n(712440),
    d = n(733110),
    c = n(580583),
    u = n(673383),
    _ = n(855986),
    E = n(927813),
    A = n(664947),
    f = n(489452),
    h = n(652215);
let I = (0, _.UT)(c.A, {
    getQueryId: h.fic.GAME_ORGANIZATION_INVITE,
    staleAfter: 5 * E.A.Seconds.MINUTE,
    failureStaleAfter: 5 * E.A.Seconds.MINUTE,
    retryConfig: { retryableErrors: f.A },
    get: (e) => {
        let t = c.A.getInvite(e);
        return t?.state === u.Zb.RESOLVED ? t : null;
    },
    load: async (e) => {
        await A.A.resolveGameOrganizationInvite(e);
    },
});
n(503406);
var p = n(292572),
    m = n(122906),
    T = n(128391),
    g = n(73153),
    S = n(167189),
    N = n(254160),
    C = n(67480),
    O = n(733391),
    R = n(945810);
((0, R.mj)({
    name: "2026-08-social-layer-storefront-mobile-embed",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
}),
    (0, R.mj)({
        name: "2026-10-social-layer-storefront-mobile-multi-sku-embed",
        kind: "user",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }));
var L = n(637893),
    y = n(227327);
let D = new Set();
function b(e, t) {
    D.has(e) ||
        (D.add(e),
        (0, N.f)(async () => {
            try {
                await t();
            } finally {
                D.delete(e);
            }
        }));
}
var v = n(168543),
    P = n(917445),
    M = n(734057);
n(299091);
var U = n(486889),
    w = n(818348);
function G(e, t) {
    let n = (0, U.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case S.I.INVITE:
                    break;
                case S.I.TEMPLATE:
                    (0, N.f)(async () => {
                        null == m.A.getGuildTemplate(i) && (await p.A.resolveGuildTemplate(i));
                    });
                    break;
                case S.I.BUILD_OVERRIDE:
                case S.I.MANUAL_BUILD_OVERRIDE:
                case S.I.EVENT:
                case S.I.CHANNEL_LINK:
                case S.I.ACTIVITY_BOOKMARK:
                case S.I.EMBEDDED_ACTIVITY_INVITE:
                case S.I.GUILD_PRODUCT:
                case S.I.SERVER_SHOP:
                case S.I.QUESTS_EMBED:
                case S.I.APP_DIRECTORY_STOREFRONT:
                case S.I.APP_DIRECTORY_STOREFRONT_SKU:
                case S.I.APP_OAUTH2_LINK:
                case S.I.COLLECTIBLES_SHOP:
                case S.I.EXPERIMENT:
                case S.I.GAME_PROFILE:
                case S.I.GAME_SERVER_SHARE:
                case S.I.CONJURE_PROJECT:
                    break;
                case S.I.USER_PROFILE:
                    if ((0, v.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : M.A.getChannel(t);
                        (0, N.f)(async () => {
                            await (0, P.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case S.I.GAME_ORGANIZATION_INVITE:
                    (0, r.bz)("MessageCodedLinkManager") &&
                        (0, N.f)(async () => {
                            (await I.fetchMany([i]),
                                (async function (e) {
                                    let t = c.A.getInvite(e);
                                    if (t?.state !== u.Zb.RESOLVED) return;
                                    let n = t.application.id;
                                    try {
                                        await s.Ay.fetchApplications([n], !1);
                                    } catch {
                                        return;
                                    }
                                    let i = (0, a.t)(l.A.getApplication(n));
                                    if (null == i) return;
                                    let r = i.parentId ?? i.id;
                                    d.A.getFetchStateForApplication(r) === d.FetchState.NOT_FETCHED && o.A.fetch([r]);
                                })(i).catch(w.tE));
                        });
                    break;
                case S.I.SOCIAL_LAYER_STOREFRONT:
                case S.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, y.rg)(t);
                        if (null == n) return;
                        let i =
                            e === S.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1) {
                            if (!(0, L.x)("resolveStorefrontCodedLink")) return;
                            b(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, O.ap)(i.applicationId, { eager: !1 })
                                    : await (0, O.Rw)(i.guildId, { eager: !1 });
                            });
                            return;
                        }
                        let [r] = n.skuIds;
                        null != C.A.get(r) ||
                            C.A.isFetching(r) ||
                            C.A.didFetchingSkuFail(r) ||
                            (g.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            b((0, y.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, O.Pp)(i.applicationId, r, e)
                                    : await (0, O.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case S.I.APP_DIRECTORY_PROFILE:
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
class k extends i.A {
    constructor() {
        (super(), (0, T.A)(this, x));
    }
}
let F = new k();
