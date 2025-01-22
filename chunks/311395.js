var i = r(627341);
var a = r(192379),
    o = r(278074),
    s = r(979554),
    l = r(399606),
    u = r(626135),
    c = r(597688),
    d = r(884697),
    f = r(981631),
    p = r(474936);
let h = (e) => {
    let n = (0, l.e7)([c.Z], () => c.Z.products);
    return (0, a.useCallback)(
        (r) => {
            let { type: i, skuId: a } = r,
                l = n.get(a);
            u.default.track(f.rMx.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, o.EQ)(i)
                    .with(s.Z.AVATAR_DECORATION, () => p.QP.AVATAR_DECORATION)
                    .with(s.Z.PROFILE_EFFECT, () => p.QP.PROFILE_EFFECT)
                    .otherwise(() => void 0),
                feature_tier: (0, d.G1)(l) ? p.h1.FREE : p.h1.PREMIUM_STANDARD,
                feature_selection: null == l ? void 0 : l.name,
                location_stack: e
            });
        },
        [n, e]
    );
};
n.Z = h;
