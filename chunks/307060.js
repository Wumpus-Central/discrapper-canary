"use strict";
n.d(t, { A: () => A }), n(376728);
var i = n(439372);
n(993748);
var r = n(292572),
    a = n(122906),
    s = n(128391);
n(299091);
var l = n(167189),
    o = n(887924);
let d = new (n(626584).A)("codedLinkQueue"),
    c = new o.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
c.on("add", () => {
    c.size > 0 && d.warn("Message link fetch queue backlog:", c.size);
});
var u = n(833291);
function _(e) {
    let t = (0, u.Ay)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            switch (t) {
                case l.I.INVITE:
                    break;
                case l.I.TEMPLATE:
                    var i;
                    (i = async () => {
                        null == a.A.getGuildTemplate(n) && (await r.A.resolveGuildTemplate(n));
                    }),
                        c.add(i);
                    break;
                case l.I.BUILD_OVERRIDE:
                case l.I.MANUAL_BUILD_OVERRIDE:
                case l.I.EVENT:
                case l.I.CHANNEL_LINK:
                case l.I.ACTIVITY_BOOKMARK:
                case l.I.EMBEDDED_ACTIVITY_INVITE:
                case l.I.GUILD_PRODUCT:
                case l.I.SERVER_SHOP:
                case l.I.SOCIAL_LAYER_STOREFRONT:
                case l.I.SOCIAL_LAYER_STOREFRONT_APP:
                case l.I.QUESTS_EMBED:
                case l.I.APP_DIRECTORY_STOREFRONT:
                case l.I.APP_DIRECTORY_STOREFRONT_SKU:
                case l.I.APP_OAUTH2_LINK:
                case l.I.COLLECTIBLES_SHOP:
                case l.I.EXPERIMENT:
                case l.I.GAME_PROFILE:
                case l.I.GAME_SERVER_SHARE:
                case l.I.APP_DIRECTORY_PROFILE:
                    break;
                default:
                    throw Error(`Unknown coded link type: ${t}`);
            }
        });
}
class E extends i.A {
    constructor() {
        super(), (0, s.A)(this, _);
    }
}
let A = new E();
