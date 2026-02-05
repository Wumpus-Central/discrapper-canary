"use strict";
n.d(t, { K: () => l, T: () => u }), n(321073);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    s = n(203632),
    o = n(652215);
let l = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)),
                  t.type === r.R.PROFILE_EFFECT && e.push(s.A.fromServer(t)),
                  t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)),
                  e
              ),
              [],
          );
function u(e) {
    if (e.productLine !== o.EZt.COLLECTIBLES) return;
    if (e.type === o.Puh.BUNDLE) {
        let t = [];
        for (let n of e.bundledSkus ?? []) {
            let e = u(n);
            e?.type === "single" && t.push(e.item);
        }
        if (0 === t.length) return;
        return { type: "bundle", items: t };
    }
    let t = e.tenantMetadata?.collectibles,
        n = t?.item;
    if (null != n) {
        if (n.type === r.R.AVATAR_DECORATION)
            return {
                type: "single",
                item: new i.A({ skuId: e.id, type: n.type, asset: n.asset, label: n.labelLocalized ?? n.label }),
            };
        if (n.type === r.R.PROFILE_EFFECT)
            return {
                type: "single",
                item: new s.A({
                    skuId: e.id,
                    type: n.type,
                    title: n.titleLocalized ?? n.title,
                    description: n.descriptionLocalized ?? n.description,
                    thumbnailPreviewSrc: n.thumbnailPreviewSrc,
                    reducedMotionSrc: n.reducedMotionSrc,
                    effects: n.effects ?? [],
                    accessibilityLabel: n.accessibilityLabelLocalized ?? n.accessibilityLabel,
                    animationType: n.animationType,
                    staticFrameSrc: n.staticFrameSrc,
                }),
            };
        if (n.type === r.R.NAMEPLATE)
            return {
                type: "single",
                item: new a.A({
                    skuId: e.id,
                    type: n.type,
                    asset: n.asset,
                    label: n.labelLocalized ?? n.label,
                    palette: n.palette,
                }),
            };
    }
}
