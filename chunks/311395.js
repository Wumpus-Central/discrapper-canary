n.d(t, { Z: () => f }), n(314940);
var r = n(73800),
    i = n(278074),
    a = n(979554),
    o = n(399606),
    s = n(626135),
    l = n(597688),
    c = n(884697),
    u = n(981631),
    d = n(474936);
let f = (e) => {
    let t = (0, o.e7)([l.Z], () => l.Z.products);
    return (0, r.useCallback)(
        (n) => {
            let { type: r, skuId: o } = n,
                l = t.get(o);
            s.default.track(u.rMx.PREMIUM_FEATURE_TRY_OUT, {
                feature_name: (0, i.EQ)(r)
                    .with(a.Z.AVATAR_DECORATION, () => d.QP.AVATAR_DECORATION)
                    .with(a.Z.PROFILE_EFFECT, () => d.QP.PROFILE_EFFECT)
                    .otherwise(() => void 0),
                feature_tier: (0, c.G1)(l) ? d.h1.FREE : d.h1.PREMIUM_STANDARD,
                feature_selection: null == l ? void 0 : l.name,
                location_stack: e
            });
        },
        [t, e]
    );
};
