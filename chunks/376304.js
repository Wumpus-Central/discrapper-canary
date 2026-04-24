n.d(e, { XD: () => g, fm: () => m, sE: () => u, ux: () => h });
var i = n(7584),
    a = n(776231),
    l = n(486020),
    r = n(723702),
    s = n(652215);
let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    c = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    d = (0, r.isAndroid)(),
    u = (t, e) => {
        if (null == t) return null;
        let n = null != t.unicodeEmoji ? i.Ay.getByName(i.Ay.convertSurrogateToName(t.unicodeEmoji, !1)) : void 0;
        return { customIconSrc: p(t, e), unicodeEmoji: n ?? void 0 };
    },
    h = (t, e) => t.replace(/size=[0-9]+/g, `size=${(0, a.kr)(e * (0, a.mZ)())}`),
    p = (t, e) => {
        let { id: n, icon: i } = t;
        if (null == i) return;
        if (i.startsWith("data:")) return i;
        let r = l.QB ? "webp" : "png",
            u = "",
            h = "quality=lossless";
        return (null != e && ((u = "size=" + (0, a.kr)(e * (0, a.mZ)())), (h = d ? "" : "&" + h)),
        null != window.GLOBAL_ENV.CDN_HOST)
            ? `${o}/${n}/${i}.${r}?${u}${h}`
            : `${c}${s.Rsh.ROLE_ICON(n, i)}?${u}`;
    },
    g = (t) => t.startsWith(o) || (t.startsWith(`${c}/roles`) && t.includes("/icons/")),
    m = (t, e) => e?.tags?.subscription_listing_id != null || t.features.has(s.GuildFeatures.ROLE_ICONS);
