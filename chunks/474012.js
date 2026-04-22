"use strict";
n.d(t, {
    K: () => u,
    T: () =>
        function e(t) {
            if (t.productLine !== l.EZt.COLLECTIBLES) return;
            if (t.type === l.Puh.BUNDLE) {
                let n = [];
                for (let r of t.bundledSkus ?? []) {
                    let t = e(r);
                    t?.type === "single" && n.push(t.item);
                }
                if (0 === n.length) return;
                return { type: "bundle", items: n };
            }
            let n = t.tenantMetadata?.collectibles,
                u = n?.item;
            if (null != u) {
                if (u.type === r.R.AVATAR_DECORATION)
                    return {
                        type: "single",
                        item: new i.A({ skuId: t.id, type: u.type, asset: u.asset, label: u.label }),
                    };
                if (u.type === r.R.NAMEPLATE)
                    return {
                        type: "single",
                        item: new s.A({
                            skuId: t.id,
                            type: u.type,
                            asset: u.asset,
                            label: u.label,
                            palette: u.palette,
                        }),
                    };
                if (u.type === r.R.PROFILE_EFFECT)
                    return {
                        type: "single",
                        item: new a.Ay({
                            skuId: t.id,
                            type: u.type,
                            title: u.title,
                            description: u.description,
                            thumbnailPreviewSrc: u.thumbnailPreviewSrc,
                            reducedMotionSrc: u.reducedMotionSrc,
                            effects: u.effects ?? [],
                            accessibilityLabel: u.accessibilityLabel,
                            animationType: u.animationType,
                            staticFrameSrc: u.staticFrameSrc,
                        }),
                    };
                if (u.type === r.R.PROFILE_FRAME)
                    return {
                        type: "single",
                        item: new o.A({ skuId: t.id, type: u.type, label: u.label, layers: u.layers }),
                    };
            }
        },
}),
    n(321073);
var r = n(575593),
    i = n(898461),
    s = n(837015),
    a = n(203632),
    o = n(892118),
    l = n(652215);
let u = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)),
                  t.type === r.R.NAMEPLATE && e.push(s.A.fromServer(t)),
                  t.type === r.R.PROFILE_EFFECT && e.push(a.Ay.fromServer(t)),
                  t.type === r.R.PROFILE_FRAME && e.push(o.A.fromServer(t)),
                  e
              ),
              [],
          );
