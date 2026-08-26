n.d(t, { XD: () => p, fm: () => h, sE: () => d, ux: () => m });
var l = n(7584),
    i = n(776231),
    r = n(486020),
    a = n(723702),
    s = n(652215);
let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    u = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    c = (0, a.isAndroid)();
function d(e, t) {
    if (null == e) return null;
    let n = null != e.unicodeEmoji ? l.Ay.getByName(l.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return {
        customIconSrc: (function (e, t) {
            let { id: n, icon: l } = e;
            if (null == l) return;
            if (l.startsWith("data:")) return l;
            let a = r.QB ? "webp" : "png",
                d = "",
                m = "quality=lossless";
            return (null != t && ((d = "size=" + (0, i.kr)(t * (0, i.mZ)())), (m = c ? "" : "&" + m)),
            null != window.GLOBAL_ENV.CDN_HOST)
                ? `${o}/${n}/${l}.${a}?${d}${m}`
                : `${u}${s.Rsh.ROLE_ICON(n, l)}?${d}`;
        })(e, t),
        unicodeEmoji: n ?? void 0,
    };
}
function m(e, t) {
    return e.replace(/size=[0-9]+/g, `size=${(0, i.kr)(t * (0, i.mZ)())}`);
}
function p(e) {
    return e.startsWith(o) || (e.startsWith(`${u}/roles`) && e.includes("/icons/"));
}
function h(e, t) {
    return t?.tags?.subscription_listing_id != null || e.features.has(s.GuildFeatures.ROLE_ICONS);
}
