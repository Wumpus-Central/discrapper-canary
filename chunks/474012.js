n.d(t, {
    K: () => c,
    T: () =>
        function e(t) {
            if (t.productLine !== d.EZt.COLLECTIBLES) return;
            if (t.type === d.Puh.BUNDLE) {
                let n = [];
                for (let i of t.bundledSkus ?? []) {
                    let t = e(i);
                    t?.type === "single" && n.push(t.item);
                }
                if (0 === n.length) return;
                return { type: "bundle", items: n, previewAssets: t.previewAssetPaths ?? void 0 };
            }
            let n = t.tenantMetadata?.collectibles,
                o = n?.item;
            if (null != o)
                switch (o.type) {
                    case i.R.AVATAR_DECORATION:
                        return {
                            type: "single",
                            item: new r.A({ skuId: t.id, type: o.type, asset: o.asset, label: o.label }),
                        };
                    case i.R.NAMEPLATE:
                        return {
                            type: "single",
                            item: new a.A({
                                skuId: t.id,
                                type: o.type,
                                asset: o.asset,
                                label: o.label,
                                palette: o.palette,
                            }),
                        };
                    case i.R.PROFILE_EFFECT:
                        return {
                            type: "single",
                            item: new s.Ay({
                                skuId: t.id,
                                type: o.type,
                                title: o.title,
                                description: o.description,
                                thumbnailPreviewSrc: o.thumbnailPreviewSrc,
                                reducedMotionSrc: o.reducedMotionSrc,
                                effects: o.effects ?? [],
                                accessibilityLabel: o.accessibilityLabel,
                                animationType: o.animationType,
                                staticFrameSrc: o.staticFrameSrc,
                            }),
                        };
                    case i.R.PROFILE_FRAME:
                        return {
                            type: "single",
                            item: new l.A({
                                skuId: t.id,
                                type: o.type,
                                label: o.label,
                                layers: o.layers,
                                innerWidth: o.innerWidth,
                                overflowTop: o.overflowTop,
                                overflowBottom: o.overflowBottom,
                                overflowHorizontal: o.overflowHorizontal,
                            }),
                        };
                    default:
                        return;
                }
        },
}),
    n(321073);
var i = n(575593),
    r = n(898461),
    a = n(837015),
    s = n(203632),
    l = n(892118),
    o = n(166590),
    d = n(652215);
function c(e) {
    return null == e
        ? []
        : e.reduce((e, t) => {
              switch (t.type) {
                  case i.R.AVATAR_DECORATION:
                      e.push(r.A.fromServer(t));
                      break;
                  case i.R.NAMEPLATE:
                      e.push(a.A.fromServer(t));
                      break;
                  case i.R.PROFILE_EFFECT:
                      e.push(s.Ay.fromServer(t));
                      break;
                  case i.R.PROFILE_FRAME:
                      e.push(l.A.fromServer(t));
                      break;
                  default:
                      e.push(o.A.fromServer(t));
              }
              return e;
          }, []);
}
