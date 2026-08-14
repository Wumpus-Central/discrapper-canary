n.d(t, { XD: () => p, fm: () => _, sE: () => d, ux: () => $ });
var o = n(7584),
    r = n(776231),
    e = n(486020),
    u = n(723702),
    s = n(652215);
let l = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    c = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    a = (0, u.isAndroid)();
function d(i, t) {
    if (null == i) return null;
    let n = null != i.unicodeEmoji ? o.Ay.getByName(o.Ay.convertSurrogateToName(i.unicodeEmoji, !1)) : void 0;
    return {
        customIconSrc: (function (i, t) {
            let { id: n, icon: o } = i;
            if (null == o) return;
            if (o.startsWith("data:")) return o;
            let u = e.QB ? "webp" : "png",
                d = "",
                $ = "quality=lossless";
            return (null != t && ((d = "size=" + (0, r.kr)(t * (0, r.mZ)())), ($ = a ? "" : "&" + $)),
            null != window.GLOBAL_ENV.CDN_HOST)
                ? `${l}/${n}/${o}.${u}?${d}${$}`
                : `${c}${s.Rsh.ROLE_ICON(n, o)}?${d}`;
        })(i, t),
        unicodeEmoji: n ?? void 0,
    };
}
function $(i, t) {
    return i.replace(/size=[0-9]+/g, `size=${(0, r.kr)(t * (0, r.mZ)())}`);
}
function p(i) {
    return i.startsWith(l) || (i.startsWith(`${c}/roles`) && i.includes("/icons/"));
}
function _(i, t) {
    return t?.tags?.subscription_listing_id != null || i.features.has(s.GuildFeatures.ROLE_ICONS);
}
