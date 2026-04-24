a.d(n, { A: () => p });
var t = a(64700),
    r = a(575593),
    i = a(702841),
    l = a(954571),
    o = a(590180),
    s = a(993408),
    u = a(652215),
    c = a(788868);
let d = {
        [r.R.AVATAR_DECORATION]: c.Ae.AVATAR_DECORATION,
        [r.R.PROFILE_EFFECT]: c.Ae.PROFILE_EFFECT,
        [r.R.PROFILE_FRAME]: void 0,
        [r.R.NAMEPLATE]: void 0,
        [r.R.NONE]: void 0,
        [r.R.BUNDLE]: void 0,
        [r.R.VARIANTS_GROUP]: void 0,
        [r.R.EXTERNAL_SKU]: void 0,
    },
    p = (e) => {
        let n = (0, i.bG)([o.A], () => o.A.products);
        return (0, t.useCallback)(
            (a) => {
                let { type: t, skuId: r } = a,
                    i = n.get(r);
                l.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[t],
                    feature_tier: (0, s.G0)(i) ? c.tz.FREE : c.tz.PREMIUM_STANDARD,
                    feature_selection: i?.name,
                    location_stack: e,
                });
            },
            [n, e],
        );
    };
