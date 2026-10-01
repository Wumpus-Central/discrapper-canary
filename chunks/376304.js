t.d(r, { XD: () => f, fm: () => A, sE: () => v, ux: () => p });
var l = t(7584),
    s = t(776231),
    o = t(486020),
    n = t(723702),
    a = t(652215);
let i = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    c = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    u = (0, n.isAndroid)();
function v(e, r) {
    if (null == e) return null;
    let t = (function (e, r) {
            let { id: t, icon: l } = e;
            if (null == l) return;
            if (l.startsWith("data:")) return l;
            let n = o.QB ? "webp" : "png",
                v = "",
                p = "quality=lossless";
            return (null != r && ((v = "size=" + (0, s.kr)(r * (0, s.mZ)())), (p = u ? "" : "&" + p)),
            null != window.GLOBAL_ENV.CDN_HOST)
                ? `${i}/${t}/${l}.${n}?${v}${p}`
                : `${c}${a.Rsh.ROLE_ICON(t, l)}?${v}`;
        })(e, r),
        n = null != e.unicodeEmoji ? l.Ay.getByName(l.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
    return null == t && null == n ? null : { customIconSrc: t, unicodeEmoji: n ?? void 0 };
}
function p(e, r) {
    return e.replace(/size=[0-9]+/g, `size=${(0, s.kr)(r * (0, s.mZ)())}`);
}
function f(e) {
    return e.startsWith(i) || (e.startsWith(`${c}/roles`) && e.includes("/icons/"));
}
function A(e, r) {
    return r?.tags?.subscription_listing_id != null || e.features.has(a.GuildFeatures.ROLE_ICONS);
}
