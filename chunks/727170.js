a.d(t, { A: () => d });
var r = a(64700),
    n = a(575593),
    l = a(702841),
    o = a(174459),
    i = a(590180),
    s = a(993408),
    c = a(652215),
    u = a(788868);
let p = {
        [n.R.AVATAR_DECORATION]: u.Ae.AVATAR_DECORATION,
        [n.R.PROFILE_EFFECT]: u.Ae.PROFILE_EFFECT,
        [n.R.PROFILE_FRAME]: void 0,
        [n.R.NAMEPLATE]: void 0,
        [n.R.NONE]: void 0,
        [n.R.BUNDLE]: void 0,
        [n.R.VARIANTS_GROUP]: void 0,
        [n.R.EXTERNAL_SKU]: void 0,
    },
    d = (e) => {
        let t = (0, l.bG)([i.A], () => i.A.products);
        return (0, r.useCallback)(
            (a) => {
                let { type: r, skuId: n } = a,
                    l = t.get(n);
                o.default.track(c.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: p[r],
                    feature_tier: (0, s.G0)(l) ? u.tz.FREE : u.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
