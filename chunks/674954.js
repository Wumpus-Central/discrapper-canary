n.d(t, { Ay: () => V, aC: () => w });
var l,
    r,
    i,
    o = n(477900),
    s = n(582128),
    a = n(855986),
    u = n(477782),
    c = n(793574),
    d = n(688810),
    f = n(414636),
    p = n(821925),
    E = n(46653),
    R = n(886913),
    _ = n(986630),
    g = n(722258),
    A = n(575593),
    m = n(129230),
    I = n(652215),
    h =
        (((l = {}).LOOK_OPENED = "look_opened"),
        (l.MENU_VIEWED = "menu_viewed"),
        (l.COACHMARK_VIEWED = "coachmark_viewed"),
        (l.COACHMARK_CTA_CLICKED = "coachmark_cta_clicked"),
        (l.COACHMARK_DISMISSED = "coachmark_dismissed"),
        l),
    x = (((r = {}).ROW_VIEWED = "row_viewed"), (r.ROW_CLICKED = "row_clicked"), r);
function O(e) {
    let { action: t, skuId: n, productType: l, isDisabled: r, source: i } = e;
    m.default.track(I.HAw.SHOP_THIS_LOOK_ROW_ACTION, {
        action: t,
        sku_id: n,
        product_type: (function (e) {
            switch (e) {
                case A.R.PROFILE_FRAME:
                    return "profile_frame";
                case A.R.PROFILE_EFFECT:
                    return "profile_effect";
                case A.R.AVATAR_DECORATION:
                    return "avatar_decoration";
                case A.R.NAMEPLATE:
                    return "nameplate";
                default:
                    return;
            }
        })(l),
        is_disabled: r,
        source: i ?? void 0,
    });
}
var b =
        (((i = {})[(i.SHOP = 1)] = "SHOP"),
        (i[(i.QUEST = 2)] = "QUEST"),
        (i[(i.PREMIUM_PROMOTION = 3)] = "PREMIUM_PROMOTION"),
        (i[(i.REWARD = 4)] = "REWARD"),
        (i[(i.INTERNAL = 5)] = "INTERNAL"),
        i),
    N = n(856383),
    v = n(503698),
    C = n.n(v),
    S = n(834730),
    j = n(682301),
    P = n(623373),
    k = n(536572),
    M = n(14702),
    T = n(792996),
    y = n(728500);
function D() {
    return (0, o.jsxs)("div", {
        className: y.nM,
        "aria-hidden": !0,
        children: [
            (0, o.jsx)("div", { className: y.VH, children: (0, o.jsx)("div", { className: y.Qc }) }),
            (0, o.jsxs)("div", {
                className: C()(y.Qq, y.Um),
                children: [(0, o.jsx)("div", { className: y.Iz }), (0, o.jsx)("div", { className: y.wS })],
            }),
        ],
    });
}
function L(e) {
    let { skuId: t, disabled: n = !1, source: l } = e,
        { product: r, state: i } = (0, j.IK)(t, { needsCategory: !1, shouldFetchProduct: !1 }),
        u = (0, a.bG)(
            [p.A],
            () =>
                p.A.getProductsForSku(t)
                    ?.flatMap((e) => e.skus)
                    .find((e) => e.id === t),
            [t],
        ),
        c = s.useRef(!1);
    if (
        (s.useEffect(() => {
            null == r ||
                c.current ||
                ((c.current = !0),
                O({ action: x.ROW_VIEWED, skuId: t, productType: (0, P.YW)(r) ?? void 0, isDisabled: n, source: l }));
        }, [r, t, n, l]),
        "loading" === i)
    )
        return (0, o.jsx)(D, {});
    if (null == r) return null;
    let d = (0, P.YW)(r),
        f =
            null != d
                ? (function (e) {
                      switch (e) {
                          case A.R.AVATAR_DECORATION:
                              return T.intl.string(T.t["7v0T9P"]);
                          case A.R.PROFILE_EFFECT:
                              return T.intl.string(T.t.wR5wOo);
                          case A.R.NAMEPLATE:
                              return T.intl.string(T.t.x5CoXR);
                          case A.R.PROFILE_FRAME:
                              return T.intl.string(T.t.GWrZOd);
                          default:
                              return;
                      }
                  })(d)
                : void 0;
    return (0, o.jsxs)("div", {
        className: C()(y.nM, { [y.r9]: n }),
        children: [
            (0, o.jsx)("div", { className: y.VH, children: (0, o.jsx)(M.O, { product: r, sku: u }) }),
            (0, o.jsxs)("div", {
                className: y.Qq,
                children: [
                    (0, o.jsx)(S.E, { variant: "body-sm/medium", color: "text-default", children: (0, k.VG)(r) }),
                    null != f && (0, o.jsx)(S.E, { variant: "body-xs/normal", color: "text-subtle", children: f }),
                ],
            }),
        ],
    });
}
var U = n(996988),
    F = n(842671);
function G(e, t) {
    return (
        e.length === t.length &&
        e.every(
            (e, n) =>
                e.skuId === t[n].skuId &&
                e.isShoppableItem === t[n].isShoppableItem &&
                e.productType === t[n].productType &&
                e.fetchState === t[n].fetchState &&
                e.hasProduct === t[n].hasProduct,
        )
    );
}
function w(e, t, n) {
    let l = (0, a.bG)([E.default], () => E.default.getId() === e.id),
        r = (0, R.g)(e.id, t),
        i = "full_profile_button" === n ? c.A.FULL_PROFILE_SHOP_THIS_LOOK_BUTTON : c.A.USER_PROFILE_OVERFLOW_MENU,
        { analyticsLocations: A } = (0, d.Ay)(i),
        m =
            "full_profile_button" === n
                ? (0, o.jsx)(K, { source: "full_profile_button" })
                : n === U.d.MODAL_V2
                  ? (0, o.jsx)(K, { source: "full_profile_overflow_menu" })
                  : null,
        I = (0, f.n8)(e, t, m, i),
        [h, v] = s.useState(() => new Set()),
        C = (0, a.bG)(
            [p.A],
            () =>
                r.map((e) => {
                    let t = p.A.getProductsForSku(e)?.[0],
                        n = p.A.getProductsForSku(e)
                            ?.flatMap((e) => e.skus)
                            .find((t) => t.id === e);
                    return {
                        skuId: e,
                        fetchState: p.A.getFetchStateForSku(e),
                        hasProduct: null != t && null != _.A.fromStorefrontProductRecord(t),
                        isShoppableItem:
                            null != n &&
                            ("function" != typeof n.isAvailable
                                ? (N.A.captureMessage("isShoppableCollectibleSku: sku missing isAvailable()", {
                                      extra: { skuId: n.id, skuType: n.type },
                                  }),
                                  !1)
                                : n.isAvailable() && n.tenantMetadata?.collectibles?.sourceType === b.SHOP),
                        productType: n?.tenantMetadata?.collectibles?.type,
                    };
                }),
            [r],
            G,
        ),
        S = r.length > 0 || null != I,
        j = C.filter((e) => {
            let { skuId: t, fetchState: n } = e;
            return null != n && !h.has(t);
        });
    j.length > 0 &&
        v(
            new Set([
                ...h,
                ...j.map((e) => {
                    let { skuId: t } = e;
                    return t;
                }),
            ]),
        );
    let P =
        null != I ||
        C.some((e) => {
            let { skuId: t, fetchState: n, hasProduct: l } = e;
            return l || "loading" === n || (null == n && !h.has(t));
        });
    return {
        visible: !l && S,
        label: null != I ? T.intl.string(F.default["2PKrQO"]) : T.intl.string(T.t.xNdRDO),
        contents: (0, o.jsxs)(o.Fragment, {
            children: [
                I,
                (0, o.jsx)(u.rX, {
                    children: C.map((e, t) => {
                        let { skuId: l, isShoppableItem: r, productType: s } = e;
                        return (0, o.jsx)(
                            u.Dr,
                            {
                                id: `shop-this-look-${l}`,
                                navigable: r,
                                disabled: !r,
                                keepItemStyles: r,
                                render: (e) => {
                                    let { disabled: r } = e;
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            0 === t && null == I ? m : null,
                                            (0, o.jsx)(L, { skuId: l, disabled: r, source: n }),
                                        ],
                                    });
                                },
                                action: r
                                    ? () => {
                                          (O({
                                              action: x.ROW_CLICKED,
                                              skuId: l,
                                              productType: s,
                                              isDisabled: !1,
                                              source: n,
                                          }),
                                              (0, g.B)({ skuId: l, analyticsLocations: A, analyticsSource: i }));
                                      }
                                    : void 0,
                            },
                            l,
                        );
                    }),
                }),
            ],
        }),
        hasRenderableContent: P,
    };
}
function K(e) {
    let { source: t } = e;
    return (
        s.useEffect(() => {
            var e;
            ((e = h.LOOK_OPENED),
                m.default.track(I.HAw.SHOP_THIS_LOOK_MENU_ACTION, { action: e, source: t ?? void 0 }));
        }, [t]),
        null
    );
}
function V(e, t, n) {
    let { visible: l, label: r, contents: i } = w(e, t, n);
    return l ? (0, o.jsx)(u.Dr, { id: "shop-this-look", label: r, children: i }) : null;
}
