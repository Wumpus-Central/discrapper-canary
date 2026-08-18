"use strict";
n.d(t, { XD: () => m, fm: () => f, sE: () => d, ux: () => h });
var l = n(7584),
    i = n(776231),
    s = n(486020),
    r = n(723702),
    a = n(652215);
let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    u = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    c = (0, r.isAndroid)();
function d(e, t) {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? l.Ay.getByName(l.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
        customIconSrc: (function (e, t) {
            let { id: n, icon: l } = e;
            if (null == l) return;
            if (l.startsWith("data:")) return l;
            let r = s.QB ? "webp" : "png",
                d = "",
                h = "quality=lossless";
            return (null != t && ((d = "size=" + (0, i.kr)(t * (0, i.mZ)())), (h = c ? "" : "&" + h)),
            null != window.GLOBAL_ENV.CDN_HOST)
                ? `${o}/${n}/${l}.${r}?${d}${h}`
                : `${u}${a.Rsh.ROLE_ICON(n, l)}?${d}`;
        })(e, t),
        unicodeEmoji: n ?? void 0,
    };
}
function h(e, t) {
    return e.replace(/size=[0-9]+/g, `size=${(0, i.kr)(t * (0, i.mZ)())}`);
}
function m(e) {
    return e.startsWith(o) || (e.startsWith(`${u}/roles`) && e.includes("/icons/"));
}
function f(e, t) {
    return t?.tags?.subscription_listing_id != null || e.features.has(a.GuildFeatures.ROLE_ICONS);
}
