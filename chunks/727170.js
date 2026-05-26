t.d(r, { A: () => d });
var a = t(64700),
    n = t(575593),
    l = t(702841),
    i = t(174459),
    o = t(590180),
    s = t(993408),
    u = t(652215),
    c = t(788868);
let p = {
        [n.R.AVATAR_DECORATION]: c.Ae.AVATAR_DECORATION,
        [n.R.PROFILE_EFFECT]: c.Ae.PROFILE_EFFECT,
        [n.R.PROFILE_FRAME]: void 0,
        [n.R.NAMEPLATE]: void 0,
        [n.R.NONE]: void 0,
        [n.R.BUNDLE]: void 0,
        [n.R.VARIANTS_GROUP]: void 0,
        [n.R.EXTERNAL_SKU]: void 0,
    },
    d = (e) => {
        let r = (0, l.bG)([o.A], () => o.A.products);
        return (0, a.useCallback)(
            (t) => {
                let { type: a, skuId: n } = t,
                    l = r.get(n);
                i.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: p[a],
                    feature_tier: (0, s.G0)(l) ? c.tz.FREE : c.tz.PREMIUM_STANDARD,
                    feature_selection: l?.name,
                    location_stack: e,
                });
            },
            [r, e],
        );
    };
