n.d(t, { A: () => p });
var a = n(64700),
    r = n(575593),
    l = n(417597),
    i = n(954571),
    o = n(590180),
    s = n(993408),
    c = n(652215),
    u = n(788868);
let d = {
        [r.R.AVATAR_DECORATION]: u.Ae.AVATAR_DECORATION,
        [r.R.PROFILE_EFFECT]: u.Ae.PROFILE_EFFECT,
        [r.R.PROFILE_FRAME]: void 0,
        [r.R.NAMEPLATE]: void 0,
        [r.R.NONE]: void 0,
        [r.R.BUNDLE]: void 0,
        [r.R.VARIANTS_GROUP]: void 0,
        [r.R.EXTERNAL_SKU]: void 0,
    },
    p = (e) => {
        let t = (0, l.bG)([o.A], () => o.A.products);
        return (0, a.useCallback)(
            (n) => {
                let { type: a, skuId: r } = n,
                    l = t.get(r);
                i.default.track(c.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[a],
                    feature_tier: (0, s.G0)(l) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
