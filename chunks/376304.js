n.d(t, {
    XD: () => _,
    fm: () => h,
    sE: () => d,
    ux: () => f,
}),
    n(747238),
    n(812715);
var r = n(7584),
    i = n(776231),
    a = n(486020),
    s = n(723702),
    o = n(652215);
let l = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
    c = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
    u = (0, s.isAndroid)(),
    d = (e, t) => {
        if (null == e) return null;
        let n = null != e.unicodeEmoji ? r.Ay.getByName(r.Ay.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
        return {
            customIconSrc: p(e, t),
            unicodeEmoji: null != n ? n : void 0,
        };
    },
    f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.kr)(t * (0, i.mZ)()))),
    p = (e, t) => {
        let { id: n, icon: r } = e;
        if (null == r) return;
        if (r.startsWith("data:")) return r;
        let s = a.QB ? "webp" : "png",
            d = "",
            f = "quality=lossless";
        return (null != t && ((d = "size=" + (0, i.kr)(t * (0, i.mZ)())), (f = u ? "" : "&" + f)),
        null != window.GLOBAL_ENV.CDN_HOST)
            ? "".concat(l, "/").concat(n, "/").concat(r, ".").concat(s, "?").concat(d).concat(f)
            : "".concat(c).concat(o.Rsh.ROLE_ICON(n, r), "?").concat(d);
    },
    _ = (e) => e.startsWith(l) || (e.startsWith("".concat(c, "/roles")) && e.includes("/icons/")),
    h = (e, t) => {
        var n;
        return (
            (null == t || null == (n = t.tags) ? void 0 : n.subscription_listing_id) != null ||
            e.features.has(o.GuildFeatures.ROLE_ICONS)
        );
    };
