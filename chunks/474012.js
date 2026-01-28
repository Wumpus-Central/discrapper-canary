n.d(t, {
    K: () => l,
    T: () => c,
}),
    n(321073),
    n(896048),
    n(228524);
var r = n(575593),
    i = n(898461),
    a = n(837015),
    o = n(203632),
    s = n(652215);
let l = (e) =>
    null == e
        ? []
        : e.reduce(
              (e, t) => (
                  t.type === r.R.AVATAR_DECORATION && e.push(i.A.fromServer(t)),
                  t.type === r.R.PROFILE_EFFECT && e.push(o.A.fromServer(t)),
                  t.type === r.R.NAMEPLATE && e.push(a.A.fromServer(t)),
                  e
              ),
              [],
          );

function c(e) {
    var t, n, l, u, d, f, p, _;
    if (e.productLine !== s.EZt.COLLECTIBLES) return;
    if (e.type === s.Puh.BUNDLE) {
        let t = [];
        for (let r of null != (n = e.bundledSkus) ? n : []) {
            let e = c(r);
            (null == e ? void 0 : e.type) === "single" && t.push(e.item);
        }
        if (0 === t.length) return;
        return {
            type: "bundle",
            items: t,
        };
    }
    let h = null == (t = e.tenantMetadata) ? void 0 : t.collectibles,
        m = null == h ? void 0 : h.item;
    if (null != m) {
        if (m.type === r.R.AVATAR_DECORATION)
            return {
                type: "single",
                item: new i.A({
                    skuId: e.id,
                    type: m.type,
                    asset: m.asset,
                    label: null != (l = m.labelLocalized) ? l : m.label,
                }),
            };
        if (m.type === r.R.PROFILE_EFFECT)
            return {
                type: "single",
                item: new o.A({
                    skuId: e.id,
                    type: m.type,
                    title: null != (u = m.titleLocalized) ? u : m.title,
                    description: null != (d = m.descriptionLocalized) ? d : m.description,
                    thumbnailPreviewSrc: m.thumbnailPreviewSrc,
                    reducedMotionSrc: m.reducedMotionSrc,
                    effects: null != (f = m.effects) ? f : [],
                    accessibilityLabel: null != (p = m.accessibilityLabelLocalized) ? p : m.accessibilityLabel,
                    animationType: m.animationType,
                    staticFrameSrc: m.staticFrameSrc,
                }),
            };
        if (m.type === r.R.NAMEPLATE)
            return {
                type: "single",
                item: new a.A({
                    skuId: e.id,
                    type: m.type,
                    asset: m.asset,
                    label: null != (_ = m.labelLocalized) ? _ : m.label,
                    palette: m.palette,
                }),
            };
    }
}
