n.d(t, { GQ: () => A, GZ: () => E, il: () => g, nF: () => _, rj: () => m });
var i = n(575593),
    s = n(289397),
    r = n(898461),
    a = n(837015),
    l = n(203632),
    o = n(486020),
    c = n(788868),
    d = n(842130),
    u = n(985018);
let _ = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, r.T)(t) ? (0, o.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
    },
    m = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, a.F)(t) ? (0, s.n)(`collectibles/${t.asset}static.png`) : null;
    },
    A = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, l.C)(t) ? t.thumbnailPreviewSrc : null;
    },
    g = (e) => {
        if (null == e) return !1;
        let t = c.hd[e];
        return t?.skuId === c.pe.GUILD;
    },
    E = (e, t) => {
        let n,
            s,
            r = null != t;
        if (null != e)
            (n = e.name),
                (s = ((e) => {
                    switch (e) {
                        case i.R.AVATAR_DECORATION:
                            return u.intl.string(d.default.obi47v);
                        case i.R.PROFILE_EFFECT:
                            return u.intl.string(d.default.RX8BMR);
                        case i.R.NAMEPLATE:
                            return u.intl.string(d.default.nNGEHk);
                        case i.R.BUNDLE:
                            return u.intl.string(d.default.VS1fKo);
                        default:
                            return "";
                    }
                })(e.type));
        else if (r && null != t) {
            let e = c.hd[t];
            n = e?.name;
        }
        return { displayName: n, typeName: s, isSubscription: r };
    };
