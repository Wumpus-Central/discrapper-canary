(n.d(t, { A: () => S }), n(376728));
var i = n(439372);
n(993748);
var r = n(292572),
    a = n(122906),
    s = n(128391),
    l = n(228366),
    o = n(167189),
    d = n(254160),
    c = n(67480),
    u = n(733391),
    _ = n(227327);
let E = new Set();
function A(e, t) {
    E.has(e) ||
        (E.add(e),
        (0, d.f)(async () => {
            try {
                await t();
            } finally {
                E.delete(e);
            }
        }));
}
var h = n(168543),
    I = n(903209),
    f = n(734057);
n(299091);
var p = n(721779);
function T(e, t) {
    let n = (0, p.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            let { type: n, code: i } = e;
            switch (n) {
                case o.I.INVITE:
                    break;
                case o.I.TEMPLATE:
                    (0, d.f)(async () => {
                        null == a.A.getGuildTemplate(i) && (await r.A.resolveGuildTemplate(i));
                    });
                    break;
                case o.I.BUILD_OVERRIDE:
                case o.I.MANUAL_BUILD_OVERRIDE:
                case o.I.EVENT:
                case o.I.CHANNEL_LINK:
                case o.I.ACTIVITY_BOOKMARK:
                case o.I.EMBEDDED_ACTIVITY_INVITE:
                case o.I.GUILD_PRODUCT:
                case o.I.SERVER_SHOP:
                case o.I.QUESTS_EMBED:
                case o.I.APP_DIRECTORY_STOREFRONT:
                case o.I.APP_DIRECTORY_STOREFRONT_SKU:
                case o.I.APP_OAUTH2_LINK:
                case o.I.COLLECTIBLES_SHOP:
                case o.I.EXPERIMENT:
                case o.I.GAME_PROFILE:
                case o.I.GAME_SERVER_SHARE:
                    break;
                case o.I.USER_PROFILE:
                    if ((0, h.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : f.A.getChannel(t);
                        (0, d.f)(async () => {
                            await (0, I.A)(i, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        });
                    }
                    break;
                case o.I.SOCIAL_LAYER_STOREFRONT:
                case o.I.SOCIAL_LAYER_STOREFRONT_APP:
                    !(function (e, t) {
                        let n = (0, _.rg)(t);
                        if (null == n) return;
                        let i =
                            e === o.I.SOCIAL_LAYER_STOREFRONT_APP
                                ? { type: "application", applicationId: n.scopeId }
                                : { type: "guild", guildId: n.scopeId };
                        if (n.skuIds.length > 1)
                            return A(`${e}:${n.scopeId}`, async () => {
                                "application" === i.type
                                    ? await (0, u.ap)(i.applicationId, { eager: !1 })
                                    : await (0, u.Rw)(i.guildId, { eager: !1 });
                            });
                        let [r] = n.skuIds;
                        null != c.A.get(r) ||
                            c.A.isFetching(r) ||
                            c.A.didFetchingSkuFail(r) ||
                            (l.h.dispatch({ type: "STORE_LISTINGS_FETCH_START", skuId: r }),
                            A((0, _.m5)([r], n.scopeId), async () => {
                                let e = {};
                                "application" === i.type
                                    ? await (0, u.Pp)(i.applicationId, r, e)
                                    : await (0, u.qf)(i.guildId, r, e);
                            }));
                    })(n, i);
                    break;
                case o.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${n}`);
            }
        });
}
function m(e) {
    (T(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return T(n.content, e.channel_id);
        }));
}
class g extends i.A {
    constructor() {
        (super(), (0, s.A)(this, m));
    }
}
let S = new g();
