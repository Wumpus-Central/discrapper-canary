t.d(i, { XD: () => p, fm: () => _, sE: () => d, ux: () => $ });
var o = t(7584),
    u = t(776231),
    e = t(486020),
    l = t(723702),
    r = t(652215);
let s = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    c = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    a = (0, l.isAndroid)();
function d(n, i) {
    if (null == n) return null;
    let t = (function (n, i) {
            let { id: t, icon: o } = n;
            if (null == o) return;
            if (o.startsWith("data:")) return o;
            let l = e.QB ? "webp" : "png",
                d = "",
                $ = "quality=lossless";
            return (null != i && ((d = "size=" + (0, u.kr)(i * (0, u.mZ)())), ($ = a ? "" : "&" + $)),
            null != window.GLOBAL_ENV.CDN_HOST)
                ? `${s}/${t}/${o}.${l}?${d}${$}`
                : `${c}${r.Rsh.ROLE_ICON(t, o)}?${d}`;
        })(n, i),
        l = null != n.unicodeEmoji ? o.Ay.getByName(o.Ay.convertSurrogateToName(n.unicodeEmoji, !1)) : void 0;
    return null == t && null == l ? null : { customIconSrc: t, unicodeEmoji: l ?? void 0 };
}
function $(n, i) {
    return n.replace(/size=[0-9]+/g, `size=${(0, u.kr)(i * (0, u.mZ)())}`);
}
function p(n) {
    return n.startsWith(s) || (n.startsWith(`${c}/roles`) && n.includes("/icons/"));
}
function _(n, i) {
    return i?.tags?.subscription_listing_id != null || n.features.has(r.GuildFeatures.ROLE_ICONS);
}
