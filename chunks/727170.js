"use strict";
n.d(t, { A: () => _ });
var i = n(582128),
    r = n(575593),
    a = n(702841),
    s = n(174459),
    l = n(590180),
    o = n(993408),
    d = n(652215),
    c = n(202541);
let u = {
        [r.R.AVATAR_DECORATION]: c.Ae.AVATAR_DECORATION,
        [r.R.PROFILE_EFFECT]: c.Ae.PROFILE_EFFECT,
        [r.R.PROFILE_FRAME]: void 0,
        [r.R.NAMEPLATE]: void 0,
        [r.R.NONE]: void 0,
        [r.R.BUNDLE]: void 0,
        [r.R.VARIANTS_GROUP]: void 0,
        [r.R.EXTERNAL_SKU]: void 0,
    },
    _ = function (e) {
        let t = (0, a.bG)([l.A], () => l.A.products);
        return (0, i.useCallback)(
            (n) => {
                let { type: i, skuId: r } = n,
                    a = t.get(r);
                s.default.track(d.HAw.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: u[i],
                    feature_tier: (0, o.G0)(a) ? c.tz.FREE : c.tz.PREMIUM_STANDARD,
                    feature_selection: a?.name,
                    location_stack: e,
                });
            },
            [t, e],
        );
    };
