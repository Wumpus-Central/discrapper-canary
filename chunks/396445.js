n.d(t, {
    J7: () => L,
    NT: () => I,
    SS: () => j,
    oc: () => y,
    rC: () => k,
}),
    n(388685);
var r = n(951288),
    l = n(647438),
    a = n(979554),
    i = n(685816),
    s = n(399606),
    o = n(100527),
    c = n(906732),
    u = n(626135),
    d = n(381585),
    g = n(597688),
    p = n(1870),
    f = n(501678),
    C = n(994587),
    _ = n(429368),
    h = n(237031),
    m = n(453713),
    b = n(201964),
    E = n(361110),
    v = n(956472),
    S = n(642909),
    x = n(215023),
    O = n(981631),
    T = n(388032);
let y = (e, t, n, r) => {
        u.default.track(O.rMx.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
            collectibles_shop_session_id: null == n ? void 0 : n.sessionId,
            sku_id: e.skuId,
            page_type: t,
            page_section: null == n ? void 0 : n.pageSection,
            page_category: t === x.AW.HOME || null == n ? void 0 : n.pageCategory,
            page_index: t === x.AW.CATALOG ? (null == n ? void 0 : n.pageIndex) : void 0,
            page_size: t === x.AW.CATALOG ? (null == n ? void 0 : n.pageSize) : void 0,
            tile_type: a.Z[e.type],
            tile_position: String(null == n ? void 0 : n.tilePosition),
            cta_name: r,
        });
    },
    L = (e, t) => {
        let n = (0, C.Nd)(),
            r = null == n ? void 0 : n.tab,
            a = (0, f.Vc)(),
            u = null == a ? void 0 : a.blockType,
            p = (0, d.sp)(),
            { analyticsLocations: _ } = (0, c.ZP)(o.Z.COLLECTIBLES_SHOP_CARD),
            m = (0, s.e7)([g.Z], () => g.Z.getCategoryForProduct(e.skuId)),
            b = l.useRef(null),
            E = (0, S.G)("useHandlePreviewClick"),
            O = null != u && u === i.z.HERO && E ? x.Ch.THUMBNAIL : x.Ch.DEFAULT;
        return l.useCallback(
            (t) => (n) => {
                if (null == m) return;
                let l = (0, v.oQ)({ product: e });
                (b.current = n.currentTarget),
                    y(e, r, p, null),
                    (0, h.T)({
                        product: e,
                        category: m,
                        shouldCheckoutWithOrbs: l,
                        analyticsLocations: _,
                        analyticsSource: t,
                        returnRef: b,
                        tab: r,
                        variantType: O,
                    });
            },
            [e, r, m, _, p, O],
        )(t);
    },
    j = (e) => {
        let { previewingVariantIndex: t, handleEntering: n, handleLeaving: i } = (0, E.f)(e),
            o = (0, s.e7)([p.Z], () => p.Z.purchases),
            c = (0, _.o)(e, o),
            u = (0, b.o)(e, o, t),
            [d, g] = l.useState(!1);
        if (e.type === a.Z.VARIANTS_GROUP) {
            let l = (0, r.jsx)(m.P, {
                variantGroupProduct: e,
                previewingVariantIndexProps: {
                    previewingVariantIndex: t,
                    handleEntering: n,
                    handleLeaving: i,
                },
                selectedVariantIndex: c,
                setIsHoveringOnSwitch: g,
                minimal: !0,
                alternativeBackgroundColor: (null == u ? void 0 : u.type) === a.Z.PROFILE_EFFECT,
            });
            return [c, l];
        }
        return [c, null];
    },
    k = (e) => {
        if (null == e) return null;
        if (e.type === a.Z.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type;
        }
        return e.type;
    },
    I = (e) => {
        switch (k(e)) {
            case a.Z.AVATAR_DECORATION:
                return T.intl.formatToPlainString(T.t.lvBzLi, { product: e.name });
            case a.Z.PROFILE_EFFECT:
                return T.intl.formatToPlainString(T.t.eR7moK, { product: e.name });
            case a.Z.NAMEPLATE:
                return T.intl.formatToPlainString(T.t.YFOwHh, { product: e.name });
            default:
                return e.name;
        }
    };
