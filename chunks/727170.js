t.d(a, { A: () => c });
var n = t(64700),
    r = t(575593),
    l = t(702841),
    i = t(954571),
    o = t(590180),
    s = t(993408),
    _ = t(652215),
    u = t(788868);
let A = {
        [r.R.AVATAR_DECORATION]: u.Ae.AVATAR_DECORATION,
        [r.R.PROFILE_EFFECT]: u.Ae.PROFILE_EFFECT,
        [r.R.PROFILE_FRAME]: void 0,
        [r.R.NAMEPLATE]: void 0,
        [r.R.NONE]: void 0,
        [r.R.BUNDLE]: void 0,
        [r.R.VARIANTS_GROUP]: void 0,
        [r.R.EXTERNAL_SKU]: void 0,
    },
    c = (e) => {
        let a = (0, l.bG)([o.A], () => o.A.products);
        return (0, n.useCallback)(
            (t) => {
                let { type: n, skuId: r } = t,
                    l = a.get(r);
                i.default.track(_.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: A[n],
                    feature_tier: (0, s.G0)(l) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [a, e],
        );
    };
