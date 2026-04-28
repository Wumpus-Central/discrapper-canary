"use strict";
n.d(t, { XD: () => p, fm: () => f, sE: () => d, ux: () => h });
var l = n(7584),
    i = n(776231),
    s = n(486020),
    a = n(723702),
    r = n(652215);
let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    c = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    u = (0, a.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? l.Ay.getByName(l.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return { customIconSrc: m(e, t), unicodeEmoji: n ?? void 0 };
    },
    h = (e, t) => e.replace(/size=[0-9]+/g, `size=${(0, i.kr)(t * (0, i.mZ)())}`),
    m = (e, t) => {
        let { id: n, icon: l } = e;
        if (null == l) return;
        if (l.startsWith("data:")) return l;
        let a = s.QB ? "webp" : "png",
            d = "",
            h = "quality=lossless";
        return (null != t && ((d = "size=" + (0, i.kr)(t * (0, i.mZ)())), (h = u ? "" : "&" + h)),
        null != window.GLOBAL_ENV.CDN_HOST)
            ? `${o}/${n}/${l}.${a}?${d}${h}`
            : `${c}${r.Rsh.ROLE_ICON(n, l)}?${d}`;
    },
    p = (e) => e.startsWith(o) || (e.startsWith(`${c}/roles`) && e.includes("/icons/")),
    f = (e, t) => t?.tags?.subscription_listing_id != null || e.features.has(r.GuildFeatures.ROLE_ICONS);
