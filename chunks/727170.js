t.d(a, { A: () => p });
var n = t(64700),
    r = t(575593),
    l = t(702841),
    i = t(954571),
    o = t(590180),
    s = t(993408),
    u = t(652215),
    _ = t(788868);
let c = {
        [r.R.AVATAR_DECORATION]: _.Ae.AVATAR_DECORATION,
        [r.R.PROFILE_EFFECT]: _.Ae.PROFILE_EFFECT,
        [r.R.PROFILE_FRAME]: void 0,
        [r.R.NAMEPLATE]: void 0,
        [r.R.NONE]: void 0,
        [r.R.BUNDLE]: void 0,
        [r.R.VARIANTS_GROUP]: void 0,
        [r.R.EXTERNAL_SKU]: void 0,
    },
    p = (e) => {
        let a = (0, l.bG)([o.A], () => o.A.products);
        return (0, n.useCallback)(
            (t) => {
                let { type: n, skuId: r } = t,
                    l = a.get(r);
                i.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: c[n],
                    feature_tier: (0, s.G0)(l) ? _.tz.FREE : _.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [a, e],
        );
    };
