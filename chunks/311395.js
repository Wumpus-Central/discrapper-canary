n.d(t, { Z: () => f }), n(314940);
var r = n(192379),
    i = n(278074),
    o = n(979554),
    a = n(399606),
    s = n(626135),
    l = n(597688),
    c = n(884697),
    u = n(981631),
    d = n(474936);
let f = (e) => {
    let t = (0, a.e7)([l.Z], () => l.Z.products);
    return (0, r.useCallback)(
        (n) => {
            let { type: r, skuId: a } = n,
                l = t.get(a);
            s.default.track(u.rMx.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, i.EQ)(r)
                    .with(o.Z.AVATAR_DECORATION, () => d.QP.AVATAR_DECORATION)
                    .with(o.Z.PROFILE_EFFECT, () => d.QP.PROFILE_EFFECT)
                    .otherwise(() => void 0),
                feature_tier: (0, c.G1)(l) ? d.h1.FREE : d.h1.PREMIUM_STANDARD,
                feature_selection: null == l ? void 0 : l.name,
                location_stack: e
            });
        },
        [t, e]
    );
};
