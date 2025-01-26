n(47120);
var i = n(192379),
    r = n(115434),
    l = n(264181),
    a = n(442837),
    s = n(704215),
    o = n(243778),
    c = n(594174),
    d = n(51144),
    u = n(874703),
    h = n(302800),
    m = n(921944);
t.Z = () => {
    var e, t, n, p, g, f, _;
    let E = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        I = (0, a.e7)([u.Z], () => u.Z.getMarketingBySurface(r.K.DESKTOP_SHOP_BUTTON)),
        C = (null == I ? void 0 : I.dismissibleContent) === s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        v = i.useMemo(() => ((0, d.Fc)(E) && null != I && !C ? [I.dismissibleContent] : []), [E, I, C]),
        [N, S] = (0, o.US)(v, void 0, !0),
        [T, b] = (0, o.XR)(C && (null == I ? void 0 : I.type) === l.Z.COACHTIP ? s.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == I ? void 0 : I.version) && void 0 !== e ? e : 0, void 0, !0),
        A = null;
    if ((null != N || null != T) && null != I && I.type === l.Z.COACHTIP) {
        A = {
            type: h.k2.COACHTIP,
            title: () => I.title,
            body: () => I.body,
            imageSrc: I.avatar,
            assetIds: I.decorations,
            entrypointBackgroundStyle: null === (t = I.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = I.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (A.entryPointBackgroundAssets = {
                srcDark: null === (p = e.resting) || void 0 === p ? void 0 : p.dark,
                srcLight: null === (g = e.resting) || void 0 === g ? void 0 : g.light,
                srcDarkHovered: null === (f = e.hovered) || void 0 === f ? void 0 : f.dark,
                srcLightHovered: null === (_ = e.hovered) || void 0 === _ ? void 0 : _.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: A,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = C ? b : S;
            null != A && e(m.L.AUTO);
        }
    };
};
