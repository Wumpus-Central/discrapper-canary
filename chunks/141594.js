n.d(t, { Z: () => f }), n(47120);
var r = n(192379),
    i = n(115434),
    l = n(264181),
    o = n(442837),
    a = n(704215),
    s = n(243778),
    c = n(594174),
    u = n(51144),
    d = n(874703),
    p = n(302800),
    h = n(921944);
let f = () => {
    var e, t, n, f, g, m, b;
    let _ = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        E = (0, o.e7)([d.Z], () => d.Z.getMarketingBySurface(i.K.DESKTOP_SHOP_BUTTON)),
        O = (null == E ? void 0 : E.dismissibleContent) === a.z.COLLECTIBLES_SHOP_ENTRY_MARKETING,
        N = r.useMemo(() => ((0, u.Fc)(_) && null != E && !O ? [E.dismissibleContent] : []), [_, E, O]),
        [v, y] = (0, s.US)(N, void 0, !0),
        [I, C] = (0, s.XR)(O && (null == E ? void 0 : E.type) === l.Z.COACHTIP ? a.z.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, null !== (e = null == E ? void 0 : E.version) && void 0 !== e ? e : 0, void 0, !0),
        S = null;
    if ((null != v || null != I) && null != E && E.type === l.Z.COACHTIP) {
        S = {
            type: p.k2.COACHTIP,
            title: () => E.title,
            body: () => E.body,
            imageSrc: E.avatar,
            assetIds: E.decorations,
            entrypointBackgroundStyle: null === (t = E.refTargetBackground) || void 0 === t ? void 0 : t.style
        };
        let e = null === (n = E.refTargetBackground) || void 0 === n ? void 0 : n.asset;
        null != e &&
            (S.entryPointBackgroundAssets = {
                srcDark: null === (f = e.resting) || void 0 === f ? void 0 : f.dark,
                srcLight: null === (g = e.resting) || void 0 === g ? void 0 : g.light,
                srcDarkHovered: null === (m = e.hovered) || void 0 === m ? void 0 : m.dark,
                srcLightHovered: null === (b = e.hovered) || void 0 === b ? void 0 : b.light
            });
    }
    return {
        collectiblesShopTabNewBadgeDisplayOptions: S,
        dismissCollectiblesShopTabNewBadge: () => {
            let e = O ? C : y;
            null != S && e(h.L.AUTO);
        }
    };
};
