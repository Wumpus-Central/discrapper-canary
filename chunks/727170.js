n.d(t, { A: () => c });
var r = n(582128),
    a = n(575593),
    l = n(702841),
    i = n(174459),
    u = n(590180),
    o = n(993408),
    s = n(652215),
    A = n(202541);
let d = {
        [a.R.AVATAR_DECORATION]: A.Ae.AVATAR_DECORATION,
        [a.R.PROFILE_EFFECT]: A.Ae.PROFILE_EFFECT,
        [a.R.PROFILE_FRAME]: void 0,
        [a.R.NAMEPLATE]: void 0,
        [a.R.NONE]: void 0,
        [a.R.BUNDLE]: void 0,
        [a.R.VARIANTS_GROUP]: void 0,
        [a.R.EXTERNAL_SKU]: void 0,
    },
    c = function (e) {
        let t = (0, l.bG)([u.A], () => u.A.products);
        return (0, r.useCallback)(
            (n) => {
                let { type: r, skuId: a } = n,
                    l = t.get(a);
                i.default.track(s.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[r],
                    feature_tier: (0, o.G0)(l) ? A.tz.FREE : A.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
