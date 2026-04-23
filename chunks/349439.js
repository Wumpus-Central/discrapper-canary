l.d(t, { GQ: () => o, GZ: () => h, il: () => x, nF: () => u });
var n = l(575593),
    i = l(898461),
    s = l(203632),
    a = l(486020),
    r = l(788868),
    d = l(602339),
    c = l(985018);
let u = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, i.T)(t) ? (0, a.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
    },
    o = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.C3)(t) ? t.thumbnailPreviewSrc : null;
    },
    x = (e) => {
        if (null == e) return !1;
        let t = r.hd[e];
        return t?.skuId === r.pe.GUILD;
    },
    h = (e, t) => {
        let l,
            i,
            s = null != t;
        if (null != e)
            (l = e.name),
                (i = ((e) => {
                    switch (e) {
                        case n.R.AVATAR_DECORATION:
                            return c.intl.string(d.default.obi47v);
                        case n.R.PROFILE_EFFECT:
                            return c.intl.string(d.default.RX8BMR);
                        case n.R.NAMEPLATE:
                            return c.intl.string(d.default.nNGEHk);
                        case n.R.BUNDLE:
                            return c.intl.string(d.default.VS1fKo);
                        default:
                            return "";
                    }
                })(e.type));
        else if (s && null != t) {
            let e = r.hd[t];
            l = e?.name;
        }
        return { displayName: l, typeName: i, isSubscription: s };
    };
