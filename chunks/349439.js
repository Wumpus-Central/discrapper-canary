n.d(t, { GQ: () => u, GZ: () => g, il: () => m, nF: () => c });
var i = n(575593),
    s = n(898461),
    l = n(203632),
    r = n(486020),
    a = n(788868),
    o = n(842130),
    d = n(985018);
let c = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.T)(t) ? (0, r.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
    },
    u = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, l.C3)(t) ? t.thumbnailPreviewSrc : null;
    },
    m = (e) => {
        if (null == e) return !1;
        let t = a.hd[e];
        return t?.skuId === a.pe.GUILD;
    },
    g = (e, t) => {
        let n,
            s,
            l = null != t;
        if (null != e)
            (n = e.name),
                (s = ((e) => {
                    switch (e) {
                        case i.R.AVATAR_DECORATION:
                            return d.intl.string(o.default.obi47v);
                        case i.R.PROFILE_EFFECT:
                            return d.intl.string(o.default.RX8BMR);
                        case i.R.NAMEPLATE:
                            return d.intl.string(o.default.nNGEHk);
                        case i.R.BUNDLE:
                            return d.intl.string(o.default.VS1fKo);
                        default:
                            return "";
                    }
                })(e.type));
        else if (l && null != t) {
            let e = a.hd[t];
            n = e?.name;
        }
        return { displayName: n, typeName: s, isSubscription: l };
    };
