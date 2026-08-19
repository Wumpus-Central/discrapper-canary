n.d(t, { A: () => d });
var r = n(582128),
    a = n(575593),
    i = n(702841),
    l = n(174459),
    u = n(590180),
    o = n(993408),
    s = n(652215),
    A = n(202541);
let c = {
        [a.R.AVATAR_DECORATION]: A.Ae.AVATAR_DECORATION,
        [a.R.PROFILE_EFFECT]: A.Ae.PROFILE_EFFECT,
        [a.R.PROFILE_FRAME]: void 0,
        [a.R.NAMEPLATE]: void 0,
        [a.R.NONE]: void 0,
        [a.R.BUNDLE]: void 0,
        [a.R.VARIANTS_GROUP]: void 0,
        [a.R.EXTERNAL_SKU]: void 0,
    },
    d = function (e) {
        let t = (0, i.bG)([u.A], () => u.A.products);
        return (0, r.useCallback)(
            (n) => {
                let { type: r, skuId: a } = n,
                    i = t.get(a);
                l.default.track(s.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: c[r],
                    feature_tier: (0, o.G0)(i) ? A.tz.FREE : A.tz.PREMIUM_STANDARD,
                    feature_selection: i?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
