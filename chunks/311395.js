n.d(t, { Z: () => f });
var r = n(473749),
    i = n(979554),
    a = n(399606),
    o = n(626135),
    s = n(597688),
    l = n(884697),
    c = n(981631),
    u = n(474936);
let d = {
        [i.Z.AVATAR_DECORATION]: u.QP.AVATAR_DECORATION,
        [i.Z.PROFILE_EFFECT]: u.QP.PROFILE_EFFECT,
        [i.Z.NAMEPLATE]: void 0,
        [i.Z.NONE]: void 0,
        [i.Z.BUNDLE]: void 0,
        [i.Z.VARIANTS_GROUP]: void 0,
        [i.Z.EXTERNAL_SKU]: void 0,
    },
    f = (e) => {
        let t = (0, a.e7)([s.Z], () => s.Z.products);
        return (0, r.useCallback)(
            (n) => {
                let { type: r, skuId: i } = n,
                    a = t.get(i);
                o.default.track(c.rMx.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[r],
                    feature_tier: (0, l.G1)(a) ? u.h1.FREE : u.h1.PREMIUM_STANDARD,
                    feature_selection: null == a ? void 0 : a.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
