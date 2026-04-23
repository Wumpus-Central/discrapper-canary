"use strict";
n.d(t, { A: () => _ }), n(73153);
var r = n(439372);
n(354138);
var i = n(292572),
    s = n(122906);
n(970163);
var a = n(128391);
n(299091);
var o = n(167189),
    l = n(254160),
    u = n(833291);
function c(e) {
    let t = (0, u.Ay)(e.content);
    null != t &&
        0 !== t.length &&
        t.forEach((e) => {
            let { type: t, code: n } = e;
            if (t === o.I.INVITE);
            else if (t === o.I.TEMPLATE)
                (0, l.f)(async () => {
                    null == s.A.getGuildTemplate(n) && (await i.A.resolveGuildTemplate(n));
                });
            else if (t === o.I.BUILD_OVERRIDE || t === o.I.MANUAL_BUILD_OVERRIDE);
            else if (t === o.I.EVENT);
            else if (t === o.I.CHANNEL_LINK);
            else if (t === o.I.APP_DIRECTORY_PROFILE);
            else if (t === o.I.ACTIVITY_BOOKMARK);
            else if (t === o.I.EMBEDDED_ACTIVITY_INVITE);
            else if (t === o.I.GUILD_PRODUCT);
            else if (t === o.I.SERVER_SHOP);
            else if (t === o.I.SOCIAL_LAYER_STOREFRONT);
            else if (t === o.I.QUESTS_EMBED);
            else if (t === o.I.APP_DIRECTORY_STOREFRONT);
            else if (t === o.I.APP_DIRECTORY_STOREFRONT_SKU);
            else if (t === o.I.APP_OAUTH2_LINK);
            else if (t === o.I.COLLECTIBLES_SHOP);
            else if (t === o.I.EXPERIMENT);
            else throw Error(`Unknown coded link type: ${t}`);
        });
}
class d extends r.A {
    constructor() {
        super(), (0, a.A)(this, c);
    }
}
let _ = new d();
