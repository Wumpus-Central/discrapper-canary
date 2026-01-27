n.d(t, {
    GQ: () => m,
    GZ: () => A,
    il: () => g,
    nF: () => _,
    rj: () => p,
});
var r = n(575593),
    i = n(289397),
    l = n(898461),
    s = n(837015),
    a = n(203632),
    o = n(486020),
    c = n(788868),
    d = n(842130),
    u = n(985018);
let _ = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, l.T)(t)
            ? (0, o.F_)({
                  avatarDecoration: {
                      asset: t.asset,
                  },
                  size: 40,
                  canAnimate: !0,
              })
            : null;
    },
    p = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.F)(t) ? (0, i.n)("collectibles/".concat(t.asset, "static.png")) : null;
    },
    m = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, a.C)(t) ? t.thumbnailPreviewSrc : null;
    },
    g = (e) => {
        if (null == e) return !1;
        let t = c.hd[e];
        return (null == t ? void 0 : t.skuId) === c.pe.GUILD;
    },
    A = (e, t) => {
        let n,
            i,
            l = null != t;
        if (null != e)
            (n = e.name),
                (i = ((e) => {
                    switch (e) {
                        case r.R.AVATAR_DECORATION:
                            return u.intl.string(d.default.obi47v);
                        case r.R.PROFILE_EFFECT:
                            return u.intl.string(d.default.RX8BMR);
                        case r.R.NAMEPLATE:
                            return u.intl.string(d.default.nNGEHk);
                        case r.R.BUNDLE:
                            return u.intl.string(d.default.VS1fKo);
                        default:
                            return "";
                    }
                })(e.type));
        else if (l && null != t) {
            let e = c.hd[t];
            n = null == e ? void 0 : e.name;
        }
        return {
            displayName: n,
            typeName: i,
            isSubscription: l,
        };
    };
