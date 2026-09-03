n.d(t, { A: () => p }), n(376728);
var i = n(439372);
n(993748);
var r = n(292572),
    a = n(122906),
    s = n(128391),
    l = n(168543),
    o = n(903209),
    d = n(734057);
n(299091);
var c = n(167189),
    u = n(887924);
let _ = new (n(626584).A)("codedLinkQueue"),
    E = new u.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
E.on("add", () => {
    E.size > 0 && _.warn("Message link fetch queue backlog:", E.size);
});
var A = n(721779);
function h(e, t) {
    let n = (0, A.Ay)(e);
    null != n &&
        0 !== n.length &&
        n.forEach((e) => {
            var n, i;
            let { type: s, code: u } = e;
            switch (s) {
                case c.I.INVITE:
                    break;
                case c.I.TEMPLATE:
                    (n = async () => {
                        null == a.A.getGuildTemplate(u) && (await r.A.resolveGuildTemplate(u));
                    }),
                        E.add(n);
                    break;
                case c.I.BUILD_OVERRIDE:
                case c.I.MANUAL_BUILD_OVERRIDE:
                case c.I.EVENT:
                case c.I.CHANNEL_LINK:
                case c.I.ACTIVITY_BOOKMARK:
                case c.I.EMBEDDED_ACTIVITY_INVITE:
                case c.I.GUILD_PRODUCT:
                case c.I.SERVER_SHOP:
                case c.I.SOCIAL_LAYER_STOREFRONT:
                case c.I.SOCIAL_LAYER_STOREFRONT_APP:
                case c.I.QUESTS_EMBED:
                case c.I.APP_DIRECTORY_STOREFRONT:
                case c.I.APP_DIRECTORY_STOREFRONT_SKU:
                case c.I.APP_OAUTH2_LINK:
                case c.I.COLLECTIBLES_SHOP:
                case c.I.EXPERIMENT:
                case c.I.GAME_PROFILE:
                case c.I.GAME_SERVER_SHARE:
                    break;
                case c.I.USER_PROFILE:
                    if ((0, l.l)("MessageCodedLinkManager")) {
                        let e = null == t ? null : d.A.getChannel(t);
                        (i = async () => {
                            await (0, o.A)(u, void 0, {
                                guildId: e?.guild_id ?? void 0,
                                withMutualGuilds: !0,
                                withMutualFriends: !0,
                            });
                        }),
                            E.add(i);
                    }
                    break;
                case c.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${s}`);
            }
        });
}
function I(e) {
    h(e.content ?? null, e.channel_id),
        e.message_snapshots?.forEach((t) => {
            let { message: n } = t;
            return h(n.content, e.channel_id);
        });
}
class f extends i.A {
    constructor() {
        super(), (0, s.A)(this, I);
    }
}
let p = new f();
