"use strict";
n.d(t, {
    K: () => c,
    T: () =>
        function e(t) {
            if (t.productLine !== u.EZt.COLLECTIBLES) return;
            if (t.type === u.Puh.BUNDLE) {
                let n = [];
                for (let i of t.bundledSkus ?? []) {
                    let t = e(i);
                    t?.type === "single" && n.push(t.item);
                }
                if (0 === n.length) return;
                return { type: "bundle", items: n };
            }
            let n = t.tenantMetadata?.collectibles,
                l = n?.item;
            if (null != l) {
                if (l.type === i.R.AVATAR_DECORATION)
                    return {
                        type: "single",
                        item: new r.A({ skuId: t.id, type: l.type, asset: l.asset, label: l.label }),
                    };
                if (l.type === i.R.NAMEPLATE)
                    return {
                        type: "single",
                        item: new s.A({
                            skuId: t.id,
                            type: l.type,
                            asset: l.asset,
                            label: l.label,
                            palette: l.palette,
                        }),
                    };
                if (l.type === i.R.PROFILE_EFFECT)
                    return {
                        type: "single",
                        item: new a.Ay({
                            skuId: t.id,
                            type: l.type,
                            title: l.title,
                            description: l.description,
                            thumbnailPreviewSrc: l.thumbnailPreviewSrc,
                            reducedMotionSrc: l.reducedMotionSrc,
                            effects: l.effects ?? [],
                            accessibilityLabel: l.accessibilityLabel,
                            animationType: l.animationType,
                            staticFrameSrc: l.staticFrameSrc,
                        }),
                    };
                if (l.type === i.R.PROFILE_FRAME)
                    return {
                        type: "single",
                        item: new o.A({ skuId: t.id, type: l.type, label: l.label, layers: l.layers }),
                    };
            }
        },
}),
    n(321073);
var i = n(575593),
    r = n(898461),
    s = n(837015),
    a = n(203632),
    o = n(892118),
    l = n(166590),
    u = n(652215);
let c = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === i.R.AVATAR_DECORATION
                      ? e.push(r.A.fromServer(t))
                      : t.type === i.R.NAMEPLATE
                        ? e.push(s.A.fromServer(t))
                        : t.type === i.R.PROFILE_EFFECT
                          ? e.push(a.Ay.fromServer(t))
                          : t.type === i.R.PROFILE_FRAME
                            ? e.push(o.A.fromServer(t))
                            : e.push(l.A.fromServer(t)),
                  e
              ),
              [],
          );
