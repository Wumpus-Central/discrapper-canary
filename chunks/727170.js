"use strict";
n.d(t, { A: () => _ });
var i = n(64700),
    r = n(575593),
    s = n(702841),
    a = n(174459),
    o = n(590180),
    l = n(993408),
    u = n(652215),
    c = n(788868);
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
    _ = (e) => {
        let t = (0, s.bG)([o.A], () => o.A.products);
        return (0, i.useCallback)(
            (n) => {
                let { type: i, skuId: r } = n,
                    s = t.get(r);
                a.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[i],
                    feature_tier: (0, l.G0)(s) ? c.tz.FREE : c.tz.PREMIUM_STANDARD,
                    feature_selection: s?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
