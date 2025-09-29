n.d(t, {
    J7: () => y,
    SS: () => L,
    oc: () => T,
    rC: () => j,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    i = n(979554),
    a = n(685816),
    s = n(399606),
    o = n(100527),
    c = n(906732),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(1870),
    f = n(501678),
    h = n(994587),
    C = n(429368),
    _ = n(237031),
    m = n(453713),
    b = n(201964),
    E = n(361110),
    S = n(956472),
    v = n(642909),
    x = n(215023),
    O = n(981631);
let T = (e, t, n, r) => {
        u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === x.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === x.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === x.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: i.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    y = (e, t) => {
        let n = (0, h.Nd)(),
            r = null == n ? void 0 : n.tab,
            i = (0, f.Vc)(),
            u = null == i ? void 0 : i.blockType,
            p = (0, d.sp)(),
            { analyticsLocations: C } = (0, c.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            m = (0, s.e7)([g.Z], () => g.Z.getCategoryForProduct(e.skuId)),
            b = l.useRef(null),
            E = (0, v.G)("useHandlePreviewClick"),
            O = null != u && u === a.z.HERO && E ? x.Ch.THUMBNAIL : x.Ch.DEFAULT;
        return l.useCallback(
            (t) => (n) => {
                if (null == m) return;
                let l = (0, S.oQ)({ product: e });
                (b.current = n.currentTarget),
                    T(e, r, p, null),
                    (0, _.T)({
                        product: e,
                        category: m,
                        shouldCheckoutWithOrbs: l,
                        analyticsLocations: C,
                        analyticsSource: t,
                        returnRef: b,
                        tab: r,
                        variantType: O,
                    });
            },
            [e, r, m, C, p, O],
        )(t);
    },
    L = (e) => {
        let { previewingVariantIndex: t, handleEntering: n, handleLeaving: a } = (0, E.f)(e),
            o = (0, s.e7)([p.Z], () => p.Z.purchases),
            c = (0, C.o)(e, o),
            u = (0, b.o)(e, o, t),
            [d, g] = l.useState(!1);
        if (e.type === i.Z.VARIANTS_GROUP) {
            let l = (0, r.jsx)(m.P, {
                variantGroupProduct: e,
                previewingVariantIndexProps: {
                    previewingVariantIndex: t,
                    handleEntering: n,
                    handleLeaving: a,
                },
                selectedVariantIndex: c,
                setIsHoveringOnSwitch: g,
                minimal: !0,
                alternativeBackgroundColor: (null == u ? void 0 : u.type) === i.Z.PROFILE_EFFECT,
            });
            return [c, l];
        }
        return [c, null];
    },
    j = (e) => {
        if (null == e) return null;
        if (e.type === i.Z.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    };
