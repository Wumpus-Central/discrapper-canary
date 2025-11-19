n.d(t, {
    $U: () => h,
    HB: () => E,
    Km: () => g,
    vV: () => p,
    yz: () => m,
});
var r = n(979554),
    i = n(357352),
    a = n(922347),
    o = n(135483),
    s = n(212161),
    l = n(768581),
    c = n(474936),
    u = n(313570),
    d = n(388032);
let f = 40,
    _ = (e) => {
        switch (e) {
            case r.Z.AVATAR_DECORATION:
                return d.intl.string(u.default.obi47v);
            case r.Z.PROFILE_EFFECT:
                return d.intl.string(u.default.RX8BMR);
            case r.Z.NAMEPLATE:
                return d.intl.string(u.default.nNGEHk);
            case r.Z.BUNDLE:
                return d.intl.string(u.default.VS1fKo);
            default:
                return "";
        }
    },
    p = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, a.M)(t)
            ? (0, l.NZ)({
                  avatarDecoration: { asset: t.asset },
                  size: f,
                  canAnimate: !0,
              })
            : null;
    },
    h = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, o.k)(t) ? (0, i.b)("collectibles/".concat(t.asset, "static.png")) : null;
    },
    m = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.H)(t) ? t.thumbnailPreviewSrc : null;
    },
    g = (e) => {
        if (null == e) return !1;
        let t = c.GP[e];
        return (null == t ? void 0 : t.skuId) === c.Si.GUILD;
    },
    E = (e, t) => {
        let n,
            r,
            i = null != t;
        if (null != e) (n = e.name), (r = _(e.type));
        else if (i && null != t) {
            let e = c.GP[t];
            n = null == e ? void 0 : e.name;
        }
        return {
            displayName: n,
            typeName: r,
            isSubscription: i,
        };
    };
