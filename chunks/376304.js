var l = n(7584),
    i = n(776231),
    r = n(486020),
    s = n(723702),
    a = n(652215);
let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
    u = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
    d = (0, s.m0)();
n.d(
    t,
    {},
    {
        XD: function (e) {
            return e.startsWith(o) || (e.startsWith(`${u}/roles`) && e.includes("/icons/"));
        },
        fm: function (e, t) {
            return t?.tags?.subscription_listing_id != null || e.features.has(a.GuildFeatures.ROLE_ICONS);
        },
        sE: function (e, t) {
            if (null == e) return null;
            let n = (function (e, t) {
                    let { id: n, icon: l } = e;
                    if (null == l) return;
                    if (l.startsWith("data:")) return l;
                    let s = r.QB ? "webp" : "png",
                        c = "",
                        m = "quality=lossless";
                    return (null != t && ((c = "size=" + (0, i.kr)(t * (0, i.mZ)())), (m = d ? "" : "&" + m)),
                    null != window.GLOBAL_ENV.CDN_HOST)
                        ? `${o}/${n}/${l}.${s}?${c}${m}`
                        : `${u}${a.Rsh.ROLE_ICON(n, l)}?${c}`;
                })(e, t),
                s = null != e.unicodeEmoji ? l.Ay.getByName(l.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
            return null == n && null == s ? null : { customIconSrc: n, unicodeEmoji: s ?? void 0 };
        },
        ux: function (e, t) {
            return e.replace(/size=[0-9]+/g, `size=${(0, i.kr)(t * (0, i.mZ)())}`);
        },
    },
);
