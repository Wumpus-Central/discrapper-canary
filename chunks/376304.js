"use strict";
n.d(t, { XD: () => p, fm: () => h, sE: () => d, ux: () => _ });
var r = n(7584),
    i = n(776231),
    a = n(486020),
    s = n(723702),
    o = n(652215);
let l = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    u = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    c = (0, s.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? r.Ay.getByName(r.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return { customIconSrc: f(e, t), unicodeEmoji: n ?? void 0 };
    },
    _ = (e, t) => e.replace(/size=[0-9]+/g, `size=${(0, i.kr)(t * (0, i.mZ)())}`),
    f = (e, t) => {
        let { id: n, icon: r } = e;
        if (null == r) return;
        if (r.startsWith("data:")) return r;
        let s = a.QB ? "webp" : "png",
            d = "",
            _ = "quality=lossless";
        return (null != t && ((d = "size=" + (0, i.kr)(t * (0, i.mZ)())), (_ = c ? "" : "&" + _)),
        null != window.GLOBAL_ENV.CDN_HOST)
            ? `${l}/${n}/${r}.${s}?${d}${_}`
            : `${u}${o.Rsh.ROLE_ICON(n, r)}?${d}`;
    },
    p = (e) => e.startsWith(l) || (e.startsWith(`${u}/roles`) && e.includes("/icons/")),
    h = (e, t) => t?.tags?.subscription_listing_id != null || e.features.has(o.GuildFeatures.ROLE_ICONS);
