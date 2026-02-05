"use strict";
n.d(t, { A: () => _ });
var r = n(64700),
    i = n(575593),
    a = n(417597),
    s = n(954571),
    o = n(590180),
    l = n(993408),
    u = n(652215),
    c = n(788868);
let d = {
        [i.R.AVATAR_DECORATION]: c.Ae.AVATAR_DECORATION,
        [i.R.PROFILE_EFFECT]: c.Ae.PROFILE_EFFECT,
        [i.R.NAMEPLATE]: void 0,
        [i.R.NONE]: void 0,
        [i.R.BUNDLE]: void 0,
        [i.R.VARIANTS_GROUP]: void 0,
        [i.R.EXTERNAL_SKU]: void 0,
    },
    _ = (e) => {
        let t = (0, a.bG)([o.A], () => o.A.products);
        return (0, r.useCallback)(
            (n) => {
                let { type: r, skuId: i } = n,
                    a = t.get(i);
                s.default.track(u.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: d[r],
                    feature_tier: (0, l.G0)(a) ? c.tz.FREE : c.tz.PREMIUM_STANDARD,
                    feature_selection: a?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
