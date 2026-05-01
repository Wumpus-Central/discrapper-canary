"use strict";
n.d(t, { XD: () => h, fm: () => p, sE: () => d, ux: () => _ });
var i = n(7584),
    r = n(776231),
    s = n(486020),
    a = n(723702),
    o = n(652215);
let l = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    u = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    c = (0, a.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? i.Ay.getByName(i.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return { customIconSrc: f(e, t), unicodeEmoji: n ?? void 0 };
    },
    _ = (e, t) => e.replace(/size=[0-9]+/g, `size=${(0, r.kr)(t * (0, r.mZ)())}`),
    f = (e, t) => {
        let { id: n, icon: i } = e;
        if (null == i) return;
        if (i.startsWith("data:")) return i;
        let a = s.QB ? "webp" : "png",
            d = "",
            _ = "quality=lossless";
        return (null != t && ((d = "size=" + (0, r.kr)(t * (0, r.mZ)())), (_ = c ? "" : "&" + _)),
        null != window.GLOBAL_ENV.CDN_HOST)
            ? `${l}/${n}/${i}.${a}?${d}${_}`
            : `${u}${o.Rsh.ROLE_ICON(n, i)}?${d}`;
    },
    h = (e) => e.startsWith(l) || (e.startsWith(`${u}/roles`) && e.includes("/icons/")),
    p = (e, t) => t?.tags?.subscription_listing_id != null || e.features.has(o.GuildFeatures.ROLE_ICONS);
