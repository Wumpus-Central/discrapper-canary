n.d(t, { Z: () => p }), n(47120);
var i = n(192379),
    l = n(115434),
    r = n(264181),
    a = n(442837),
    s = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    h = n(302800),
    m = n(921944);
let p = () => {
    var e, t, n, p, g, _, f;
    let E = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        I = (0, a.e7)([u.Z], () => u.Z.getMarketingBySurface(l.K.DESKTOP_SHOP_BUTTON)),
        C = (null == I ? void 0 : I.dismissibleContent) === s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        v = i.useMemo(() => ((0, d.Fc)(E) && null != I && !C ? [I.dismissibleContent] : []), [E, I, C]),
        [N, T] = (0, o.US)(v, void 0, !0),
        [S, A] = (0, o.XR)(C && (null == I ? void 0 : I.type) === r.Z.COACHTIP ? s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == I ? void 0 : I.version) && void 0 !== e ? e : 0, void 0, !0),
        Z = null;
    if ((null != N || null != S) && null != I && I.type === r.Z.COACHTIP) {
        Z = {
            type: h.k2.COACHTIP,
            title: () => I.title,
            body: () => I.body,
            imageSrc: I.avatar,
            assetIds: I.decorations,
            entrypointBackgroundStyle: null === (t = I.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = I.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (Z.entryPointBackgroundAssets = {
                srcDark: null === (p = e.resting) || void 0 === p ? void 0 : p.dark,
                srcLight: null === (g = e.resting) || void 0 === g ? void 0 : g.light,
                srcDarkHovered: null === (_ = e.hovered) || void 0 === _ ? void 0 : _.dark,
                srcLightHovered: null === (f = e.hovered) || void 0 === f ? void 0 : f.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: Z,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = C ? A : T;
            null != Z && e(m.L.AUTO);
        }
    };
};
