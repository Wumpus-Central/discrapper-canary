"use strict";
n.d(t, { A: () => h }), n(228366);
var i = n(439372);
n(993748);
var r = n(292572),
    s = n(122906);
n(970163);
var a = n(128391);
n(299091);
var o = n(167189),
    l = n(887924);
let u = new (n(626584).A)("codedLinkQueue"),
    c = new l.default({ concurrency: 5, intervalCap: 10, interval: 2e3 });
c.on("add", () => {
    c.size > 0 && u.warn("Message link fetch queue backlog:", c.size);
});
var d = n(833291);
function _(e) {
    let t = (0, d.Ay)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            if (t === o.I.INVITE);
            else if (t === o.I.TEMPLATE) {
                var i;
                (i = async () => {
                    null == s.A.getGuildTemplate(n) && (await r.A.resolveGuildTemplate(n));
                }),
                    c.add(i);
            } else if (t === o.I.BUILD_OVERRIDE || t === o.I.MANUAL_BUILD_OVERRIDE);
            else if (t === o.I.EVENT);
            else if (t === o.I.CHANNEL_LINK);
            else if (t === o.I.APP_DIRECTORY_PROFILE);
            else if (t === o.I.ACTIVITY_BOOKMARK);
            else if (t === o.I.EMBEDDED_ACTIVITY_INVITE);
            else if (t === o.I.GUILD_PRODUCT);
            else if (t === o.I.SERVER_SHOP);
            else if (t === o.I.SOCIAL_LAYER_STOREFRONT || t === o.I.SOCIAL_LAYER_STOREFRONT_APP);
            else if (t === o.I.QUESTS_EMBED);
            else if (t === o.I.APP_DIRECTORY_STOREFRONT);
            else if (t === o.I.APP_DIRECTORY_STOREFRONT_SKU);
            else if (t === o.I.APP_OAUTH2_LINK);
            else if (t === o.I.COLLECTIBLES_SHOP);
            else if (t === o.I.EXPERIMENT);
            else throw Error(`Unknown coded link type: ${t}`);
        });
}
class f extends i.A {
    constructor() {
        super(), (0, a.A)(this, _);
    }
}
let h = new f();
