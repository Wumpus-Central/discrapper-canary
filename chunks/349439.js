n.d(t, { GQ: () => u, GZ: () => m, il: () => _, nF: () => d });
var i = n(575593),
    s = n(898461),
    a = n(203632),
    l = n(486020),
    r = n(788868),
    o = n(842130),
    c = n(985018);
let d = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, s.T)(t) ? (0, l.F_)({ avatarDecoration: { asset: t.asset }, size: 40, canAnimate: !0 }) : null;
    },
    u = (e) => {
        if (0 === e.items.length) return null;
        let t = e.items[0];
        return (0, a.C)(t) ? t.thumbnailPreviewSrc : null;
    },
    _ = (e) => {
        if (null == e) return !1;
        let t = r.hd[e];
        return t?.skuId === r.pe.GUILD;
    },
    m = (e, t) => {
        let n,
            s,
            a = null != t;
        if (null != e)
            (n = e.name),
                (s = ((e) => {
                    switch (e) {
                        case i.R.AVATAR_DECORATION:
                            return c.intl.string(o.default.obi47v);
                        case i.R.PROFILE_EFFECT:
                            return c.intl.string(o.default.RX8BMR);
                        case i.R.NAMEPLATE:
                            return c.intl.string(o.default.nNGEHk);
                        case i.R.BUNDLE:
                            return c.intl.string(o.default.VS1fKo);
                        default:
                            return "";
                    }
                })(e.type));
        else if (a && null != t) {
            let e = r.hd[t];
            n = e?.name;
        }
        return { displayName: n, typeName: s, isSubscription: a };
    };
