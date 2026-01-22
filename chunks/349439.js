n.d(t, {
    GQ: () => m,
    GZ: () => E,
    il: () => g,
    nF: () => _,
    rj: () => h,
});
var r = n(575593),
    i = n(289397),
    a = n(898461),
    s = n(837015),
    o = n(203632),
    l = n(486020),
    c = n(788868),
    u = n(842130),
    d = n(985018);
let f = 40,
    p = (e) => {
        switch (e) {
            case r.R.AVATAR_DECORATION:
                return d.intl.string(u.default.obi47v);
            case r.R.PROFILE_EFFECT:
                return d.intl.string(u.default.RX8BMR);
            case r.R.NAMEPLATE:
                return d.intl.string(u.default.nNGEHk);
            case r.R.BUNDLE:
                return d.intl.string(u.default.VS1fKo);
            default:
                return "";
        }
    },
    _ = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, a.T)(t)
            ? (0, l.F_)({
                  avatarDecoration: {
                      asset: t.asset,
                  },
                  size: f,
                  canAnimate: !0,
              })
            : null;
    },
    h = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.F)(t) ? (0, i.n)("collectibles/".concat(t.asset, "static.png")) : null;
    },
    m = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, o.C)(t) ? t.thumbnailPreviewSrc : null;
    },
    g = (e) => {
        if (null == e) return !1;
        let t = c.hd[e];
        return (null == t ? void 0 : t.skuId) === c.pe.GUILD;
    },
    E = (e, t) => {
        let n,
            r,
            i = null != t;
        if (null != e) (n = e.name), (r = p(e.type));
        else if (i && null != t) {
            let e = c.hd[t];
            n = null == e ? void 0 : e.name;
        }
        return {
            displayName: n,
            typeName: r,
            isSubscription: i,
        };
    };
